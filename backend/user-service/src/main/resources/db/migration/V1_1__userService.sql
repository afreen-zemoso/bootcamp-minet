CREATE TABLE IF NOT EXISTS `BC87`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fullname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `balance` DOUBLE(10,2) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;