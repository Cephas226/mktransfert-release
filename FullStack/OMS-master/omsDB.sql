CREATE DATABASE  IF NOT EXISTS `omsedutechma` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `omsedutechma`;
-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: localhost    Database: omsedutechma
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `employee_roles`
--

DROP TABLE IF EXISTS `employee_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee_roles` (
  `employee_id` bigint NOT NULL,
  `role_id` int NOT NULL,
  PRIMARY KEY (`employee_id`,`role_id`),
  KEY `FK398vvu81xw154mvy3g2eytscn` (`role_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee_roles`
--

LOCK TABLES `employee_roles` WRITE;
/*!40000 ALTER TABLE `employee_roles` DISABLE KEYS */;
INSERT INTO `employee_roles` VALUES (1,4),(2,2),(3,1),(4,1);
/*!40000 ALTER TABLE `employee_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `business_phone` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `gender` char(1) DEFAULT NULL,
  `job_role` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `private_phone` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `work_location` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (1,'0639607953','IT','codjovi@germanacademy.education','Chancerel','M','IT Manager','Codjovi','$2a$10$WD12E0.ttQSPZSLqrblvYOS3Fm1PKAediblCWyO2NnBTv2qb061bK','0639607953','Employee','Marrakech'),(2,'0639607953',NULL,'akdims@germanacademy.education','Lamiae','F','Admission Manager','Akdim','$2a$10$eMyX0SYEW8d.46NmFxthY.4WiTOebAvPvJlqAKqv8.M6LW12/lJMC','0639607953','Employee','Marrakech'),(3,'basse@germanacademy.education','Sales & Marketing','basse@germanacademy.education','Rebecca','F','Sales Manager','Basse',NULL,'basse@germanacademy.education','Employee','basse@germanacademy.education'),(4,'0639607953','IT','johndoegerman@gmail.com','Doe','M','Software Developer','John','$2a$10$/sS/vTionomKvNCWB8GBjeiswqLfN/Tbs85M4IvkYPpK2lYwgsJaW','0639607953','Employee','Casablanca'),(5,'0639607952','Sales & Marketing','basse@germanacademy.education','Rebecca','F','Sales Manager','Basse',NULL,'0639607953','Employee','Casablanca'),(6,'0639607952','Sales & Marketing','basse@germanacademy.education','Rebecca','F','Sales Manager','Basse',NULL,'0639607953','Employee','Casablanca');
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ROLE_USER'),(2,'ROLE_MODERATOR'),(3,'ROLE_ADMIN'),(4,'ROLE_SUPER_ADMIN');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `code` bigint DEFAULT NULL,
  `course` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `gender` char(1) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `phone_1` varchar(255) DEFAULT NULL,
  `phone2` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_eqa1d4jiyg5m5rnuja7ifgw73` (`code`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-09 12:15:08
