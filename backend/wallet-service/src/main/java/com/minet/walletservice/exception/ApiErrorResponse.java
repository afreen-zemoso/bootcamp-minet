package com.minet.walletservice.exception;

import lombok.*;


@AllArgsConstructor
@Getter
@Builder
public class ApiErrorResponse {
    private int status;
    private String title;
    private String message;
}