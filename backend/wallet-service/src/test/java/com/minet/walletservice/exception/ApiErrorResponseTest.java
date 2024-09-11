package com.minet.walletservice.exception;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ApiErrorResponseTest {

    private final String title = "Bad Request";
    private final String message = "bad request";
    private final Integer status = HttpStatus.BAD_REQUEST.value();
    @Test
    void testGetterAndSetters() {
        ApiErrorResponse response = ApiErrorResponse.builder().title(title).message(message).status(status).build();
        assertEquals(status, response.getStatus());
        assertEquals(title, response.getTitle());
        assertEquals(message, response.getMessage());
    }
}
