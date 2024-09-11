package com.minet.cryptoservice.service;

import com.minet.cryptoservice.dto.CryptoApiResponse;
import com.minet.cryptoservice.dto.CryptoDTO;
import com.minet.cryptoservice.entity.Crypto;
import com.minet.cryptoservice.exception_handling.RecordNotFoundException;
import com.minet.cryptoservice.mapper.CryptoMapper;
import com.minet.cryptoservice.repository.CryptoRepository;
import com.minet.cryptoservice.service.impl.CryptoServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;
class CryptoServiceTest {

    @Mock
    public CryptoRepository cryptoRepository;

    @InjectMocks
    public CryptoServiceImpl cryptoService;

    @Mock
    public CryptoMapper cryptoMapper;

    @BeforeEach
    public void setup() throws Exception{
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void givenCryptoRequest_whenCryptoValid_thenCreateCrypto(){
        CryptoApiResponse cryptoApiResponse=CryptoApiResponse.builder().id("bitcoin").build();
        Crypto crypto=Crypto.builder().id("bitcoin").build();
        when(cryptoMapper.apiToEntity(cryptoApiResponse)).thenReturn(crypto);
        when(cryptoRepository.save(crypto)).thenReturn(null);
        cryptoService.save(cryptoApiResponse);
        verify(cryptoRepository).save(any(Crypto.class));
    }

    @Test
    void testFindAllCrypto(){
        List<Crypto> cryptos=new ArrayList<>();
        List<CryptoDTO> cryptoDTOList=new ArrayList<>();
        Crypto crypto=Crypto.builder().id("bitcoin").build();
        CryptoDTO cryptoDTO=CryptoDTO.builder().id("bitcoin").build();
        cryptos.add(crypto);
        cryptoDTOList.add(cryptoDTO);
        when(cryptoRepository.findAll()).thenReturn(cryptos);
        when(cryptoMapper.entityToDto(cryptos)).thenReturn(cryptoDTOList);
        List<CryptoDTO> cryptoDTOS=cryptoService.getCryptos();
        assertEquals(cryptoDTOList,cryptoDTOS);
        assertEquals(cryptoDTOList.get(0).getId(),cryptoDTOS.get(0).getId());
    }

    @Test
    void givenCryptoId_whenCryptoIdvalid_thenFindCryptoById(){
        Crypto crypto=Crypto.builder().id("bitcoin").build();
        CryptoDTO cryptoDTO=CryptoDTO.builder().id("bitcoin").build();
        when(cryptoRepository.findById(anyString())).thenReturn(Optional.of(crypto));
        when(cryptoMapper.entityToDto(crypto)).thenReturn(cryptoDTO);
        CryptoDTO cryptoResponse=cryptoService.getCryptoById("bitcoin");
        assertEquals(cryptoDTO.getId(),cryptoResponse.getId());
    }
    @Test
    void givenCryptoId_whenCryptoIdNotValid_thenThrowRecordNotFoundException(){
        when(cryptoRepository.findById(anyString())).thenReturn(Optional.empty());
        assertThrows(RecordNotFoundException.class,()->cryptoService.getCryptoById("bitcoin"));
    }
}
