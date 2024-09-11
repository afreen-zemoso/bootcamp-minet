package com.minet.transactionservice.service.impl;

import com.minet.transactionservice.dto.TransactionDTO;
import com.minet.transactionservice.dto.TransactionRequest;
import com.minet.transactionservice.entity.Transaction;
import com.minet.transactionservice.mapper.TransactionMapper;
import com.minet.transactionservice.repository.TransactionRepository;
import com.minet.transactionservice.service.TransactionService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class TransactionServiceImpl implements TransactionService {
    private final TransactionRepository transactionRepository;

    @Autowired
    public TransactionServiceImpl(TransactionRepository transactionRepository, TransactionMapper transactionMapper) {
        this.transactionRepository = transactionRepository;
        this.transactionMapper = transactionMapper;
    }

    private final TransactionMapper transactionMapper;

    @Override
    public List<TransactionDTO> getUserTransactions(Integer userId) {
        return transactionMapper.entityToDto(transactionRepository.findAllByUserId(userId));
    }

    @Override
    public List<TransactionDTO> getCryptoTransactionsOfUser(String cryptoId, Integer userId) {
        return transactionMapper.entityToDto(transactionRepository.findAllByCryptoIdAndUserId(cryptoId, userId));
    }

    @Override
    public void createTransaction(int userId, TransactionRequest transactionRequest) {
        Transaction transaction=transactionMapper.requestToEntity(transactionRequest);
        transaction.setUserId(userId);
        transactionRepository.save(transaction);
    }
}
