package com.rafael.crudspring.controller;

import java.util.List;

import com.rafael.model.Curso;
import com.rafael.repository.CursoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/api/cursos")
public class CursosController {

    @Autowired //get e setters
    private CursoRepository cursoRepository;
      
    //@GetMapping
    @RequestMapping(method = RequestMethod.GET)
    public List<Curso> list(){

        return null;
    }
}
