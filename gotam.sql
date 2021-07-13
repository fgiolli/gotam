CREATE DATABASE gotam;
use gotam;
CREATE TABLE `Areas` (
  `id` int(11) NOT NULL PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `Empleados` (
  `fullname` varchar(255) NOT NULL,
  `DNI` int(11) NOT NULL PRIMARY KEY,
  `date_birth` datetime NOT NULL,
  `developer` tinyint(1) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `AreaId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Creamos por default 1 area y 1 empleado sólo para testear
--
INSERT INTO `Areas` (`id`, `name`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Test 2', 'Just a test', '2021-07-14 00:44:55', '2021-07-14 00:44:55');

INSERT INTO `Empleados` (`fullname`, `DNI`, `date_birth`, `developer`, `description`, `createdAt`, `updatedAt`, `AreaId`) VALUES
('Test Perez', 40287312, '2021-07-14 00:45:53', 1, 'Test', '2021-07-14 00:45:53', '2021-07-14 00:45:53', 1);