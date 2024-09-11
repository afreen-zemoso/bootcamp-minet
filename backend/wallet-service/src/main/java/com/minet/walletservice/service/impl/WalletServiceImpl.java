package com.minet.walletservice.service.impl;

import com.minet.walletservice.dto.WalletDTO;
import com.minet.walletservice.dto.WalletRequest;
import com.minet.walletservice.entity.Wallet;
import com.minet.walletservice.exception.BadRequestException;
import com.minet.walletservice.exception.WalletNotFoundException;
import com.minet.walletservice.mapper.WalletMapper;
import com.minet.walletservice.repository.WalletRepository;
import com.minet.walletservice.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WalletServiceImpl implements WalletService {

    private final WalletRepository walletRepository;

    private final WalletMapper walletMapper;

    private Wallet getUserWallet(int userId, int walletId) {
        Optional<Wallet> optionalWallet = walletRepository.findById(walletId);
        Wallet wallet = optionalWallet.orElseThrow(() -> new WalletNotFoundException("Wallet not found with id"));
        if (wallet.getUserId() != userId)
            throw new BadRequestException("This user doesn't have this wallet");
        return wallet;
    }

    @Autowired
    public WalletServiceImpl(WalletRepository walletRepository, WalletMapper walletMapper) {
        this.walletRepository = walletRepository;
        this.walletMapper = walletMapper;
    }

    @Override
    public WalletDTO findWalletByUserIdAndCryptoId(int userId, String cryptoId) {
        Optional<Wallet> wallet = walletRepository.findByUserIdAndCryptoId(userId, cryptoId);
        return walletMapper.entityToDto(wallet.orElseThrow(() -> new WalletNotFoundException("Wallet not found with userId and cryptoId ")));
    }

    @Override
    public List<WalletDTO> findWalletsByUserId(int userId) {
        return walletMapper.entityToDto(walletRepository.findByUserId(userId));
    }

    @Override
    public WalletDTO createWallet(int userId, WalletRequest walletRequest) {
        Wallet wallet = walletMapper.requestToEntity(walletRequest);
        wallet.setUserId(userId);
        Wallet resultWallet = walletRepository.save(wallet);
        return walletMapper.entityToDto(resultWallet);
    }

    @Override
    public void deleteWallet(int userId, int walletId) {
        Wallet deletedWallet=this.getUserWallet(userId,walletId);
        walletRepository.delete(deletedWallet);
    }

    @Override
    public WalletDTO updateWallet(int walletId, int userId, WalletRequest walletRequest) {
        Wallet wallet=this.getUserWallet(userId,walletId);
        wallet.setTotalBalance(walletRequest.getTotalBalance());
        walletRepository.save(wallet);
        return walletMapper.entityToDto(wallet);
    }

}
