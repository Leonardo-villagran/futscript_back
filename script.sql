/*
Creación de la base de datos:
CREATE DATABASE futscript;
\c futscript;
*/
CREATE TABLE equipos (id SERIAL PRIMARY KEY, name VARCHAR(250) NOT NULL);

CREATE TABLE posiciones (id SERIAL PRIMARY KEY, name VARCHAR(250) NOT NULL);

CREATE TABLE jugadores (id SERIAL PRIMARY KEY, id_equipo INT REFERENCES equipos(id), name VARCHAR(250), position INT REFERENCES posiciones(id));

INSERT INTO posiciones values
(DEFAULT, 'delantero'),
(DEFAULT, 'centrocampista'),
(DEFAULT, 'defensa'),
(DEFAULT, 'portero');

CREATE TABLE usuarios (id SERIAL PRIMARY KEY, email VARCHAR NOT NULL, password VARCHAR NOT NULL);
INSERT INTO "usuarios" ("id", "email", "password") VALUES
	(DEFAULT, 'admin', '$2a$10$zzNvg530gOPZnXqETYxQ8O686u.DDV.lwvwqXpMdq.JqOSXvf.34C');

INSERT INTO "equipos" ("id", "name") VALUES
	(DEFAULT, 'Cobresal'),
	(DEFAULT, 'Colo Colo'),
	(DEFAULT, 'Super equipo'),
	(DEFAULT, 'Wanderers'),
	(DEFAULT, 'Universidad Católica');
