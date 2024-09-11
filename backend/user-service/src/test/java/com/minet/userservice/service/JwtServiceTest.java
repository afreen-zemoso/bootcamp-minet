package com.minet.userservice.service;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

class JwtServiceTest {

    @Mock
    private JwtParser jwtParser;

    @InjectMocks
    private JwtService jwtService;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
        jwtService.setJwtExpiration(86400000L);
        jwtService.setSecretKey("404E635266556A586E3272357538782F413F4428472B4B6250645367566B5970");
    }

    @Test
     void givenToken_thenExtractUsername() {
        String token = generateJwtToken("test_user", 3600000L); // Generate a real JWT token

        String username = jwtService.extractUsername(token);

        assertEquals("test_user", username);
    }

    @Test
     void givenToken_thenExtractClaim() {
        String token = generateJwtToken("test_user", 3600000L); // Generate a real JWT token

        String subject = jwtService.extractClaim(token, Claims::getSubject);

        assertEquals("test_user", subject);
    }

    @Test
     void givenUserDetailsAndClaims_whenGenerateToken() {
        UserDetails userDetails = new User("test_user", "password", Collections.emptyList());
        Map<String, Object> extraClaims = new HashMap<>();
        extraClaims.put("key", "value");

        String generatedToken = jwtService.generateToken(extraClaims, userDetails);

        assertNotNull(generatedToken);
        // Add assertions to validate specific properties of the generated token
        byte[] keyBytes = Decoders.BASE64.decode("404E635266556A586E3272357538782F413F4428472B4B6250645367566B5970");
        Claims claims = Jwts
                .parserBuilder()
                .setSigningKey(Keys.hmacShaKeyFor(keyBytes))
                .build()
                .parseClaimsJws(generatedToken)
                .getBody();

        // Verify the subject (username) of the token
        assertEquals("test_user", claims.getSubject());

        // Verify the custom claim value
        assertEquals("value", claims.get("key"));
    }

    @Test
    void testGenerateTokenWithNoExtraClaims() {
        UserDetails userDetails = new User("test_user", "password", Collections.emptyList());
        String generatedToken = jwtService.generateToken(userDetails);
        assertNotNull(generatedToken);
    }

    @Test
     void givenToken_whenTokenValid_ValidToken() {
        String token = generateJwtToken("test_user", 3600000L); // Generate a real JWT token
        UserDetails userDetails = new User("test_user", "password", Collections.emptyList());

        boolean isValid = jwtService.isTokenValid(token, userDetails);

        assertTrue(isValid);
    }

    @Test
     void IsTokenValid_ExpiredToken() {
        String token = generateJwtToken("test_user", -3600000L); // Generate an expired JWT token
        UserDetails userDetails = new User("test_user", "password", Collections.emptyList());

        assertThrows(ExpiredJwtException.class, ()->  jwtService.isTokenValid(token, userDetails));
    }

    @Test
     void testIsTokenValid_TokenWithDifferentUsername() {
        String token = generateJwtToken("test_user", 3600000L); // Generate a real JWT token
        UserDetails userDetails = new User("other_user", "password", Collections.emptyList());

        boolean isValid = jwtService.isTokenValid(token, userDetails);

        assertFalse(isValid);
    }

    @Test
    void testIsTokenValid() {
        String token = generateJwtToken("test_user", 3600000L); // Generate a real JWT token

        boolean isValid = jwtService.isTokenValid(token);

        assertTrue(isValid);
    }


    @Test
     void testIsTokenValid_ValidToken_NoUserDetails() {
        String token = generateJwtToken("test_user", 3600000L); // Generate a real JWT token

        assertThrows(NullPointerException.class, () -> jwtService.isTokenValid(token, null));
    }

    @Test
     void testIsTokenValid_InvalidToken() {
        String token = "invalid_token";

        assertThrows(MalformedJwtException.class, () -> jwtService.isTokenValid(token));
    }

    @Test
     void testIsTokenExpired() {
        String token = generateJwtToken("test_user", -3600000L); // Generate an expired JWT token

        assertThrows(ExpiredJwtException.class, () -> jwtService.isTokenExpired(token));
    }

    @Test
     void givenToken_thenExtractExpiration() {
        String token = generateJwtToken("test_user", 3600000L); // Generate a real JWT token

        Date expirationDate = jwtService.extractExpiration(token);

        assertNotNull(expirationDate);
    }

    @Test
     void givenToken_thenExtractAllClaims() {
        String token = generateJwtToken("test_user", 3600000L); // Generate a real JWT token

        Claims claims = jwtService.extractAllClaims(token);

        assertNotNull(claims);
    }

    private String generateJwtToken(String username, long expiration) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + expiration);

        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(jwtService.getSignInKey(), SignatureAlgorithm.HS256)
                .compact();
    }
}
