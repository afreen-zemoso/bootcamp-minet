package com.minet.transactionservice.mapper;

import com.minet.transactionservice.dto.WatchListDTO;
import com.minet.transactionservice.dto.WatchListRequest;
import com.minet.transactionservice.entity.WatchList;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class WatchlistMapper {
    private final ModelMapper modelMapper;

    @Autowired
    public WatchlistMapper(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public WatchListDTO entityToDto(WatchList watchList) {
        return modelMapper.map(watchList, WatchListDTO.class);
    }

    public WatchList dtoToEntity(WatchListDTO watchListRequest) {
        return modelMapper.map(watchListRequest, WatchList.class);
    }

    public List<WatchListDTO> entityToDto(List<WatchList> watchLists) {
        return watchLists.stream().map(watchList -> modelMapper.map(watchList, WatchListDTO.class)).collect(Collectors.toList());
    }

    public WatchList requestToEntity(WatchListRequest watchListRequest) {
        return modelMapper.map(watchListRequest, WatchList.class);
    }
}
