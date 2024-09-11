package com.minet.userservice.dto.request;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UserRequestTest {

    private final Integer userId = 1;
    private final String fullName = "fullName";
    private final String email = "email";
    private final String password = "password";
    private final Double balance = 0.0;

    @Test
    void testGettersAndSetters() {
        UserRequest user = new UserRequest();
        user.setPassword(password);
        user.setId(userId);
        user.setEmail(email);
        user.setBalance(balance);
        user.setFullName(fullName);

        assertEquals(userId, user.getId());
        assertEquals(password, user.getPassword());
        assertEquals(balance, user.getBalance());
        assertEquals(email, user.getEmail());
        assertEquals(fullName, user.getFullName());
    }

    @Test
    void testWithAllArgsConstructor() {
        UserRequest user = new UserRequest(userId, fullName, email, password, balance);

        assertEquals(userId, user.getId());
        assertEquals(password, user.getPassword());
        assertEquals(balance, user.getBalance());
        assertEquals(email, user.getEmail());
        assertEquals(fullName, user.getFullName());
    }

}