package com.minet.walletservice.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class WalletDTO {
    private int id;
    private Double totalBalance;
    private String cryptoId;
}