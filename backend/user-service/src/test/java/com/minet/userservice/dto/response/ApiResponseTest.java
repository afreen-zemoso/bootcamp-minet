package com.minet.userservice.dto.response;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;

import static org.junit.jupiter.api.Assertions.*;

class ApiResponseTest {

    private final String title = "Bad Request";
    private final String message = "bad request";
    private final Integer status = HttpStatus.BAD_REQUEST.value();
    @Test
    void testGetterAndSetters() {
        ApiErrorResponse response = new ApiErrorResponse();
        response.setTitle(title);
        response.setMessage(message);
        response.setStatus(status);

        assertEquals(status, response.getStatus());
        assertEquals(title, response.getTitle());
        assertEquals(message, response.getMessage());
    }

    @Test
    void testWithAllArgsConstructor() {
        ApiErrorResponse response = new ApiErrorResponse(status, title, message);

        assertEquals(status, response.getStatus());
        assertEquals(title, response.getTitle());
        assertEquals(message, response.getMessage());
    }

}