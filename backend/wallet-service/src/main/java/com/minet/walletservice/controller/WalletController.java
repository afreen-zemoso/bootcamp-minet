package com.minet.walletservice.controller;

import com.minet.walletservice.dto.WalletDTO;
import com.minet.walletservice.dto.WalletRequest;
import com.minet.walletservice.service.impl.WalletServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/wallet")
public class WalletController {
    private final WalletServiceImpl walletService;

    @Autowired
    public WalletController(WalletServiceImpl walletService) {
        this.walletService = walletService;

    }

    @GetMapping("/crypto/{cryptoId}")
    public WalletDTO findByUserIdAndCryptoId(@RequestHeader("User-Id") Integer userId, @PathVariable String cryptoId) {
        return walletService.findWalletByUserIdAndCryptoId(userId, cryptoId);
    }

    @GetMapping
    public List<WalletDTO> findByUserId(@RequestHeader("User-Id") Integer userId) {
        return walletService.findWalletsByUserId(userId);
    }

    @PostMapping
    @ResponseStatus(value = HttpStatus.CREATED)
    public WalletDTO createWallet(@RequestHeader("User-Id") Integer userId, @RequestBody WalletRequest walletRequest) {
        return walletService.createWallet(userId, walletRequest);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteWallet(@RequestHeader("User-Id") Integer userId, @PathVariable Integer id) {
        walletService.deleteWallet(userId, id);
    }

    @PutMapping("/{id}")
    public WalletDTO updateWallet(@PathVariable Integer id, @RequestHeader("User-Id") Integer userId, @RequestBody WalletRequest walletRequest) {
        return walletService.updateWallet(id, userId, walletRequest);
    }
}