package com.minet.cryptoservice.dto;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ApiErrorResponseTest {

    private final String title = "Bad Request";
    private final String message = "bad request";
    private final int status = HttpStatus.BAD_REQUEST.value();
    @Test
    void testGetterAndSetters() {
        ApiErrorResponse response = new ApiErrorResponse(status, title, message);
        assertEquals(status, response.getStatus());
        assertEquals(title, response.getTitle());
        assertEquals(message, response.getMessage());

        response.setMessage("message");
        response.setTitle("title");
        response.setStatus(200);

        assertEquals(200, response.getStatus());
        assertEquals("title", response.getTitle());
        assertEquals("message", response.getMessage());

    }
}
