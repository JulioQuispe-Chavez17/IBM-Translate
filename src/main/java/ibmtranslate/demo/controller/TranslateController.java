package ibmtranslate.demo.controller;


import com.ibm.watson.language_translator.v3.model.TranslationResult;
import ibmtranslate.demo.model.Translate;
import ibmtranslate.demo.service.TranslateService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin({"*"})
@RestController
@RequestMapping(path = "/translate")

public class TranslateController {

        private final TranslateService service = new TranslateService();

        @PostMapping("/result")
        public ResponseEntity<TranslationResult> save(@RequestBody Translate model) {
              return new ResponseEntity<>(service.translate(model), HttpStatus.OK);
        }



}
