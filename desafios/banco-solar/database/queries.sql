-- Drop tables if they exist
DROP TABLE IF EXISTS transferencias;
DROP TABLE IF EXISTS usuarios;

-- Create usuarios table
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    balance FLOAT CHECK (balance >= 0) NOT NULL
);

-- Create transferencias table
CREATE TABLE transferencias (
    id SERIAL PRIMARY KEY,
    emisor INT NOT NULL,
    receptor INT NOT NULL,
    monto FLOAT NOT NULL CHECK (monto > 0),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (emisor) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (receptor) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- Insert initial values into usuarios table
INSERT INTO usuarios (nombre, balance) VALUES 
('pablito', 10000),
('juanita', 25000),
('pedrito', 70000),
('anita', 98000);

-- Insert initial values into transferencias table (example transfers)
INSERT INTO transferencias (emisor, receptor, monto, fecha) VALUES 
(1, 2, 500, '2024-05-10 00:00:00'),
(2, 1, 100, '2024-05-15 00:00:00'),
(3, 1, 100, '2024-05-16 00:00:00'),
(4, 2, 100, '2024-05-18 00:00:00');

-- Select from transferencias
SELECT * FROM transferencias;

-- Select from usuarios
SELECT * FROM usuarios;
