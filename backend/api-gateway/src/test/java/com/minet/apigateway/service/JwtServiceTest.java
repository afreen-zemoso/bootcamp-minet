package com.minet.apigateway.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

class JwtServiceTest {

    @Mock
    private JwtParser jwtParser;

    @InjectMocks
    private JwtService jwtService;

    @BeforeEach
    void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getEmailFromJwtToken_ValidToken_ReturnsEmail() {
        // Arrange
        String token = generateJwtToken("test@example.com");

        // Act
        String actualEmail = jwtService.getEmailFromJwtToken(token);

        // Assert
        assertEquals("test@example.com", actualEmail);
        // Add assertions to validate specific properties of the generated token
        byte[] keyBytes = Decoders.BASE64.decode("404E635266556A586E3272357538782F413F4428472B4B6250645367566B5970");
        Claims claims = Jwts
                .parserBuilder()
                .setSigningKey(Keys.hmacShaKeyFor(keyBytes))
                .build()
                .parseClaimsJws(token)
                .getBody();

        // Verify the subject of the token
        assertEquals("test@example.com", claims.getSubject());
    }

    private String generateJwtToken(String username) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + 393324L);
        final String secretKey = "404E635266556A586E3272357538782F413F4428472B4B6250645367566B5970";
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(Keys.hmacShaKeyFor(keyBytes), SignatureAlgorithm.HS256)
                .compact();
    }

}