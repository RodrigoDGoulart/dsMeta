package com.devsuperior.dsmeta.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "tb_sales")
public class Sale {
	
	//1 - criar entidade sale
	//2 - fazer mapeamento relacional (com javax.persistence)
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	//long = numero inteiro
	private int visited;
	private String sellerName;
	private int deals;
	private Double amount;
	private LocalDate date;
	
	public Sale() {}
	
	public Sale(Long id, int visited, String sellerName, int deals, Double amount, LocalDate date) {
		this.id = id;
		this.visited = visited;
		this.sellerName = sellerName;
		this.deals = deals;
		this.amount = amount;
		this.date = date;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public int getVisited() {
		return visited;
	}
	public void setVisited(int visited) {
		this.visited = visited;
	}
	public String getSellerName() {
		return sellerName;
	}
	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}
	public int getDeals() {
		return deals;
	}
	public void setDeals(int deals) {
		this.deals = deals;
	}
	public Double getAmount() {
		return amount;
	}
	public void setAmount(Double amount) {
		this.amount = amount;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	
	
}
