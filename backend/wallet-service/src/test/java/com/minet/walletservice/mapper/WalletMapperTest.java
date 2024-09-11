package com.minet.walletservice.mapper;

import com.minet.walletservice.dto.WalletDTO;
import com.minet.walletservice.dto.WalletRequest;
import com.minet.walletservice.entity.Wallet;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class WalletMapperTest {

    private WalletMapper walletMapper;

    @BeforeEach
    public void setup() {
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        walletMapper = new WalletMapper(mapper);
    }

    @Test
    void givenListOfEntity_thenReturnListOfDTO() {
        List<Wallet> wallets = Arrays.asList(
                Wallet.builder().id(1).totalBalance(1000.0).userId(1).cryptoId("bitcoin").build(),
                Wallet.builder().id(2).totalBalance(2000.0).userId(1).cryptoId("ethereum").build()
        );

        List<WalletDTO> walletDTOs = walletMapper.entityToDto(wallets);
        assertEquals(wallets.size(), walletDTOs.size());
    }

    @Test
    void givenEntity_thenReturnDTO() {
        Wallet wallet = Wallet.builder().id(1).totalBalance(34.90).userId(1).cryptoId("bitcoin").build();
        WalletDTO walletDTO = walletMapper.entityToDto(wallet);

        assertEquals(wallet.getTotalBalance(), walletDTO.getTotalBalance());
        assertEquals(wallet.getCryptoId(), walletDTO.getCryptoId());
    }

    @Test
    void givenDTO_thenReturnEntity() {
        WalletDTO walletDTO = WalletDTO.builder().totalBalance(1000.0).cryptoId("bitcoin").build();
        Wallet wallet = walletMapper.dtoToEntity(walletDTO);
        assertEquals(walletDTO.getTotalBalance(), wallet.getTotalBalance());
        assertEquals(walletDTO.getCryptoId(), wallet.getCryptoId());
    }

    @Test
    void testRequestToEntity() {
        WalletRequest walletRequest = WalletRequest.builder().totalBalance(0.43).cryptoId("bitcoin").build();
        Wallet wallet = walletMapper.requestToEntity(walletRequest);
        assertEquals(walletRequest.getTotalBalance(), wallet.getTotalBalance());
        assertEquals(walletRequest.getCryptoId(), wallet.getCryptoId());
    }
}
