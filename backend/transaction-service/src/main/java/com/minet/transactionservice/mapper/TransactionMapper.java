package com.minet.transactionservice.mapper;

import com.minet.transactionservice.dto.TransactionDTO;
import com.minet.transactionservice.dto.TransactionRequest;
import com.minet.transactionservice.entity.Transaction;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class TransactionMapper {
    @Autowired
    public TransactionMapper(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }
    private final ModelMapper modelMapper;
    public TransactionDTO entityToDto(Transaction transaction){
        return modelMapper.map(transaction,TransactionDTO.class);
    }
    public Transaction dtoToEntity(TransactionDTO transactionDTO){
        return modelMapper.map(transactionDTO, Transaction.class);
    }
    public List<TransactionDTO> entityToDto(List<Transaction> transactions){
        return transactions.stream().map(transaction -> modelMapper.map(transaction, TransactionDTO.class)).collect(Collectors.toList());
    }
    public Transaction requestToEntity(TransactionRequest transactionRequest){
        return modelMapper.map(transactionRequest,Transaction.class);
    }

}
