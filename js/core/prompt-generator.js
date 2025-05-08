window.AtanorCore = window.AtanorCore || {};

// Generator promptów
AtanorCore.PromptGenerator = (function() {
    // Metody publiczne
    return {
        initialize: function() {
            console.log("PromptGenerator zainicjalizowany");
        },
        
        generatePrompt: function() {
            try {
                const currentModule = AtanorModules.ModuleManager.getCurrentModule();
                if (!currentModule) {
                    throw new Error("Nie wybrano modułu");
                }
                
                // Pobranie szablonu promptu
                const promptTemplate = AtanorData.promptTemplates[currentModule.title];
                if (!promptTemplate) {
                    throw new Error("Nie znaleziono szablonu dla wybranego modułu");
                }
                
                // Pobranie tekstu wprowadzonego przez użytkownika
                const inputText = document.getElementById("input-text").value.trim();
                
                // Pobranie poziomu rekursji
                const recursionLevel = AtanorModules.RecursionSystem.getCurrentRecursionLevel();
                
                // Wstawienie wartości do promptu
                let finalPrompt = promptTemplate.replace("[WPROWADZONY_TEKST]", inputText);
                finalPrompt = finalPrompt.replace("[POZIOM_REKURSJI]", recursionLevel);
                
                // Dodanie informacji o procesie alchemicznym
                const process = currentModule.process;
                if (process && AtanorData.processes[process]) {
                    const processInfo = `Proces Alchemiczny: ${AtanorData.processes[process].title}\n\n`;
                    finalPrompt = processInfo + finalPrompt;
                }
                
                // Dodanie informacji o kategorii funkcjonalnej
                const category = currentModule.category;
                if (category && AtanorData.categories[category]) {
                    const categoryInfo = `Kategoria Funkcjonalna: ${
                        category.charAt(0).toUpperCase() + category.slice(1)
                    } - ${AtanorData.categories[category]}\n\n`;
                    finalPrompt = categoryInfo + finalPrompt;
                }
                
                // Rozszerzenie promptu przez menedżera rozszerzeń
                if (AtanorCore.ExtensionManager) {
                    finalPrompt = AtanorCore.ExtensionManager.extendPrompt(finalPrompt);
                }
                
                return finalPrompt;
            } catch (error) {
                console.error("Error in generatePrompt:", error);
                throw error;
            }
        }
    };
})();
