
-- 1 Crear una base de datos llamada películas. y 2- Cargar ambos archivos a su tabla correspondiente.
-- hechos usando el DBeaver

-- 3- Obtener el ID de la película "Titanic":
SELECT id, pelicula
FROM public.peliculas
where pelicula = 'Titanic';

-- 4- Listar a todos los actores que aparecen en la película "Titanic":
SELECT  r.actor 
FROM public.reparto r
WHERE r.id_pelicula = (
    SELECT p.id
    FROM public.Peliculas p 
    WHERE p.Pelicula = 'Titanic'
);

-- 5- Consultar en cuántas películas del top 100 participa Harrison Ford:
SELECT COUNT(*)
FROM public.reparto r
WHERE r.actor = 'Harrison Ford'
AND r.id_pelicula IN (
    SELECT p.id
    FROM peliculas p 
    ORDER BY p.Año_estreno DESC
    LIMIT 100
);

-- 6- Indicar las películas estrenadas entre los años 1990 y 1999 ordenadas por título de manera ascendente:
SELECT p.Pelicula
FROM public.Peliculas p
WHERE p.Año_estreno BETWEEN 1990 AND 1999
ORDER BY p.Pelicula ASC;

-- 7- Hacer una consulta SQL que muestre los títulos con su longitud, la longitud debe ser nombrado para la consulta como "longitud_titulo":
SELECT p.Pelicula p, LENGTH(p.Pelicula) AS longitud_titulo
FROM public.Peliculas p;

-- 8- Consultar cuál es la longitud más grande entre todos los títulos de las películas:
SELECT MAX(LENGTH(p.Pelicula)) AS longitud_maxima
FROM public.Peliculas p;