package com.bank.Modal;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="accountDetails")
public class BankAccount {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    private String bankName;
	    private String ifscCode;
	    private String accountNumber;
	    private String accountType;

	    // Default constructor
	    public BankAccount() {
	    }

	    // Parameterized constructor
	    public BankAccount(Long id, String bankName, String ifscCode, String accountNumber, String accountType) {
	        this.id = id;
	        this.bankName = bankName;
	        this.ifscCode = ifscCode;
	        this.accountNumber = accountNumber;
	        this.accountType = accountType;
	    }

	    // Getter and Setter methods
	    public Long getId() {
	        return id;
	    }

	    public void setId(Long id) {
	        this.id = id;
	    }

	    public String getBankName() {
	        return bankName;
	    }

	    public void setBankName(String bankName) {
	        this.bankName = bankName;
	    }

	    public String getIfscCode() {
	        return ifscCode;
	    }

	    public void setIfscCode(String ifscCode) {
	        this.ifscCode = ifscCode;
	    }

	    public String getAccountNumber() {
	        return accountNumber;
	    }

	    public void setAccountNumber(String accountNumber) {
	        this.accountNumber = accountNumber;
	    }

	    public String getAccountType() {
	        return accountType;
	    }

	    public void setAccountType(String accountType) {
	        this.accountType = accountType;
	    }

	    @Override
	    public String toString() {
	        return "BankAccount{" +
	                "id=" + id +
	                ", bankName='" + bankName + '\'' +
	                ", ifscCode='" + ifscCode + '\'' +
	                ", accountNumber='" + accountNumber + '\'' +
	                ", accountType='" + accountType + '\'' +
	                '}';
	    }
	}

