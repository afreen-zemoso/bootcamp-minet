package com.minet.userservice.exception;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UserNotFoundExceptionTest {

    @Test
    void testMessage() {
        UserNotFoundException exception = new UserNotFoundException("Exception");
        assertEquals("Exception", exception.getMessage());
    }

}