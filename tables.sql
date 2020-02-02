
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username TEXT,
  password TEXT,
  UNIQUE (username)
);

CREATE TABLE IF NOT EXISTS videos (
  id SERIAL PRIMARY KEY,
  title TEXT,
  by TEXT,
  link TEXT,
  img TEXT
);

CREATE TABLE IF NOT EXISTS songs (
  id SERIAL PRIMARY KEY,
  title TEXT,
  by TEXT,
  link TEXT,
  img TEXT
);

CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  user_id INT,
  title TEXT,
  post TEXT
);

CREATE TABLE IF NOT EXISTS favorites_users (
  id SERIAL PRIMARY KEY,
  user_id INT,
  songs_id INT,
  videos_id INT
);

