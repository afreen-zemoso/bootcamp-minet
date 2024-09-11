package com.minet.walletservice.mapper;

import com.minet.walletservice.dto.WalletDTO;
import com.minet.walletservice.dto.WalletRequest;
import com.minet.walletservice.entity.Wallet;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class WalletMapper {
    private final ModelMapper modelMapper;

    @Autowired
    public WalletMapper(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public List<WalletDTO> entityToDto(List<Wallet> wallets) {
        return wallets.stream().map(wallet -> modelMapper.map(wallet, WalletDTO.class)).collect(Collectors.toList());
    }

    public WalletDTO entityToDto(Wallet wallet) {
        return modelMapper.map(wallet, WalletDTO.class);
    }

    public Wallet dtoToEntity(WalletDTO walletDto) {
        return modelMapper.map(walletDto, Wallet.class);
    }

    public Wallet requestToEntity(WalletRequest walletRequest) {
        return modelMapper.map(walletRequest, Wallet.class);
    }
}



