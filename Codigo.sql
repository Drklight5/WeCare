desc datos; // Conocer las filas;
SELECT * FROM tablaproyectos; //Conocer todos los datos
UPDATE microcontrolador SET ubicacion = 'SanNico' Where idMicro = 5; // Cambiar datos especificos

INSERT INTO tablaproyectos (nombre, descrip, ubicacion)
Values
('CasaNancy','Automazacion  casa de Nancy','Cancun'),
('CasaAngela','Automazacion casa de Angela','Monterrey'),
('CasaVictoria','Automazacion casa de Victoria','Venezuela'),
('CasaNorma','Automazacion casa de Norma','Santiago'),
('CasaMariana','Automazacion casa de Mariana','SanNico')
;

INSERT INTO microcontrolador (nombre, API, tipo, ubicacion, PID)
Values
('MicroNancy', 'http://1.1.1.1:81/micro1/2345', 'mCU', 'cancun',1),
('MicroAngela', 'http://1.1.1.1:82/micro1/2345', 'mCU', 'Monterrey',2),
('MicroVictoria', 'http://1.1.1.1:83/micro1/2345', 'mCU', 'Venezuela', 3),
('MicroNorma', 'http://1.1.1.1:84/micro1/2345', 'mCU', 'Santiago', 4),
('MicroMariana', 'http://1.1.1.1:85/micro1/2345', 'mCU', 'SanNico',5)
;

INSERT INTO sensores (idSensores, nombre, Sensorescol, API, ubicacion, MC)
Values
(1,'DHT11', 'Temperatura', 'http://1.1.1.1:91/micro1/2345', 'cancun',1),
(2,'DWEII', 'Distancia','http://1.1.1.1:92/micro1/2345', 'Monterrey',2),
(3,'DHT11', 'Humedad','http://1.1.1.1:93/micro1/2345', 'Venezuela',3),
(4,'Foto_Resistor', 'Luz','http://1.1.1.1:94/micro1/2345', 'Santiago',4),
(5,'AX_pro', 'Movimiendo','http://1.1.1.1:95/micro1/2345', 'SanNico',5)
;


