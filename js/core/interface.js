window.AtanorCore = window.AtanorCore || {};

// Interfejs użytkownika
AtanorCore.Interface = (function() {
    // Elementy interfejsu
    let inputText;
    let outputText;
    let statusDisplay;
    let transmuteBtn;
    let resetBtn;
    let loadingIndicator;
    let copyButton;
    let copiedMessage;
    let clearModulesBtn; // Nowy przycisk do czyszczenia wybranych modułów
    
    // Metody publiczne
    return {
        initialize: function() {
            // Inicjalizacja elementów interfejsu
            inputText = document.getElementById("input-text");
            outputText = document.getElementById("output-text");
            statusDisplay = document.getElementById("status-display");
            transmuteBtn = document.getElementById("transmute-btn");
            resetBtn = document.getElementById("reset-btn");
            loadingIndicator = document.querySelector(".loading");
            copyButton = document.getElementById("copy-button");
            copiedMessage = document.getElementById("copied-message");
            
            // Dodaj przycisk do czyszczenia wybranych modułów
            this.addClearModulesButton();
            
            // Inicjalizacja przycisków
            this.setupButtons();
        },
        
        // Nowa funkcja dodająca przycisk do czyszczenia modułów
        addClearModulesButton: function() {
            // Znajdź kontener listy wybranych modułów (będzie dodany przez ModuleManager)
            const modulesList = document.getElementById("selected-modules-list");
            if (modulesList) {
                // Sprawdź, czy przycisk już istnieje
                clearModulesBtn = document.getElementById("clear-modules-btn");
                if (!clearModulesBtn) {
                    // Utwórz przycisk
                    clearModulesBtn = document.createElement("button");
                    clearModulesBtn.id = "clear-modules-btn";
                    clearModulesBtn.className = "clear-modules-btn";
                    clearModulesBtn.innerHTML = '<i class="fas fa-trash"></i> Wyczyść wszystkie moduły';
                    
                    // Wstaw przycisk do nagłówka listy modułów
                    const header = modulesList.querySelector("h4");
                    if (header) {
                        header.parentNode.insertBefore(clearModulesBtn, header.nextSibling);
                    } else {
                        modulesList.appendChild(clearModulesBtn);
                    }
                    
                    // Dodaj obsługę zdarzenia
                    clearModulesBtn.addEventListener("click", () => {
                        AtanorModules.ModuleManager.clearSelectedModules();
                        this.updateStatus("Status: Wyczyszczono wszystkie wybrane moduły");
                    });
                }
            } else {
                // Jeśli lista jeszcze nie istnieje, spróbuj ponownie za chwilę
                setTimeout(() => this.addClearModulesButton(), 500);
            }
        },
        
        setupButtons: function() {
            // Transmute button
            if (transmuteBtn) {
                transmuteBtn.addEventListener("click", () => {
                    const selectedModules = AtanorModules.ModuleManager.getSelectedModules();
                    
                    if (!selectedModules || selectedModules.length === 0) {
                        statusDisplay.textContent = "Status: Wybierz co najmniej jeden moduł transformacji";
                        return;
                    }

                    if (!inputText.value.trim()) {
                        statusDisplay.textContent = "Status: Wprowadź tekst do transformacji";
                        return;
                    }

                    // Show loading indicator
                    this.showLoading();

                    // Generowanie promptu
                    try {
                        const prompt = AtanorCore.PromptGenerator.generatePrompt();
                        this.setOutput(prompt);
                        this.updateStatus(`Status: Prompt wygenerowany (${selectedModules.length} ${
                            selectedModules.length === 1 ? 'moduł' : 
                            (selectedModules.length >= 2 && selectedModules.length <= 4) ? 'moduły' : 'modułów'
                        })`);
                    } catch (error) {
                        console.error("Error:", error);
                        this.setOutput("Wystąpił błąd podczas generowania promptu: " + error.message);
                        this.updateStatus("Status: Błąd generowania promptu");
                    } finally {
                        this.hideLoading();
                    }
                });
            }

            // Reset button
            if (resetBtn) {
                resetBtn.addEventListener("click", () => {
                    // Reset text areas
                    inputText.value = "";
                    outputText.textContent = "Wynik transformacji pojawi się tutaj po zainicjowaniu procesu...";

                    // Reset module selection
                    AtanorModules.ModuleManager.clearSelectedModules();

                    // Reset all filters
                    if (AtanorModules.FilterSystem) {
                        AtanorModules.FilterSystem.clearAllFilters();
                    }

                    // Reset status
                    this.updateStatus("Status: Gotowy");
                });
            }
            
            // Copy button
            if (copyButton) {
                copyButton.addEventListener("click", () => {
                    // Sprawdź, czy jest coś do skopiowania
                    const promptText = outputText.textContent.trim();
                    if (
                        !promptText ||
                        promptText === 'Wygenerowany prompt pojawi się tutaj po wybraniu modułu i kliknięciu "Transmutuj"...' ||
                        promptText === 'Wynik transformacji pojawi się tutaj po zainicjowaniu procesu...'
                    ) {
                        this.updateStatus("Status: Brak promptu do skopiowania");
                        return;
                    }

                    // Kopiowanie do schowka
                    navigator.clipboard
                        .writeText(promptText)
                        .then(() => {
                            // Wyświetlenie komunikatu o skopiowaniu
                            copiedMessage.style.display = "inline";
                            this.updateStatus("Status: Prompt skopiowany do schowka");

                            // Ukrycie komunikatu po 2 sekundach
                            setTimeout(() => {
                                copiedMessage.style.display = "none";
                            }, 2000);
                        })
                        .catch((err) => {
                            console.error("Błąd podczas kopiowania:", err);
                            this.updateStatus("Status: Błąd podczas kopiowania do schowka");
                        });
                });
            }
        },
        
        updateStatus: function(message) {
            if (statusDisplay) {
                statusDisplay.textContent = message;
            }
        },
        
        showLoading: function() {
            if (loadingIndicator) {
                loadingIndicator.style.display = "block";
            }
            if (outputText) {
                outputText.style.display = "none";
            }
        },
        
        hideLoading: function() {
            if (loadingIndicator) {
                loadingIndicator.style.display = "none";
            }
            if (outputText) {
                outputText.style.display = "block";
            }
        },
        
        setOutput: function(text) {
            if (outputText) {
                outputText.textContent = text;
            }
        }
    };
})();
