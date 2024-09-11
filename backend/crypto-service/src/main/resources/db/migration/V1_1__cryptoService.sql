CREATE TABLE IF NOT EXISTS `BC87`.`crypto` (
  `id` VARCHAR(100) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `symbol` VARCHAR(10) NOT NULL,
  `image` VARCHAR(200) NOT NULL,
  `current_price` DOUBLE NOT NULL,
  `market_cap` BIGINT NOT NULL,
  `total_volume` BIGINT NOT NULL,
  `circulating_supply` DOUBLE NOT NULL,
  `price_change_percentage_24h` DOUBLE NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
