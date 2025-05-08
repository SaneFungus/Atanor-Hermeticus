window.AtanorCore = window.AtanorCore || {};

// Menedżer rozszerzeń
AtanorCore.ExtensionManager = (function() {
    // Metody publiczne
    return {
        initialize: function() {
            // Inicjalizacja ścieżek praktycznych
            if (AtanorExtensions && AtanorExtensions.Pathways) {
                AtanorExtensions.Pathways.initialize();
            }
            
            // Inicjalizacja formatów prezentacji
            if (AtanorExtensions && AtanorExtensions.Formats) {
                AtanorExtensions.Formats.initialize();
            }
            
            console.log("ExtensionManager zainicjalizowany");
        },
        
        extendPrompt: function(prompt) {
            // Pobranie podstawowego promptu
            let finalPrompt = prompt;
            
            // Sprawdzenie czy mamy aktywną ścieżkę praktyczną
            if (AtanorExtensions && AtanorExtensions.Pathways) {
                const currentPathway = AtanorExtensions.Pathways.getCurrentPathway();
                
                if (currentPathway && currentPathway.template) {
                    // Dodanie szablonu ścieżki
                    finalPrompt += "\n\n--- STRUKTURA PRAKTYCZNEJ ODPOWIEDZI ---\n";
                    finalPrompt += currentPathway.template;
                }
            }
            
            // Sprawdzenie czy mamy wybrany format prezentacji
            if (AtanorExtensions && AtanorExtensions.Formats) {
                const currentFormat = AtanorExtensions.Formats.getCurrentFormat();
                
                if (currentFormat && currentFormat.template) {
                    // Dodanie formatu prezentacji
                    finalPrompt += "\n\n--- FORMAT PREZENTACJI WIEDZY ---\n";
                    finalPrompt += currentFormat.template;
                }
            }
            
            // Dodanie ogólnych instrukcji dotyczących łączenia głębi i przystępności
            finalPrompt += `
            
WAŻNE WSKAZÓWKI DOTYCZĄCE ODPOWIEDZI:

1. Zachowaj filozoficzną głębię analizy, jednocześnie dbając o przystępność przekazu.

2. Używaj konkretnych przykładów, metafor i analogii dla ilustracji złożonych koncepcji.

3. Struktura odpowiedzi powinna być przejrzysta i logiczna, prowadząca czytelnika od ogólnego zrozumienia do szczegółowych aspektów.

4. Pamiętaj o równowadze między abstrakcją a konkretem, teorią a praktyką.

5. Zakończ odpowiedź konkretnym, praktycznym podsumowaniem lub sugestią kolejnych kroków.
`;
            
            return finalPrompt;
        }
    };
})();
