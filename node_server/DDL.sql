# CREATE USER 'dev'@'localhost' IDENTIFIED BY 'devpass';
# GRANT ALL PRIVILEGES ON hackathon.* TO 'dev'@'localhost';
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema hackathon
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `hackathon` ;

-- -----------------------------------------------------
-- Schema hackathon
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `hackathon` ;
USE `hackathon` ;

-- -----------------------------------------------------
-- Table `hackathon`.`device`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hackathon`.`device` ;

CREATE TABLE IF NOT EXISTS `hackathon`.`device` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(255) NOT NULL,
        `operatingSystem` VARCHAR(100) NULL,
        `ipv4Address` VARCHAR(20) NULL,
        `macAddress` VARCHAR(50) NULL,
        PRIMARY KEY (`id`))
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hackathon`.`platformType`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hackathon`.`platformType` ;

CREATE TABLE IF NOT EXISTS `hackathon`.`platformType` (
      `id` INT NOT NULL AUTO_INCREMENT,
      `name` VARCHAR(55) NOT NULL,
      PRIMARY KEY (`id`))
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hackathon`.`assessmentReport`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hackathon`.`assessmentReport` ;

CREATE TABLE IF NOT EXISTS `hackathon`.`assessmentReport` (
      `id` INT NOT NULL AUTO_INCREMENT,
      `pulseCount` INT NOT NULL DEFAULT 0,
      `malwareCount` INT NOT NULL DEFAULT 0,
      `threatType` ENUM('THREAT_TYPE_UNSPECIFIED', 'MALWARE', 'SOCIAL_ENGINEERING', 'UNWANTED_SOFTWARE', 'POTENTIALLY_HARMFUL_APPLICATION') NULL DEFAULT 'THREAT_TYPE_UNSPECIFIED',
      `platformTypeId` INT NULL,
      PRIMARY KEY (`id`),
      INDEX `fk_assessmentReport_platformType1_idx` (`platformTypeId` ASC) VISIBLE,
      CONSTRAINT `fk_assessmentReport_platformType1`
          FOREIGN KEY (`platformTypeId`)
              REFERENCES `hackathon`.`platformType` (`id`)
              ON DELETE NO ACTION
              ON UPDATE NO ACTION)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hackathon`.`maliciousEvent`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hackathon`.`maliciousEvent` ;

CREATE TABLE IF NOT EXISTS `hackathon`.`maliciousEvent` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `urlVisited` VARCHAR(255) NOT NULL,
        `visitedAt` DATETIME NOT NULL DEFAULT NOW(),
        `originIp` VARCHAR(20) NULL,
        `threatLevel` ENUM('high', 'low', 'undefined') NOT NULL,
        `deviceId` INT NOT NULL,
        `assessmentReportId` INT NOT NULL,
        PRIMARY KEY (`id`),
        INDEX `fk_maliciousEvent_device1_idx` (`deviceId` ASC) VISIBLE,
        INDEX `fk_maliciousEvent_assessmentReport1_idx` (`assessmentReportId` ASC) VISIBLE,
        CONSTRAINT `fk_maliciousEvent_device1`
            FOREIGN KEY (`deviceId`)
                REFERENCES `hackathon`.`device` (`id`)
                ON DELETE NO ACTION
                ON UPDATE NO ACTION,
        CONSTRAINT `fk_maliciousEvent_assessmentReport1`
            FOREIGN KEY (`assessmentReportId`)
                REFERENCES `hackathon`.`assessmentReport` (`id`)
                ON DELETE NO ACTION
                ON UPDATE NO ACTION)
    ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

DROP VIEW IF EXISTS completeReport;
CREATE VIEW completeReport AS
    SELECT maliciousEvent.id AS id, urlVisited, visitedAt, originIp, ipv4Address, macAddress,
           pulseCount, malwareCount, threatType, platformType.name AS platformName
    FROM maliciousEvent
        JOIN device ON maliciousEvent.deviceId = device.id
        JOIN assessmentReport ON maliciousEvent.assessmentReportId = assessmentReport.id
        JOIN platformType ON assessmentReport.platformTypeId = platformType.id;

DROP PROCEDURE IF EXISTS deleteEvent;
DELIMITER //
CREATE PROCEDURE deleteEvent(IN i_eventId INT)
    BEGIN
        DELETE FROM maliciousEvent WHERE id = i_eventId;
        DELETE FROM assessmentReport WHERE id =
           (SELECT assessmentReportId FROM maliciousEvent WHERE maliciousEvent.id = i_eventId);
    END //
DELIMITER ;
