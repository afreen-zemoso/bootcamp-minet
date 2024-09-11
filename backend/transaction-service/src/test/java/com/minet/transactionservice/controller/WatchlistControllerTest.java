package com.minet.transactionservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.minet.transactionservice.dto.WatchListDTO;
import com.minet.transactionservice.dto.WatchListRequest;
import com.minet.transactionservice.service.impl.WatchListServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Collections;
import java.util.List;

import static org.mockito.Mockito.*;

@WebMvcTest(WatchListController.class)
class WatchlistControllerTest {
    @MockBean
    private WatchListServiceImpl watchListService;
    @Autowired
    private MockMvc mockMvc;
    private ObjectMapper mapper = new ObjectMapper();
    @Test
    void givenUserId_whenValidUser_thenReturnWatchListOfUser() throws Exception {
        List<WatchListDTO> watchListDTOS= Collections.singletonList(WatchListDTO.builder().id(1).build());
        when(watchListService.getWatchListOfUser(anyInt())).thenReturn(watchListDTOS);
        mockMvc.perform(MockMvcRequestBuilders.
                        get("/transaction/watchlist")
                        .header("User-Id", 1)
                        .accept(MediaType.APPLICATION_JSON)).
                andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(mapper.writeValueAsString(watchListDTOS)));
    }
    @Test
    void givenCryptoId_whenCryptoIdValid_thenAddCryptoCoinToWatchList() throws Exception {
        WatchListDTO watchListDTO=WatchListDTO.builder().id(1).build();
        WatchListRequest watchListRequest=WatchListRequest.builder().cryptoId("bitcoin").build();
        watchListService.createWatchlist(1,watchListRequest);
        mockMvc.perform(MockMvcRequestBuilders.
                        post("/transaction/watchlist")
                        .header("User-Id", 1)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(mapper.writeValueAsString(watchListRequest))
                        .accept(MediaType.APPLICATION_JSON)).
                andExpect(MockMvcResultMatchers.status().isCreated());
    }
    @Test
    void givenWatchlistId_whenWatchlistIdValid_thenDeleteWatchlist() throws Exception {
        WatchListDTO watchListDTO=WatchListDTO.builder().id(1).build();
        doNothing().when(watchListService).deleteWatchlist(1,1);
        mockMvc.perform(MockMvcRequestBuilders.
                        delete("/transaction/watchlist/1")
                        .header("User-Id", 1)
                        .accept(MediaType.APPLICATION_JSON)).
                andExpect(MockMvcResultMatchers.status().isNoContent());
    }
    @Test
    void givenCryptoIdAndUserId_whenUserHasCryptoIdInHisWatchlist_thenGetWatchlistByCryptoIdAndUserId() throws Exception {
        WatchListDTO watchListDTO=WatchListDTO.builder().id(1).build();
        when(watchListService.getWatchListByUserAndCrypto(1,"bitcoin")).thenReturn(watchListDTO);
        mockMvc.perform(MockMvcRequestBuilders.
                        get("/transaction/watchlist/crypto/bitcoin")
                        .header("User-Id", 1)
                        .accept(MediaType.APPLICATION_JSON)).
                andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(mapper.writeValueAsString(watchListDTO)));
    }
}
