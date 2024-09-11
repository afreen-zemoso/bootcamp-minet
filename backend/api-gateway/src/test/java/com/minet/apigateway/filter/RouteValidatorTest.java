package com.minet.apigateway.filter;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.springframework.http.server.reactive.ServerHttpRequest;

import java.net.URI;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class RouteValidatorTest {

    @InjectMocks
    private RouteValidator routeValidator;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testIsSecured_WithOpenApiEndpoint_ShouldReturnFalse() {
        ServerHttpRequest request = mock(ServerHttpRequest.class);
        URI uri = URI.create("http://domain:2439/user");
        when(request.getURI()).thenReturn(uri);
        // Perform the check
        boolean isSecured = routeValidator.isSecured(request);

        // Verify that the endpoint is considered unsecured
        assertFalse(isSecured);
    }

    @Test
    void testIsSecured_WithSecuredEndpoint_ShouldReturnTrue() {
        // Set up test case
        ServerHttpRequest request = mock(ServerHttpRequest.class);
        URI uri = URI.create("http://domain:2439/orders");
        when(request.getURI()).thenReturn(uri);

        // Perform the check
        boolean isSecured = routeValidator.isSecured(request);

        // Verify that the endpoint is considered secured
        assertTrue(isSecured);
    }
}
