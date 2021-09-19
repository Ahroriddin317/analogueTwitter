import mysqlx from '@mysql/xdevapi'
import express from 'express';
const { json } = express
import cors from 'cors';

import { execute, mapRows } from './database.mjs';

const url = 'mysqlx://app:pass@localhost:33060/social';
const port = process.env.PORT || 9999;

const client = mysqlx.getClient(url);

const app = express();
app.use(cors());
app.use(json());

app.get('/api/user/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await execute(client, async session => {
      const table = await session.getDefaultSchema().getTable('users');
      const result = await table.select(['id', 'firstName', 'lastName', 'postsLiked', 'myPosts'])
        .where('id = :id')
        .bind('id', id)
        .execute();
      return mapRows(result);
    });
    res.json(user[0]);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
})

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await execute(client, async session => {
      const table = await session.getDefaultSchema().getTable('posts');
      const result = await table.select(['id', 'content', 'likes', 'created', 'author', 'liked'])
        .where('removed != true')
        .execute();

      return mapRows(result);
    });
    res.json(posts);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

app.get('/api/posts/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id) || !Number.isFinite(id)) {
      res.sendStatus(400);
      return;
    }

    const [post] = await execute(client, async session => {
      const table = await session.getDefaultSchema().getTable('posts');
      const result = await table.select(['id', 'content', 'likes', 'created'])
        .where('id = :id AND removed != true')
        .bind('id', id)
        .execute();

      return mapRows(result);
    });

    if (post === undefined) {
      res.sendStatus(404);
      return;
    }

    res.json(post);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

app.post('/api/posts/like', async (req, res) => {
  const { liked, id, likes } = req.body;
  try {
    const [post] = await execute(client, async session => {
      const table = await session.getDefaultSchema().getTable('posts');
      await table.update()
        .set('liked', !liked)
        .set('likes', (!liked ? likes + 1 : likes - 1))
        .where('id = :id')
        .bind('id', id)
        .execute();

      const result = await table.select(['id', 'content', 'likes', 'created', 'author', 'liked'])
        .where('id = :id')
        .bind('id', id)
        .execute();

      return mapRows(result);
    });

    if (post === undefined) {
      res.sendStatus(404);
      return;
    }

    res.json(post);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

app.post('/api/posts', async (req, res) => {
  try {
    const { userId, name, content } = req.body;
    const [post] = await execute(client, async session => {
      const table = await session.getDefaultSchema().getTable('posts');
      const insert = await table.insert('content', 'author').values(content, `{"id": ${userId}, "name": "${name}"}`).execute();
      const id = insert.getAutoIncrementValue();

      const result = await table.select(['id', 'content', 'likes', 'created', 'author', 'liked'])
        .where('id = :id')
        .bind('id', id)
        .execute();

      return mapRows(result);
    });

    if (post === undefined) {
      res.sendStatus(404);
      return;
    }

    res.json(post);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log('server on port:', port)
});

