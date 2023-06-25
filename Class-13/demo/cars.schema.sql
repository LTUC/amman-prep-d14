create table if not exists cars(
  id serial primary key,
  brand varchar(200),
  color varchar(200),
  model varchar(200),
  year integer
);