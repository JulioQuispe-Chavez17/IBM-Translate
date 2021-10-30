package ibmtranslate.demo.service;

import java.io.IOException;


import com.ibm.cloud.sdk.core.security.IamAuthenticator;
import com.ibm.watson.language_translator.v3.LanguageTranslator;
import com.ibm.watson.language_translator.v3.model.TranslateOptions;
import com.ibm.watson.language_translator.v3.model.TranslationResult;
import ibmtranslate.demo.model.Translate;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;


@Service
@Slf4j
public class TranslateService {

    public TranslateOptions translateOptions(Translate translate){
        TranslateOptions translateOptions = new TranslateOptions.Builder()
                .addText(translate.getTranslate())
                .modelId(translate.getIdiom())
                .build();
        return translateOptions;
    }

    public TranslationResult translate(Translate translate) throws IOException {
        IamAuthenticator authenticator = new IamAuthenticator("ELM-atfBucEv-CL18frk6OteTtdero5Pi51PtAQj3UKd");
        LanguageTranslator languageTranslator = new LanguageTranslator("2018-05-01", authenticator);
        languageTranslator.setServiceUrl("https://api.us-south.language-translator.watson.cloud.ibm.com/instances/ec235fec-0dda-46a9-9085-a2515892099f");

        TranslationResult result = languageTranslator.translate(translateOptions(translate))
                .execute().getResult();
             return result;
        }


    }