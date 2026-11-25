# Manifest Projektowy i Wizualny — `bmclinic.co`

> [!IMPORTANT]
> Ten dokument utrwala kluczowe zasady architektoniczne, estetyczne, materiałowe i ruchowe ustalone na podstawie przeglądu 7 referencji z Dribbble oraz wymagań kliniki.

---

## 1. Fundamenty Architektoniczne (Mobile-First i Dwie Strefy)

- **Mobile-First (>80% pacjentów na telefonie):** Telefon komórkowy jest głównym nośnikiem — szczególnie w proktologii i medycynie estetycznej. Desktop jest wtórny.
- **Zasada prostoty:** Ograniczona liczba przycisków i funkcji; pacjent bólowy ma uwagę skupioną na problemie, nie na ozdobnikach, ale wysoka estetyka od razu buduje zaufanie.
- **Podział strony na 2 wyraźne części:**
  1. **Strefa Landingowa / Zapisowa (pacjenci bólowi):** maksymalna prostota, szybkość, sprawność i natychmiastowy dostęp do pomocy.
  2. **Strefa Edukacyjna (fundament pod wieloletni projekt 5–7+ lat):** przyjemna, angażująca przestrzeń do nauki i regularnych treści od lekarza; tu dopuszczalne są nowsze trendy UI.

---

## 2. Estetyka, Materiały i Kolorystyka („Cichy Luksus”)

> [!CAUTION]
> **BEZWZGLĘDNY ZAKAZ CZERNI W MEDYCYNIE I CHIRURGII:** Czerń kojarzy się pacjentom ze śmiercią i pogrzebem. **Żadnych czarnych akcentów** w chirurgii, proktologii ani na ogólnych stronach medycznych. Wyjątek: **maksymalnie 1–2 ekrany** w medycynie estetycznej (np. odważne wejście do sklepu inspirowane kompozycją *Laurka dla Milenki* — biały szkic idącej kobiety, elegancki wzór na tylnej ścianie, gra świateł, ale **bez lagującej siatki fal**).

- **Kierunek:** Skromny **cichy luksus (Quiet Luxury)**, jasne, kojące barwy + **szkło i metal** (więcej subtelnych akcentów metalowych) oraz dopracowana haptyka (*Magic Sounds*).
- **Kolorystyka domenowa:**
  - **Flebologia / Żylaki (kobiety):** wyblakły błękitno-lawendowy / fioletowo-niebieski + subtelna głębia wodna (jak tafla stawu).
  - **Flebologia / Żylaki (mężczyźni):** bardziej stonowane odcienie niebieskiego.
  - **Proktologia:** przyjemna, głęboka zieleń (spokojna, medyczna).
  - **Medycyna estetyczna:** dominujący kolor **jasny** (+ max 1–2 akcentowe ekrany wejścia do sklepu).
  - **Chirurgia:** wyłącznie jasna, spokojna, budząca zaufanie paleta z akcentami metalu (**zero czerni**).
  - **Strona centralna / panel sterowania:** atmosferyczna głębia z rozjaśnieniem rozpływającym się w głąb (bez kolejnego granatu).

---

## 2b. Psychologia Pacjenta i Modułowy Landing Flebologiczny (Żylaki / Naczynka)

- **60–70% dolegliwości to strach** („strach ma wielkie oczy”) — ekrany startowe muszą być maksymalnie spokojne, bez rebusów i przeciążenia; cierpienie pacjenta jest zawsze traktowane z bezwarunkową empatią.
- **Schemat rotacyjny landingu żylaków:** stały szkielet konstrukcyjny + wymienialne moduły tematyczne (do testowania skuteczności).
- **Temat #1 („Twój problem nie jest za mały”):**
  - Skierowany do kobiet, którym niewielkie naczynko / siniaczek (często na **wysokości kolana, przy brzegu sukienki/spódnicy**) odbiera komfort, a inni lekarze to bagatelizują.
  - Konkret: **5 minut, kilka strzałów laserem, po 6 tygodniach bez śladu** — często na pierwszej wizycie.
  - Rozbrojenie **lęku przed laserem**: podkreślenie **ponad 5 lat codziennego doświadczenia w laseroterapii** (wyczucie i kontrola mocy lasera) oraz **unikalnego, najnowocześniejszego sprzętu** niedostępnego nigdzie indziej we flebologii i leczeniu ran.

---

## 3. Ruch, Głębia i Stabilność Interfejsu

> [!CAUTION]
> **ZAKAZ pływających paneli:** Wszystkie panele i elementy sterowania muszą być **stabilne**. Elementy „pływające” / dryfujące denerwują oko.

- **Tempo animacji:** Ruchy przesuwalne, zauważalne, spokojne — nie za szybkie, żeby nie wywoływać niepokoju; naturalny start i wyraźne wyhamowanie w końcowej fazie.
- **Dolny panel z przyciskami (otwarta głębia):** Zamiast panelu „od brzegu do brzegu” (efekt „zagrody”), stosujemy **stabilny, bezramkowy / węższy układ z przyciemnionego czarnego szkła za przyciskami** oraz **nieznaczne podkreślenie obwodów / krawędzi przycisków**, co zachowuje trójwymiarową przestrzeń i czytelność.

---

## 4. Mapa Decyzji z 7 Referencji Dribbble

| # | Referencja | Decyzja | Zastosowanie |
| :-: | :--- | :--- | :--- |
| 1 | `AI Personal Finance App` | **Wzorzec tempa ruchu** | Punkt odniesienia dla płynności i prędkości animacji (do lekkiego doszlifowania naturalności startu/wyhamowania). |
| 2 | `Wallet Mobile App` | **Obłe, wypukłe przyciski** | Inspiracja dla obłych, uniesionych kształtów przycisków (z dolnej połowy ekranu). |
| 3 | `AI Healthy Lifestyle` | **CZARNA LISTA (klinika)** | Zbyt zabawkowe / „balonikowe” — **zakaz na stronie kliniki**. Pomarańczowe 3D poduszki OK wyłącznie na wewnętrznej tablicy roboczej. |
| 4 | `BodyBalance` | **Kwadratowo-poduszkowe** | Dobre **wyłącznie w chirurgii przy wrastających paznokciach** (młodsi / dziecięcy pacjenci), nie jako styl całej strony. |
| 5 | `AI Startup / SaaS` | **Trend przyszłościowy** | Do rozważenia **tylko w strefie edukacyjnej**, nigdy na landingu zapisowym. |
| 6 | `Taskku Productivity` | **ZATWIERDZONY UKŁAD** | Czarna przepaska + pojedynczy wychylający się model telefonu jako nośnik grafiki (nie 3 telefony obok siebie!), wyraźny panel górny i dolny z przestrzenią 3D — świetna baza (m.in. chirurgia, mobile + desktop). |
| 7 | `Task Manager Landing Page V2` | **Głębia i otwarty panel** | Atmosferyczna głębia (bez granatu!) + stabilny, nie-pełnoszerokościowy panel z przyciemnionego czarnego szkła z subtelnym obrysem przycisków. |

---

## 5. Wnioski Haptyczne i Dźwiękowe z Testów (`Magic Sounds`)

- **Dźwięk twardego szkła (nie dosłowne cymbałki):** Wzorzec to **błyszczące szkło na kuli 3D** — jak krótkie stuknięcie metalowym patyczkiem w twardą, masywną szklaną kulę (gęsty, czysty klik bez długiego melodyjnego ogona cymbałek) oraz **niebieski przycisk `localhost`** z żywej makiety jako świetna baza do dalszego modelowania.
- **Zaawansowane efekty haptyczne do dalszego użycia:**
  - **Kontrdźwięk stłumienia (enclosed-box damping):** zachowanie akustyczne jak przy stłumieniu w zamkniętej obudowie telefonu.
  - **Elektrostatyczna lepkość przycisku:** efekt „przyciągania” na wybranych pojedynczych przyciskach (touchpad / ekran telefonu).
- **Podświetlenie przycisków:** Zatwierdzony delikatny efekt, w którym **podświetla się sama ramka**.
- **Pokrętło główne (CNC):** Wzmocniony impuls pstryknięcia + nowy wariant **3D radełkowanego pokrętła CNC** (koncentryczny szlif + diamentowe radełkowanie boczne) do użycia w przyszłych elementach sterujących.

---

## 6. Strategia Konwersji, 7-Segmentowa Architektura i Opieka Okołozabiegowa (`mcml.pro`)

> [!CAUTION]
> **ZAKAZANE SFORMUŁOWANIA W COPYWRITINGU:**
> - **NIGDY** nie używamy słowa **„bezbolesny” / „bezbolesnym”** — ludzie natychmiast to kwestionują. Zamiast tego mówimy o **komforcie, bezpieczeństwie i opiece okołozabiegowej** (minimalne odczucia, komfortowe znieczulenie miejscowe).
> - **NIGDY** nie piszemy **„mistrz zawodowy”** ani nie chwalimy się wprost — stawiamy na fakty: **biegłość w technikach laserowych i leczeniu ran**, unikalny sprzęt (w tym laser pikosekundowy wspierający gojenie) oraz **opinie pacjentów**, które mówią same za siebie.

### 7-Segmentowy Standard Landingu (i Podział od Bloga)
1. **Ukojenie objawów i empatia** — wyciszenie strachu na pierwszym ekranie, bez przechwalania się.
2. **Lekarz jako zaufany przewodnik** — konkretne kompetencje, doświadczenie w laseroterapii i leczeniu ran, bez patosu.
3. **Ustandaryzowana baza wiedzy / mini-aplikacja pacjenta** (najbardziej rozbudowany moduł) — dla proktologii: krwawienie oraz nauka nazywania objawów (pacjenci nie mają słownictwa, jak o tym mówić). Moduł wielokrotnego użytku pod różne tematy.
4. **Przebieg wizyty i oferta zabiegowa** — o co lekarz zapyta, jak wygląda badanie, jakie nowoczesne zabiegi laserowe (procedura jednego dnia, ambulatoryjnie) oferujemy.
5. **Opinie pacjentów** — społeczny dowód zaufania i realnej jakości opieki.
6. **Transparentny cennik, zapisy i bezpośredni sklep wizyt** — po zbudowaniu zaufania pacjent od razu widzi **ile to kosztuje** i **jak się zapisać**, z możliwością **bezpośredniego opłacenia/zakupu wizyty na własnej stronie** (rozwiązuje tarcia rozliczeniowe z klinikami i pozwala pacjentowi bezpośrednio rozliczyć się z lekarzem).
7. **Oddzielna strefa Blog / Edukacja (styl życia, odżywianie, profilaktyka bez tabletek)** — wyraźnie oddzielona od ścieżki konwersyjnej, aby nie rozwadniać ruchu zabiegowego (cel: **~50% konwersji wizyt na zabiegi**, zamiast wielogodzinnego doradztwa dietetycznego).

### Filozofia Opieki Okołozabiegowej (spójna z `mcml.pro` i aplikacją pacjenta)
- **75% komfortu pacjenta to opieka okołozabiegowa**, a technologia skraca gojenie o **co najmniej 50%**.
- **Pierwsze 5 dni (ze szczególnym naciskiem na 5. dzień)** to kluczowy punkt zwrotny: po 1–3 dniach pacjent wraca do codziennego funkcjonowania, a po 5. dniu zazwyczaj mówi „dlaczego tyle zwlekałem”.
- **Stały kontakt i zdjęcie paniki (z `mcml.pro`):** bezpośredni kontakt telefoniczny / WhatsApp z lekarzem prowadzącym oraz gwarancja opieki. Samo usłyszenie *„tak może być, wszystko jest w porządku, proszę się nie przejmować”* kończy panikę i realnie zmniejsza odczuwany ból o połowę.
- **Interaktywna Aplikacja Opieki Okołozabiegowej (projekt z Milenką, baza z `graft-guardian-protocol`):**
  - Przypomnienia dzienne (np. 2× dziennie zmiana opatrunku, jak przemyć ranę, jak pielęgnować, czego się nie bać) + zautomatyzowane, ale spersonalizowane wiadomości dające pacjentowi poczucie kontroli i bezpieczeństwa.
  - **Wykres gojenia** oraz **interaktywna skala bólu** (np. rano 8 ze strachu, o 12:00 spadek do 3–4).
  - **Dwustronna widoczność (pętla zaufania):** lekarz / zespół widzi odczyty na pulpicie i odznacza *„zapoznano się / sprawdzone”* — pacjent od razu dostaje potwierdzenie na telefonie, że ktoś nad nim czuwa.
  - **Rola Milenki (wsparcie psychologiczne i jakość opieki):** Milenka (wykształcenie psychologiczne) pilnuje jakości opieki okołozabiegowej i w razie niepokoju pacjenta oddzwania, aby go uspokoić.

### Strategia SEO / Fraz Pacjentów (Wstrzelenie się w Niszę 80% Zapytań)
- **70% pacjentów w gabinecie to proktologia** — kiedy boli, pacjent szuka **najkrótszego terminu** i ratunku, nie żargonu medycznego.
- **Zasada 8% vs 80%:** Profesjonalne hasła (np. *„laserowe leczenie żylaków”*, *„dobry proktolog”*) generują zaledwie ok. **8%** wyszukiwań. Prawdziwy wolumen (**~80%**) to proste, surowe, czasem wstydliwe lub obniżające samoocenę frazy opisujące objaw (np. *„krew na papierze toaletowym”*, *„krew w stolcu”*, *„hemoroidy”*, potoczne nazwy w medycynie estetycznej).
- **Zasada strony dla pacjenta, nie dla lekarza:** Landing odpowiada wprost na pilną potrzebę i lęk pacjenta — zero autopromocji i chwalenia się.
- **Zautomatyzowany monitoring trendów i efektywności działań:** docelowo system analizujący na bieżąco trendy w sieci oraz to, które działania wizerunkowo-informacyjne i w których grupach dają największy zwrot / odbicie (z uwzględnieniem 10-letniej wiedzy o sezonowości w ciągu roku).
- **Kluczowe grupy zawodowe w proktologii i niszowe kanały dotarcia:**
  - **Kierowcy zawodowi (TIR):** wysokie zarobki, ciężka praca dzień i noc, bardzo częste hemoroidy, świetny odbiór dra Bujoka; dla kierowcy jeżdżącego co 2 dni do Holandii dojazd do Warszawy nie jest problemem. Kanały dotarcia: **duże parkingi dla TIR-ów przy trasach z dobrymi obiadami**, radia / radia internetowe.
  - **Informatycy (IT):** wielogodzinna praca siedząca, duża i wdzięczna grupa pacjentów — dedykowane komunikaty i kanały online.
- **Zbieranie wstępnych danych o skuteczności modeli:** obecna strona ma pełnić rolę modułu zbierającego wstępne dane ze skuteczności wszystkich modeli (kampanii, fraz, ścieżek konwersji) pod przyszły dashboard i bazę danych.
- **Osobny projekt badawczy (R&D) — LiDAR w ocenie zmian skórnych:** wydzielony projekt badający przydatność skanera LiDAR do oceny zmian skórnych (warstwowe zdejmowanie pierwszych warstw naskórka i analiza głębokości/mikrotekstury).
