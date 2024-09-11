package com.minet.transactionservice.dto;

import com.minet.transactionservice.entity.TransactionStatus;
import com.minet.transactionservice.entity.TransactionType;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TransactionDTO {
    private int id;
    private TransactionType type;
    private double price;
    private double quantity;
    private Date date;
    private TransactionStatus status;
    private String description;
    private String cryptoId;
}
