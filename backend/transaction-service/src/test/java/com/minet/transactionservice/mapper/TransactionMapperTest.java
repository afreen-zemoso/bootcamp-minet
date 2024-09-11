package com.minet.transactionservice.mapper;

import com.minet.transactionservice.dto.TransactionDTO;
import com.minet.transactionservice.dto.TransactionRequest;
import com.minet.transactionservice.entity.Transaction;
import com.minet.transactionservice.entity.TransactionStatus;
import com.minet.transactionservice.entity.TransactionType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;

import java.util.Collections;
import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class TransactionMapperTest {
    private TransactionMapper transactionMapper;
    @BeforeEach
    public void setup(){
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        transactionMapper=new TransactionMapper(mapper);
    }
    @Test
    void givenTransaction_thenReturnTransactionDto(){
        Transaction transaction=Transaction.builder().id(1).status(TransactionStatus.SUCCESS).date(new Date()).type(TransactionType.BUY)
                .price(100).description("from pavan").quantity(0.45).userId(1).cryptoId("bitcoin").build();
        TransactionDTO transactionDTO=transactionMapper.entityToDto(transaction);
        assertEquals(transaction.getId(),transactionDTO.getId());
    }
    @Test
    void givenTransactionDTO_thenReturnTransactionEntity(){
        TransactionDTO transactionDTO=TransactionDTO.builder().id(1).status(TransactionStatus.SUCCESS).date(new Date()).type(TransactionType.BUY)
                .price(100).description("from pavan").quantity(0.45).cryptoId("bitcoin").build();
        Transaction transaction=transactionMapper.dtoToEntity(transactionDTO);
        assertEquals(transaction.getId(),transactionDTO.getId());
    }
    @Test
    void givenListOfTransactions_thenReturnListOfTransaction(){
        List<Transaction> transactions=Collections.singletonList(Transaction.builder().id(1).build());
        List<TransactionDTO> transactionDTOS=transactionMapper.entityToDto(transactions);
        assertEquals(transactions.size(),transactionDTOS.size());
    }
    @Test
    void givenTransactionRequest_thenReturnTransactionEntity(){
        TransactionRequest transactionRequest=TransactionRequest.builder().status(TransactionStatus.SUCCESS).date(new Date()).type(TransactionType.BUY)
                .price(100).description("from pavan").quantity(0.45).cryptoId("bitcoin").build();
        Transaction transaction=transactionMapper.requestToEntity(transactionRequest);
        assertEquals(transactionRequest.getCryptoId(),transaction.getCryptoId());
    }
}
