package com.minet.apigateway.config;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.web.client.RestTemplate;

class AppConfigTest {

    @Test
    void testRestTemplateBean_ReturnsNotNull() {
        // Create an instance of the AppConfig class
        AppConfig appConfig = new AppConfig();

        // Call the restTemplate() method to get the RestTemplate bean
        RestTemplate restTemplate = appConfig.restTemplate();

        // Assert that the RestTemplate bean is not null
        assertNotNull(restTemplate);
    }
}
