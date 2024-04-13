DROP TABLE IF EXISTS peliculas_tags;
DROP TABLE IF EXISTS peliculas;
DROP TABLE IF EXISTS tags;

CREATE TABLE peliculas (
    id int PRIMARY KEY,
    nombre VARCHAR(255),
    anno int
);

CREATE TABLE tags (
    id int PRIMARY KEY,
    tag VARCHAR(32)

);

CREATE TABLE peliculas_tags (
    id_pelicula int,  
    id_tag int DEFAULT 0,
    FOREIGN KEY (id_pelicula) REFERENCES peliculas(id),
    FOREIGN KEY (id_tag) REFERENCES tags(id)
);



INSERT INTO peliculas (id, nombre, anno) VALUES
(1, 'Pelicula 1', 2020),
(2, 'Pelicula 2', 2018),
(3, 'Pelicula 3', 2019),
(4, 'Pelicula 4', 2021),
(5, 'Pelicula 5', 2017);


INSERT INTO tags (id, tag) VALUES
(1, 'Drama'),
(2, 'Comedia'),
(3, 'Acción'),
(4, 'Romance'),
(5, 'Ciencia ficción');


INSERT INTO peliculas_tags (id_pelicula, id_tag) VALUES
(1, 1), (1, 2), (1, 3), 
(2, 3), (2, 4);

SELECT p.nombre AS pelicula, COUNT(pt.id_tag) AS cantidad_tags
FROM peliculas p
LEFT JOIN peliculas_tags pt ON p.id = pt.id_pelicula
GROUP BY p.id
order by p.id;

DROP TABLE IF EXISTS respuestas;
DROP TABLE IF EXISTS preguntas;
DROP TABLE IF EXISTS usuarios;

CREATE TABLE preguntas (
    id int PRIMARY KEY,
    pregunta VARCHAR(255),
    respuesta VARCHAR(255)
);

CREATE TABLE usuarios (
    id int PRIMARY KEY,
    nombre VARCHAR(255),
    edad int
);

CREATE TABLE respuestas (
    id int PRIMARY KEY,
    respuesta VARCHAR(255),
    usuario_id int,
    pregunta_id int,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (pregunta_id) REFERENCES preguntas(id)
);

INSERT INTO preguntas (id, pregunta, respuesta) VALUES
(1, 'Pregunta 1', 'Respuesta 1'),
(2, 'Pregunta 2', 'Respuesta 2'),
(3, 'Pregunta 3', 'Respuesta 3'),
(4, 'Pregunta 4', 'Respuesta 4'),
(5, 'Pregunta 5', 'Respuesta 5');

INSERT INTO usuarios (id, nombre, edad) VALUES
(1, 'Usuario 1', 25),
(2, 'Usuario 2', 30),
(3, 'Usuario 3', 20),
(4, 'Usuario 4', 22),
(5, 'Usuario 5', 40);

INSERT INTO respuestas (id, respuesta, usuario_id, pregunta_id) VALUES
(1, 'Respuesta 1', 1, 1),
(2, 'Respuesta 1', 2, 1);

INSERT INTO respuestas (id, respuesta, usuario_id, pregunta_id) VALUES
(3, 'Respuesta 2', 3, 2);

INSERT INTO respuestas (id, respuesta, usuario_id, pregunta_id) VALUES
(4, 'Respuesta 1', 4, 3),
(5, 'Respuesta 5', 5, 4);

SELECT u.id AS usuario_id, u.nombre AS nombre_usuario, COUNT(*) AS respuestas_correctas_totales
FROM usuarios u
JOIN respuestas r ON u.id = r.usuario_id
JOIN preguntas p ON r.pregunta_id = p.id
WHERE r.respuesta = p.respuesta
GROUP BY u.id, u.nombre;

SELECT 
    p.id AS pregunta_id, 
    p.pregunta AS pregunta,
    p.respuesta AS respuesta_correcta,
    COUNT(DISTINCT r.usuario_id) AS usuarios_con_respuesta_correcta
FROM preguntas p
JOIN respuestas r ON p.id = r.pregunta_id
WHERE r.respuesta = p.respuesta
GROUP BY p.id, p.pregunta, p.respuesta;

ALTER TABLE respuestas DROP CONSTRAINT IF EXISTS respuestas_usuario_id_fkey;

ALTER TABLE respuestas ADD CONSTRAINT respuestas_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE;

DELETE FROM usuarios WHERE id = 1;

ALTER TABLE usuarios
ADD CONSTRAINT edad_mayor_que_18 CHECK (edad >= 18);

-- INSERT INTO usuarios (id, nombre, edad) VALUES (6, 'Usuario 6', 16);


ALTER TABLE usuarios
ADD COLUMN email VARCHAR(255) UNIQUE;

