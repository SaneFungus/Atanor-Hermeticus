# Atanor Hermeticus - Dokumentacja i Przewodnik Rozwoju

![Atanor Hermeticus](https://via.placeholder.com/800x200?text=Atanor+Hermeticus)

## Spis treści

1. [Wprowadzenie](#wprowadzenie)
2. [Architektura projektu](#architektura-projektu)
3. [Instalacja i uruchomienie](#instalacja-i-uruchomienie)
4. [Kluczowe komponenty](#kluczowe-komponenty)
5. [Debugowanie i rozwiązywanie problemów](#debugowanie-i-rozwiązywanie-problemów)
6. [Rozszerzanie funkcjonalności](#rozszerzanie-funkcjonalności)
7. [Najlepsze praktyki](#najlepsze-praktyki)
8. [Znane problemy](#znane-problemy)
9. [Rozwój projektu](#rozwój-projektu)

## Wprowadzenie

Atanor Hermeticus to interaktywne narzędzie do transformacji epistemicznej, oferujące różnorodne podejścia do analizy i przekształcania tekstu. Projekt łączy głębokie zrozumienie filozoficzne z praktycznymi zastosowaniami poprzez system modułów, ścieżek praktycznych i formatów prezentacji wiedzy.

Nazwa "Atanor" odnosi się do alchemicznego pieca transformacyjnego, co odzwierciedla cel projektu: przekształcanie surowej wiedzy w głębsze zrozumienie i praktyczne zastosowania.

## Architektura projektu

Projekt został zaprojektowany w architekturze modułowej, która umożliwia łatwe rozszerzanie i modyfikowanie funkcjonalności. Struktura projektu wygląda następująco:

```
atanor-hermeticus/
├── index.html                    # Główny plik HTML
├── css/
│   ├── main.css                  # Podstawowe style
│   ├── components.css            # Style dla komponentów
│   └── extensions.css            # Style dla rozszerzeń
├── js/
│   ├── core/                     # Główne komponenty
│   │   ├── app.js                # Inicjalizacja aplikacji
│   │   ├── interface.js          # Obsługa interfejsu
│   │   ├── process-manager.js    # Zarządzanie procesami alchemicznymi
│   │   └── prompt-generator.js   # Generator promptów
│   ├── data/                     # Definicje danych
│   │   ├── process-definitions.js   # Definicje procesów alchemicznych
│   │   ├── category-definitions.js  # Definicje kategorii funkcjonalnych
│   │   └── prompt-templates.js      # Szablony promptów
│   ├── modules/                  # Moduły funkcjonalne
│   │   ├── filter-system.js      # System filtrów
│   │   ├── module-manager.js     # Zarządzanie modułami
│   │   └── recursion-system.js   # System poziomów rekursji
│   └── extensions/               # Rozszerzenia
│       ├── pathways.js           # Ścieżki praktyczne
│       ├── formats.js            # Formaty prezentacji
│       └── extension-loader.js   # Ładowarka rozszerzeń
└── atanor-simple-fix.js          # Awaryjny plik naprawczy
```

### Przepływ danych

Aplikacja działa w następujący sposób:

1. Użytkownik wybiera ścieżkę praktyczną (np. "Ścieżka Zrozumienia")
2. Aktywowane są odpowiednie moduły związane z wybraną ścieżką
3. Użytkownik wybiera format prezentacji wiedzy
4. Użytkownik wprowadza tekst do analizy
5. Po kliknięciu "Transmutuj", system:
   - Pobiera szablon promptu dla wybranego modułu
   - Dodaje wybrany szablon ścieżki praktycznej
   - Dodaje wybrany format prezentacji
   - Generuje finalny prompt, który może być użyty w LLM

## Instalacja i uruchomienie

### Standardowa instalacja

1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/username/atanor-hermeticus.git
   cd atanor-hermeticus
   ```

2. Otwórz `index.html` w przeglądarce lub uruchom serwer lokalny:
   ```bash
   # Python 3
   python -m http.server
   ```

3. Aplikacja będzie dostępna pod adresem `http://localhost:8000`

### Hostowanie na GitHub Pages

1. Utwórz repozytorium na GitHub
2. Wgraj wszystkie pliki do repozytorium
3. W ustawieniach repozytorium włącz GitHub Pages, wybierając główną gałąź (main/master) jako źródło
4. Strona będzie dostępna pod adresem `https://[twój-użytkownik].github.io/[nazwa-repozytorium]`

## Kluczowe komponenty

### 1. Procesy alchemiczne

Fundamentalne podejścia do transformacji wiedzy:

- **Separatio** (⚗️) - Analityczny rozkład na fundamentalne elementy
- **Calcinatio** (🔥) - Intensywna analiza krytyczna
- **Solutio** (🌊) - Upłynnianie ram pojęciowych
- **Coagulatio** (⚖️) - Transformacja abstrakcji w konkretne działania
- **Coniunctio** (☯️) - Synteza przeciwstawnych perspektyw

### 2. Moduły transformacyjne

Każdy moduł jest narzędziem o specyficznym zastosowaniu, np.:
- Amplifikacja Kognitywna
- Mediacja Epistemiczna
- Destylacja Korpusów Wiedzy
- itd.

### 3. Ścieżki praktyczne

Predefiniowane podejścia do transformacji tekstu:

- **Ścieżka Zrozumienia** (Co to znaczy?)
- **Ścieżka Rozwiązywania Problemów** (Jak to rozwiązać?)
- **Ścieżka Radzenia Sobie** (Jak sobie z tym poradzić?)
- **Ścieżka Implementacji** (Jak to wprowadzić w życie?)
- **Ścieżka Twórczej Eksploracji** (Jak to rozwinąć twórczo?)
- **Ścieżka Dydaktyczna** (Jak to przekazać innym?)
- **Ścieżka Krytycznej Analizy** (Co tutaj nie działa?)

### 4. Formaty prezentacji wiedzy

Różne sposoby formatowania wyników transformacji:

- Format Akademicki
- Esej
- Format Dydaktyczny
- Dialog Sokratejski
- Format Warsztatowy
- itd.

## Debugowanie i rozwiązywanie problemów

### Narzędzia diagnostyczne

1. **Konsola przeglądarki**

   Otwórz konsolę deweloperską w przeglądarce (F12 lub Ctrl+Shift+I) i sprawdź komunikaty błędów. Większość modułów wyświetla szczegółowe informacje o swojej inicjalizacji i działaniu.

2. **Tymczasowe debugowanie**

   Dodaj instrukcje `console.log()` w strategicznych miejscach kodu, aby śledzić przepływ danych:

   ```javascript
   // Przed wykonaniem funkcji
   console.log("Dane wejściowe:", input);
   
   // Po wykonaniu funkcji
   console.log("Wynik:", result);
   ```

3. **Sprawdzanie elementów DOM**

   ```javascript
   // Sprawdzenie, czy element istnieje
   const element = document.getElementById("element-id");
   console.log("Element:", element ? "istnieje" : "nie istnieje");
   ```

### Typowe problemy i rozwiązania

1. **Moduły się nie aktywują**
   
   Problem: Kliknięcie na ścieżkę praktyczną nie powoduje aktywacji modułów.
   
   Rozwiązanie:
   - Sprawdź, czy nazwy modułów w definicjach ścieżek dokładnie odpowiadają nazwom w HTML
   - Sprawdź, czy moduły istnieją w HTML (powinny mieć klasę `.module-item`)
   - Dodaj więcej debugowania w funkcji `findModuleByName`

2. **Błąd "Cannot read properties of null"**
   
   Problem: Próba dostępu do właściwości obiektu, który jest `null` lub `undefined`.
   
   Rozwiązanie:
   - Używaj operatora opcjonalnego łańcuchowania `?.`
   - Dodaj warunki sprawdzające istnienie obiektów przed dostępem do ich właściwości
   - Zaimplementuj domyślne wartości dla potencjalnie pustych obiektów

3. **Formatowanie promptu nie działa**
   
   Problem: Szablony ścieżek lub formaty prezentacji nie są dodawane do promptu.
   
   Rozwiązanie:
   - Sprawdź, czy zmienne `currentPathway` i `currentFormat` są poprawnie ustawiane
   - Upewnij się, że funkcja `generatePrompt` jest prawidłowo nadpisana
   - Dodaj debugowanie w funkcji generującej prompt

### Awaryjne rozwiązanie

Jeśli standardowe debugowanie nie rozwiązuje problemów, możesz użyć pliku `atanor-simple-fix.js`, który zawiera wszystkie niezbędne funkcje w jednym miejscu, bez zależności od modułowej architektury. Dodaj ten plik do HTML:

```html
<script src="atanor-simple-fix.js"></script>
```

## Rozszerzanie funkcjonalności

### Dodawanie nowej ścieżki praktycznej

1. Otwórz plik `js/extensions/pathways.js`

2. W obiekcie `practicalPathways` dodaj nową ścieżkę:

```javascript
newPathway: {
    name: "Nazwa Nowej Ścieżki",
    description: "Opis nowej ścieżki...",
    modules: ["Nazwa Modułu 1", "Nazwa Modułu 2", "Nazwa Modułu 3"],
    template: `
# Tytuł sekcji

## Podsekcja 1
[Opis zawartości]

## Podsekcja 2
[Opis zawartości]
    `
}
```

3. Dodaj przycisk dla nowej ścieżki w HTML:

```html
<button class="pathway-btn" data-path="newPathway">
    <i class="fas fa-icon-name"></i>
    <span>Moja Nowa Ścieżka</span>
    <small>Krótki opis</small>
</button>
```

### Dodawanie nowego formatu prezentacji

1. Otwórz plik `js/extensions/formats.js`

2. W obiekcie `knowledgeFormats` dodaj nowy format:

```javascript
newFormat: {
    name: "Nazwa Nowego Formatu",
    description: "Opis nowego formatu...",
    template: `
INSTRUKCJA FORMATOWANIA:
Tutaj umieść instrukcje formatowania...
    `
}
```

3. Dodaj opcję w selektorze formatów w HTML:

```html
<option value="newFormat">Nazwa Nowego Formatu</option>
```

### Dodawanie nowego modułu transformacji

1. W pliku HTML dodaj nowy moduł w sekcji `.module-list`:

```html
<div class="module-item" data-category="category" data-process="process">
    <div class="module-header">
        <div class="module-title">Nazwa Nowego Modułu</div>
        <div class="module-tags">
            <div class="module-tag process">⚗️ Process</div>
            <div class="module-tag functional">Category</div>
        </div>
    </div>
    <div class="module-description">
        <p>Opis nowego modułu...</p>
    </div>
</div>
```

2. W pliku `js/data/prompt-templates.js` dodaj szablon promptu dla nowego modułu:

```javascript
"Nazwa Nowego Modułu": `Tutaj umieść szablon promptu...`,
```

3. W obiekcie `moduleProcessMapping` w pliku `js/modules/module-manager.js` dodaj mapowanie dla nowego modułu:

```javascript
"Nazwa Nowego Modułu": "process",
```

## Najlepsze praktyki

### Modyfikacja kodu

1. **Używaj systemu modułowego**
   - Trzymaj się istniejącej architektury modułowej
   - Każdy plik powinien mieć jedną, jasno określoną odpowiedzialność
   - Unikaj globalnych zmiennych

2. **Defensywne programowanie**
   - Zawsze sprawdzaj, czy elementy DOM istnieją przed ich użyciem
   - Używaj operatorów warunkowych i domyślnych wartości
   - Obsługuj potencjalne błędy

3. **Logowanie i debugowanie**
   - Używaj `console.log()` do śledzenia działania kodu podczas rozwoju
   - Dodawaj informacyjne komunikaty o inicjalizacji i stanie komponentów
   - Używaj `console.error()` do wyraźnego oznaczania błędów

### Styl kodu

1. **Nazewnictwo**
   - Używaj `camelCase` dla zmiennych i funkcji
   - Używaj znaczących nazw, które jasno określają przeznaczenie
   - Unikaj skrótów, chyba że są powszechnie znane

2. **Formatowanie**
   - Używaj spójnego stylu wcięć (zalecane 2 lub 4 spacje)
   - Dodawaj odstępy wokół operatorów
   - Używaj nawiasów klamrowych wokół bloków kodu, nawet jednoliniowych

3. **Komentarze**
   - Komentuj złożone fragmenty kodu
   - Używaj JSDoc do dokumentowania funkcji
   - Wyjaśniaj dlaczego, a nie co robi kod

## Znane problemy

1. **Problemy z aktywacją modułów**
   
   Aktualny stan: Kliknięcie na ścieżkę praktyczną nie zawsze aktywuje odpowiednie moduły.
   
   Rozwiązanie tymczasowe: Użyj pliku `atanor-simple-fix.js`.

2. **Błędy przy resecie**
   
   Aktualny stan: Przycisk reset może powodować błędy związane z odwołaniami do null.
   
   Rozwiązanie tymczasowe: Odśwież stronę zamiast używania przycisku reset.

3. **Niezgodności między modułami i ścieżkami**
   
   Aktualny stan: Niektóre moduły wymienione w ścieżkach mogą nie istnieć w interfejsie.
   
   Rozwiązanie tymczasowe: Sprawdź i zsynchronizuj nazwy modułów między definicjami ścieżek a HTML.

## Rozwój projektu

### Planowane funkcjonalności

1. **System zapisywania i wczytywania sesji**
   - Możliwość zapisywania stanu aplikacji (wybrany moduł, ścieżka, format, tekst)
   - Możliwość wczytywania zapisanych sesji

2. **Eksport wyników**
   - Możliwość eksportu wygenerowanych promptów do plików tekstowych
   - Możliwość generowania linków z gotowymi promptami

3. **Integracja z API**
   - Bezpośrednie wysyłanie promptów do API modeli językowych
   - Wyświetlanie odpowiedzi bezpośrednio w interfejsie

4. **Tryb zaawansowany**
   - Możliwość tworzenia własnych ścieżek
   - Możliwość edytowania szablonów promptów
   - Możliwość tworzenia własnych formatów prezentacji

### Jak możesz się przyczynić

1. **Raportowanie błędów**
   - Zgłaszaj znalezione błędy przez system issues na GitHub
   - Dołącz jak najwięcej informacji: kroki do reprodukcji, screeny, logi z konsoli

2. **Propozycje ulepszeń**
   - Zgłaszaj propozycje nowych funkcji lub ulepszeń istniejących
   - Uzasadnij, dlaczego proponowana zmiana byłaby wartościowa

3. **Rozwijanie kodu**
   - Forkuj repozytorium i twórz pull requesty z poprawkami lub nowymi funkcjami
   - Przestrzegaj istniejących konwencji stylu kodu
   - Dodawaj testy dla nowych funkcjonalności

---

## Licencja

[Wybierz odpowiednią licencję]

---

## Kontakt

[Twoje dane kontaktowe]

---

*Atanor Hermeticus - Interfejs Transformacji Epistemicznej*
