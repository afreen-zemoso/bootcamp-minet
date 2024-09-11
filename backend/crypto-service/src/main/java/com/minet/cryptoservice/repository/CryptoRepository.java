package com.minet.cryptoservice.repository;

import com.minet.cryptoservice.entity.Crypto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CryptoRepository extends JpaRepository<Crypto,String> {
}
