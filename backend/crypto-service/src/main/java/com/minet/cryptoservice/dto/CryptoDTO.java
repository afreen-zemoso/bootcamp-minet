package com.minet.cryptoservice.dto;

import lombok.*;

@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CryptoDTO {
    private String id;
    private String name;
    private String symbol;
    private String icon;
    private double price;
    private long marketCap;
    private long volume;
    private double circulatingSupply;
    private double change;
}
