package com.minet.transactionservice.service.impl;

import com.minet.transactionservice.dto.WatchListRequest;
import com.minet.transactionservice.exception.BadRequestException;
import com.minet.transactionservice.exception.ResourceNotFoundException;
import com.minet.transactionservice.mapper.WatchlistMapper;
import com.minet.transactionservice.dto.WatchListDTO;
import com.minet.transactionservice.entity.WatchList;
import com.minet.transactionservice.repository.WatchListRepository;
import com.minet.transactionservice.service.WatchListService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class WatchListServiceImpl implements WatchListService {
    private final WatchListRepository watchListRepository;
    private final WatchlistMapper watchlistMapper;

    @Autowired
    public WatchListServiceImpl(WatchListRepository watchListRepository, WatchlistMapper watchlistMapper) {
        this.watchListRepository = watchListRepository;
        this.watchlistMapper = watchlistMapper;
    }

    // gets watchlist of user
    @Override
    public List<WatchListDTO> getWatchListOfUser(int userId) {
        List<WatchList> watchLists = watchListRepository.findAllByUserId(userId);
        return watchlistMapper.entityToDto(watchLists);
    }

    // add crypto coin to user watchlist
    @Override
    public WatchListDTO createWatchlist(int userId, WatchListRequest watchListRequest) {
        WatchList watchList=watchlistMapper.requestToEntity(watchListRequest);
        watchList.setUserId(userId);
        WatchList addedWatchlist=watchListRepository.save(watchList);
        return watchlistMapper.entityToDto(addedWatchlist);
    }

    @Override
    public void deleteWatchlist(int userId,int watchlistId) {
        Optional<WatchList> optionalWatchList=watchListRepository.findById(watchlistId);
        WatchList watchList=optionalWatchList.orElseThrow(()->new ResourceNotFoundException("watchlist not found with id"));
        if (watchList.getUserId()!=userId)
            throw new BadRequestException("this user doesn't have this watchlist");
        watchListRepository.delete(watchList);
    }

    @Override
    public WatchListDTO getWatchListByUserAndCrypto(int userId, String cryptoId) {
        Optional<WatchList> optionalWatchList=watchListRepository.findByUserIdAndCryptoId(userId,cryptoId);
        WatchList watchList=optionalWatchList.orElseThrow(()->new ResourceNotFoundException("watchlist not found by userId and cryptoId"));
        return watchlistMapper.entityToDto(watchList);
    }
}
