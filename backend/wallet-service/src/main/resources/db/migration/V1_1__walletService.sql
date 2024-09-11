CREATE TABLE IF NOT EXISTS `BC87`.`wallet` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `total_balance` DOUBLE NOT NULL,
  `user_id` INT NOT NULL,
  `crypto_id` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_1` (`user_id` ASC) VISIBLE,
  INDEX `FK_2` (`crypto_id` ASC) VISIBLE,
  CONSTRAINT `FK_2`
    FOREIGN KEY (`user_id`)
    REFERENCES `BC87`.`user` (`id`),
  CONSTRAINT `FK_6_2`
    FOREIGN KEY (`crypto_id`)
    REFERENCES `BC87`.`crypto` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;