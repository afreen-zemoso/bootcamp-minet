package com.minet.walletservice.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "wallet")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
public class Wallet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "total_balance")
    private Double totalBalance;

    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "crypto_id")
    private String cryptoId;
}
