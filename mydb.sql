-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 23, 2017 at 04:27 AM
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

-- --------------------------------------------------------

--
-- Table structure for table `AllowancePayment`
--

CREATE TABLE `AllowancePayment` (
  `id` int(11) NOT NULL,
  `allowanceId` int(11) NOT NULL,
  `employeeId` int(11) NOT NULL,
  `projectId` int(11) NOT NULL,
  `ammount` int(11) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `AllowancePayment_Aproval`
--

CREATE TABLE `AllowancePayment_Aproval` (
  `id` int(11) NOT NULL,
  `approvingMemberId` int(11) NOT NULL,
  `paymentId` int(11) NOT NULL,
  `allowanceId` int(11) NOT NULL,
  `employeeId` int(11) NOT NULL,
  `projectId` int(11) NOT NULL,
  `approved` tinyint(1) NOT NULL DEFAULT '0',
  `denied` tinyint(1) NOT NULL DEFAULT '0',
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `App`
--

CREATE TABLE `App` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `AppAccess`
--

CREATE TABLE `AppAccess` (
  `Role_id` int(11) NOT NULL,
  `App_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `BudgetEntry`
--

CREATE TABLE `BudgetEntry` (
  `id` int(11) NOT NULL,
  `projectId` int(11) NOT NULL,
  `stageId` int(11) NOT NULL,
  `inventoryItemId` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(45) DEFAULT NULL,
  `noOfUnits` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `BudgetEntry`
--

INSERT INTO `BudgetEntry` (`id`, `projectId`, `stageId`, `inventoryItemId`, `name`, `description`, `noOfUnits`) VALUES
(8001, 4002, 5002, 7001, 'name', 'descrioption', 20),
(8002, 4003, 5004, 7003, 'name', 'description', 12);

-- --------------------------------------------------------

--
-- Table structure for table `Customer`
--

CREATE TABLE `Customer` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Customer`
--

INSERT INTO `Customer` (`id`, `name`, `address`) VALUES
(3001, 'Mr. Thilana Perera', '67, Hill street, Thalawathugoda.'),
(3002, 'Sandya Perera', '67, Kotte road, Kotte.'),
(3003, 'Oshan Wikramsinhe', '89, thalawathugoda road, Thalawathugoda');

-- --------------------------------------------------------

--
-- Table structure for table `CustomerPayment`
--

CREATE TABLE `CustomerPayment` (
  `id` int(11) NOT NULL,
  `customerId` int(11) NOT NULL,
  `projectId` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `ammount` int(11) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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

-- --------------------------------------------------------

--
-- Table structure for table `InventoryItem`
--

CREATE TABLE `InventoryItem` (
  `id` int(11) NOT NULL,
  `projectId` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `scale` varchar(45) DEFAULT NULL,
  `unitPrice` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `InventoryItem`
--

INSERT INTO `InventoryItem` (`id`, `projectId`, `name`, `scale`, `unitPrice`) VALUES
(7001, 4002, 'item1', 'kg', 200),
(7002, 4002, 'item2', 'mg', 100),
(7003, 4003, 'item 3', 'g', 100),
(7004, 4003, 'item 4', 'mg', 70);

-- --------------------------------------------------------

--
-- Table structure for table `MacroTransaction`
--

CREATE TABLE `MacroTransaction` (
  `id` int(11) NOT NULL,
  `projectId` int(11) NOT NULL,
  `stageId` int(11) NOT NULL,
  `vendorId` int(11) NOT NULL,
  `discription` varchar(255) NOT NULL,
  `ammount` int(11) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `MacroTransactionApproval`
--

CREATE TABLE `MacroTransactionApproval` (
  `id` int(11) NOT NULL,
  `aprovalMemberId` int(11) NOT NULL,
  `transactionId` int(11) NOT NULL,
  `projectId` int(11) NOT NULL,
  `stageId` int(11) NOT NULL,
  `vendorId` int(11) NOT NULL,
  `approved` tinyint(1) NOT NULL DEFAULT '0',
  `denied` tinyint(1) NOT NULL DEFAULT '0',
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `MicroTransaction`
--

CREATE TABLE `MicroTransaction` (
  `id` int(11) NOT NULL,
  `projectid` int(11) NOT NULL,
  `stageId` int(11) NOT NULL,
  `inventoryItemId` int(11) NOT NULL,
  `vendorId` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `unitPrice` int(11) NOT NULL,
  `noOfUnits` int(11) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `MicroTransactionApproval`
--

CREATE TABLE `MicroTransactionApproval` (
  `id` int(11) NOT NULL,
  `aprovalMemberId` int(11) NOT NULL,
  `transactionId` int(11) NOT NULL,
  `projectId` int(11) NOT NULL,
  `stageId` int(11) NOT NULL,
  `inventoryItemId` int(11) NOT NULL,
  `vendorId` int(11) NOT NULL,
  `approved` tinyint(1) NOT NULL DEFAULT '0',
  `denied` tinyint(1) NOT NULL DEFAULT '0',
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Project`
--

CREATE TABLE `Project` (
  `id` int(11) NOT NULL,
  `customerId` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(512) DEFAULT NULL,
  `startDate` date DEFAULT NULL,
  `endDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Project`
--

INSERT INTO `Project` (`id`, `customerId`, `name`, `address`, `startDate`, `endDate`) VALUES
(4001, 3001, 'company default', 'company default', '2017-07-26', '2017-07-26'),
(4002, 3002, 'project1 name', 'project1 address', '2017-07-02', '2017-12-27'),
(4003, 3002, 'project2 name', 'project2 address', '2017-07-03', '2017-12-30');

-- --------------------------------------------------------

--
-- Table structure for table `Role`
--

CREATE TABLE `Role` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Role`
--

INSERT INTO `Role` (`id`, `name`, `description`) VALUES
(1001, 'Admin', 'Admin User'),
(1002, 'Technical Officer', 'Technical Officer'),
(1003, 'Project Manager', 'Project Manager'),
(1004, 'Accountant', 'Accountant'),
(1005, 'CEO', 'CEO'),
(1006, 'Quantity Surveyor ', 'Quantity Surveyor ');

-- --------------------------------------------------------

--
-- Table structure for table `SecureItem`
--

CREATE TABLE `SecureItem` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `SecureItemAccess`
--

CREATE TABLE `SecureItemAccess` (
  `roleId` int(11) NOT NULL,
  `secureItemId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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

-- --------------------------------------------------------

--
-- Table structure for table `Tab`
--

CREATE TABLE `Tab` (
  `id` int(11) NOT NULL,
  `App_id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `TabAccess`
--

CREATE TABLE `TabAccess` (
  `tabId` int(11) NOT NULL,
  `appId` int(11) NOT NULL,
  `roleId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  `paymentAppMember` tinyint(1) NOT NULL DEFAULT '0',
  `active` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `TeamMember`
--

INSERT INTO `TeamMember` (`employeeId`, `projectId`, `allowanceAppPriority`, `allowanceAppMember`, `paymentAppPriority`, `paymentAppMember`, `active`) VALUES
(2001, 4001, NULL, 0, NULL, 0, 1),
(2002, 4001, NULL, 0, NULL, 0, 1),
(2003, 4001, NULL, 0, NULL, 0, 1),
(2005, 4001, NULL, 0, NULL, 0, 1),
(2006, 4001, NULL, 0, NULL, 0, 1),
(2006, 4002, NULL, 0, NULL, 0, 1),
(2007, 4001, NULL, 0, NULL, 0, 1),
(2007, 4002, NULL, 0, NULL, 0, 1),
(2008, 4001, NULL, 0, NULL, 0, 1),
(2009, 4001, NULL, 0, NULL, 0, 1),
(2009, 4002, NULL, 0, NULL, 0, 1),
(2010, 4001, NULL, 0, NULL, 0, 1),
(2011, 4001, NULL, 0, NULL, 0, 1),
(2012, 4001, NULL, 0, NULL, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Vendor`
--

CREATE TABLE `Vendor` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `description` varchar(512) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Vendor`
--

INSERT INTO `Vendor` (`id`, `name`, `address`, `description`, `type`) VALUES
(6001, 'company default', 'company default', 'company default', 'company default'),
(6002, 'vendor1 name', 'vendor1 address', 'vendor1 description', 'vendor1 type'),
(6003, 'vendor2 name', 'vendor2 address', 'vendor2 description', 'vendor2 type');

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
-- Indexes for table `AllowancePayment`
--
ALTER TABLE `AllowancePayment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_AllowancePayment_Allowance1_idx` (`allowanceId`,`employeeId`,`projectId`),
  ADD KEY `extra_indext_02` (`id`,`allowanceId`,`employeeId`,`projectId`),
  ADD KEY `fk_AllowancePayment_Allowance` (`employeeId`,`projectId`,`allowanceId`);

--
-- Indexes for table `AllowancePayment_Aproval`
--
ALTER TABLE `AllowancePayment_Aproval`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Approved_by_TeamMember_idx` (`approvingMemberId`,`projectId`),
  ADD KEY `AllowancePaymentApproval_for_Payment_idx` (`paymentId`,`allowanceId`,`employeeId`,`projectId`);

--
-- Indexes for table `App`
--
ALTER TABLE `App`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `AppAccess`
--
ALTER TABLE `AppAccess`
  ADD PRIMARY KEY (`Role_id`,`App_id`),
  ADD KEY `fk_Role_has_App_App1_idx` (`App_id`),
  ADD KEY `fk_Role_has_App_Role1_idx` (`Role_id`);

--
-- Indexes for table `BudgetEntry`
--
ALTER TABLE `BudgetEntry`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_InventoryItem_has_Stage_Stage1_idx` (`projectId`,`stageId`),
  ADD KEY `fk_InventoryItem_has_Stage_InventoryItem1_idx` (`inventoryItemId`),
  ADD KEY `extra_fk_index` (`projectId`,`stageId`,`inventoryItemId`);

--
-- Indexes for table `Customer`
--
ALTER TABLE `Customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `CustomerPayment`
--
ALTER TABLE `CustomerPayment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Project_has_Customer_Customer1_idx` (`customerId`),
  ADD KEY `fk_CustomerPayment_Project1_idx` (`projectId`);

--
-- Indexes for table `Employee`
--
ALTER TABLE `Employee`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Employee_Role1_idx` (`roleId`);

--
-- Indexes for table `InventoryItem`
--
ALTER TABLE `InventoryItem`
  ADD PRIMARY KEY (`id`),
  ADD KEY `InventoryIten_has_project_idx` (`projectId`);

--
-- Indexes for table `MacroTransaction`
--
ALTER TABLE `MacroTransaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Stage_has_Vendor(DebitAccount)_Vendor(DebitAccount)1_idx` (`vendorId`),
  ADD KEY `fk_Stage_has_Vendor(DebitAccount)_Stage1_idx` (`projectId`,`stageId`),
  ADD KEY `extra_index_05` (`id`,`projectId`,`stageId`,`vendorId`);

--
-- Indexes for table `MacroTransactionApproval`
--
ALTER TABLE `MacroTransactionApproval`
  ADD PRIMARY KEY (`id`),
  ADD KEY `approved_by_idx` (`aprovalMemberId`,`projectId`),
  ADD KEY `fk_TransactionAprovalMember_MacroTransaction_idx` (`transactionId`,`projectId`,`stageId`,`vendorId`);

--
-- Indexes for table `MicroTransaction`
--
ALTER TABLE `MicroTransaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_BudgetEntry_has_Vendor(DebitAccount)_Vendor(DebitAccount_idx` (`vendorId`),
  ADD KEY `fk_BudgetEntry_has_Vendor(DebitAccount)_BudgetEntry1_idx` (`projectid`,`stageId`,`inventoryItemId`),
  ADD KEY `extra_index_04` (`id`,`projectid`,`stageId`,`inventoryItemId`,`vendorId`);

--
-- Indexes for table `MicroTransactionApproval`
--
ALTER TABLE `MicroTransactionApproval`
  ADD PRIMARY KEY (`id`),
  ADD KEY `micro_approved_by_idx` (`aprovalMemberId`,`projectId`),
  ADD KEY `extra_index_03` (`projectId`,`stageId`,`inventoryItemId`),
  ADD KEY `fk_TransactionAprovalMember_has_MicroTransaction_MicroTrans_idx` (`transactionId`,`projectId`,`stageId`,`inventoryItemId`,`vendorId`);

--
-- Indexes for table `Project`
--
ALTER TABLE `Project`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Project_Customer_idx` (`customerId`);

--
-- Indexes for table `Role`
--
ALTER TABLE `Role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `SecureItem`
--
ALTER TABLE `SecureItem`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `SecureItemAccess`
--
ALTER TABLE `SecureItemAccess`
  ADD PRIMARY KEY (`roleId`,`secureItemId`),
  ADD KEY `fk_Role_has_SecureItem_SecureItem1_idx` (`secureItemId`),
  ADD KEY `fk_Role_has_SecureItem_Role1_idx` (`roleId`);

--
-- Indexes for table `Stage`
--
ALTER TABLE `Stage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Stage_Project1` (`projectId`);

--
-- Indexes for table `Tab`
--
ALTER TABLE `Tab`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Tab_App1_idx` (`App_id`),
  ADD KEY `extra_index_07` (`id`,`App_id`);

--
-- Indexes for table `TabAccess`
--
ALTER TABLE `TabAccess`
  ADD PRIMARY KEY (`tabId`,`appId`,`roleId`),
  ADD KEY `fk_Tab_has_Role_Role1_idx` (`roleId`);

--
-- Indexes for table `TeamMember`
--
ALTER TABLE `TeamMember`
  ADD PRIMARY KEY (`employeeId`,`projectId`),
  ADD KEY `fk_Employee_has_Project_Project2_idx` (`projectId`),
  ADD KEY `fk_Employee_has_Project_Employee2_idx` (`employeeId`);

--
-- Indexes for table `Vendor`
--
ALTER TABLE `Vendor`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Allowance`
--
ALTER TABLE `Allowance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `AllowancePayment`
--
ALTER TABLE `AllowancePayment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Customer`
--
ALTER TABLE `Customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3013;
--
-- AUTO_INCREMENT for table `CustomerPayment`
--
ALTER TABLE `CustomerPayment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `Employee`
--
ALTER TABLE `Employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2013;
--
-- AUTO_INCREMENT for table `InventoryItem`
--
ALTER TABLE `InventoryItem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7005;
--
-- AUTO_INCREMENT for table `MacroTransaction`
--
ALTER TABLE `MacroTransaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `MicroTransaction`
--
ALTER TABLE `MicroTransaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Project`
--
ALTER TABLE `Project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4013;
--
-- AUTO_INCREMENT for table `Role`
--
ALTER TABLE `Role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1007;
--
-- AUTO_INCREMENT for table `Stage`
--
ALTER TABLE `Stage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5006;
--
-- AUTO_INCREMENT for table `Vendor`
--
ALTER TABLE `Vendor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6009;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `Allowance`
--
ALTER TABLE `Allowance`
  ADD CONSTRAINT `Allowance_has_TeamMember` FOREIGN KEY (`employeeId`,`projectId`) REFERENCES `TeamMember` (`employeeId`, `projectId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `AllowancePayment`
--
ALTER TABLE `AllowancePayment`
  ADD CONSTRAINT `fk_AllowancePayment_Allowance` FOREIGN KEY (`employeeId`,`projectId`,`allowanceId`) REFERENCES `Allowance` (`employeeId`, `projectId`, `id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `AllowancePayment_Aproval`
--
ALTER TABLE `AllowancePayment_Aproval`
  ADD CONSTRAINT `AllowancePaymentApproval_for_Payment` FOREIGN KEY (`paymentId`,`allowanceId`,`employeeId`,`projectId`) REFERENCES `AllowancePayment` (`id`, `allowanceId`, `employeeId`, `projectId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `Approved_by_TeamMember` FOREIGN KEY (`approvingMemberId`,`projectId`) REFERENCES `TeamMember` (`employeeId`, `projectId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `AppAccess`
--
ALTER TABLE `AppAccess`
  ADD CONSTRAINT `fk_Role_has_App_App1` FOREIGN KEY (`App_id`) REFERENCES `App` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Role_has_App_Role1` FOREIGN KEY (`Role_id`) REFERENCES `Role` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `BudgetEntry`
--
ALTER TABLE `BudgetEntry`
  ADD CONSTRAINT `fk_InventoryItem_has_Stage_InventoryItem1` FOREIGN KEY (`inventoryItemId`) REFERENCES `InventoryItem` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_InventoryItem_has_Stage_Stage1` FOREIGN KEY (`projectId`,`stageId`) REFERENCES `Stage` (`projectId`, `id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `CustomerPayment`
--
ALTER TABLE `CustomerPayment`
  ADD CONSTRAINT `fk_CustomerPayment_Project1` FOREIGN KEY (`projectId`) REFERENCES `Project` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Project_has_Customer_Customer1` FOREIGN KEY (`customerId`) REFERENCES `Customer` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `Employee`
--
ALTER TABLE `Employee`
  ADD CONSTRAINT `fk_Employee_Role1` FOREIGN KEY (`roleId`) REFERENCES `Role` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `InventoryItem`
--
ALTER TABLE `InventoryItem`
  ADD CONSTRAINT `InventoryIten_has_project` FOREIGN KEY (`projectId`) REFERENCES `Project` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `MacroTransaction`
--
ALTER TABLE `MacroTransaction`
  ADD CONSTRAINT `fk_Stage_has_Vendor(DebitAccount)_Stage1` FOREIGN KEY (`projectId`,`stageId`) REFERENCES `Stage` (`projectId`, `id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Stage_has_Vendor(DebitAccount)_Vendor(DebitAccount)1` FOREIGN KEY (`vendorId`) REFERENCES `Vendor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `MacroTransactionApproval`
--
ALTER TABLE `MacroTransactionApproval`
  ADD CONSTRAINT `approved_by` FOREIGN KEY (`aprovalMemberId`,`projectId`) REFERENCES `TeamMember` (`employeeId`, `projectId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_TransactionAprovalMember_MacroTransaction` FOREIGN KEY (`transactionId`,`projectId`,`stageId`,`vendorId`) REFERENCES `MacroTransaction` (`id`, `projectId`, `stageId`, `vendorId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `MicroTransaction`
--
ALTER TABLE `MicroTransaction`
  ADD CONSTRAINT `fk_BudgetEntry_has_Vendor(DebitAccount)_BudgetEntry1` FOREIGN KEY (`projectid`,`stageId`,`inventoryItemId`) REFERENCES `BudgetEntry` (`projectId`, `stageId`, `inventoryItemId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_BudgetEntry_has_Vendor(DebitAccount)_Vendor(DebitAccount)1` FOREIGN KEY (`vendorId`) REFERENCES `Vendor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `MicroTransactionApproval`
--
ALTER TABLE `MicroTransactionApproval`
  ADD CONSTRAINT `fk_MicroTransa_approved_by` FOREIGN KEY (`aprovalMemberId`,`projectId`) REFERENCES `TeamMember` (`employeeId`, `projectId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_TransactionAprovalMember_has_MicroTransaction_MicroTransac1` FOREIGN KEY (`transactionId`,`projectId`,`stageId`,`inventoryItemId`,`vendorId`) REFERENCES `MicroTransaction` (`id`, `projectid`, `stageId`, `inventoryItemId`, `vendorId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `Project`
--
ALTER TABLE `Project`
  ADD CONSTRAINT `fk_Project_Customer` FOREIGN KEY (`customerId`) REFERENCES `Customer` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `SecureItemAccess`
--
ALTER TABLE `SecureItemAccess`
  ADD CONSTRAINT `fk_Role_has_SecureItem_Role1` FOREIGN KEY (`roleId`) REFERENCES `Role` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Role_has_SecureItem_SecureItem1` FOREIGN KEY (`secureItemId`) REFERENCES `SecureItem` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `Stage`
--
ALTER TABLE `Stage`
  ADD CONSTRAINT `fk_Stage_Project1` FOREIGN KEY (`projectId`) REFERENCES `Project` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `Tab`
--
ALTER TABLE `Tab`
  ADD CONSTRAINT `fk_Tab_App1` FOREIGN KEY (`App_id`) REFERENCES `App` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `TabAccess`
--
ALTER TABLE `TabAccess`
  ADD CONSTRAINT `fk_Tab_has_Role_Role1` FOREIGN KEY (`roleId`) REFERENCES `Role` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Tab_has_Role_Tab1` FOREIGN KEY (`tabId`,`appId`) REFERENCES `Tab` (`id`, `App_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

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
