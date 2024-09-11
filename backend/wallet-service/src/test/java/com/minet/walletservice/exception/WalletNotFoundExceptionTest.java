package com.minet.walletservice.exception;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class WalletNotFoundExceptionTest {

    @Test
    void testMessage() {
        WalletNotFoundException exception = new WalletNotFoundException("Exception");
        assertEquals("Exception", exception.getMessage());
    }
}
