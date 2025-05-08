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
            
            // Inicjalizacja przycisków
            this.setupButtons();
        },
        
        setupButtons: function() {
            // Transmute button
            if (transmuteBtn) {
                transmuteBtn.addEventListener("click", function() {
                    const currentModule = AtanorModules.ModuleManager.getCurrentModule();
                    
                    if (!currentModule) {
                        statusDisplay.textContent = "Status: Wybierz moduł transformacji";
                        return;
                    }

                    if (!inputText.value.trim()) {
                        statusDisplay.textContent = "Status: Wprowadź tekst do transformacji";
                        return;
                    }

                    // Show loading indicator
                    loadingIndicator.style.display = "block";
                    outputText.style.display = "none";

                    // Generowanie promptu
                    try {
                        const prompt = AtanorCore.PromptGenerator.generatePrompt();
                        outputText.textContent = prompt;
                        outputText.style.display = "block";
                        statusDisplay.textContent = "Status: Prompt wygenerowany";
                    } catch (error) {
                        console.error("Error:", error);
                        outputText.textContent = "Wystąpił błąd podczas generowania promptu: " + error.message;
                        outputText.style.display = "block";
                        statusDisplay.textContent = "Status: Błąd generowania promptu";
                    } finally {
                        loadingIndicator.style.display = "none";
                    }
                });
            }

            // Reset button
            if (resetBtn) {
                resetBtn.addEventListener("click", function() {
                    // Reset text areas
                    inputText.value = "";
                    outputText.textContent = "Wynik transformacji pojawi się tutaj po zainicjowaniu procesu...";

                    // Reset module selection
                    document.querySelectorAll(".module-item").forEach((item) => item.classList.remove("active"));
                    AtanorModules.ModuleManager.setCurrentModule(null);
                    document.getElementById("selected-module-title").textContent = "Brak";
                    document.getElementById("selected-module-description").textContent = "Wybierz moduł transformacji.";

                    // Reset all filters
                    AtanorModules.FilterSystem.clearAllFilters();

                    // Reset status
                    statusDisplay.textContent = "Status: Gotowy";
                });
            }
            
            // Copy button
            if (copyButton) {
                copyButton.addEventListener("click", function() {
                    // Sprawdź, czy jest coś do skopiowania
                    const promptText = outputText.textContent.trim();
                    if (
                        !promptText ||
                        promptText === 'Wygenerowany prompt pojawi się tutaj po wybraniu modułu i kliknięciu "Transmutuj"...'
                    ) {
                        statusDisplay.textContent = "Status: Brak promptu do skopiowania";
                        return;
                    }

                    // Kopiowanie do schowka
                    navigator.clipboard
                        .writeText(promptText)
                        .then(() => {
                            // Wyświetlenie komunikatu o skopiowaniu
                            copiedMessage.style.display = "inline";
                            statusDisplay.textContent = "Status: Prompt skopiowany do schowka";

                            // Ukrycie komunikatu po 2 sekundach
                            setTimeout(() => {
                                copiedMessage.style.display = "none";
                            }, 2000);
                        })
                        .catch((err) => {
                            console.error("Błąd podczas kopiowania:", err);
                            statusDisplay.textContent = "Status: Błąd podczas kopiowania do schowka";
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
