


SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";



DROP TABLE IF EXISTS `Dispositivos`;
CREATE TABLE `Dispositivos` (
  `Cod_Dispositivos` int(11) NOT NULL,
  `Estado` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Notificacion` varchar(15) NOT NULL,
  `Alarma` varchar(10) NOT NULL,
  `Nombre` varchar(15) NOT NULL,
  `Cod_U` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `Dispositivos` (`Cod_Dispositivos`, `Estado`, `Notificacion`, `Alarma`, `Nombre`, `Cod_U`) VALUES
(1, 'Conectado', 'Activado', 'Activado', 'Dispositivo_1', 1001),
(2, 'Conectado', 'Desactivado', 'Activado', 'Dispositivo_2', 1001),
(5, 'Conectado', 'Activado', 'Activado', 'Dispositivo_3', 1001);

DROP TABLE IF EXISTS `Registro`;
CREATE TABLE `Registro` (
  `Cod_Registros` int(11) NOT NULL,
  `Fecha` date NOT NULL,
  `Hora` time(6) NOT NULL,
  `Duracion` time(6) NOT NULL,
  `Cod_Dispositivo` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `Registro` (`Cod_Registros`, `Fecha`, `Hora`, `Duracion`, `Cod_Dispositivo`) VALUES
(1, '2020-10-14', '15:00:00.000000', '00:00:10.000000', 1),
(2, '2020-06-11', '15:00:00.000000', '00:00:10.000000', 1),
(3, '2020-10-10', '05:00:00.000000', '00:00:10.000000', 1);

DROP TABLE IF EXISTS `Usuario`;
CREATE TABLE `Usuario` (
  `Cod_Us` int(11) NOT NULL,
  `Nombre` varchar(15) NOT NULL,
  `Correo` varchar(20) NOT NULL,
  `Clave` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `Usuario` (`Cod_Us`, `Nombre`, `Correo`, `Clave`) VALUES
(1001, 'Ivan Tang', 'ivantshi@gmail.com', '12345678'),
(1002, 'Manuela Pérez', 'manuelat@gmail.com', '123456789'),
(1003, 'Carlos B', 'carlos@gmail.com', '12345678'),
(1004, 'Carlos', 'carlos@gmail.com', '54321'),
(1005, 'Juan', 'juan@gmail.com', '12345'),
(1006, 'Carlos', 'carlos@gmail.com', '54321'),
(1007, 'Juan', 'juan@gmail.com', '12345');


ALTER TABLE `Dispositivos`
  ADD PRIMARY KEY (`Cod_Dispositivos`),
  ADD KEY `Cod_Us` (`Cod_U`);

ALTER TABLE `Registro`
  ADD PRIMARY KEY (`Cod_Registros`),
  ADD KEY `Cod_Dispositivo` (`Cod_Dispositivo`);

ALTER TABLE `Usuario`
  ADD PRIMARY KEY (`Cod_Us`);


ALTER TABLE `Dispositivos`
  MODIFY `Cod_Dispositivos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

ALTER TABLE `Registro`
  MODIFY `Cod_Registros` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `Usuario`
  MODIFY `Cod_Us` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1008;


ALTER TABLE `Dispositivos`
  ADD CONSTRAINT `Cod_Us` FOREIGN KEY (`Cod_U`) REFERENCES `Usuario` (`Cod_Us`) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE `Registro`
  ADD CONSTRAINT `Cod_Dispositivo` FOREIGN KEY (`Cod_Dispositivo`) REFERENCES `Dispositivos` (`Cod_Dispositivos`) ON DELETE RESTRICT ON UPDATE RESTRICT;

