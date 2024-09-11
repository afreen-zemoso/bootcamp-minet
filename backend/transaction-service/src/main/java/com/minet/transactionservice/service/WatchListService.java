package com.minet.transactionservice.service;

import com.minet.transactionservice.dto.WatchListDTO;
import com.minet.transactionservice.dto.WatchListRequest;

import java.util.List;

public interface WatchListService {
    List<WatchListDTO> getWatchListOfUser(int userId);

    WatchListDTO createWatchlist(int userId, WatchListRequest watchListRequest);

    void deleteWatchlist(int userId,int watchlistId);

    WatchListDTO getWatchListByUserAndCrypto(int userId, String cryptoId);
}
