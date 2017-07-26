-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 25, 2017 at 04:13 PM
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
-- Table structure for table `TeamMember`
--

CREATE TABLE `TeamMember` (
  `employeeId` int(11) NOT NULL,
  `projectId` int(11) NOT NULL,
  `allowanceAppPriority` int(11) DEFAULT NULL,
  `allowanceAppMember` tinyint(1) NOT NULL DEFAULT '0',
  `paymentAppPriority` int(11) DEFAULT NULL,
  `paymentAppMember` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `TeamMember`
--

INSERT INTO `TeamMember` (`employeeId`, `projectId`, `allowanceAppPriority`, `allowanceAppMember`, `paymentAppPriority`, `paymentAppMember`) VALUES
(2001, 4001, NULL, 0, NULL, 0),
(2002, 4001, NULL, 0, NULL, 0),
(2003, 4001, NULL, 0, NULL, 0),
(2005, 4001, NULL, 0, NULL, 0),
(2006, 4001, NULL, 0, NULL, 0),
(2006, 4002, NULL, 0, NULL, 0),
(2007, 4001, NULL, 0, NULL, 0),
(2007, 4002, NULL, 0, NULL, 0),
(2008, 4001, NULL, 0, NULL, 0),
(2009, 4001, NULL, 0, NULL, 0),
(2009, 4002, NULL, 0, NULL, 0),
(2010, 4001, NULL, 0, NULL, 0),
(2011, 4001, NULL, 0, NULL, 0),
(2012, 4001, NULL, 0, NULL, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `TeamMember`
--
ALTER TABLE `TeamMember`
  ADD PRIMARY KEY (`employeeId`,`projectId`),
  ADD KEY `fk_Employee_has_Project_Project2_idx` (`projectId`),
  ADD KEY `fk_Employee_has_Project_Employee2_idx` (`employeeId`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `TeamMember`
--
ALTER TABLE `TeamMember`
  ADD CONSTRAINT `fk_Employee_has_Project_Employee2` FOREIGN KEY (`employeeId`) REFERENCES `Employee` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Employee_has_Project_Project2` FOREIGN KEY (`projectId`) REFERENCES `Project` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
