-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 30, 2023 at 06:58 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

DROP DATABASE IF EXISTS `usersdb`;
CREATE DATABASE `usersdb`;
USE `usersdb`;




SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";



/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `usersdb`
--


-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`name`) VALUES
('Google'),
('Microsoft'),
('Meta');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `zipcode` varchar(10) NOT NULL,
  `lat` float NOT NULL,
  `lng` float NOT NULL,
  `phone` varchar(50) NOT NULL,
  `company` varchar(50) NOT NULL,
  `rank` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `city`, `zipcode`, `lat`, `lng`, `phone`, `company`, `rank`) VALUES
(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Gwenborough', '92998-3874', -37.3159, 81.1496, '1-770-736-8031 x56442', 'Microsoft', 1),
(2, 'Ervin Howell', 'Antonette', 'Shanna@melissa.tv', 'Wisokyburgh', '90566-7771', -43.9509, -34.4618, '010-692-6593 x09125', 'Google', 7),
(3, 'Clementine Bauch', 'Samantha', 'Nathan@yesenia.net', 'McKenziehaven', '59590-4157', -68.6102, -47.0653, '1-463-123-4447', 'Meta', 2),
(4, 'Patricia Lebsack', 'Karianne', 'Julianne.OConner@kory.org', 'South Elvis', '53919-4257', 29.4572, -164.299, '493-170-9623 x156', 'Microsoft', 6),
(5, 'Chelsey Dietrich', 'Kamren', 'Lucio_Hettinger@annie.ca', 'Roscoeview', '33263', -31.8129, 62.5342, '(254)954-1289', 'Google', 3),
(6, 'Mrs. Dennis Schulist', 'Leopoldo_Corkery', 'Karley_Dach@jasper.info', 'South Christy', '23505-1337', -71.4197, 71.7478, '1-477-935-8478 x6430', 'Google', 5),
(7, 'Kurtis Weissnat', 'Elwyn.Skiles', 'Telly.Hoeger@billy.biz', 'Howemouth', '58804-1099', 24.8918, 21.8984, '210.067.6132', 'Google', 8),
(8, 'Nicholas Runolfsdottir V', 'Maxime_Nienow', 'Sherwood@rosamond.me', 'Aliyaview', '45169', -14.399, -120.768, '586.493.6943 x140', 'Meta', 4),
(9, 'Glenna Reichert', 'Delphine', 'Chaim_McDermott@dana.io', 'Bartholomebury', '76495-3109', 24.6463, -168.889, '(775)976-6794 x41206', 'Microsoft', 9),
(10, 'Clementina DuBuque', 'Moriah.Stanton', 'Rey.Padberg@karina.biz', 'Lebsackbury', '31428-2261', -38.2386, 57.2232, '024-648-3804', 'Meta', 10);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
