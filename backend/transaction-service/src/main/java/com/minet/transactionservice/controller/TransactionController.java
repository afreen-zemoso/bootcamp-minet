package com.minet.transactionservice.controller;

import com.minet.transactionservice.dto.TransactionDTO;
import com.minet.transactionservice.dto.TransactionRequest;
import com.minet.transactionservice.service.TransactionService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("/transaction")
public class TransactionController {
    private final TransactionService transactionService;

    @Autowired
    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @GetMapping
    public List<TransactionDTO> getUserTransactions(@RequestHeader("User-Id") Integer userId) {
        log.info("GET: /transaction, User-Id: " + userId);
        return transactionService.getUserTransactions(userId);
    }
    @GetMapping("/crypto/{cryptoId}")
    public List<TransactionDTO> getCryptoTransactions(@RequestHeader("User-Id") Integer userId, @PathVariable String cryptoId){
        log.info("GET: /transaction/crypto/" + cryptoId);
        return transactionService.getCryptoTransactionsOfUser(cryptoId, userId);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createTransaction(@RequestHeader("User-Id") Integer userId, @RequestBody TransactionRequest transactionRequest) {
        log.info(String.format("POST: /transaction, RequestBody: %s", transactionRequest));
        transactionService.createTransaction(userId,transactionRequest);
    }
}
