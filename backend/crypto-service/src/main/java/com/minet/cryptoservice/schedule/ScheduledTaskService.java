package com.minet.cryptoservice.schedule;

import com.minet.cryptoservice.dto.CryptoApiResponse;
import com.minet.cryptoservice.service.CryptoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
@Slf4j
public class ScheduledTaskService {
    private final CryptoService cryptoService;
    private final RestTemplate restTemplate;
    @Autowired
    public ScheduledTaskService(CryptoService cryptoService, RestTemplate restTemplate) {
        this.cryptoService = cryptoService;
        this.restTemplate = restTemplate;
    }

    @Value("${crypto.api.url}")
    private String cryptoApiUrl;
    @Scheduled(cron = "0 0 * * * *")
    public void updateCryptoData(){
        CryptoApiResponse[] cryptos=restTemplate.getForObject(cryptoApiUrl, CryptoApiResponse[].class);
        for (CryptoApiResponse crypto:cryptos){
            cryptoService.save(crypto);
        }
        log.info("updated cryptos");
    }
}
