package com.assignment.gkblabs.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.assignment.gkblabs.Entity.RegisterEntity;
import com.assignment.gkblabs.Service.RegisterService;

@RestController
@RequestMapping("/gkb/")
@CrossOrigin("*")
public class RegisterController {
@Autowired
private RegisterService registerService;
@GetMapping("getall")
public List<RegisterEntity> getRegisterDetails(){
	return registerService.getRegister();

}
@PostMapping("insert")
public RegisterEntity insertRegisterDetails(@RequestBody RegisterEntity register) {
	return registerService.insertRegister(register);
}
@GetMapping("getbyid/{ID}")
 public Optional<RegisterEntity> getById(@PathVariable("ID") int ID){
	 return registerService.getById(ID);
 }
 
 @DeleteMapping("deletebyid/{ID}")
 public void deleteById(@PathVariable("ID") int ID){
	 registerService.deleteById(ID);
 }
 
 @PutMapping("updateRegister")
 public RegisterEntity updateHashtags(@RequestBody RegisterEntity he){
	 return registerService.updateRegister(he);
 }
}
