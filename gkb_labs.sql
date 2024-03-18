-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 18, 2024 at 12:19 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gkb_labs`
--

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `ID` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Age` int(11) NOT NULL,
  `DOB` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`ID`, `Name`, `Email`, `Age`, `DOB`) VALUES
(1, 'Ganesh Pambala', 'ganeshganiganesh799@gmail.com', 23, '2001-02-12'),
(2, 'Manoj Kumar Puppala', 'manojkumar22@gmail.com', 22, '2002-08-20'),
(3, ' Raj Kumar Velp[ula', 'rajkumar88@gmail.com', 23, '2001-07-08'),
(4, 'Ramaraju Yellala', 'ramaraju45@gmail.com', 23, '2000-05-03'),
(5, 'Akhil Dayyala', 'akhil65@gmail.com', 23, '1998-03-09'),
(6, 'Mahesh Vaka', 'Maheshvaka5@gmail.com', 23, '1999-06-07'),
(7, 'Praveen Kumar Dussa', 'praveenkumar22@gmail.com', 28, '2001-06-02'),
(8, 'Mahesh Kumar Vaka', 'mahesh234@gmail.com', 24, '2024-03-14'),
(9, 'Vikram Velpula', 'vikki56@gmail.com', 20, '2004-10-18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
