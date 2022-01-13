DROP TABLE IF EXISTS favmeme;

CREATE TABLE IF NOT EXISTS favmeme (
    id SERIAL PRIMARY KEY,
    memeName VARCHAR(255),
    memeImage VARCHAR(255),
    tags VARCHAR(255),
    topText VARCHAR(255),
    comment VARCHAR(255)
);