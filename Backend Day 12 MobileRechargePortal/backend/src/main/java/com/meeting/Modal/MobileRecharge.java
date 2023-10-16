package com.meeting.Modal;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="details")
public class MobileRecharge {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String number;
    private String sim;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	public String getSim() {
		return sim;
	}
	public void setSim(String sim) {
		this.sim = sim;
	}
	@Override
	public String toString() {
		return "MobileRecharge [id=" + id + ", name=" + name + ", number=" + number + ", sim=" + sim + "]";
	}
	public MobileRecharge(Long id, String name, String number, String sim) {
		super();
		this.id = id;
		this.name = name;
		this.number = number;
		this.sim = sim;
	}
	public MobileRecharge() {
		super();
	}

}
