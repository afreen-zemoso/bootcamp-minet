package com.minet.apigateway.payload;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class TokenDTOTest {

    @Test
    void testGettersAndSetters() {
        TokenDTO token = new TokenDTO("token");
        assertEquals("token", token.getToken());
        if(token.canEqual(token)) {
            System.out.println("Equal");
        }
        System.out.println("Token: "+ token + "\n HashCode: " + token.hashCode());
        token.setToken("token 1");
        assertEquals("token 1", token.getToken());
    }
}