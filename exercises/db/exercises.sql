create table clientes (
	rut int primary key,
    nombre varchar(50), 
    apellido varchar(50),
    email varchar(150) unique    
);

create table matriculas (
	monto varchar(50),
    estado boolean, 
    cliente_rut int, foreign key(cliente_rut) references clientes(rut)

);

insert into matriculas values (
    
);