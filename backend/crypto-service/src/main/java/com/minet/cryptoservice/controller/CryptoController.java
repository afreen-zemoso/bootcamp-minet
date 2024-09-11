package com.minet.cryptoservice.controller;

import com.minet.cryptoservice.dto.CryptoDTO;
import com.minet.cryptoservice.service.CryptoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/crypto")
public class CryptoController {
    private final CryptoService cryptoService;
    @Autowired
    public CryptoController(CryptoService cryptoService) {
        this.cryptoService = cryptoService;
    }
    @GetMapping("")
    public List<CryptoDTO> getCryptoCoins(){
        log.info(">>>>>> Get all crypto currencies");
       return cryptoService.getCryptos();
    }
    @GetMapping("/{id}")
    public CryptoDTO getCrypto(@PathVariable("id") String id){
        return cryptoService.getCryptoById(id);
    }
}
