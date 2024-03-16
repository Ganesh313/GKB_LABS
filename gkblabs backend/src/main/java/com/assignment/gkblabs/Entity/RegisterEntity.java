package com.assignment.gkblabs.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="register")
public class RegisterEntity {
@Id
@Column(name="ID")
private int ID;
@Column(name="Name")
private String Name;
@Column(name="Email")
private String Email;
@Column(name="Age")
private int Age;
@Column(name="DOB")
private String DOB;
public RegisterEntity() {
	super();
	// TODO Auto-generated constructor stub
}
public RegisterEntity(int iD, String name, String email, int age, String dOB) {
	super();
	ID = iD;
	Name = name;
	Email = email;
	Age = age;
	DOB = dOB;
}
public int getID() {
	return ID;
}
public void setID(int iD) {
	ID = iD;
}
public String getName() {
	return Name;
}
public void setName(String name) {
	Name = name;
}
public String getEmail() {
	return Email;
}
public void setEmail(String email) {
	Email = email;
}
public int getAge() {
	return Age;
}
public void setAge(int age) {
	Age = age;
}
public String getDOB() {
	return DOB;
}
public void setDOB(String dOB) {
	DOB = dOB;
}

}
