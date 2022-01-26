DROP TABLE IF EXISTS favRecipes;

CREATE TABLE IF NOT EXISTS favRecipes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    readyInMinutes INTEGER,
    summary VARCHAR(10000),
    vegetarian BOOLEAN,
    instructions VARCHAR(10000),
    sourceUrl VARCHAR(255),
    image VARCHAR(255),
    comment VARCHAR(255)
);