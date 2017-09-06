-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 03, 2017 at 09:16 AM
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
-- Table structure for table `PriceListEntry`
--

CREATE TABLE `PriceListEntry` (
  `id` int(11) NOT NULL,
  `projectId` int(11) NOT NULL,
  `unitPrice` int(11) DEFAULT NULL,
  `InventoryItemId` int(11) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `PriceListEntry`
--

INSERT INTO `PriceListEntry` (`id`, `projectId`, `unitPrice`, `InventoryItemId`, `active`) VALUES
(8001, 4001, 100, 9003, 1),
(8002, 4001, 123, 9004, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `PriceListEntry`
--
ALTER TABLE `PriceListEntry`
  ADD PRIMARY KEY (`id`),
  ADD KEY `InventoryIten_has_project_idx` (`projectId`),
  ADD KEY `fk_PriceListEntry_InventoryItem1_idx` (`InventoryItemId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `PriceListEntry`
--
ALTER TABLE `PriceListEntry`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8003;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `PriceListEntry`
--
ALTER TABLE `PriceListEntry`
  ADD CONSTRAINT `InventoryIten_has_project` FOREIGN KEY (`projectId`) REFERENCES `Project` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_PriceListEntry_InventoryItem1` FOREIGN KEY (`InventoryItemId`) REFERENCES `InventoryItem` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
