# Tittel

### Start
1. `git clone` prosjektet
2. `npm install`  fra *.../gruppe_30/Search_app*
3. cd client `npm install` fra *.../gruppe_30/Search_app/client*
4. Kjøres som beskrevet under

Kjøres fra *.../gruppe_30/Search_app*

- Kjør bare server.js
`npm run start`

- Kjør bare clienten
`npm run client`

Server: http://localhost:5000
Client: http://localhost:3000

##Kjøring av tester

- Jest og Unit tester *.../gruppe_30/Search_app/client*:
`npm run test`
eller
`npm run test -- --coverage` (For å se testdekning)

- Cypress tester *.../gruppe_30/Search_app/client*
`npm run cypress`

  

## Innhold og funksjonalitet

  

### Overordnet funksjonalitet

  

Nettsiden baserer seg på Vinmonopolets produktdatabase, som finnes [her](https://www.vinmonopolet.no/datadeling). Brukeren kan søke på deler av produktnavn og/eller søke blant noen populære varetyper. I tillegg kan brukeren legge inn produkt-rating av hvert enkelt produkt.

  

### Funksjonalitet i henhold til oppgaven




  

#### Frontend

  

* En bruker kan bruke søkefeltet til søk-input. Her kan brukeren skrive inn ett eller flere søkeord. Søket er ikke case sensitive, og det er ikke strengt på spesialtegn, som «ö». Søket returnerer alle produkter *med minst ett* av søkeordene i navnet. Et søk på «fisk» og «rhone» vil eksempelvis returnere alle produkter med «Fisk» eller «Rhône» i navnet.

  

* En bruker kan velge å søke blant alle produkter, eller blant én av ni forskjellige varetyper. Denne filtreringen kan også kombineres med input i søkefeltet.



* Det vises maksimalt ti produkter per side.  Man kan bla mellom sider i resultatsettet med knapper på bunnen av nettsiden. Disse knappene viser også hvilken side du er på og hvor mange sider det finnes totalt i det aktuelle søket. 

  

* Man kan klikke på et produkt for å se detaljert informasjon om det. 

  

* Man kan sortere resultatsettet ved å bruke innstillingene i dropdown-menyen over settet. Denne sorteringen gjennomføres på hele settet. Dette gjør at man kan bla frem og tilbake i sidene og den valgte sorteringen vil forbli. Vi har også valgt at standard sortering er etter alfabetisk rekkefølge, da vi mener dette er det mest naturlige.

  

* En bruker kan legge inn review/rating av et produkt ved å vise detaljert informasjon om produktet, og trykke på ønsket antall stjerner. Denne ratingen lagres på databaseserveren.

  

#### Backend
Stikkord: 
- Bruker query-string, her kan man enkelt legge til flere kriterier i søket
- Delt opp backend, og har ikke alt i en server.js-fil
- Bruker ulike metoder til databasen GET, POST og PUT
- Delt opp i filer for review og product


  

## Bruk av teknologi

* Brukergrensesnittet er basert på React, og prosjektet er initialisert med *create-react-app*.

* Node Express brukes som API  og webserver  

* State-håndtering gjøres ved hjelp av Redux. 

* Til databasen bruke Mongo DB, med Mongoose.   

* Det er tatt i bruk flere komponentbiblioteker, særlig *reactstrap* er mye brukt.

* Cypress er brukt til end-to-end-testing


  

## Diskusjon rundt løsningsvalg

* Vi har valgt å bruke et MERN fullstack oppsett. En MERN applikasjon er bygget opp ved hjelp av MongoDB, Express, React og Node. Grunnen til at vi har valgt akkurat denne fullstacken er fordi den var et ganske naturlig valg, da den inneholder store deler av teknologi kravene for oppgaven, samt at denne brukes mye på reelle prosjekter og det var en stack vi ønsket å se nærmere på.

<a href="https://ibb.co/b7tM5L"><img src="https://preview.ibb.co/iZQCC0/MERN-stack.png" alt="MERN-stack" border="0"></a>



* Vi valgte å bruke REST istedenfor GraphQL fordi vi tror at vi ville brukt mer tid på å sette opp GraphQL, samtidig som vi hadde litt erfaring med REST, slik at dette lettere. 

* Vi har valgt å bruke en query-string i APIet for å dynamisk kunne bygge opp en spørring i søket vårt. Her er det veldig enkelt å legge til flere filtreringer om man ønsker det

* Grunnen til at vi har valgt å bruke Mongo DB som database er fordi dette er en veldig enkel database å sette opp. Den har god dokumentasjon og den brukes mye, så det finnes mange ressurser på nettet. Samtidig har vi da mulighet til å bruke Mongoose, noe som gir oss mange muligheter for å legge til tillegg og mer funksjonalitet. 


* Vi valgte å bruke Redux fremfor Mobox hovedsakelig fordi dette var en teknologi vi ønsket å lære, og da denne teknologien ofte blir etterspurt og brukt i næringslivet.

<a href="https://ibb.co/df0OKf"><img src="https://preview.ibb.co/bOrkX0/redux-flow.png" alt="redux-flow" border="0"></a>


*  Vi valgte å bruke et bibliotek som heter [react-collapsible]([https://www.npmjs.com/package/react-collapsible](https://www.npmjs.com/package/react-collapsible)) for å vise detaljert produktinformasjon. Dette biblioteket er valgt fordi det gjør det veldig lett å sette om denne funksjonaliteten, samt at det er lett å endre designet på denne til å passe vårt ønske.

 ## Testing

### Cypress
For end-to-end testing har vi brukt rammeverket Cypress. Testene fokuserer på å sjekke at nettsiden som helhet har ønsket funksjonalitet. Dette gjøres ved at Cypress simulerer diverse bruker-interaksjon, for så å sjekke om dette gir riktig oppførsel.
Disse testene gir god oversikt over nettsiden, men om de feiler vet man ikke hva , eller hvor i "stacken", noe går galt. Derfor er det viktig å også gjøre enhetstesting på mindre deler av koden for å finne ut mer nøyaktig hvor feilen oppstår.
Testfilene er lokalisert i *Seach_app > client > cypress > integration*. For å kjøre Cypress-testene må man kjøre `npm run cypress` fra *client*-mappen. Hele prosjektet må også kjøre i bakgrunnen (`npm run starterver` og `npm run client`). Cypress sitt interface vil dukke opp, og man  kjøre en enkelt testfil ved å trykke på filnavnet, eller kjøre alle tester ved å trykke på *Run all specs*
Vi har delt opp testene i to filer, én for noen generelle sjekker av siden(*start_page_spec.js*), og én for å sjekke funksjonaliteten knyttet opp i mot et søk(*search_submission.spec.js*). 
Vi bruker metoder som `beforeEach()` for å sette opp siden likt før hver test, og `it()` for å lage selve testene. Hver *it*-metode er laget med beskrivende navn på testen, f.eks *should accept searchbar input* for å teste om søkefeltet aksepterer input fra brukeren.
 
### Jest
For Jest og Unit tester har vi fokusert på å teste reducerne og laget noen snapshot tester for å teste at applikasjonen rendrer ordentlig. Reducer-testene er enkle tester som tester om  en gitt reducer case, blir den forventede verdien, og at staten settes riktig globalt. Vi har valgt å ikke gjøre mye enhetsesting inne i komponentene fordi mye av dette blir dekket i end-to-end testingen. 

### Testing uten rammeverk

Underveis har funksjonaliteten til siden blitt testet i Chrome og Edge.

## Komponent-struktur
<a href="https://ibb.co/nj20X0"><img src="https://preview.ibb.co/iW8w5L/Komponent-tre.png" alt="Komponent-tre" border="0"></a>