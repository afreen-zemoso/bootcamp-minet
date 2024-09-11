package com.minet.transactionservice.service;

import com.minet.transactionservice.dto.TransactionDTO;
import com.minet.transactionservice.dto.TransactionRequest;
import com.minet.transactionservice.entity.Transaction;
import com.minet.transactionservice.mapper.TransactionMapper;
import com.minet.transactionservice.repository.TransactionRepository;
import com.minet.transactionservice.service.impl.TransactionServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

class TransactionServiceTest {
    @Mock
    private TransactionRepository transactionRepository;

    @Mock
    private TransactionMapper transactionMapper;
    @Mock
    private RestTemplate restTemplate;

    @InjectMocks
    private TransactionServiceImpl transactionService;
    @BeforeEach
    public void setup() throws Exception{
        MockitoAnnotations.initMocks(this);
    }
    @Test
    void givenUserId_WhenUserIsValid_thenReturnUserTransactions(){
        List<Transaction> transactions=Collections.singletonList(Transaction.builder().id(1).build());
        List<TransactionDTO> transactionDTOS=Collections.singletonList(TransactionDTO.builder().id(1).build());
        when(transactionRepository.findAllByUserId(anyInt())).thenReturn(transactions);
        when(transactionMapper.entityToDto(transactions)).thenReturn(transactionDTOS);
        List<TransactionDTO> transactionDTOList=transactionService.getUserTransactions(1);
        assertEquals(transactionDTOList.size(),transactionDTOS.size());
    }

    @Test
    void givenCryptoIdAndUserId_whenCryptoIdAndUserIsValid_thenReturnCryptoTransactionsOfUser(){
        List<Transaction> transactions=Collections.singletonList(Transaction.builder().id(1).build());
        List<TransactionDTO> transactionDTOS=Collections.singletonList(TransactionDTO.builder().id(1).build());
        when(transactionRepository.findAllByCryptoIdAndUserId(anyString(), anyInt())).thenReturn(transactions);
        when(transactionMapper.entityToDto(transactions)).thenReturn(transactionDTOS);
        List<TransactionDTO> transactionDTOList=transactionService.getCryptoTransactionsOfUser("bitcoin", 1);
        assertEquals(transactionDTOList.size(),transactionDTOS.size());
    }
    @Test
    void givenTransactionRequest_whenTransactionRequestValid_thenCreateTransaction(){
        Transaction transaction=Transaction.builder().id(1).quantity(0.54).cryptoId("bitcoin").userId(1).build();
        TransactionDTO transactionDTO=TransactionDTO.builder().id(1).quantity(0.54).cryptoId("bitcoin").build();
        TransactionRequest transactionRequest=TransactionRequest.builder().quantity(0.54).cryptoId("bitcoin").build();
        when(transactionRepository.save(transaction)).thenReturn(transaction);
        when(transactionMapper.requestToEntity(transactionRequest)).thenReturn(transaction);
        transactionService.createTransaction(1,transactionRequest);
        verify(transactionRepository).save(transaction);
        verify(transactionMapper).requestToEntity(transactionRequest);
    }
}
