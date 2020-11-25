-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: bpowfnijnp5kggiic68r-mysql.services.clever-cloud.com:3306
-- Generation Time: Nov 25, 2020 at 12:41 PM
-- Server version: 8.0.15-5
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bpowfnijnp5kggiic68r`
--

-- --------------------------------------------------------

--
-- Table structure for table `Dispositivos`
--

CREATE TABLE IF NOT EXISTS `Dispositivos` (
  `Cod_Dispositivo` int(11) NOT NULL AUTO_INCREMENT,
  `Estado` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Notificacion` tinyint(1) NOT NULL,
  `Alarma` tinyint(1) NOT NULL,
  `Nombre` varchar(15) NOT NULL,
  `Cod_U` int(11) NOT NULL,
  `IP` int(10) NOT NULL,
  PRIMARY KEY (`Cod_Dispositivo`),
  KEY `Cod_Us` (`Cod_U`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Dispositivos`
--

INSERT INTO `Dispositivos` (`Cod_Dispositivo`, `Estado`, `Notificacion`, `Alarma`, `Nombre`, `Cod_U`, `IP`) VALUES
(1, 'Conectado', 1, 0, 'Dis_Actualizado', 1001, 0),
(6, 'Conectado', 1, 0, 'Dis_Act', 1001, 0),
(7, 'Conectado', 1, 0, 'Dis_Act', 1001, 0),
(8, 'Conectado', 1, 0, 'Dis_Act', 1001, 0),
(9, 'Conectado', 1, 0, 'Dis_Act', 1001, 0),
(10, 'Conectado', 1, 0, 'Dis_Act', 1001, 0),
(11, 'Conectado', 1, 0, 'Dis_Act', 1001, 0),
(12, 'Conectado', 1, 0, 'Dis_Act', 1001, 0),
(13, 'Conectado', 0, 0, 'Dis_Prueba_Act', 1009, 0),
(14, 'Conectado', 0, 0, 'Dis_Prueba_New', 1009, 0),
(15, 'Conectado', 1, 1, 'Hola', 1003, 1000164),
(17, 'Conectado', 1, 1, 'p_U', 1003, 100043);

-- --------------------------------------------------------

--
-- Table structure for table `Registro`
--

CREATE TABLE IF NOT EXISTS `Registro` (
  `Cod_Registro` int(11) NOT NULL AUTO_INCREMENT,
  `Fecha` date NOT NULL,
  `Hora` time(6) NOT NULL,
  `Duracion` time(6) NOT NULL,
  `Cod_Dispositivo` int(10) NOT NULL,
  PRIMARY KEY (`Cod_Registro`),
  KEY `Cod_Dispositivo` (`Cod_Dispositivo`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Registro`
--

INSERT INTO `Registro` (`Cod_Registro`, `Fecha`, `Hora`, `Duracion`, `Cod_Dispositivo`) VALUES
(1, '2020-10-14', '15:00:00.000000', '00:00:10.000000', 1),
(3, '2020-10-10', '05:00:00.000000', '00:00:10.000000', 1),
(8, '2020-11-24', '12:10:18.000000', '00:00:08.000000', 7);

-- --------------------------------------------------------

--
-- Table structure for table `Usuario`
--

CREATE TABLE IF NOT EXISTS `Usuario` (
  `Cod_U` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Correo` varchar(20) NOT NULL,
  `Clave` varchar(15) NOT NULL,
  PRIMARY KEY (`Cod_U`),
  UNIQUE KEY `Correo` (`Correo`)
) ENGINE=InnoDB AUTO_INCREMENT=1019 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Usuario`
--

INSERT INTO `Usuario` (`Cod_U`, `Nombre`, `Correo`, `Clave`) VALUES
(1001, 'Ivan Tang', 'ivantshi@gmail.com', '12345678'),
(1002, 'Admin', 'EW2020@gmail.com', '2020'),
(1003, 'Carlos B', 'carlos@gmail.com', '12345678'),
(1005, 'Michelle Tang Zhu', 'onlyreason@gmail.com', '0987'),
(1008, 'Ejemplo', 'Ejemplo@gmail.com', '321'),
(1009, 'Pru_actuali', 'pruact@gmail.com', '545673'),
(1010, 'Pruct', 'pruebaali@gmail.com', '435432'),
(1011, 'JuanF_actuali', 'fernan@gmail.com', '545673'),
(1012, 'Hola', '234567', 'hola@gmial.com'),
(1016, 'Holay', 'holrtya@gmidal.com', '234567'),
(1017, 'Holaa', 'holaa@gmial.com', '2345674'),
(1018, 'Thoma_actuali', 'gua@gmail.com', '5342222');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Dispositivos`
--
ALTER TABLE `Dispositivos`
  ADD CONSTRAINT `Cod_Us` FOREIGN KEY (`Cod_U`) REFERENCES `Usuario` (`Cod_U`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `Registro`
--
ALTER TABLE `Registro`
  ADD CONSTRAINT `Cod_Dispositivo` FOREIGN KEY (`Cod_Dispositivo`) REFERENCES `Dispositivos` (`Cod_Dispositivo`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
