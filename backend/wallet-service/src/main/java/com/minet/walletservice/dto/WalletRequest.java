package com.minet.walletservice.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@ToString
public class WalletRequest {
    private Double totalBalance;
    private String cryptoId;
}
