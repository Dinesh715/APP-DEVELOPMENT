package com.bank.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.Modal.BankAccount;
import com.bank.Repository.BankAccountRepository;

import java.util.List;
import java.util.Optional;

@Service
public class BankAccountService {
    private final BankAccountRepository bankAccountRepository;

    @Autowired
    public BankAccountService(BankAccountRepository bankAccountRepository) {
        this.bankAccountRepository = bankAccountRepository;
    }

    public List<BankAccount> getAllBankAccounts() {
        return bankAccountRepository.findAll();
    }

    public Optional<BankAccount> getBankAccountById(Long id) {
        return bankAccountRepository.findById(id);
    }

    public BankAccount createBankAccount(BankAccount bankAccount) {
        return bankAccountRepository.save(bankAccount);
    }

    public BankAccount updateBankAccount(Long id, BankAccount updatedBankAccount) {
        if (bankAccountRepository.existsById(id)) {
            updatedBankAccount.setId(id);
            return bankAccountRepository.save(updatedBankAccount);
        }
        return null; // Handle the case where the ID doesn't exist
    }

    public void deleteBankAccount(Long id) {
        bankAccountRepository.deleteById(id);
    }
}