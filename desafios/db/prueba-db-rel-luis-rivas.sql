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


-- ingresar registros

INSERT INTO peliculas (id, nombre, anno) VALUES
(1, 'matrix', 1999),
(2, 'aliens', 1986),
(3, 'terminator', 1984),
(4, 'tiburon', 1975),
(5, 'jurasic park', 1993);


INSERT INTO tags (id, tag) VALUES
(1, 'Drama'),
(2, 'Comedia'),
(3, 'Acción'),
(4, 'Romance'),
(5, 'Ciencia ficción');


INSERT INTO peliculas_tags (id_pelicula, id_tag) VALUES
(1, 1), (1, 2), (1, 3), 
(2, 5), (2, 1);


--query

SELECT p.nombre AS pelicula, COUNT(pt.id_tag) AS cantidad_tags
FROM peliculas p
LEFT JOIN peliculas_tags pt ON p.id = pt.id_pelicula
GROUP BY p.id
order by p.id;






-- Segunda Parte

DROP TABLE IF EXISTS respuestas;
DROP TABLE IF EXISTS preguntas;
DROP TABLE IF EXISTS usuarios;


-- crear tablas

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
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (pregunta_id) REFERENCES preguntas(id)
);


-- ingresar registros

INSERT INTO preguntas (id, pregunta, respuesta) VALUES
(1, 'pais', 'españa'),
(2, 'ciudad', 'santiago'),
(3, 'hoobie', 'leer'),
(4, 'licencia', 'clase c'),
(5, 'color favorito', 'azul');

INSERT INTO usuarios (id, nombre, edad) VALUES
(1, 'ana', 25),
(2, 'pedro', 30),
(3, 'pablito', 20),
(4, 'juan', 22),
(5, 'pepe', 40);

INSERT INTO respuestas (id, respuesta, usuario_id, pregunta_id) VALUES
(1, 'españa', 1, 1),
(2, 'españa', 2, 1);

INSERT INTO respuestas (id, respuesta, usuario_id, pregunta_id) VALUES
(3, 'clase c', 3, 4);

INSERT INTO respuestas (id, respuesta, usuario_id, pregunta_id) VALUES
(4, 'leer', 4, 5),
(5, 'azul', 5, 4);


--queries

SELECT u.id AS usuario_id, u.nombre AS nombre_usuario, COUNT(*) AS respuestas_correctas_totales
FROM usuarios u
JOIN respuestas r ON u.id = r.usuario_id
JOIN preguntas p ON r.pregunta_id = p.id
WHERE r.respuesta = p.respuesta
GROUP BY u.id, u.nombre;



SELECT 
    p.id AS pregunta_id, 
    p.pregunta AS pregunta_hecha,
    p.respuesta AS respuesta_dada,
    COUNT(DISTINCT r.usuario_id) AS usuarios_con_respuesta_correcta
FROM preguntas p
JOIN respuestas r ON p.id = r.pregunta_id
WHERE r.respuesta = p.respuesta
GROUP BY p.id, p.pregunta, p.respuesta;


ALTER TABLE respuestas DROP CONSTRAINT IF EXISTS respuestas_usuario_id_fkey;

ALTER TABLE respuestas ADD CONSTRAINT respuestas_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE;

DELETE FROM usuarios WHERE id = 1;

select *
from usuarios;

ALTER TABLE usuarios
ADD CONSTRAINT edad_mayor_que_18 CHECK (edad >= 18);

INSERT INTO usuarios (id, nombre, edad) VALUES (6, 'Usuario 6', 16);


ALTER TABLE usuarios
ADD COLUMN email VARCHAR(255) UNIQUE;


select *
from usuarios;


