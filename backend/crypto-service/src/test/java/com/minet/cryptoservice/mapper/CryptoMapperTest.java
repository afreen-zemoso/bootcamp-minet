package com.minet.cryptoservice.mapper;

import com.minet.cryptoservice.dto.CryptoApiResponse;
import com.minet.cryptoservice.dto.CryptoDTO;
import com.minet.cryptoservice.entity.Crypto;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import java.util.ArrayList;
import java.util.List;
import static org.junit.jupiter.api.Assertions.assertEquals;
class CryptoMapperTest {
    private CryptoMapper cryptoMapper;
    @BeforeEach
    public void setup(){
        cryptoMapper=new CryptoMapper(new ModelMapper());
        cryptoMapper.setUpMapper();
    }
    @Test
    void givenDTO_thenReturnEntity(){
        CryptoApiResponse cryptoApiResponse=CryptoApiResponse.builder().id("bitcoin").
        name("bitcoin").image("image").symbol("BTC")
                .current_price(100).circulating_supply(200)
                .price_change_percentage_24h(5).total_volume(100).market_cap(400).build();
        Crypto crypto=cryptoMapper.apiToEntity(cryptoApiResponse);
        assertEquals(cryptoApiResponse.getImage(),crypto.getIcon());
        assertEquals(cryptoApiResponse.getId(),crypto.getId());
        assertEquals(cryptoApiResponse.getCurrent_price(),crypto.getPrice());
        assertEquals(cryptoApiResponse.getCirculating_supply(),crypto.getCirculatingSupply());
        assertEquals(cryptoApiResponse.getPrice_change_percentage_24h(),crypto.getChange());
        assertEquals(cryptoApiResponse.getTotal_volume(),crypto.getVolume());
        assertEquals(cryptoApiResponse.getMarket_cap(),crypto.getMarketCap());
    }
    @Test
    void passEmptyPropertiesToApiToEntity(){
        CryptoApiResponse cryptoApiResponse=new CryptoApiResponse();
        Crypto crypto=cryptoMapper.apiToEntity(cryptoApiResponse);
        assertEquals(null,crypto.getId());
    }

    @Test
    void givenEntity_thenReturnDto(){
        Crypto crypto=Crypto.builder().id("bitcoin").name("Bitcoin")
                        .icon("image").circulatingSupply(100).price(200)
                        .change(4).marketCap(100).volume(100)
                        .build();
        CryptoDTO cryptoDTO=cryptoMapper.entityToDto(crypto);
        assertEquals(crypto.getId(),cryptoDTO.getId());
        assertEquals(crypto.getName(),cryptoDTO.getName());
        assertEquals(crypto.getMarketCap(),cryptoDTO.getMarketCap());
        assertEquals(crypto.getPrice(),cryptoDTO.getPrice());
        assertEquals(crypto.getVolume(),cryptoDTO.getVolume());
        assertEquals(crypto.getCirculatingSupply(),cryptoDTO.getCirculatingSupply());
        assertEquals(crypto.getIcon(),cryptoDTO.getIcon());
        assertEquals(crypto.getChange(),cryptoDTO.getChange());
        assertEquals(crypto.getSymbol(),cryptoDTO.getSymbol());
    }
    @Test
    void givenListOfEntity_thenReturnListOfDto(){
        List<Crypto> cryptoList=new ArrayList<>();
        Crypto crypto=Crypto.builder().id("bitcoin").build();
        cryptoList.add(crypto);
        List<CryptoDTO> cryptoDTOList=cryptoMapper.entityToDto(cryptoList);
        assertEquals(cryptoList.size(),cryptoDTOList.size());
    }
}
