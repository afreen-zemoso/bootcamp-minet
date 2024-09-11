package com.minet.transactionservice.repository;

import com.minet.transactionservice.entity.WatchList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface WatchListRepository extends JpaRepository<WatchList, Integer> {

    @Query("SELECT w FROM WatchList w WHERE w.userId = ?1")
    List<WatchList> findAllByUserId(Integer userId);

    @Query("SELECT w FROM WatchList w WHERE w.userId = ?1 AND w.cryptoId = ?2")
    Optional<WatchList> findByUserIdAndCryptoId(Integer userId, String cryptoId);
}
