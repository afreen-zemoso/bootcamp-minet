package com.minet.cryptoservice.exception_handling;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class ResourceNotFoundExceptionTest {
    @Test
    void testConstructorAndGetters() {
        // Create a ResourceNotFoundException object
        String resourceName = "Crypto";
        String fieldName = "id";
        Object fieldValue = "abc";
        String expectedMessage = "Crypto not found with id : 'abc'";
        RecordNotFoundException exception = new RecordNotFoundException(resourceName, fieldName, fieldValue.toString());

        // Verify the values using getters
        assertEquals(resourceName, exception.getResourceName());
        assertEquals(fieldName, exception.getFieldName());
        assertEquals(fieldValue.toString(), exception.getFieldValue());
        assertEquals(expectedMessage, exception.getMessage());
    }
}
