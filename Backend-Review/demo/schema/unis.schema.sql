CREATE TABLE IF NOT EXISTS unis(
  id SERIAL PRIMARY KEY,
  name varchar(200) NOT NULL,
  country varchar(200) NOT NULL,
  web_page varchar(200) NOT NULL,
  comment varchar(1000),
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  UNIQUE (name)
);

