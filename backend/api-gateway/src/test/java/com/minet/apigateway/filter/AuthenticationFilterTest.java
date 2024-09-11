package com.minet.apigateway.filter;

import static org.junit.jupiter.api.Assertions.*;

import com.minet.apigateway.exception.AccessDeniedException;
import com.minet.apigateway.payload.ApiErrorResponse;
import com.minet.apigateway.payload.TokenDTO;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.netflix.eureka.EurekaDiscoveryClient;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.http.HttpHeaders;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.*;

class AuthenticationFilterTest {

    @Mock
    private RouteValidator routeValidator;

    @Mock
    private RestTemplate restTemplate;

    @Mock
    private ServerWebExchange exchange;

    @Mock
    private GatewayFilterChain chain;

    @Mock
    private EurekaDiscoveryClient discoveryClient;

    @InjectMocks
    private AuthenticationFilter authenticationFilter;

    @Captor
    private ArgumentCaptor<ServerHttpRequest> requestCaptor;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testApply_WithMissingAuthorizationHeader_ShouldThrowAccessDeniedException() {
        // Set up test case
        when(routeValidator.isSecured(any(ServerHttpRequest.class))).thenReturn(true);
        when(exchange.getRequest()).thenReturn(mock(ServerHttpRequest.class));
        when(exchange.getRequest().getHeaders()).thenReturn(new HttpHeaders());

        // Perform the filter operation
        assertThrows(AccessDeniedException.class, () -> authenticationFilter.apply(new AuthenticationFilter.Config()).filter(exchange, chain));

        // Verify that the AccessDeniedException is thrown
        verify(chain, never()).filter(exchange);
    }

    @Test
    void testApply_WithInvalidAuthorizationHeader_ShouldThrowAccessDeniedException() {
        // Set up test case
        HttpHeaders headers = new HttpHeaders();
        headers.put(HttpHeaders.AUTHORIZATION, Arrays.asList("Bearer myToken"));
        when(routeValidator.isSecured(any(ServerHttpRequest.class))).thenReturn(true);
        when(exchange.getRequest()).thenReturn(mock(ServerHttpRequest.class));
        when(exchange.getRequest().getHeaders()).thenReturn(headers);
        when(restTemplate.postForObject(anyString(), any(TokenDTO.class), eq(ApiErrorResponse.class))).thenThrow(RuntimeException.class);

        // Perform the filter operation
        assertThrows(AccessDeniedException.class, () -> authenticationFilter.apply(new AuthenticationFilter.Config()).filter(exchange, chain));

        // Verify that the AccessDeniedException is thrown
        verify(chain, never()).filter(exchange);
    }

    @Test
    void testApply_WithUnsecuredRoute_ShouldContinueFilterChain() {
        // Set up test case
        when(routeValidator.isSecured(any(ServerHttpRequest.class))).thenReturn(false);

        // Perform the filter operation
        authenticationFilter.apply(new AuthenticationFilter.Config()).filter(exchange, chain);

        // Verify that the filter chain continues
        verify(chain).filter(exchange);
    }
}
