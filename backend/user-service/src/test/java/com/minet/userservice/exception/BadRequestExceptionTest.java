package com.minet.userservice.exception;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class BadRequestExceptionTest {

    @Test
    void testMessage() {
        BadRequestException exception = new BadRequestException("Exception");
        assertEquals("Exception", exception.getMessage());
    }

}