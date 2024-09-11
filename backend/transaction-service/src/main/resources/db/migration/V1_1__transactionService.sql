CREATE TABLE IF NOT EXISTS `BC87`.`transaction` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` ENUM('SELL', 'BUY') NOT NULL,
  `price` DOUBLE(10,2) NOT NULL,
  `quantity` DOUBLE NOT NULL,
  `date` DATETIME NOT NULL,
  `status` ENUM('SUCCESS', 'PENDING', 'FAILURE') NOT NULL,
  `description` VARCHAR(60) NOT NULL,
  `crypto_id` VARCHAR(100) NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_1` (`user_id` ASC) VISIBLE,
  INDEX `FK_2` (`crypto_id` ASC) VISIBLE,
  CONSTRAINT `FK_3`
    FOREIGN KEY (`user_id`)
    REFERENCES `BC87`.`user` (`id`),
  CONSTRAINT `FK_4`
    FOREIGN KEY (`crypto_id`)
    REFERENCES `BC87`.`crypto` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
