package com.minet.userservice.dto.response;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class UserResponseTest {

    private final Integer userId = 1;
    private final String fullName = "fullName";
    private final String email = "email";
    private final Double balance = 0.0;

    @Test
    void testGettersAndSetters() {
        UserResponse user = new UserResponse();
        user.setId(userId);
        user.setEmail(email);
        user.setBalance(balance);
        user.setFullName(fullName);

        assertEquals(userId, user.getId());
        assertEquals(balance, user.getBalance());
        assertEquals(email, user.getEmail());
        assertEquals(fullName, user.getFullName());
    }

    @Test
    void testWithAllArgsConstructor() {
        UserResponse user = new UserResponse(userId, fullName, email, balance);

        assertEquals(userId, user.getId());
        assertEquals(balance, user.getBalance());
        assertEquals(email, user.getEmail());
        assertEquals(fullName, user.getFullName());
    }

}