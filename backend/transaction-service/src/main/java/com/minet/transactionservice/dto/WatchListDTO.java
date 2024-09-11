package com.minet.transactionservice.dto;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class WatchListDTO {
    private int id;
    private String cryptoId;
}
