-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 03, 2017 at 09:04 AM
-- Server version: 5.7.18
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `Employee`
--

CREATE TABLE `Employee` (
  `id` int(11) NOT NULL,
  `roleId` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `salary` int(11) NOT NULL,
  `designation` varchar(45) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Employee`
--

INSERT INTO `Employee` (`id`, `roleId`, `name`, `address`, `salary`, `designation`, `active`) VALUES
(2001, 1001, 'Thilana Kostha', '67b, Flower road, Colombo 10.', 0, 'System Administrator', 1),
(2002, 1005, 'Ranjan Perera', '43B, Dharmapala mw, Kotte.', 3000000, 'CEO', 1),
(2003, 1002, 'Thushara Pradeep', '67N, Narahenpita road, Narahenpita', 3500, 'Technical Officer', 1),
(2004, 1002, 'Piyal Athulage', '8, Hawlock road, Colombo 03.', 48970, 'Technical Officer', 1),
(2005, 1002, 'Kumara Rathnasiri', '7, Dharmapla road, Colombo', 45000, 'Technical Officer', 1),
(2006, 1003, 'Thusara Piris', '78, alvis road, Negambo.', 67000, 'Project Manager', 1),
(2007, 1003, 'Don Karolis', '76, kowaththa road, Koswaththa', 76000, 'Project Manager', 1),
(2008, 1003, 'Hansana Maheesh', '67, Thalwathugoda road, Thalawathugoda', 65000, 'Assistant Project Manager', 1),
(2009, 1006, 'Senuri Perera', '67, Jade road, Colombo 5.', 16000, 'Assistant Qunatity Survayor', 1),
(2010, 1006, 'Henry Perera', '78, Marine drive, Colombo.', 90000, 'Qunatity Survayor', 1),
(2011, 1004, 'Anil Wikramasignhe', '89, flower road, Colombo.', 56000, 'Accountant', 1),
(2012, 1004, 'Tharindu Diwakara', '90, parliment road, Kotte.', 27000, 'Assistant Accountant', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Employee`
--
ALTER TABLE `Employee`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Employee_Role1_idx` (`roleId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Employee`
--
ALTER TABLE `Employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2013;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `Employee`
--
ALTER TABLE `Employee`
  ADD CONSTRAINT `fk_Employee_Role1` FOREIGN KEY (`roleId`) REFERENCES `Role` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
