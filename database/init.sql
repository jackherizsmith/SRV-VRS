BEGIN;

DROP TABLE IF EXISTS users, categories, posts;

CREATE TABLE users(
  id SERIAL PRIMARY KEY UNIQUE,
  username VARCHAR(255) NOT NULL UNIQUE,         
  password VARCHAR(255)       
);

CREATE TABLE categories(
  id SERIAL PRIMARY KEY UNIQUE,
  category VARCHAR(255) UNIQUE
);

CREATE TABLE posts(
  id SERIAL PRIMARY KEY UNIQUE,
  user_id INTEGER REFERENCES users(id),
  cat_id INTEGER REFERENCES categories(id),
  tool_name VARCHAR(255) NOT NULL UNIQUE, 
  tool_description VARCHAR(255), 
  tool_link VARCHAR(255),
  date_added DATE
);

INSERT INTO users (username, password) VALUES
('bart', '$2a$10$3o1gWWmdF26nl4YlfpMSq.87wAMJySVHFJRvh4Dauyq0Wm4qpMIsC'),
('lisa', '$2a$10$0CRhnF4HIKsbQZk/kCto3uZ9IbEXQR5ZoUwrxJ6Kl/odwwj1deSMq'),
('maggie', '$2a$10$qbFBwGJhkbFbJGqv4aKca.bY0lCai5ttTtPJrATeVrQIZochJgy/u');

INSERT INTO categories (category) VALUES
('Work'),
('Social'),
('Entertainment'),
('Health'),
('News');

INSERT INTO posts (user_id, cat_id, tool_name, tool_description, tool_link, date_added) VALUES
(1,3, 'Netflix', 'Stream shows and movies', 'netflix.com', '2019-08-01'),
(2,1, 'Jitsi', 'Video conferencing with cool features like custom room links', 'jitsi.org/', '2019-10-01'),
(1,4,'Downward Dog App','Select your time, level, focus, voice, and music, and Down Dog creates a unique, personalized yoga practice every time.','downdogapp.com/', '2020-01-01'),
(3,5,'Worldometer','Worldometer is a reference website that provides counters and real-time statistics for diverse topics.','worldometers.info/coronavirus/', '2019-11-05'),
(1,1,'Miro','A shareable whiteboard.','miro.com', '2019-09-01'),
(1,4,'Headspace','Stress relief, breath and relax with us','headspace.com/', '2020-02-01'),
(2,2,'WhatsApp','Speak to friends and family online','whatsapp.com', '2019-09-26'),
(3,1,'Zoom','Video conferencing with team','zoom.com', '2019-12-09'),
(1,3, 'Steam', 'Buy and play multiplayer games line overcooked', 'steam.com', '2019-12-09');

COMMIT;