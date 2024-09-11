package com.minet.transactionservice.mapper;

import com.minet.transactionservice.dto.WatchListDTO;
import com.minet.transactionservice.dto.WatchListRequest;
import com.minet.transactionservice.entity.WatchList;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class WatchlistMapperTest {
    private WatchlistMapper watchlistMapper;
    @BeforeEach
    public void setup(){
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        watchlistMapper=new WatchlistMapper(mapper);
    }
    @Test
    void givenEntity_thenReturnDTO(){
        WatchList watchList=WatchList.builder().id(1).userId(1).cryptoId("bitcoin").build();
        WatchListDTO watchListDTO=watchlistMapper.entityToDto(watchList);
        assertEquals(watchList.getId(),watchListDTO.getId());
    }
    @Test
    void givenDTO_thenReturnEntity(){
        WatchListDTO watchListDTO=WatchListDTO.builder().id(1).cryptoId("bitcoin").build();
        WatchList watchList=watchlistMapper.dtoToEntity(watchListDTO);
        assertEquals(watchListDTO.getId(),watchListDTO.getId());
    }
    @Test
    void givenListOfEntities_thenListOfDTOS(){
        List<WatchList> watchLists= Collections.singletonList(WatchList.builder().id(1).build());
        List<WatchListDTO> watchListDTOS=watchlistMapper.entityToDto(watchLists);
        assertEquals(watchLists.size(),watchListDTOS.size());
    }
    @Test
    void givenRequest_thenReturnEntity(){
        WatchListRequest watchListRequest=WatchListRequest.builder().cryptoId("bitcoin").build();
        WatchList watchList=watchlistMapper.requestToEntity(watchListRequest);
        assertEquals(watchListRequest.getCryptoId(),watchList.getCryptoId());
    }
}
