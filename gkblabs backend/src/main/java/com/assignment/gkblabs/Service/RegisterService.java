package com.assignment.gkblabs.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Ganta.Gshare.Entity.HashtagsEntity;
import com.assignment.gkblabs.Entity.RegisterEntity;
import com.assignment.gkblabs.Repository.RegisterRepository;

@Service
public class RegisterService {
	@Autowired
	private RegisterRepository registerRepository;
	public List<RegisterEntity> getRegister(){
		return registerRepository.findAll();
	}
	public RegisterEntity insertRegister(RegisterEntity he) {
		return registerRepository.save(he);
	}
	public Optional<RegisterEntity> getById(Integer ID){
		return registerRepository.findById(ID);
	}
	
	public void deleteById(int ID){
		registerRepository.deleteById(ID);
	}
	public RegisterEntity updateRegister(RegisterEntity he){
		return registerRepository.save(he);
	}

}
