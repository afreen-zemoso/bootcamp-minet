package com.minet.userservice.entity;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class UserTest {

    private final Integer userId = 1;
    private final String fullName = "fullName";
    private final String email = "email";
    private final String password = "password";
    private final Double balance = 0.0;
    private final List<Object> authorities = List.of();

    @Test
    void testGettersAndSetters() {
        User user = new User();
        user.setPassword(password);
        user.setId(userId);
        user.setEmail(email);
        user.setBalance(balance);
        user.setFullName(fullName);

        assertEquals(userId, user.getId());
        assertEquals(password, user.getPassword());
        assertEquals(balance, user.getBalance());
        assertEquals(email, user.getEmail());
        assertEquals(email, user.getUsername());
        assertEquals(fullName, user.getFullName());
        assertEquals(authorities, user.getAuthorities());
        assertEquals(true, user.isEnabled());
        assertEquals(true, user.isAccountNonExpired());
        assertEquals(true, user.isAccountNonLocked());
        assertEquals(true, user.isCredentialsNonExpired());
    }

    @Test
    void testWithAllArgsConstructor() {

        User user = new User(userId, fullName, email, password, balance);

        assertEquals(userId, user.getId());
        assertEquals(password, user.getPassword());
        assertEquals(balance, user.getBalance());
        assertEquals(email, user.getEmail());
        assertEquals(fullName, user.getFullName());

        user = User.builder()
                .id(userId)
                .balance(balance)
                .email(email)
                .fullName(fullName)
                .password(password)
                .build();

        assertEquals(userId, user.getId());
        assertEquals(password, user.getPassword());
        assertEquals(balance, user.getBalance());
        assertEquals(email, user.getEmail());
        assertEquals(fullName, user.getFullName());
    }

}