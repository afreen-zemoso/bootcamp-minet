package com.minet.apigateway.payload;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;

import static org.junit.jupiter.api.Assertions.*;

class ApiErrorResponseTest {

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

        if(response.canEqual(response)) {
            System.out.println("Equal");
        }
        System.out.println("Response: " + response + "\n HashCode: " + response.hashCode());
        assertEquals(status, response.getStatus());
        assertEquals(title, response.getTitle());
        assertEquals(message, response.getMessage());
    }

}