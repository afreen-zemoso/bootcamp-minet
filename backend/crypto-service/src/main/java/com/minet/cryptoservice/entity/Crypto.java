package com.minet.cryptoservice.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "crypto")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Crypto {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "name")
    private String name;

    @Column(name = "symbol")
    private String symbol;

    @Column(name = "image")
    private String icon;

    @Column(name="current_price")
    private double price;

    @Column(name = "market_cap")
    private long marketCap;

    @Column(name = "total_volume")
    private long volume;

    @Column(name = "circulating_supply")
    private double circulatingSupply;

    @Column(name = "price_change_percentage_24h")
    private double change;
}
