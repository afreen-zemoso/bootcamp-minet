package com.minet.walletservice.service;

import com.minet.walletservice.dto.WalletDTO;
import com.minet.walletservice.dto.WalletRequest;

import java.util.List;

public interface WalletService {
    WalletDTO findWalletByUserIdAndCryptoId(int userId, String cryptoId);

    List<WalletDTO> findWalletsByUserId(int userId);

    WalletDTO createWallet(int userId, WalletRequest walletRequest);

    void deleteWallet(int userId, int walletId);

    WalletDTO updateWallet(int walletId, int userId, WalletRequest walletRequest);
}

