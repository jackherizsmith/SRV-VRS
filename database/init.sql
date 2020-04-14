BEGIN;

DROP TABLE IF EXISTS users, posts;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),         
  password VARCHAR(255)       
);

CREATE TABLE categories(
  id SERIAL PRIMARY KEY,
  category VARCHAR(255)        
);

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  cat_id INTEGER REFERENCES categories(id),
  tool_name VARCHAR(255), 
  tool_description VARCHAR(255), 
  tool_link VARCHAR(255)
);

INSERT INTO users (username, password) VALUES
('mickeymouse', 'safepassword'),
('goofy', 'weakpassword'),
('pluto', 'p455w0rd');

INSERT INTO categories (category) VALUES
('Work'),
('Social'),
('Entertainment'),
('Health'),
('News');

INSERT INTO posts (user_id, cat_id, tool_name, tool_description, tool_link) VALUES
(1,3, 'Netflix', 'Stream shows and movies', 'netflix.com'),
(2,1, 'Jitsi', 'Video conferencing with cool features like custom room links', 'jitsi.org/'),
(1,4,'Downward Dog App','Select your time, level, focus, voice, and music, and Down Dog creates a unique, personalized yoga practice every time.','downdogapp.com/'),
(3,5,'Worldometer','Worldometer is a reference website that provides counters and real-time statistics for diverse topics.','worldometers.info/coronavirus/'),
(1,1,'Miro','A shareable whiteboard.','miro.com'),
(1,4,'Headspace','Stress relief, breath and relax with us','headspace.com/'),
(2,2,'WhatsApp','Speak to friends and family online','whatsapp.com'),
(3,1,'Zoom','Video conferencing with team','zoom.com'),
(1,3, 'Steam', 'Buy and play multiplayer games line overcooked', 'steam.com');

COMMIT;