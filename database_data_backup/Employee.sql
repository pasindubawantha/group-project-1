-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 25, 2017 at 04:12 PM
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
  `designation` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Employee`
--

INSERT INTO `Employee` (`id`, `roleId`, `name`, `address`, `salary`, `designation`) VALUES
(2001, 1001, 'Admin', 'admins address', 0, 'none'),
(2002, 1005, 'ceo1s name', 'ceo1s address', 3000000, 'chief executive officer'),
(2003, 1002, 'Technical Officer1 name', 'technical officer1 address', 3500, 'Technical Officer'),
(2004, 1002, 'Technical Officer2 name', 'technical officer2 address', 48970, 'Technical Officer'),
(2005, 1002, 'Technical Officer3 name', 'technical officer3 address', 45000, 'Technical Officer'),
(2006, 1003, 'Project Manger1 name', 'project manager1 address', 67000, 'Project Manager'),
(2007, 1003, 'Project Manger2 name', 'project manager2 address', 76000, 'Project Manager'),
(2008, 1003, 'Project Manger3 name', 'project manager3 address', 65000, 'Assistant Project Manager'),
(2009, 1006, 'Quantity servayor1 name', 'Quantity servayor1 address', 16000, 'Assistant Qunatity Survayor'),
(2010, 1006, 'Quantity servayor2 name', 'Quantity servayor2 address', 90000, 'Qunatity Survayor'),
(2011, 1004, 'Accountant 1 name', 'accountant1 address', 56000, 'Accountant'),
(2012, 1004, 'Accountant 2 name', 'accountant2 address', 27000, 'Assistant Accountant');

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
