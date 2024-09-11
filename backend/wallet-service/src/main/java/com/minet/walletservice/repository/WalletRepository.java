package com.minet.walletservice.repository;

import com.minet.walletservice.entity.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface WalletRepository extends JpaRepository<Wallet, Integer> {
    Optional<Wallet> findByUserIdAndCryptoId(int userId, String cryptoId);

    List<Wallet> findByUserId(int userId);

}
