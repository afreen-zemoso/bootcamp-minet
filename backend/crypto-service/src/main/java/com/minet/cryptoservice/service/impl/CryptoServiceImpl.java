package com.minet.cryptoservice.service.impl;

import com.minet.cryptoservice.dto.CryptoApiResponse;
import com.minet.cryptoservice.dto.CryptoDTO;
import com.minet.cryptoservice.entity.Crypto;
import com.minet.cryptoservice.exception_handling.RecordNotFoundException;
import com.minet.cryptoservice.mapper.CryptoMapper;
import com.minet.cryptoservice.repository.CryptoRepository;
import com.minet.cryptoservice.service.CryptoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CryptoServiceImpl implements CryptoService {
    private final CryptoRepository cryptoRepository;
    private final CryptoMapper mapper;

    @Autowired
    public CryptoServiceImpl(CryptoRepository cryptoRepository, CryptoMapper mapper) {
        this.cryptoRepository = cryptoRepository;
        this.mapper = mapper;
    }

    @Override
    public void save(CryptoApiResponse cryptoApiResponse) {
        cryptoRepository.save(mapper.apiToEntity(cryptoApiResponse));
    }

    @Override
    public List<CryptoDTO> getCryptos() {
        return mapper.entityToDto(cryptoRepository.findAll());
    }

    @Override
    public CryptoDTO getCryptoById(String id) {
        Optional<Crypto> crypto=cryptoRepository.findById(id);
        return mapper.entityToDto(crypto.orElseThrow(()->new RecordNotFoundException("crypto", "id", id)));
    }
}
