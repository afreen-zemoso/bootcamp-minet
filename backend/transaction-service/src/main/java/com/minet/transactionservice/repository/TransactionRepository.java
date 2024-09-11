package com.minet.transactionservice.repository;

import com.minet.transactionservice.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Integer> {

    @Query("SELECT t FROM Transaction t WHERE t.userId = ?1")
    List<Transaction> findAllByUserId(Integer userId);

    @Query("SELECT t FROM Transaction t WHERE  t.cryptoId = ?1 AND t.userId = ?2")
    List<Transaction> findAllByCryptoIdAndUserId(String cryptoId, Integer userId);
}
