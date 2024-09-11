package com.minet.transactionservice.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "watchlist")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class WatchList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "crypto_id")
    private String cryptoId;

    @Column(name = "user_id")
    private int userId;
}
