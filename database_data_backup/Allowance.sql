-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 03, 2017 at 02:10 PM
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
-- Table structure for table `Allowance`
--

CREATE TABLE `Allowance` (
  `id` int(11) NOT NULL,
  `employeeId` int(11) NOT NULL,
  `projectId` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `ammount` int(11) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Allowance`
--

INSERT INTO `Allowance` (`id`, `employeeId`, `projectId`, `name`, `ammount`, `active`) VALUES
(7001, 2001, 4001, 'fuel', 3000, 1),
(7002, 2001, 4001, 'allowance1', 4000, 1),
(7003, 2002, 4001, 'fuel2', 8000, 1),
(7004, 2002, 4001, 'allowance2', 10000, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Allowance`
--
ALTER TABLE `Allowance`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Allowance_has_TeamMember_idx` (`employeeId`,`projectId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Allowance`
--
ALTER TABLE `Allowance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7005;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `Allowance`
--
ALTER TABLE `Allowance`
  ADD CONSTRAINT `Allowance_has_TeamMember` FOREIGN KEY (`employeeId`,`projectId`) REFERENCES `TeamMember` (`employeeId`, `projectId`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
