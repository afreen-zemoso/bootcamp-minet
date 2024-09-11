package com.minet.cryptoservice.service;

import com.minet.cryptoservice.dto.CryptoApiResponse;
import com.minet.cryptoservice.dto.CryptoDTO;
import java.util.List;

public interface CryptoService {
    public void save(CryptoApiResponse cryptoApiResponse);

    public List<CryptoDTO> getCryptos();

    public CryptoDTO getCryptoById(String id);

}
