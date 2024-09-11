package com.minet.transactionservice.dto;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class WatchListRequest {
    private String cryptoId;
}
