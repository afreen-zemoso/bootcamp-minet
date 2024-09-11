package com.minet.cryptoservice.dto;

import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CryptoApiResponse {
    private String id;
    private String name;
    private String symbol;
    private String image;
    private double current_price;
    private long market_cap;
    private long total_volume;
    private double circulating_supply;
    private double price_change_percentage_24h;
}
