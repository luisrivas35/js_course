-- Drop the skaters table if it exists
DROP TABLE IF EXISTS aportes;
DROP TABLE IF EXISTS proyectos;
DROP TABLE IF EXISTS sectores;
DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    email VARCHAR(50) UNIQUE NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    tipo_usuario INT DEFAULT 2
);

CREATE TABLE sectores (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE proyectos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    presupuesto NUMERIC(15, 2) NOT NULL,
    fecha_inicio timestamp NOT NULL,
    fecha_termino timestamp NOT NULL,
    user_id INT NOT NULL,
    sector INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES usuarios(id),
    FOREIGN KEY (sector) REFERENCES sectores(id)
);

CREATE TABLE aportes (
    id SERIAL PRIMARY KEY,
    mensaje TEXT NOT NULL,
    fecha_aporte timestamp NOT NULL,
    proyecto_id INT NOT NULL, 
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES usuarios(id),
    FOREIGN KEY (proyecto_id) REFERENCES proyectos(id)
);

-- -- seeders
-- -- Insert into usuarios table (1- admin, 2- gestor)
INSERT INTO usuarios (email, nombre, password, tipo_usuario) VALUES
('administrador@mail.com', 'admin', '$2b$10$i9qte6x9EZ0UbQbsNkXTzuZb3uueVn0ygAMMSwdF3cNicf5O8WETC', 1),
('user1@example.com', 'user1', '$2b$10$1HHpbNj.E0foqwYxUo64gexn7sdiJa/hfBh4067tkoo7ZC9dqQvmO', 2),
('user2@example.com', 'user2', '$2b$10$1HHpbNj.E0foqwYxUo64gexn7sdiJa/hfBh4067tkoo7ZC9dqQvmO', 2),
('user3@example.com', 'user3', '$2b$10$1HHpbNj.E0foqwYxUo64gexn7sdiJa/hfBh4067tkoo7ZC9dqQvmO', 2);



-- -- Insert into sectores 1-tech, 2-health, 3-education, 4-finance
INSERT INTO sectores (nombre) VALUES
('Technology'),
('Health'),
('Education'),
('Finance');


-- -- Insert into proyectos table
INSERT INTO proyectos (nombre, descripcion, presupuesto, fecha_inicio, fecha_termino, user_id, sector) VALUES
('Project Alpha', 'A technology project focusing on AI development', 1000000.00, '2024-01-01 09:00:00', '2024-12-31 18:00:00', 2, 1),
('Project Beta', 'A health project to develop a new vaccine', 2000000.00, '2024-02-01 09:00:00', '2025-01-31 18:00:00', 1, 2),
('Project Gamma', 'An education project to build a new school', 500000.00, '2024-03-01 09:00:00', '2024-12-01 18:00:00', 3, 3);

-- -- Insert into aportes table
INSERT INTO aportes (mensaje, fecha_aporte, proyecto_id, user_id) VALUES
('Looking forward to seeing the progress on this project.', '2024-01-10 10:00:00', 1, 2),
('Excited to be a part of this initiative.', '2024-02-15 11:30:00', 2, 3),
('Great project, happy to contribute!', '2024-03-20 14:45:00', 3, 1);



select * from usuarios;

select * from aportes;