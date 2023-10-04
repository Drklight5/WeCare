-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Automatizacion_Casa
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `Automatizacion_Casa` ;

-- -----------------------------------------------------
-- Schema Automatizacion_Casa
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Automatizacion_Casa` DEFAULT CHARACTER SET utf8 ;
USE `Automatizacion_Casa` ;

-- -----------------------------------------------------
-- Table `TablaProyectos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TablaProyectos` (
  `idProyecto` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descrip` VARCHAR(45) NOT NULL,
  `ubicacion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idProyecto`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MicroControlador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MicroControlador` (
  `idMicro` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `API` VARCHAR(45) NOT NULL,
  `tipo` VARCHAR(45) NOT NULL,
  `ubicacion` VARCHAR(45) NOT NULL,
  `PID` INT NOT NULL,
  PRIMARY KEY (`idMicro`),
  CONSTRAINT `fk_proyectos`
    FOREIGN KEY (`PID`)
    REFERENCES `TablaProyectos` (`idProyecto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_proyectos_idx` ON `MicroControlador` (`PID` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `Sensores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Sensores` (
  `idSensores` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `Sensorescol` VARCHAR(45) NOT NULL,
  `API` VARCHAR(45) NOT NULL,
  `ubicacion` VARCHAR(45) NOT NULL,
  `MC` INT NOT NULL,
  PRIMARY KEY (`idSensores`),
  CONSTRAINT `fk_MicroControlador`
    FOREIGN KEY (`MC`)
    REFERENCES `MicroControlador` (`idMicro`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_MicroControlador_idx` ON `Sensores` (`MC` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `Datos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Datos` (
  `idDatos` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `fecha` DATETIME NOT NULL,
  `dato` VARCHAR(45) NOT NULL,
  `unidad` VARCHAR(45) NOT NULL,
  `SID` INT NOT NULL,
  PRIMARY KEY (`idDatos`),
  CONSTRAINT `fk_Sensores`
    FOREIGN KEY (`SID`)
    REFERENCES `Sensores` (`MC`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_Sensores_idx` ON `Datos` (`SID` ASC) VISIBLE;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;