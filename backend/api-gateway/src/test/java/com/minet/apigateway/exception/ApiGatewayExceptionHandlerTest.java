package com.minet.apigateway.exception;

import com.minet.apigateway.payload.ApiErrorResponse;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

class ApiGatewayExceptionHandlerTest {

    @Test
    void givenAccessDeniedException_testReturnForbiddenStatus() {
        ApiGatewayExceptionHandler exceptionHandler = new ApiGatewayExceptionHandler();
        AccessDeniedException accessDeniedException = new AccessDeniedException("Access Denied");

        ResponseEntity<ApiErrorResponse> responseEntity = exceptionHandler.handleAccessDeniedException(accessDeniedException);

        // Assert that the response entity is not null
        assertNotNull(responseEntity);

        // Assert the response status code is FORBIDDEN
        assertEquals(HttpStatus.FORBIDDEN, responseEntity.getStatusCode());

        // Assert the response body contains the expected values
        ApiErrorResponse responseBody = responseEntity.getBody();
        assertNotNull(responseBody);
        assertEquals(HttpStatus.FORBIDDEN.value(), responseBody.getStatus());
        assertEquals(HttpStatus.FORBIDDEN.name(), responseBody.getTitle());
        assertEquals("Access Denied", responseBody.getMessage());
    }

    @Test
    void givenException_thenReturnInternalServerErrorStatus() {
        ApiGatewayExceptionHandler exceptionHandler = new ApiGatewayExceptionHandler();
        Exception exception = new Exception("Internal Server Error");

        ResponseEntity<ApiErrorResponse> responseEntity = exceptionHandler.handleAnyException(exception);

        // Assert that the response entity is not null
        assertNotNull(responseEntity);

        // Assert the response status code is INTERNAL_SERVER_ERROR
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, responseEntity.getStatusCode());

        // Assert the response body contains the expected values
        ApiErrorResponse responseBody = responseEntity.getBody();
        assertNotNull(responseBody);
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR.value(), responseBody.getStatus());
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR.name(), responseBody.getTitle());
        assertEquals("Internal Server Error", responseBody.getMessage());
    }
}
