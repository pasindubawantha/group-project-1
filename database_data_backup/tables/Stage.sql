-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 03, 2017 at 09:05 AM
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
-- Table structure for table `Stage`
--

CREATE TABLE `Stage` (
  `id` int(11) NOT NULL,
  `projectId` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `priority` int(11) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `startDate` date DEFAULT NULL,
  `endDate` date DEFAULT NULL,
  `ammount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Stage`
--

INSERT INTO `Stage` (`id`, `projectId`, `name`, `priority`, `description`, `startDate`, `endDate`, `ammount`) VALUES
(5001, 4001, 'PetiCash', 1, NULL, '2017-07-01', '2017-07-01', 80000),
(5002, 4002, 'stage 1', 1, 'description', '2017-08-08', '2017-08-02', 0),
(5003, 4002, 'stage 2', 2, 'description', '2017-08-16', '2017-08-24', 0),
(5004, 4003, 'stage 3', 1, 'description', '2017-08-09', '2017-08-24', 0),
(5005, 4003, 'stage 4', 2, 'description', '2017-08-16', '2017-08-24', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Stage`
--
ALTER TABLE `Stage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Stage_Project1` (`projectId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Stage`
--
ALTER TABLE `Stage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5006;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `Stage`
--
ALTER TABLE `Stage`
  ADD CONSTRAINT `fk_Stage_Project1` FOREIGN KEY (`projectId`) REFERENCES `Project` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
