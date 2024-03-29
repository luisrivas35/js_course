CREATE TABLE clientes (
    email VARCHAR(50),
    nombre VARCHAR,
    telefono VARCHAR(16),
    empresa VARCHAR(50),
    prioridad SMALLINT CHECK (prioridad >= 1 AND prioridad <= 10)
);

INSERT INTO clientes (email, nombre, telefono, empresa, prioridad) 
VALUES 
    ('j.perez@gmail.com', 'Juan Pérez', '123456789', 'Empresa A', 8),
    ('m.gonzalez@gmail.com', 'María González', '987654321', 'Empresa B', 5),
    ('p.ramirez@gmail.com', 'Pedro Ramírez', '555555555', 'Empresa C', 10),
    ('a.lopez@yahoo.com', 'Ana López', '111222333', 'Empresa D', 3),
    ('l.martinez@yahoo.com', 'Luisa Martínez', '444777888', 'Empresa E', 6);

SELECT *
FROM clientes
ORDER BY prioridad DESC
LIMIT 3;

SELECT *
FROM clientes
WHERE empresa = 'Empresa C'
LIMIT 2;

SELECT *
FROM clientes
WHERE prioridad = 5
LIMIT 2;
