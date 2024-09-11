package com.minet.cryptoservice.exception_handling;

import com.minet.cryptoservice.dto.ApiErrorResponse;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.slf4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Objects;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;

class CryptoServiceExceptionHandlerTest {

    @InjectMocks
    private CryptoServiceExceptionHandler exceptionHandler;

    @Test
    void givenResourceNotFoundException_thenReturnNotFoundStatus() {
        RecordNotFoundException exception = new RecordNotFoundException("User", "id", "1");
        Logger logger = mock(Logger.class);
        MockitoAnnotations.openMocks(this);

        ResponseEntity<ApiErrorResponse> responseEntity = exceptionHandler.handleUserNotFoundException(exception);

        assertEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
        assertEquals("User not found with id : '1'", Objects.requireNonNull(responseEntity.getBody()).getMessage());
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
