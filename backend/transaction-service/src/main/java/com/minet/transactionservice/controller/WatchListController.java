package com.minet.transactionservice.controller;

import com.minet.transactionservice.dto.WatchListDTO;
import com.minet.transactionservice.dto.WatchListRequest;
import com.minet.transactionservice.service.WatchListService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("/transaction/watchlist")
public class WatchListController {
    private final WatchListService watchListService;

    @Autowired
    public WatchListController(WatchListService watchListService) {
        this.watchListService = watchListService;
    }

    @GetMapping
    public List<WatchListDTO> getWatchListByUserId(@RequestHeader("User-Id") int userId) {

        log.info(String.format("GET: /watchlist/user/%s", userId));
        return watchListService.getWatchListOfUser(userId);
    }

    @PostMapping
    public ResponseEntity<WatchListDTO> createWatchlist(@RequestHeader("User-Id") int userId, @RequestBody WatchListRequest watchListRequest) {

        log.info(String.format("POST: /watchlist, RequestBody: %s", watchListRequest));
        return new ResponseEntity<>(watchListService.createWatchlist(userId,watchListRequest), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteWatchlist(@RequestHeader("User-Id") int userId,@PathVariable int id) {
        log.info(String.format("DELETE: /watchlist/%d",id));
        watchListService.deleteWatchlist(userId,id);
    }
    @GetMapping("/crypto/{cryptoId}")
    public WatchListDTO getWatchlistByCryptoIdAndUserId(@RequestHeader("User-Id") int userId, @PathVariable String cryptoId){
        log.info(String.format("GET:/watchlist/user/%d/crypto/%s",userId,cryptoId));
        return watchListService.getWatchListByUserAndCrypto(userId,cryptoId);
    }
}
