package com.minet.cryptoservice.mapper;

import com.minet.cryptoservice.dto.CryptoApiResponse;
import com.minet.cryptoservice.dto.CryptoDTO;
import com.minet.cryptoservice.entity.Crypto;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class CryptoMapper {
    private final ModelMapper mapper;
    @Autowired
    public CryptoMapper(ModelMapper mapper) {
        this.mapper = mapper;
    }

    @PostConstruct
    public void setUpMapper(){
        TypeMap<CryptoApiResponse, Crypto> typeMapper=mapper.createTypeMap(CryptoApiResponse.class, Crypto.class);
        typeMapper.addMapping(CryptoApiResponse::getImage,Crypto::setIcon);
        typeMapper.addMapping(CryptoApiResponse::getCurrent_price,Crypto::setPrice);
        typeMapper.addMapping(CryptoApiResponse::getCirculating_supply,Crypto::setCirculatingSupply);
        typeMapper.addMapping(CryptoApiResponse::getMarket_cap,Crypto::setMarketCap);
        typeMapper.addMapping(CryptoApiResponse::getTotal_volume,Crypto::setVolume);
        typeMapper.addMapping(CryptoApiResponse::getPrice_change_percentage_24h,Crypto::setChange);
    }
    public Crypto apiToEntity(CryptoApiResponse cryptoApiResponse){
        return mapper.map(cryptoApiResponse,Crypto.class);
    }
    public CryptoDTO entityToDto(Crypto crypto){
       return mapper.map(crypto, CryptoDTO.class);
    }
    public List<CryptoDTO> entityToDto(List<Crypto> cryptos){
       return cryptos.stream().map(crypto -> mapper.map(crypto,CryptoDTO.class)).collect(Collectors.toList());
    }
}
