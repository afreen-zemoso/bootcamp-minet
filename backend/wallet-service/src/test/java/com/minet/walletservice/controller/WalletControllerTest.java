package com.minet.walletservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.minet.walletservice.dto.WalletDTO;
import com.minet.walletservice.dto.WalletRequest;
import com.minet.walletservice.exception.ApiErrorResponse;
import com.minet.walletservice.service.impl.WalletServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Collections;
import java.util.List;

import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

@WebMvcTest(WalletController.class)
class WalletControllerTest {

    @MockBean
    private WalletServiceImpl walletService;

    @Autowired
    private MockMvc mockMvc;
    private ObjectMapper mapper = new ObjectMapper();


    @Test
    void givenCryptoId_whenCryptoIdValid_thenReturnCryptoWallet() throws Exception {
        int userId = 1;
        String cryptoId = "bitcoin";
        WalletDTO walletDTO = WalletDTO.builder().cryptoId("bitcoin").totalBalance(0.87).build();
        when(walletService.findWalletByUserIdAndCryptoId(userId, cryptoId)).thenReturn(walletDTO);
        mockMvc.perform(MockMvcRequestBuilders.
                        get("/wallet/crypto/bitcoin")
                        .header("User-Id", 1)
                        .accept(MediaType.APPLICATION_JSON)).
                andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(mapper.writeValueAsString(walletDTO)));
    }

    @Test
    void givenUserId_whenUserIdValid_thenReturnWalletsOfUser() throws Exception {
        int userId = 1;
        List<WalletDTO> walletDTOList = Collections.singletonList(WalletDTO.builder().cryptoId("bitcoin").totalBalance(0.87).build());
        when(walletService.findWalletsByUserId(userId)).thenReturn(walletDTOList);
        mockMvc.perform(MockMvcRequestBuilders.
                        get("/wallet")
                        .header("User-Id", 1)
                        .accept(MediaType.APPLICATION_JSON)).
                andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(mapper.writeValueAsString(walletDTOList)));
    }

    @Test
    void givenWalletRequestBody_whenBodyIsValid_thenCreateWallet() throws Exception {
        WalletDTO walletDTO = WalletDTO.builder().totalBalance(1000.0).cryptoId("bitcoin").build();
        when(walletService.createWallet(anyInt(), any(WalletRequest.class))).thenReturn(walletDTO);
        mockMvc.perform(MockMvcRequestBuilders.
                        post("/wallet")
                        .header("User-Id", 1)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(mapper.writeValueAsString(walletDTO))
                        .accept(MediaType.APPLICATION_JSON)).
                andExpect(MockMvcResultMatchers.status().isCreated())
                .andExpect(MockMvcResultMatchers.content().json(mapper.writeValueAsString(walletDTO)));

    }

    @Test
    void givenWalletId_whenUserHasWalletWithWalletId_thenDeleteWallet() throws Exception {
        int walletId = 1;
        doNothing().when(walletService).deleteWallet(anyInt(), anyInt());
        mockMvc.perform(MockMvcRequestBuilders.
                        delete("/wallet/1")
                        .header("User-Id", 1)
                        .accept(MediaType.APPLICATION_JSON)).
                andExpect(MockMvcResultMatchers.status().isNoContent());
    }

    @Test
    void givenWalletId_whenUserHasWalletWithWalletId_thenUpdateWallet() throws Exception {
        WalletRequest walletRequest = WalletRequest.builder().totalBalance(1000.0).build();
        WalletDTO walletDTO = WalletDTO.builder().id(1).totalBalance(1000.0).build();
        when(walletService.updateWallet(1, 1, walletRequest)).thenReturn(walletDTO);
        mockMvc.perform(MockMvcRequestBuilders.
                        put("/wallet/1")
                        .header("User-Id", 1)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(mapper.writeValueAsString(walletRequest))
                        .accept(MediaType.APPLICATION_JSON)).
                andExpect(MockMvcResultMatchers.status().isOk());
    }


}