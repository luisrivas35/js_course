DROP TABLE IF EXISTS canciones;

CREATE TABLE canciones (
	id VARCHAR PRIMARY KEY,
	titulo VARCHAR(50) NOT NULL,
	artista VARCHAR(50) NOT NULL,
	tono VARCHAR(10) NOT NULL
);

-- seeders
INSERT INTO canciones (ID, titulo, artista, tono) VALUES 
('kLoMjD_TGnbkhYWn0gTY3', 'los pollitos', 'popular', 'dm'),
('z_FrmrjC3B-ttWgg4n7Tu', 'El viejo y el mar', 'beatles', 'bm'),
('HNBfPALqm5yshLPpeG22F', 'Sherlock Holmes', 'Ruben Blades', 'cm'),
('Asl75JopegH3F6DWwhIcv', 'Casas Muertas', 'juanes', 'pm');

SELECT * FROM canciones;