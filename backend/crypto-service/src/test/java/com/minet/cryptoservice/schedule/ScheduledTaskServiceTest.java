package com.minet.cryptoservice.schedule;

import com.minet.cryptoservice.dto.CryptoApiResponse;
import com.minet.cryptoservice.service.impl.CryptoServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.client.RestTemplate;
import static org.mockito.Mockito.*;
class ScheduledTaskServiceTest {
    @Mock
    private CryptoServiceImpl cryptoService;
    @InjectMocks
    private ScheduledTaskService scheduledTaskService;
    @Mock
    public RestTemplate restTemplate;

    @Value("${crypto.api.url}")
    private String cryptoApiUrl;
    @BeforeEach
    public void setup() throws Exception{
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testSchedule(){
        CryptoApiResponse[] cryptoApiResponses=new CryptoApiResponse[2] ;
        cryptoApiResponses[0]=CryptoApiResponse.builder().id("bitcoin").build();
        cryptoApiResponses[1]=CryptoApiResponse.builder().id("XRP").build();
        Class<CryptoApiResponse[]> responseType = CryptoApiResponse[].class;
        when(restTemplate.getForObject(cryptoApiUrl,responseType)).thenReturn(cryptoApiResponses);
        doAnswer(invocationOnMock -> null).when(cryptoService).save(any(CryptoApiResponse.class));
        scheduledTaskService.updateCryptoData();
        verify(cryptoService,times(2)).save(any(CryptoApiResponse.class));

    }
}
