package com.minet.userservice.dto.request;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class AuthenticationRequestTest {

    private final String email = "email";
    private final String password = "password";

    @Test
    void testGettersAndSetters() {
        AuthenticationRequest auth = new AuthenticationRequest();
        auth.setEmail("email");
        auth.setPassword("password");

        assertEquals(email, auth.getEmail());
        assertEquals(password, auth.getPassword());
    }

    @Test
    void testWithAllArgsConstructor() {
        AuthenticationRequest auth = new AuthenticationRequest("email", "password");

        assertEquals(email, auth.getEmail());
        assertEquals(password, auth.getPassword());
    }
}