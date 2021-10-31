package ibmtranslate.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

import ibmtranslate.demo.controller.TranslateController;
import ibmtranslate.demo.model.Translate;

public class TranslateWords {
    @Test
    public void translateWordToEnglish() throws Exception{
        Translate obj = new Translate();
        obj.setWords("Hola Mundo");
        obj.setIdiom("es-en");
        TranslateController api = new TranslateController();
        assertEquals(200, api.save(obj).getStatusCode().value());
        assertEquals("Hello World", api.save(obj).getBody().getTranslations().get(0).getTranslation());
    

    }
}
