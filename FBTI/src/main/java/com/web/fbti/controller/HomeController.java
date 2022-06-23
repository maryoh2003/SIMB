package com.web.fbti.controller ;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.web.fbti.service.QuestionServiceImpl;

@Controller
public class HomeController {

	@Autowired(required=true)
	QuestionServiceImpl questionService;
	
	@RequestMapping(value = "/home", method = RequestMethod.GET)
	public String home(Model model) {
		
		questionService.addQuestion();

        return "index.html" ;
    }
}
