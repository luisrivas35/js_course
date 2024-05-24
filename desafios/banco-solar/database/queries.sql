-- Drop tables if they exist
DROP TABLE IF EXISTS transferencias;
DROP TABLE IF EXISTS usuarios;

-- Create usuarios table
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    balance FLOAT CHECK (balance >= 0)
);

-- Insert values into usuarios table
INSERT INTO usuarios (nombre, balance) VALUES 
('pablito', 10000),
('juanita', 25000),
('pedrito', 70000),
('anita', 98000);

-- Create transferencias table
CREATE TABLE transferencias (
    id SERIAL PRIMARY KEY,
    emisor INT,
    receptor INT,
    monto FLOAT,
    fecha DATE,
    FOREIGN KEY (emisor) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (receptor) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- Transaction
BEGIN;

-- Update balances
UPDATE usuarios
SET balance = balance - 500
WHERE id = 1;

UPDATE usuarios
SET balance = balance + 500
WHERE id = 2;

-- Insert into transferencias
INSERT INTO transferencias (emisor, receptor, monto, fecha) VALUES 
(1, 2, 500, '05/10/2024'),
(2, 1, 100, '05/15/2024'),
(3, 1, 100, '05/16/2024'),
(4, 2, 100, '05/18/2024');

COMMIT;

-- Select from transferencias
SELECT * FROM transferencias;

-- Select from usuarios
SELECT * FROM usuarios;
