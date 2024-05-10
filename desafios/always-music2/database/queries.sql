DROP TABLE IF EXISTS students;

CREATE TABLE IF NOT EXISTS students (
    id VARCHAR PRIMARY KEY,
    Rut VARCHAR(20) UNIQUE,
    Nombre VARCHAR(255),
    Curso VARCHAR(50),
    Nivel VARCHAR(50)
);

INSERT INTO students (rut, nombre, curso, nivel) VALUES
    ('1', '27.681.725-6', 'Pablito Egaña', 'historia', 'medio'),
    ('2', '87.399.494-0', 'Karol Ina', 'contabilidad', 'avanzado'),
    ('3', '44.894.919-2', 'Carlos Pacheco', 'derecho', 'avanzado'),
    ('4', '49.992.148-9', 'Carolina Perez', 'biologia', 'avanzado');