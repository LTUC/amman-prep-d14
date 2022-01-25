DROP TABLE IF EXISTS favAnimalFact;

CREATE TABLE IF NOT EXISTS favAnimalFact (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    factImage VARCHAR(255),
    animalType VARCHAR(255),
    minLength float(8),
    maxLength float(8),
    habitat VARCHAR(255),
    diet VARCHAR(255),
    comment VARCHAR(255)
);