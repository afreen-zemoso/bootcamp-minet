package com.minet.userservice.dto;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class TokenDTOTest {

    private final String token = "token";

    @Test
    void testGettersAndSetters() {
        TokenDTO tokenDTO = new TokenDTO();
        tokenDTO.setToken(token);
        assertEquals(token, tokenDTO.getToken());
    }

    @Test
    void testWithAllArgsConstructor() {
        TokenDTO tokenDTO = new TokenDTO(token);
        assertEquals(token, tokenDTO.getToken());
    }

}