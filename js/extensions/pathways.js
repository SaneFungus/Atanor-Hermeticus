window.AtanorExtensions = window.AtanorExtensions || {};

// Ścieżki praktyczne
AtanorExtensions.Pathways = (function() {
    // Definicje ścieżek praktycznych
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
            modules: ["Destylacja Korpusów Wiedzy", "Przestrzeń Konceptualnego Rozponowienia", "Generator Scenariuszy Epistemicznych"],
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
            modules: ["Interfejs Intencji-Implementacji", "Generator Scenariuszy Epistemicznych", "Ekologiczna Matryca Wiedzy"],
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
            modules: ["Mediacja Epistemiczna", "Destylacja Korpusów Wiedzy", "Zwierciadło Kognitywne"],
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
            modules: ["Katalizator Samoświadomości Epistemicznej", "Metapoznawczy Archeolog Założeń", "Kartograf Granic Poznawczych"],
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
    
    // Stan prywatny
    let currentPathway = null;
    let pathwayDescription;
    let moduleItems;
    let statusDisplay;
    
    // Metody publiczne
    return {
        initialize: function() {
            pathwayDescription = document.getElementById("pathway-description");
            moduleItems = document.querySelectorAll(".module-item");
            statusDisplay = document.getElementById("status-display");
            
            // Inicjalizacja przycisków ścieżek
            this.setupPathwayButtons();
            
            // Inicjalizacja dodatkowych ścieżek
            this.setupAdditionalPathways();
            
            console.log("Pathways zainicjalizowany");
        },
        
        setupPathwayButtons: function() {
            // Obsługa przycisków ścieżek
            const pathwayButtons = document.querySelectorAll(".pathway-btn");
            console.log("Znaleziono przycisków ścieżek:", pathwayButtons.length);
            
            pathwayButtons.forEach(button => {
                button.addEventListener("click", function() {
                    const pathType = this.getAttribute("data-path");
                    const pathway = practicalPathways[pathType];
                    
                    console.log("Kliknięto ścieżkę:", pathType, pathway);
                    
                    if (!pathway) {
                        console.warn("Nie znaleziono ścieżki dla typu:", pathType);
                        return;
                    }
                    
                    // Aktualizacja aktywnego przycisku
                    document.querySelectorAll(".pathway-btn").forEach(btn => btn.classList.remove("active"));
                    this.classList.add("active");
                    
                    // Aktualizacja opisu ścieżki
                    if (pathwayDescription) {
                        pathwayDescription.textContent = pathway.description;
                        pathwayDescription.classList.add("highlight-anim");
                        
                        // Usunięcie animacji po zakończeniu
                        setTimeout(() => {
                            pathwayDescription.classList.remove("highlight-anim");
                        }, 2000);
                    }
                    
                    // Zapamiętanie wybranej ścieżki
                    currentPathway = pathway;
                    
                    // Zastosowanie ścieżki (wybór odpowiednich modułów)
                    AtanorExtensions.Pathways.applyPracticalPathway(pathway);
                    
                    // Aktualizacja statusu
                    if (statusDisplay) {
                        statusDisplay.textContent = `Status: Wybrano ścieżkę "${pathway.name}"`;
                    }
                });
            });
        },
        
        setupAdditionalPathways: function() {
            // Obsługa przycisku dodatkowych ścieżek
            const additionalPathwaysToggle = document.querySelector(".additional-pathways-toggle");
            if (additionalPathwaysToggle) {
                additionalPathwaysToggle.addEventListener("click", function() {
                    const content = document.querySelector(".additional-pathways-content");
                    if (content) {
                        content.classList.toggle("visible");
                        
                        // Zmiana ikony i tekstu przycisku
                        if (content.classList.contains("visible")) {
                            this.innerHTML = 'Mniej ścieżek praktycznych <i class="fas fa-chevron-up"></i>';
                        } else {
                            this.innerHTML = 'Więcej ścieżek praktycznych <i class="fas fa-chevron-down"></i>';
                        }
                    }
                });
            }
        },
        
        applyPracticalPathway: function(pathway) {
            if (!pathway || !pathway.modules) {
                console.warn("Próba aplikacji niepoprawnej ścieżki:", pathway);
                return;
            }
            
            console.log("Aplikowanie ścieżki:", pathway.name, "z modułami:", pathway.modules);
            
            // Resetowanie aktualnej selekcji modułów
            moduleItems.forEach(item => {
                item.classList.remove("active");
                item.classList.remove("pathway-module");
            });
            
            // Zaznaczenie modułów ze ścieżki
            let foundModules = 0;
            pathway.modules.forEach(moduleName => {
                let found = false;
                
                // Przeszukaj wszystkie moduły
                moduleItems.forEach(item => {
                    const title = item.querySelector(".module-title");
                    if (title && title.textContent === moduleName) {
                        item.classList.add("pathway-module");
                        found = true;
                        foundModules++;
                        
                        // Animacja
                        item.classList.add("highlight-anim");
                        setTimeout(() => {
                            item.classList.remove("highlight-anim");
                        }, 2000);
                    }
                });
                
                if (!found) {
                    console.warn(`Nie znaleziono modułu "${moduleName}" dla ścieżki "${pathway.name}"`);
                }
            });
            
            console.log(`Znaleziono ${foundModules} z ${pathway.modules.length} modułów dla ścieżki`);
            
            // Aktywacja pierwszego modułu (jeśli został znaleziony)
            if (foundModules > 0) {
                const firstModuleName = pathway.modules[0];
                
                moduleItems.forEach(item => {
                    const title = item.querySelector(".module-title");
                    if (title && title.textContent === firstModuleName) {
                        item.click();
                    }
                });
            } else {
                console.error(`Nie można aktywować żadnego modułu dla ścieżki "${pathway.name}"`);
            }
        },
        
        getCurrentPathway: function() {
            return currentPathway;
        },
        
        getAllPathways: function() {
            return practicalPathways;
        }
    };
})();
