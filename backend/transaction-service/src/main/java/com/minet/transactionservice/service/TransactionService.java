package com.minet.transactionservice.service;

import com.minet.transactionservice.dto.TransactionDTO;
import com.minet.transactionservice.dto.TransactionRequest;

import java.util.List;

public interface TransactionService {
    List<TransactionDTO> getUserTransactions(Integer userId);
    List<TransactionDTO> getCryptoTransactionsOfUser(String cryptoId, Integer userId);
    void createTransaction(int userId, TransactionRequest transactionRequest);
}
