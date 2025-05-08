// atanor-simple-fix.js
document.addEventListener("DOMContentLoaded", function() {
    console.log("Uruchamianie naprawy Atanor...");

    // DEFINICJE ŚCIEŻEK PRAKTYCZNYCH
    const practicalPathways = {
        understanding: {
            name: "Ścieżka Zrozumienia",
            description: "Eksploracja znaczenia i istoty zagadnienia poprzez wyodrębnienie kluczowych pojęć, przetłumaczenie ich na różne perspektywy i rozpoznanie ukrytych struktur myślowych.",
            modules: ["Destylacja Korpusów Wiedzy", "Mediacja Epistemiczna", "Zwierciadło Kognitywne"],
            template: `
# Kluczowe pojęcie: [Nazwa pojęcia]

## Wyjaśnienie istoty
[Głęboka analiza istoty i znaczenia zagadnienia]

## Translacja interdyscyplinarna 
[Wyjaśnienie koncepcji z perspektywy różnych dyscyplin]

## Ukryte struktury i założenia
[Identyfikacja głębszych struktur myślowych i niewypowiedzianych założeń]

## Implikacje i znaczenie
[Eksploracja konsekwencji i szerszego znaczenia tematu]
            `
        },
        solving: {
            name: "Ścieżka Rozwiązywania Problemów",
            description: "Transformacja problemu poprzez jego dekompozycję, przeformułowanie w alternatywnych ramach pojęciowych i eksplorację różnorodnych trajektorii rozwiązań.",
            modules: ["Analiza Elementarna", "Przestrzeń Konceptualnego Rozponowienia", "Generator Scenariuszy Epistemicznych"],
            template: `
# Problem: [Zwięzły opis problemu]

## Dekompozycja problemu
[Analityczny rozkład problemu na komponenty i identyfikacja kluczowych elementów]

## Alternatywne ramy konceptualne
[Przeformułowanie problemu w różnych ramach pojęciowych i kontekstach]

## Potencjalne trajektorie rozwiązań
[Eksploracja różnorodnych ścieżek rozwiązania i ich możliwych konsekwencji]

## Synteza i rekomendacja
[Integracja najwartościowszych elementów w kompleksową propozycję]
            `
        },
        coping: {
            name: "Ścieżka Radzenia Sobie",
            description: "Eksploracja głębszych wymiarów sytuacji, odkrywanie pominiętych perspektyw i integracja sprzecznych elementów w nowe, spójne podejście.",
            modules: ["Katalizator Samoświadomości Epistemicznej", "Reaktywator Zmarginalizowanych Perspektyw", "Dialektyczne Laboratorium Napięć"],
            template: `
# Sytuacja: [Opis sytuacji wymagającej strategii radzenia sobie]

## Głębsze wymiary i założenia
[Identyfikacja fundamentalnych założeń epistemologicznych i ich wpływu]

## Perspektywy zmarginalizowane
[Eksploracja pominiętych lub odrzuconych perspektyw istotnych dla sytuacji]

## Produktywne napięcia
[Identyfikacja i analiza dialektycznych napięć oraz ich potencjału transformacyjnego]

## Integracyjne podejście
[Propozycja zintegrowanego podejścia uwzględniającego różnorodne perspektywy]
            `
        },
        implementing: {
            name: "Ścieżka Implementacji",
            description: "Transmutacja abstrakcyjnych koncepcji w wykonalne kroki działania, konkretne plany i namacalne manifestacje.",
            modules: ["Interfejs Intencji-Implementacji", "Operationalisator", "Incarnatio Conceptuum"],
            template: `
# Koncepcja do implementacji: [Nazwa koncepcji]

## Od intencji do działania
[Przekształcenie ogólnych intencji w konkretne, mierzalne cele]

## Plan implementacji
[Szczegółowy plan działania z podziałem na etapy, zasoby i odpowiedzialności]

## Manifestacje i ucieleśnienia
[Konkretne formy, w jakich koncepcja może zostać ucieleśniona]

## Monitorowanie i adaptacja
[Strategie monitorowania postępów i adaptacji do zmieniających się warunków]
            `
        },
        creative: {
            name: "Ścieżka Twórczej Eksploracji",
            description: "Odkrywanie i katalizowanie twórczego potencjału ukrytego w koncepcie, otwieranie nowych przestrzeni eksploracji i rozszerzanie wymiarów konceptualnych.",
            modules: ["Inkubator Emergentnego Rozumienia", "Przestrzeń Konceptualnego Rozponowienia", "Amplifikacja Kognitywna"],
            template: `
# Potencjał twórczy: [Nazwa konceptu]

## Zalążki rozwojowe
[Identyfikacja elementów konceptu posiadających potencjał twórczego rozwoju]

## Przestrzenie eksploracji
[Mapowanie możliwych przestrzeni eksploracji konceptualnej i artystycznej]

## Nieoczywiste powiązania i implikacje
[Odkrywanie nieoczywistych połączeń i implikacji rozszerzających wymiary konceptu]

## Emergentne możliwości
[Identyfikacja emergentnych właściwości i możliwości wyłaniających się z procesu eksploracji]
            `
        },
        didactic: {
            name: "Ścieżka Dydaktyczna",
            description: "Transformacja abstrakcyjnych koncepcji w formę odpowiednią dla celów edukacyjnych, z uwzględnieniem różnych perspektyw poznawczych i potrzeb dydaktycznych.",
            modules: ["Mediacja Epistemiczna", "Ekstrakcja Esencji", "Incarnatio Conceptuum"],
            template: `
# Temat dydaktyczny: [Nazwa tematu]

## Esencja konceptualna
[Wyodrębnienie kluczowych elementów koncepcyjnych stanowiących jądro tematu]

## Translacja dydaktyczna
[Przekład złożonych idei na język dostępny dla różnych poziomów zaawansowania]

## Ścieżki nauczania
[Propozycje różnych ścieżek nauczania dostosowanych do różnych stylów uczenia się]

## Materiały i ćwiczenia
[Konkretne propozycje materiałów dydaktycznych, ćwiczeń i metod ewaluacji]
            `
        },
        critical: {
            name: "Ścieżka Krytycznej Analizy",
            description: "Pogłębiona analiza krytyczna, wydobywająca ukryte założenia, ograniczenia i problematyczne aspekty zagadnienia.",
            modules: ["Krytyczna Kalcynacja", "Metapoznawczy Archeolog Założeń", "Kartograf Granic Poznawczych"],
            template: `
# Przedmiot krytyki: [Nazwa zagadnienia]

## Identyfikacja problematycznych aspektów
[Krytyczna analiza nieścisłości, sprzeczności i słabości argumentacyjnych]

## Archeologia założeń
[Odkrywanie ukrytych założeń epistemologicznych, aksjologicznych i metodologicznych]

## Granice i ograniczenia
[Mapowanie granic stosowalności, ograniczeń konceptualnych i punktów ślepych]

## Kierunki przekroczenia
[Propozycje kierunków rozwoju przekraczających zidentyfikowane ograniczenia]
            `
        }
    };

    // DEFINICJE FORMATÓW PREZENTACJI
    const knowledgeFormats = {
        original: {
            name: "Wyjście Oryginalne (Hermetyczne)",
            description: "Pełna analiza filozoficzno-epistemiczna bez uproszczeń, zachowująca wszystkie niuanse i złożoności.",
            template: "" // Pusty template oznacza brak modyfikacji oryginalnego promptu
        },
        academic: {
            name: "Format Akademicki",
            description: "Struktura typowa dla artykułów naukowych, z jasno wydzielonymi częściami i formalnym językiem akademickim.",
            template: `
INSTRUKCJA FORMATOWANIA:
Przedstaw wyniki analizy w formie akademickiego artykułu z następującymi częściami:

# TYTUŁ
[Zwięzły, akademicki tytuł odzwierciedlający główne zagadnienie]

## Abstrakt
[1-2 akapity przedstawiające istotę i wyniki analizy]

## Wprowadzenie
[Tło problemowe i kontekst badawczy]

## Metodologia
[Opis zastosowanego podejścia analitycznego]

## Analiza
[Właściwa część analityczna podzielona na podsekcje]

## Wnioski
[Synteza wyników i ich znaczenie]

## Bibliografia
[Sugerowane źródła rozwijające temat]
            `
        },
        // [inne formaty zostały pominięte dla zwięzłości]
    };

    // STAN APLIKACJI
    let currentPathway = null;
    let currentFormat = null;
    let currentModule = null;

    // PRÓBA ZNALEZIENIA ORYGINALNEJ FUNKCJI
    const originalGeneratePrompt = window.generatePrompt || function() {
        return document.getElementById("input-text").value || "Brak tekstu wejściowego";
    };

    // NADPISANIE FUNKCJI GENEROWANIA PROMPTU
    window.generatePrompt = function() {
        let basePrompt = "";

        try {
            // Najpierw spróbuj użyć oryginalnej funkcji
            basePrompt = originalGeneratePrompt();
        } catch (e) {
            console.warn("Nie udało się wywołać oryginalnej funkcji generatePrompt:", e);
            
            // Jeśli się nie udało, użyj alternatywnej implementacji
            const inputText = document.getElementById("input-text");
            basePrompt = inputText ? inputText.value.trim() : "Brak tekstu wejściowego";
            
            // Dodaj informacje o module, jeśli istnieje
            if (currentModule) {
                basePrompt = `Proces Alchemiczny: ${currentModule.process || "Nieznany"}\n\n` + basePrompt;
            }
        }

        let finalPrompt = basePrompt;

        // Dodanie szablonu ścieżki
        if (currentPathway && currentPathway.template) {
            finalPrompt += "\n\n--- STRUKTURA PRAKTYCZNEJ ODPOWIEDZI ---\n";
            finalPrompt += currentPathway.template;
        }

        // Dodanie formatu prezentacji
        if (currentFormat && currentFormat.template) {
            finalPrompt += "\n\n--- FORMAT PREZENTACJI WIEDZY ---\n";
            finalPrompt += currentFormat.template;
        }

        // Dodanie ogólnych instrukcji
        finalPrompt += `
        
WAŻNE WSKAZÓWKI DOTYCZĄCE ODPOWIEDZI:

1. Zachowaj filozoficzną głębię analizy, jednocześnie dbając o przystępność przekazu.

2. Używaj konkretnych przykładów, metafor i analogii dla ilustracji złożonych koncepcji.

3. Struktura odpowiedzi powinna być przejrzysta i logiczna, prowadząca czytelnika od ogólnego zrozumienia do szczegółowych aspektów.

4. Pamiętaj o równowadze między abstrakcją a konkretem, teorią a praktyką.

5. Zakończ odpowiedź konkretnym, praktycznym podsumowaniem lub sugestią kolejnych kroków.
`;

        return finalPrompt;
    };

    // INICJALIZACJA INTERFEJSU
    function initializeInterface() {
        console.log("Inicjalizacja naprawionego interfejsu...");

        // 1. INICJALIZACJA PRZYCISKÓW ŚCIEŻEK
        const pathwayButtons = document.querySelectorAll(".pathway-btn");
        const pathwayDescription = document.getElementById("pathway-description");
        const statusDisplay = document.getElementById("status-display");

        console.log("Znaleziono przycisków ścieżek:", pathwayButtons.length);

        pathwayButtons.forEach(button => {
            button.addEventListener("click", function() {
                const pathType = this.getAttribute("data-path");
                const pathway = practicalPathways[pathType];
                
                console.log("Kliknięto ścieżkę:", pathType, pathway);
                
                if (!pathway) {
                    console.warn(`Nie znaleziono definicji ścieżki dla: ${pathType}`);
                    return;
                }
                
                // Aktualizacja aktywnego przycisku
                pathwayButtons.forEach(btn => btn.classList.remove("active"));
                this.classList.add("active");
                
                // Aktualizacja opisu ścieżki
                if (pathwayDescription) {
                    pathwayDescription.textContent = pathway.description;
                    pathwayDescription.classList.add("highlight-anim");
                    
                    setTimeout(() => {
                        pathwayDescription.classList.remove("highlight-anim");
                    }, 2000);
                }
                
                // Zapamiętanie wybranej ścieżki
                currentPathway = pathway;
                
                // Aktywacja modułów dla wybranej ścieżki
                activateModulesForPathway(pathway);
                
                // Aktualizacja statusu
                if (statusDisplay) {
                    statusDisplay.textContent = `Status: Wybrano ścieżkę "${pathway.name}"`;
                }
            });
        });

        // Przycisk dodatkowych ścieżek
        const additionalPathwaysToggle = document.querySelector(".additional-pathways-toggle");
        if (additionalPathwaysToggle) {
            additionalPathwaysToggle.addEventListener("click", function() {
                const content = document.querySelector(".additional-pathways-content");
                if (content) {
                    content.classList.toggle("visible");
                    
                    if (content.classList.contains("visible")) {
                        this.innerHTML = 'Mniej ścieżek praktycznych <i class="fas fa-chevron-up"></i>';
                    } else {
                        this.innerHTML = 'Więcej ścieżek praktycznych <i class="fas fa-chevron-down"></i>';
                    }
                }
            });
        }

        // 2. INICJALIZACJA FORMATU PREZENTACJI
        const formatSelector = document.getElementById("format-selector");
        const formatDescription = document.getElementById("format-description");
        const formatInfoBtn = document.getElementById("format-info-btn");

        if (formatSelector) {
            formatSelector.addEventListener("change", function() {
                const formatKey = this.value;
                const format = knowledgeFormats[formatKey];
                
                if (format) {
                    if (formatDescription) {
                        formatDescription.textContent = format.description;
                        formatDescription.classList.add("highlight-anim");
                        
                        setTimeout(() => {
                            formatDescription.classList.remove("highlight-anim");
                        }, 2000);
                    }
                    
                    currentFormat = format;
                    console.log("Wybrano format:", format.name);
                }
            });

            // Załadowanie początkowego formatu
            const initialFormat = knowledgeFormats[formatSelector.value];
            if (initialFormat && formatDescription) {
                formatDescription.textContent = initialFormat.description;
                currentFormat = initialFormat;
            }
        }

        if (formatInfoBtn) {
            formatInfoBtn.addEventListener("click", function() {
                if (formatSelector && currentFormat) {
                    alert(`${currentFormat.name}\n\n${currentFormat.description}`);
                }
            });
        }

        // 3. PRZECHWYCENIE PRZYCISKU TRANSMUTUJ
        const transmuteBtn = document.getElementById("transmute-btn");
        if (transmuteBtn) {
            console.log("Odnaleziono przycisk transmutacji");
            transmuteBtn.addEventListener("click", function() {
                const outputText = document.getElementById("output-text");
                const loadingIndicator = document.querySelector(".loading");
                
                // Sprawdzenie, czy mamy moduł
                if (!currentModule && !currentPathway) {
                    if (statusDisplay) {
                        statusDisplay.textContent = "Status: Wybierz moduł lub ścieżkę transformacji";
                    }
                    return;
                }
                
                // Sprawdzenie, czy mamy tekst wejściowy
                const inputText = document.getElementById("input-text");
                if (inputText && !inputText.value.trim()) {
                    if (statusDisplay) {
                        statusDisplay.textContent = "Status: Wprowadź tekst do transformacji";
                    }
                    return;
                }
                
                // Pokazanie ładowania
                if (loadingIndicator) {
                    loadingIndicator.style.display = "block";
                }
                if (outputText) {
                    outputText.style.display = "none";
                }
                
                try {
                    // Generowanie promptu
                    const prompt = window.generatePrompt();
                    
                    // Wyświetlenie wyniku
                    if (outputText) {
                        outputText.textContent = prompt;
                        outputText.style.display = "block";
                    }
                    
                    if (statusDisplay) {
                        statusDisplay.textContent = "Status: Prompt wygenerowany";
                    }
                } catch (error) {
                    console.error("Błąd generowania promptu:", error);
                    
                    if (outputText) {
                        outputText.textContent = `Wystąpił błąd podczas generowania promptu: ${error.message}`;
                        outputText.style.display = "block";
                    }
                    
                    if (statusDisplay) {
                        statusDisplay.textContent = "Status: Błąd generowania promptu";
                    }
                } finally {
                    // Ukrycie ładowania
                    if (loadingIndicator) {
                        loadingIndicator.style.display = "none";
                    }
                }
            }, true); // Użycie capturing, aby wyprzedzić inne event listenery
        }

        // 4. OBSŁUGA KLIKNIĘCIA NA MODUŁY
        document.querySelectorAll(".module-item").forEach(moduleItem => {
            moduleItem.addEventListener("click", function() {
                // Zaznaczenie wybranego modułu
                document.querySelectorAll(".module-item").forEach(item => {
                    item.classList.remove("active");
                });
                this.classList.add("active");
                
                // Ustawienie aktualnego modułu
                currentModule = {
                    title: this.querySelector(".module-title").textContent,
                    description: this.querySelector(".module-description p").textContent,
                    process: this.getAttribute("data-process"),
                    category: this.getAttribute("data-category")
                };
                
                // Aktualizacja informacji o module
                const selectedModuleTitle = document.getElementById("selected-module-title");
                const selectedModuleDescription = document.getElementById("selected-module-description");
                
                if (selectedModuleTitle) {
                    selectedModuleTitle.textContent = currentModule.title;
                }
                
                if (selectedModuleDescription) {
                    selectedModuleDescription.textContent = currentModule.description;
                }
                
                // Aktualizacja statusu
                if (statusDisplay) {
                    statusDisplay.textContent = `Status: Moduł ${currentModule.title} wybrany`;
                }
            });
        });

        console.log("Inicjalizacja interfejsu zakończona pomyślnie");
    }

    // FUNKCJA AKTYWACJI MODUŁÓW DLA ŚCIEŻKI
    function activateModulesForPathway(pathway) {
        if (!pathway || !pathway.modules) {
            console.warn("Ścieżka nie zawiera modułów");
            return;
        }

        const moduleItems = document.querySelectorAll(".module-item");
        
        // Resetowanie wszystkich modułów
        moduleItems.forEach(item => {
            item.classList.remove("active");
            item.classList.remove("pathway-module");
        });
        
        // Znalezienie i podświetlenie modułów
        pathway.modules.forEach(moduleName => {
            let found = false;
            
            moduleItems.forEach(item => {
                const title = item.querySelector(".module-title");
                if (title && title.textContent === moduleName) {
                    item.classList.add("pathway-module");
                    found = true;
                    
                    // Animacja
                    item.classList.add("highlight-anim");
                    setTimeout(() => {
                        item.classList.remove("highlight-anim");
                    }, 2000);
                }
            });
            
            if (!found) {
                console.warn(`Nie znaleziono modułu: ${moduleName}`);
            }
        });
        
        // Aktywacja pierwszego modułu
        const firstModuleName = pathway.modules[0];
        let firstModuleElement = null;
        
        moduleItems.forEach(item => {
            const title = item.querySelector(".module-title");
            if (title && title.textContent === firstModuleName) {
                firstModuleElement = item;
            }
        });
        
        if (firstModuleElement) {
            firstModuleElement.click();
        } else {
            console.warn(`Nie można aktywować pierwszego modułu: ${firstModuleName}`);
        }
    }

    // DODANIE STYLÓW DLA PODŚWIETLENIA MODUŁÓW
    function addStylesToPage() {
        const style = document.createElement('style');
        style.textContent = `
        .pathway-module {
            border-left: 3px solid #d4af37 !important;
        }
        
        @keyframes highlight {
            0% { background-color: rgba(154, 125, 10, 0.1); }
            50% { background-color: rgba(154, 125, 10, 0.3); }
            100% { background-color: rgba(154, 125, 10, 0.1); }
        }
        
        .highlight-anim {
            animation: highlight 2s ease-in-out;
        }
        `;
        document.head.appendChild(style);
    }

    // URUCHOMIENIE
    addStylesToPage();
    initializeInterface();
    
    console.log("Naprawa Atanor zakończona!");
});
