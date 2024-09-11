package com.minet.cryptoservice.controller;

import com.minet.cryptoservice.dto.CryptoDTO;
import com.minet.cryptoservice.service.impl.CryptoServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;
class CryptoControllerTest {
    @Mock
    public CryptoServiceImpl cryptoService;
    @InjectMocks
    public CryptoController cryptoController;
    @BeforeEach
    public void setup() throws Exception{
        MockitoAnnotations.initMocks(this);
    }

    
    @Test
    void testGetCryptoCoins(){
        List<CryptoDTO> cryptoDTOS=new ArrayList<>();
        cryptoDTOS.add(CryptoDTO.builder().id("bitcoin").build());
        cryptoDTOS.add(CryptoDTO.builder().id("etherium").build());
        when(cryptoService.getCryptos()).thenReturn(cryptoDTOS);
        List<CryptoDTO> cryptoDTOList=cryptoController.getCryptoCoins();
        assertEquals(2,cryptoDTOList.size());
    }
    @Test
    void givenCryptoId_whenCryptoIdValid_thenGetCrypto(){
        CryptoDTO cryptoDTO=CryptoDTO.builder().id("bitcoin").build();
        when(cryptoService.getCryptoById(anyString())).thenReturn(cryptoDTO);
        CryptoDTO resCryptoDTO=cryptoController.getCrypto("bitcoin");
        assertEquals(resCryptoDTO.getId(),cryptoDTO.getId());
    }

}
