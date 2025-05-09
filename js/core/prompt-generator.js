window.AtanorCore = window.AtanorCore || {};

// Generator promptów
AtanorCore.PromptGenerator = (function() {
    // Metody publiczne
    return {
        initialize: function() {
            console.log("PromptGenerator zainicjalizowany");
        },
        
        // Funkcja do generowania promptu dla pojedynczego modułu
        generateModulePrompt: function(module, inputText, recursionLevel) {
            try {
                // Pobranie szablonu promptu
                const promptTemplate = AtanorData.promptTemplates[module.title];
                if (!promptTemplate) {
                    throw new Error(`Nie znaleziono szablonu dla modułu: ${module.title}`);
                }
                
                // Wstawienie wartości do promptu
                let modulePrompt = promptTemplate.replace("[WPROWADZONY_TEKST]", inputText);
                modulePrompt = modulePrompt.replace("[POZIOM_REKURSJI]", recursionLevel);
                
                // Dodanie informacji o procesie alchemicznym
                const process = module.process;
                if (process && AtanorData.processes[process]) {
                    const processInfo = `Proces Alchemiczny: ${AtanorData.processes[process].title}\n\n`;
                    modulePrompt = processInfo + modulePrompt;
                }
                
                // Dodanie informacji o kategorii funkcjonalnej
                const category = module.category;
                if (category && AtanorData.categories[category]) {
                    const categoryInfo = `Kategoria Funkcjonalna: ${
                        category.charAt(0).toUpperCase() + category.slice(1)
                    } - ${AtanorData.categories[category]}\n\n`;
                    modulePrompt = categoryInfo + modulePrompt;
                }
                
                return modulePrompt;
            } catch (error) {
                console.error(`Error in generateModulePrompt for ${module.title}:`, error);
                throw error;
            }
        },
        
        // Główna funkcja do generowania połączonego promptu
        generatePrompt: function() {
            try {
                // Pobranie wszystkich wybranych modułów
                const selectedModules = AtanorModules.ModuleManager.getSelectedModules();
                if (!selectedModules || selectedModules.length === 0) {
                    throw new Error("Nie wybrano żadnego modułu");
                }
                
                // Pobranie tekstu wprowadzonego przez użytkownika
                const inputText = document.getElementById("input-text").value.trim();
                
                // Pobranie poziomu rekursji
                const recursionLevel = AtanorModules.RecursionSystem.getCurrentRecursionLevel();
                
                // Jeśli wybrany jest tylko jeden moduł, użyj standardowej metody
                if (selectedModules.length === 1) {
                    const modulePrompt = this.generateModulePrompt(
                        selectedModules[0], 
                        inputText, 
                        recursionLevel
                    );
                    
                    // Rozszerzenie promptu przez menedżera rozszerzeń
                    let finalPrompt = modulePrompt;
                    if (AtanorCore.ExtensionManager) {
                        finalPrompt = AtanorCore.ExtensionManager.extendPrompt(finalPrompt);
                    }
                    
                    return finalPrompt;
                }
                
                // Generowanie promptu dla wielu modułów
                return this.generateCombinedPrompt(selectedModules, inputText, recursionLevel);
            } catch (error) {
                console.error("Error in generatePrompt:", error);
                throw error;
            }
        },
        
        // Nowa funkcja do generowania połączonego promptu z wielu modułów
        generateCombinedPrompt: function(modules, inputText, recursionLevel) {
            try {
                // Informacja o połączonych modułach
                let combinedPrompt = `# POŁĄCZONE MODUŁY TRANSFORMACYJNE\n\n`;
                combinedPrompt += `Działasz jako Złożony System Transformacji Epistemicznej łączący ${modules.length} moduły.\n`;
                combinedPrompt += `Twój cel to wykorzystanie synergii między różnymi podejściami do transformacji tekstów.\n\n`;
                
                // Podsumowanie wybranych modułów
                combinedPrompt += `## Wybrane Moduły\n\n`;
                modules.forEach((module, index) => {
                    combinedPrompt += `### Moduł ${index + 1}: ${module.title}\n`;
                    
                    // Dodaj informację o procesie alchemicznym
                    if (module.process && AtanorData.processes[module.process]) {
                        combinedPrompt += `- Proces Alchemiczny: ${AtanorData.processes[module.process].title}\n`;
                    }
                    
                    // Dodaj informację o kategorii funkcjonalnej
                    if (module.category && AtanorData.categories[module.category]) {
                        combinedPrompt += `- Kategoria Funkcjonalna: ${
                            module.category.charAt(0).toUpperCase() + module.category.slice(1)
                        } - ${AtanorData.categories[module.category]}\n`;
                    }
                    
                    // Dodaj krótki opis
                    combinedPrompt += `- ${module.description}\n\n`;
                });
                
                // Strategia integracji modułów
                combinedPrompt += `## Strategia Integracji\n\n`;
                combinedPrompt += `Przeprowadź transformację w następujących krokach:\n\n`;
                combinedPrompt += `1. Przeprowadź wstępną analizę tekstu, identyfikując jego kluczowe aspekty\n`;
                combinedPrompt += `2. Zastosuj kolejno każdy z wybranych modułów w swojej odpowiedzi, tworząc odrębne sekcje\n`;
                combinedPrompt += `3. W finalnej części, zintegruj perspektywy i tranformacje ze wszystkich modułów\n\n`;
                
                // Dodaj sekcję z instrukcjami dla każdego modułu
                combinedPrompt += `## Instrukcje dla Poszczególnych Modułów\n\n`;
                
                modules.forEach((module, index) => {
                    combinedPrompt += `### Instrukcje dla Modułu ${index + 1}: ${module.title}\n\n`;
                    
                    // Wyciągamy instrukcje z szablonu (pomijając nagłówek, metadane i tekst użytkownika)
                    let moduleTemplate = AtanorData.promptTemplates[module.title];
                    if (moduleTemplate) {
                        // Usuń pierwsze linie zawierające nagłówek roli
                        moduleTemplate = moduleTemplate.split('\n\n').slice(1).join('\n\n');
                        
                        // Usuń linie zawierające placeholdery dla tekstu i poziomu rekursji
                        moduleTemplate = moduleTemplate.replace(/Poziom Rekursji Meta-Poznawczej: \[POZIOM_REKURSJI\]\nTekst użytkownika:\n\[WPROWADZONY_TEKST\]/g, '');
                        
                        combinedPrompt += moduleTemplate.trim() + '\n\n';
                    }
                });
                
                // Dodaj tekst użytkownika i poziom rekursji na końcu
                combinedPrompt += `## Poziom Rekursji Meta-Poznawczej\n\n`;
                combinedPrompt += `Poziom ${recursionLevel}\n\n`;
                
                combinedPrompt += `## Tekst do Transformacji\n\n`;
                combinedPrompt += inputText + '\n\n';
                
                // Dodaj sekcję integracyjną
                combinedPrompt += `## Sekcja Integracyjna\n\n`;
                combinedPrompt += `Na końcu swojej odpowiedzi, stwórz sekcję "Synteza Integratywna", która łączy najważniejsze wglądy i transformacje z wszystkich zastosowanych modułów. Ta synteza powinna reprezentować emergentną wartość wynikającą z połączenia różnych podejść transformacyjnych.\n\n`;
                
                // Rozszerzenie promptu przez menedżera rozszerzeń
                if (AtanorCore.ExtensionManager) {
                    combinedPrompt = AtanorCore.ExtensionManager.extendPrompt(combinedPrompt);
                }
                
                return combinedPrompt;
            } catch (error) {
                console.error("Error in generateCombinedPrompt:", error);
                throw error;
            }
        }
    };
})();
