package ibmtranslate.demo.controller;


import com.ibm.watson.language_translator.v3.model.TranslationResult;
import ibmtranslate.demo.model.Translate;
import ibmtranslate.demo.service.TranslateService;
import org.springframework.web.bind.annotation.*;


import java.io.IOException;

@CrossOrigin({"*"})
@RestController
@RequestMapping(path = "/translate")

public class TranslateController {

        private final TranslateService service = new TranslateService();

        @PostMapping("/result")
        public TranslationResult save(@RequestBody Translate model) throws IOException {
              return service.translate(model);
        }



}
