package com.minet.transactionservice.service;

import com.minet.transactionservice.dto.WatchListDTO;
import com.minet.transactionservice.dto.WatchListRequest;
import com.minet.transactionservice.entity.WatchList;
import com.minet.transactionservice.exception.BadRequestException;
import com.minet.transactionservice.exception.ResourceNotFoundException;
import com.minet.transactionservice.mapper.WatchlistMapper;
import com.minet.transactionservice.repository.WatchListRepository;
import com.minet.transactionservice.service.impl.WatchListServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;
class WatchListServiceTest {
    @Mock
    private WatchListRepository watchListRepository;
    @Mock
    private WatchlistMapper watchlistMapper;
    @Mock
    private RestTemplate restTemplate;
    @InjectMocks
    private WatchListServiceImpl watchListService;
    @BeforeEach
    public void setup() throws Exception{
        MockitoAnnotations.initMocks(this);
    }
    @Test
    void givenUserId_whenUserIsValid_thenReturnWatchListOfUser(){
        List<WatchList> watchLists= Collections.singletonList(WatchList.builder().id(1).build());
        List<WatchListDTO> watchListDTOS=Collections.singletonList(WatchListDTO.builder().id(1).build());
        when(watchListRepository.findAllByUserId(anyInt())).thenReturn(watchLists);
        when(watchlistMapper.entityToDto(watchLists)).thenReturn(watchListDTOS);
        List<WatchListDTO> watchListDTOList=watchListService.getWatchListOfUser(1);
        assertEquals(watchListDTOS.size(),watchListDTOList.size());
    }
    @Test
    void givenUserIdAndWatchlist_whenUserIsValid_thenCreateWatchlist(){
        WatchListDTO watchListDTO=WatchListDTO.builder().id(1).cryptoId("bitcoin").build();
        WatchList watchList=WatchList.builder().id(1).userId(1).cryptoId("bitcoin").build();
        WatchListRequest watchListRequest=WatchListRequest.builder().cryptoId("bitcoin").build();
        when(watchListRepository.save(watchList)).thenReturn(watchList);
        when(watchlistMapper.requestToEntity(watchListRequest)).thenReturn(watchList);
        when(watchlistMapper.entityToDto(watchList)).thenReturn(watchListDTO);
        WatchListDTO dto=watchListService.createWatchlist(1,watchListRequest);
        assertEquals(watchListDTO.getId(),dto.getId());
    }

    @Test
    void givenUserIdAndWatchlistId_whenUserAndWatchlistIdIsValid_thenDeleteWatchlist(){
        WatchList watchList=WatchList.builder().id(1).userId(1).build();
        WatchListDTO watchListDTO=WatchListDTO.builder().id(1).build();
        when(watchListRepository.findById(anyInt())).thenReturn(Optional.ofNullable(watchList));
        doNothing().when(watchListRepository).delete(watchList);
        when(watchlistMapper.entityToDto(watchList)).thenReturn(watchListDTO);
        watchListService.deleteWatchlist(1,1);
        verify(watchListRepository).delete(any(WatchList.class));
    }
    @Test
    void givenUserIdAndWatchlistId_whenWatchlistIsInvalid_thenThrowResourceNotFoundException(){
        when(watchListRepository.findById(anyInt())).thenReturn(Optional.empty());
        assertThrows(ResourceNotFoundException.class,()->watchListService.deleteWatchlist(1,1));
    }
    @Test
    void givenUserIdAndWatchlistId_whenUserIsInvalid_thenThrowBadRequestException(){
        WatchList watchList=WatchList.builder().id(1).userId(1).build();
        when(watchListRepository.findById(anyInt())).thenReturn(Optional.ofNullable(watchList));
        assertThrows(BadRequestException.class,()->watchListService.deleteWatchlist(2,1));
    }
    @Test
    void givenUserIdAndCryptoId_whenUserAndCryptoIdIsValid_thenReturnWatchListByUserAndCrypto(){
        WatchList watchList=WatchList.builder().id(1).build();
        WatchListDTO watchListDTO=WatchListDTO.builder().id(1).build();
        when(watchListRepository.findByUserIdAndCryptoId(anyInt(),anyString())).thenReturn(Optional.ofNullable(watchList));
        when(watchlistMapper.entityToDto(watchList)).thenReturn(watchListDTO);
        WatchListDTO dto=watchListService.getWatchListByUserAndCrypto(1,"bitcoin");
        assertEquals(watchListDTO.getId(),dto.getId());
    }
    @Test
    void givenUserIdAndCryptoId_whenAnyUserOrCryptoIdIsInvalid_thenThrowResourceNotFoundException(){
        when(watchListRepository.findByUserIdAndCryptoId(anyInt(),anyString())).thenReturn(Optional.empty());
        assertThrows(ResourceNotFoundException.class,()->watchListService.getWatchListByUserAndCrypto(1,"bitcoin"));
    }
}
