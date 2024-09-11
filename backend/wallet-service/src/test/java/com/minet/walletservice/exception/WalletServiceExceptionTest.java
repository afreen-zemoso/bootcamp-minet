package com.minet.walletservice.exception;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Objects;
import java.util.logging.Logger;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;

class WalletServiceExceptionTest {
    @InjectMocks
    private WalletServiceExceptionHandler exceptionHandler;

    @Test
    void givenBadRequestException_thenThrowBadRequestException() {
        BadRequestException exception = new BadRequestException("Bad request");
        Logger logger = mock(Logger.class);
        MockitoAnnotations.openMocks(this);

        ResponseEntity<ApiErrorResponse> responseEntity = exceptionHandler.handleBadRequestException(exception);

        assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
        assertEquals("Bad request", responseEntity.getBody().getMessage());
    }

    @Test
    void givenWalletNotFoundException_thenThrowHandleUserNotFoundException() {
        WalletNotFoundException exception = new WalletNotFoundException("User not found");
        Logger logger = mock(Logger.class);
        MockitoAnnotations.openMocks(this);

        ResponseEntity<ApiErrorResponse> responseEntity = exceptionHandler.handleUserNotFoundException(exception);

        assertEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
        assertEquals("User not found", Objects.requireNonNull(responseEntity.getBody()).getMessage());
    }

    @Test
    void givenException_thenThrowException() {
        Exception exception = new Exception("Internal server error");
        Logger logger = mock(Logger.class);
        MockitoAnnotations.openMocks(this);

        ResponseEntity<ApiErrorResponse> responseEntity = exceptionHandler.handleAnyException(exception);

        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, responseEntity.getStatusCode());
        assertEquals("Internal server error", Objects.requireNonNull(responseEntity.getBody()).getMessage());
    }
}
