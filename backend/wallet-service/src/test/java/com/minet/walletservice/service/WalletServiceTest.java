package com.minet.walletservice.service;

import com.minet.walletservice.dto.WalletDTO;
import com.minet.walletservice.dto.WalletRequest;
import com.minet.walletservice.entity.Wallet;
import com.minet.walletservice.exception.ApiErrorResponse;
import com.minet.walletservice.exception.BadRequestException;
import com.minet.walletservice.mapper.WalletMapper;
import com.minet.walletservice.repository.WalletRepository;
import com.minet.walletservice.service.impl.WalletServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class WalletServiceTest {

    @Mock
    private WalletRepository walletRepository;

    @Mock
    private WalletMapper walletMapper;
    @InjectMocks
    private WalletServiceImpl walletService;

    @BeforeEach
    public void setup() throws Exception {
        MockitoAnnotations.initMocks(this);
    }

    @DisplayName("JUnit test for finding a wallet by ID")
    @Test
    void givenUserId_whenUserIdValid_thenReturnAllWalletsOfUser() {
        Wallet wallet = new Wallet(1, 1000.0, 1, "bitcoin");
        List<Wallet> wallets = new ArrayList<>();
        wallets.add(wallet);
        when(walletRepository.findByUserId(anyInt())).thenReturn(wallets);

        WalletDTO walletDTO = WalletDTO.builder().totalBalance(1000.0).cryptoId("bitcoin").build();
        List<WalletDTO> walletDtoList = new ArrayList<>();
        walletDtoList.add(walletDTO);
        when(walletMapper.entityToDto(wallets)).thenReturn(walletDtoList);

        List<WalletDTO> result = walletService.findWalletsByUserId(1);

        assertNotNull(result);
        assertEquals(walletDtoList, result);
        assertEquals(walletDTO, result.get(0));

        verify(walletRepository, times(1)).findByUserId(1);
    }

    @DisplayName("JUnit test for finding a wallet by user ID and crypto ID")
    @Test
    void givenUserIdAndCryptoId_whenUserIdAndCryptoIdValid_thenReturnCryptoWalletOfUser() {
        Wallet wallet = new Wallet(1, 1000.0, 1, "bitcoin");
        when(walletRepository.findByUserIdAndCryptoId(1, "bitcoin")).thenReturn(Optional.of(wallet));

        WalletDTO walletDTO = WalletDTO.builder().totalBalance(1000.0).cryptoId("bitcoin").build();
        when(walletMapper.entityToDto(wallet)).thenReturn(walletDTO);

        WalletDTO result = walletService.findWalletByUserIdAndCryptoId(1, "bitcoin");

        assertNotNull(result);
        assertEquals(walletDTO, result);

        verify(walletRepository, times(1)).findByUserIdAndCryptoId(1, "bitcoin");
    }

    @DisplayName("JUnit test for updating a wallet")
    @Test
    void givenUserIdWalletIdAndWalletRequestBody_whenUserHasWalletWithWalletId_thenUpdateWallet() {
        WalletDTO walletDTO = WalletDTO.builder().id(1).totalBalance(1000.0).cryptoId("bitcoin").build();
        WalletRequest walletRequest = WalletRequest.builder().totalBalance(1000.0).cryptoId("bitcoin").build();
        Wallet wallet = Wallet.builder().id(1).userId(1).build();
        when(walletRepository.findById(anyInt())).thenReturn(Optional.ofNullable(wallet));
        when(walletRepository.save(wallet)).thenReturn(wallet);
        when(walletMapper.entityToDto(wallet)).thenReturn(walletDTO);
        WalletDTO result = walletService.updateWallet(1, 1, walletRequest);
        assertNotNull(result);
        assertEquals(walletDTO, result);
        verify(walletRepository, times(1)).save(wallet);
    }

    @Test
    void givenWalletRequestBody_whenBodyValid_thenCreateWallet() {
        WalletDTO walletDTO = WalletDTO.builder().id(1).totalBalance(1000.0).cryptoId("bitcoin").build();
        WalletRequest walletRequest = WalletRequest.builder().totalBalance(1000.0).cryptoId("bitcoin").build();
        Wallet wallet = Wallet.builder().id(1).build();
        when(walletMapper.requestToEntity(walletRequest)).thenReturn(wallet);
        when(walletRepository.save(wallet)).thenReturn(wallet);
        when(walletMapper.entityToDto(wallet)).thenReturn(walletDTO);
        WalletDTO result = walletService.createWallet(1, walletRequest);
        assertEquals(walletDTO, result);
    }

    @DisplayName("JUnit test for deleting a wallet")
    @Test
    void givenUserIdAndWalletId_whenUserHasWalletWithWalletId_thenDeleteWallet() {
        Wallet wallet = new Wallet(1, 1000.0, 1, "bitcoin");
        when(walletRepository.findById(1)).thenReturn(Optional.of(wallet));
        WalletDTO expectedDTO = WalletDTO.builder().totalBalance(1000.0).cryptoId("bitcoin").build();
        doNothing().when(walletRepository).delete(wallet);
        when(walletMapper.entityToDto(wallet)).thenReturn(expectedDTO);
        walletService.deleteWallet(1, 1);
        verify(walletRepository, times(1)).findById(1);
        verify(walletRepository, times(1)).delete(wallet);
    }

    @Test
    void givenUserIdAndWalletId_whenUserNotHaveWalletWithWalletId_thenThrowBadRequestException() {
        Wallet wallet = Wallet.builder().cryptoId("bitcoin").userId(2).build();
        when(walletRepository.findById(anyInt())).thenReturn(Optional.of(wallet));
        assertThrows(BadRequestException.class, () -> walletService.deleteWallet(1, 1));
    }

    @Test
    void givenWalletIUserIdAndWalletRequestBody_whenUserNotHaveWalletWithWalletId_thenThrowBadRequestException() {
        WalletRequest walletRequest = WalletRequest.builder().totalBalance(1000.0).cryptoId("bitcoin").build();
        Wallet wallet = Wallet.builder().id(1).userId(2).build();
        when(walletRepository.findById(1)).thenReturn(Optional.of(wallet));
        assertThrows(BadRequestException.class, () -> walletService.updateWallet(1, 1, walletRequest));
    }
}



