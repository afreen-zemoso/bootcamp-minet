package com.minet.apigateway.exception;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class AccessDeniedExceptionTest {

    @Test
    void testMessage() {
        AccessDeniedException exception = new AccessDeniedException("Message");
        assertEquals("Message", exception.getMessage());
    }

}