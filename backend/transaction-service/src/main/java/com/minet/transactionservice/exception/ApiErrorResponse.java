package com.minet.transactionservice.exception;
import lombok.*;


@AllArgsConstructor
@Getter
public class ApiErrorResponse {
    private int status;
    private String title;
    private String message;
}
