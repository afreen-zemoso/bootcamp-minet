package com.minet.userservice.exception;

import com.minet.userservice.dto.response.ApiErrorResponse;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.slf4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Objects;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class UserServiceExceptionHandlerTest {

    @InjectMocks
    private UserServiceExceptionHandler exceptionHandler;

    @Test
    void givenBadRequestException_thenReturnBadRequestStatus() {
        BadRequestException exception = new BadRequestException("Bad request");
        Logger logger = mock(Logger.class);
        MockitoAnnotations.openMocks(this);

        ResponseEntity<ApiErrorResponse> responseEntity = exceptionHandler.handleBadRequestException(exception);

        assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
        assertEquals("Bad request", responseEntity.getBody().getMessage());
    }

    @Test
    void givenUserNotFoundException_thenReturnNotFoundStatus() {
        UserNotFoundException exception = new UserNotFoundException("User not found");
        Logger logger = mock(Logger.class);
        MockitoAnnotations.openMocks(this);

        ResponseEntity<ApiErrorResponse> responseEntity = exceptionHandler.handleUserNotFoundException(exception);

        assertEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
        assertEquals("User not found", Objects.requireNonNull(responseEntity.getBody()).getMessage());
    }

    @Test
    void givenAccessDeniedException_thenReturnForbiddenStatus() {
        AccessDeniedException exception = new AccessDeniedException("Access denied");
        Logger logger = mock(Logger.class);
        MockitoAnnotations.openMocks(this);

        ResponseEntity<ApiErrorResponse> responseEntity = exceptionHandler.handleAccessDeniedException(exception);

        assertEquals(HttpStatus.FORBIDDEN, responseEntity.getStatusCode());
        assertEquals("Access denied", Objects.requireNonNull(responseEntity.getBody()).getMessage());
    }

    @Test
    void givenAnyException_thenReturnInternalServerErrorStatus() {
        Exception exception = new Exception("Internal server error");
        Logger logger = mock(Logger.class);
        MockitoAnnotations.openMocks(this);

        ResponseEntity<ApiErrorResponse> responseEntity = exceptionHandler.handleAnyException(exception);

        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, responseEntity.getStatusCode());
        assertEquals("Internal server error", Objects.requireNonNull(responseEntity.getBody()).getMessage());
    }
}
