package com.minet.transactionservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.minet.transactionservice.dto.TransactionDTO;
import com.minet.transactionservice.dto.TransactionRequest;
import com.minet.transactionservice.service.impl.TransactionServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Collections;
import java.util.List;

import static org.mockito.Mockito.*;

@WebMvcTest(TransactionController.class)
class TransactionControllerTest {
    @MockBean
    private TransactionServiceImpl transactionService;
    @Autowired
    private MockMvc mockMvc;
    private ObjectMapper mapper = new ObjectMapper();
    @Test
    void givenUserId_whenUserIdValid_thenReturnUserTransactions() throws Exception {
        List<TransactionDTO> transactionDTOS=Collections.singletonList(TransactionDTO.builder().id(1).build());
        when(transactionService.getUserTransactions(anyInt())).thenReturn(transactionDTOS);
        mockMvc.perform(MockMvcRequestBuilders.
                        get("/transaction")
                        .header("User-Id", 1)
                        .accept(MediaType.APPLICATION_JSON)).
                andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(mapper.writeValueAsString(transactionDTOS)));
    }
    @Test
    void givenUserId_whenUserIdValid_thenReturnCryptoTransactions() throws Exception {
        List<TransactionDTO> transactionDTOS=Collections.singletonList(TransactionDTO.builder().id(1).build());
        when(transactionService.getCryptoTransactionsOfUser(anyString(), anyInt())).thenReturn(transactionDTOS);
        mockMvc.perform(MockMvcRequestBuilders.
                        get("/transaction/crypto/bitcoin")
                        .header("User-Id", 1)
                        .accept(MediaType.APPLICATION_JSON)).
                andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(mapper.writeValueAsString(transactionDTOS)));
    }
    @Test
    void givenTransaction_whenValidTransaction_thenCreateTransaction() throws Exception {
        TransactionDTO transactionDTO=TransactionDTO.builder().id(1).build();
        TransactionRequest transactionRequest=TransactionRequest.builder().quantity(0.54).cryptoId("bitcoin").build();
        transactionService.createTransaction(1,transactionRequest);
        mockMvc.perform(MockMvcRequestBuilders.
                        post("/transaction")
                        .header("User-Id", 1)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(mapper.writeValueAsString(transactionRequest))
                        .accept(MediaType.APPLICATION_JSON)).
                andExpect(MockMvcResultMatchers.status().isCreated());
    }
}
