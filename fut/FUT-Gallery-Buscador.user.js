// ==UserScript==
// @name         FUT Gallery Buscador
// @namespace    giusca.futgallery
// @version      1.9.3
// @description  Rellena la busqueda del mercado de la Web App con el siguiente jugador de los sets de la FUT Gallery; compra y pone en venta con una tecla por accion.
// @author       giusca
// @match        https://www.ea.com/*ultimate-team/web-app*
// @icon         data:image/jpeg;base64,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
// @updateURL    https://raw.githubusercontent.com/sebasgiusca/bcn1-guia/main/fut/FUT-Gallery-Buscador.user.js
// @downloadURL  https://raw.githubusercontent.com/sebasgiusca/bcn1-guia/main/fut/FUT-Gallery-Buscador.user.js
// @connect      www.fut.gg
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-idle
// ==/UserScript==
(function(){
'use strict';
var SETS=[{"name":"Frosinone","tok":28,"grade":"S","cost":7950.0,"href":"/fut-gallery/serie-a/frosinone/","pl":[{"n":"Hasa","f":"Luis Hasa","r":69,"p":550.0,"id":70163},{"n":"Calvani","f":"Gabriele Calvani","r":69,"p":550.0,"id":74520},{"n":"Akpoguma","f":"Kevin Akpoguma","r":73,"p":600.0,"id":211856},{"n":"Pisseri","f":"Matteo Pisseri","r":65,"p":500.0,"id":225037},{"n":"Cal\xf2","f":"Giacomo Calo","r":73,"p":550.0,"id":251769},{"n":"Terzi\u0107","f":"Aleksa Terzic","r":68,"p":500.0,"id":252573},{"n":"Kone","f":"Ben Lhassine Kone","r":67,"p":500.0,"id":253120},{"n":"Cittadini","f":"Giorgio Cittadini","r":69,"p":500.0,"id":266304},{"n":"Raimondo","f":"Antonio Raimondo","r":70,"p":500.0,"id":269182},{"n":"Monterisi","f":"Ilario Monterisi","r":70,"p":500.0,"id":270064},{"n":"Masini","f":"Patrizio Masini","r":68,"p":500.0,"id":276485},{"n":"Fayed","f":"Omar Fayed","r":65,"p":550.0,"id":277944},{"n":"Fini","f":"Seydou Fini","r":65,"p":500.0,"id":278350},{"n":"Ghedjemis","f":"Fares Ghedjemis","r":72,"p":550.0,"id":279877},{"n":"Tchato","f":"Enzo Tchato","r":70,"p":600.0,"id":270518}]},{"name":"Costa Adeje Tenerife","tok":28,"grade":"Best","cost":8250.0,"href":"/fut-gallery/laliga/costa-adeje-tenerife/","pl":[{"n":"Noelia Ramos","f":"Noelia Ramos","r":80,"p":650.0,"id":272235},{"n":"Elba Verg\xe9s","f":"Elba Verges","r":80,"p":650.0,"id":272257},{"n":"Henar Mui\xf1a","f":"Henar Muina Asla Henar Muina","r":70,"p":550.0,"id":72285},{"n":"Dembele","f":"Fatou Dembele","r":69,"p":550.0,"id":75255},{"n":"Gramaglia","f":"Paulina Gramaglia","r":68,"p":550.0,"id":267287},{"n":"\xc9rika Gonz\xe1lez","f":"Erika Gonzalez","r":73,"p":500.0,"id":272004},{"n":"Violeta Quiles","f":"Violeta Quiles","r":71,"p":550.0,"id":272025},{"n":"Noelia Salazar","f":"Noelia Salazar","r":68,"p":550.0,"id":272031},{"n":"Marina Mart\xed","f":"Marina Marti","r":72,"p":550.0,"id":272183},{"n":"N'Guessan","f":"Koko Ange Nguessan","r":74,"p":450.0,"id":272214},{"n":"Pisco","f":"Pisco","r":72,"p":550.0,"id":272228},{"n":"Patri Gavira","f":"Patricia Gavira Collado Patri Gavira","r":74,"p":500.0,"id":272232},{"n":"Alba P\xe9rez","f":"Alba Perez Manrique Alba Perez","r":72,"p":500.0,"id":275765},{"n":"Carlota Su\xe1rez","f":"Carlota Suarez Crespo Carlota Suarez","r":69,"p":600.0,"id":277123},{"n":"Padilla Bidas","f":"Natalia Bidas","r":73,"p":550.0,"id":277278}]},{"name":"Al Khaleej","tok":13,"grade":"A","cost":4350.0,"href":"/fut-gallery/roshn-saudi-league/al-khaleej/","pl":[{"n":"King","f":"Joshua King","r":78,"p":650.0,"id":185422},{"n":"Barrow","f":"Musa Barrow","r":78,"p":650.0,"id":242374},{"n":"Moris","f":"Anthony Moris","r":77,"p":650.0,"id":184167},{"n":"Abdulrauof","f":"Ali Abdulrauof","r":56,"p":200.0,"id":76936},{"n":"Al Ghanem","f":"Mohammed Al Ghanem","r":51,"p":200.0,"id":78889},{"n":"Mboge","f":"Abdoulie Mboge","r":52,"p":200.0,"id":82372},{"n":"Al Hafith","f":"Abdullah Al Hafith","r":62,"p":200.0,"id":207716},{"n":"Asiri","f":"Ahmed Asiri","r":62,"p":200.0,"id":208965},{"n":"Al Ammar","f":"Abdullah Al Ammar","r":63,"p":200.0,"id":225600},{"n":"Al Jayzani","f":"Hamad Al Jayzani","r":59,"p":200.0,"id":226181},{"n":"Al Hamsal","f":"Saeed Al Hamsal","r":64,"p":200.0,"id":230762},{"n":"Al Haidari","f":"Marwan Al Haidari","r":61,"p":200.0,"id":232673},{"n":"Kanabah","f":"Majed Kanabah","r":63,"p":200.0,"id":234070},{"n":"Al Sagour","f":"Fawaz Al Sagour","r":64,"p":200.0,"id":225087},{"n":"Al Rashidi","f":"Fahad Al Rashidi","r":60,"p":200.0,"id":242245}]},{"name":"Orlando City Soccer Club","tok":28,"grade":"S","cost":10000.0,"href":"/fut-gallery/mls/orlando-city-soccer-club/","pl":[{"n":"Griezmann","f":"Antoine Griezmann","r":84,"p":1200.0,"id":194765},{"n":"Ojeda","f":"Martin Ojeda","r":77,"p":650.0,"id":240744},{"n":"Cr\xe9peau","f":"Maxime Crepeau","r":73,"p":950.0,"id":213536},{"n":"Atuesta","f":"Eduard Atuesta","r":72,"p":950.0,"id":236298},{"n":"Ojeda","f":"Braian Ojeda","r":70,"p":900.0,"id":248870},{"n":"Dike","f":"Daryl Dike","r":69,"p":900.0,"id":255043},{"n":"Brekalo","f":"David Brekalo","r":69,"p":900.0,"id":264085},{"n":"Gerbet","f":"Joran Gerbet","r":60,"p":450.0,"id":77663},{"n":"Caraballo","f":"Gustavo Caraballo","r":53,"p":450.0,"id":78207},{"n":"Taifi","f":"Zakaria Taifi","r":59,"p":450.0,"id":79890},{"n":"Ellis","f":"Justin Ellis","r":60,"p":400.0,"id":79892},{"n":"Sarajian","f":"Harvey Sarajian","r":53,"p":450.0,"id":83365},{"n":"Miller","f":"Nolan Miller","r":59,"p":450.0,"id":83744},{"n":"Luis Ot\xe1vio","f":"Luis Otavio","r":63,"p":450.0,"id":83955},{"n":"Otero","f":"Javier Otero","r":58,"p":450.0,"id":277189}]},{"name":"Chicago Fire FC","tok":28,"grade":"S","cost":10550.0,"href":"/fut-gallery/mls/chicago-fire-fc/","pl":[{"n":"Lewandowski","f":"Robert Lewandowski","r":84,"p":1100.0,"id":188545},{"n":"Zinckernagel","f":"Philip Zinckernagel","r":77,"p":650.0,"id":215443},{"n":"Bamba","f":"Jonathan Bamba","r":75,"p":650.0,"id":225085},{"n":"Mbokazi","f":"Mbekezeli Mbokazi","r":72,"p":700.0,"id":82308},{"n":"Sal\xe9tros","f":"Anton Saletros","r":73,"p":700.0,"id":219951},{"n":"Lod","f":"Robin Lod","r":73,"p":700.0,"id":228312},{"n":"Mekvabishvili","f":"Anzor Mekvabishvili","r":71,"p":750.0,"id":70195},{"n":"Hanche-Olsen","f":"Andreas Hanche Olsen","r":73,"p":650.0,"id":228518},{"n":"Allen","f":"Noah Allen","r":68,"p":700.0,"id":267872},{"n":"Boltz","f":"Dean Boltz","r":53,"p":400.0,"id":77466},{"n":"Dithejane","f":"Puso Dithejane","r":57,"p":750.0,"id":83259},{"n":"Gal","f":"Jeffrey Gal","r":61,"p":700.0,"id":259915},{"n":"Oregel","f":"Sergio Oregel","r":62,"p":650.0,"id":271051},{"n":"Cohen","f":"Josh Cohen","r":62,"p":700.0,"id":279705},{"n":"Poreba","f":"David Poreba","r":53,"p":750.0,"id":269960}]},{"name":"Al Hazem","tok":13,"grade":"Best","cost":5300.0,"href":"/fut-gallery/roshn-saudi-league/al-hazem/","pl":[{"n":"Pululu","f":"Afimico Pululu","r":75,"p":650.0,"id":239267},{"n":"Zaid","f":"Ibrahim Zaid","r":65,"p":500.0,"id":208987},{"n":"Bruno Varela","f":"Bruno Varela","r":73,"p":null,"id":219754},{"n":"Konat\xe9","f":"Mory Konate","r":71,"p":550.0,"id":253039},{"n":"Bendebka","f":"Sofiane Bendebka","r":73,"p":550.0,"id":255487},{"n":"S\xe2youd","f":"Amir Sayoud","r":73,"p":550.0,"id":263893},{"n":"Acolatse","f":"Elton Acolatse","r":70,"p":550.0,"id":209402},{"n":"Stan\u011bk","f":"Jindrich Stanek","r":74,"p":550.0,"id":221909},{"n":"Al Dwehe","f":"Abdulaziz Al Dwehe","r":59,"p":200.0,"id":78995},{"n":"Dieng","f":"Amadou Bamba Dieng","r":52,"p":200.0,"id":84379},{"n":"Al Hamdani","f":"Mohammed Al Hamdani","r":58,"p":200.0,"id":88074},{"n":"Al Hejaili","f":"Ayman Al Hejaili","r":58,"p":200.0,"id":251659},{"n":"Ahmed Kassarah","f":"Ahmed Kassarah","r":59,"p":200.0,"id":277462},{"n":"Al Harbi","f":"Abdulaziz Al Harbi","r":57,"p":200.0,"id":277495},{"n":"Al Bishri","f":"Nawaf Al Bishri","r":54,"p":200.0,"id":279480}]},{"name":"Birmingham City","tok":28,"grade":"S","cost":12550.0,"href":"/fut-gallery/premier-league/birmingham-city/","pl":[{"n":"Turner","f":"Millie Turner","r":81,"p":650.0,"id":263012},{"n":"Levasseur","f":"Marie Levasseur","r":76,"p":5000.0,"id":264807},{"n":"Cornet","f":"Chelsea Cornet","r":68,"p":600.0,"id":72348},{"n":"Leidhammar","f":"Wilma Leidhammar","r":71,"p":500.0,"id":88000},{"n":"Crosthwaite","f":"Lily Crosthwaite","r":72,"p":550.0,"id":88004},{"n":"Lee Geum Min","f":"Lee Geum Min","r":70,"p":500.0,"id":246029},{"n":"Miyagawa","f":"Asato Miyagawa","r":70,"p":500.0,"id":247800},{"n":"Holloway","f":"Rebecca Holloway","r":71,"p":500.0,"id":265215},{"n":"Sarri","f":"Veatriki Sarri","r":74,"p":600.0,"id":265217},{"n":"Baggaley","f":"Sophie Baggaley","r":70,"p":600.0,"id":265279},{"n":"Hurtr\xe9","f":"Oceane Hurtre","r":73,"p":600.0,"id":268061},{"n":"Naalsund","f":"Lisa Fjeldstad Naalsund","r":73,"p":600.0,"id":268475},{"n":"Cooke","f":"Shannon Cooke","r":65,"p":550.0,"id":273919},{"n":"Effa Effa","f":"Chancelle Effa Effa","r":73,"p":600.0,"id":276812},{"n":"Harris","f":"Martha Harris","r":60,"p":200.0,"id":265276}]},{"name":"Montpellier H\xe9rault SC","tok":13,"grade":"A","cost":6450.0,"href":"/fut-gallery/ligue-1/montpellier-herault-sc/","pl":[{"n":"Rouquet","f":"Justine Rouquet","r":78,"p":650.0,"id":75178},{"n":"Durand","f":"Solene Durand","r":75,"p":700.0,"id":241547},{"n":"Rambaud","f":"Elisa Rambaud","r":65,"p":600.0,"id":75177},{"n":"Kadzere","f":"Rose Kadzere","r":70,"p":500.0,"id":75368},{"n":"Yilmaz","f":"Ceylin Yilmaz","r":65,"p":550.0,"id":81431},{"n":"Oleszkiewicz","f":"Natalia Oleszkiewicz","r":67,"p":550.0,"id":87068},{"n":"Bourgouin","f":"Laura Bourgouin","r":72,"p":500.0,"id":265915},{"n":"Fontaine","f":"Airine Fontaine","r":74,"p":650.0,"id":268261},{"n":"Chabod","f":"Celia Chabod","r":62,"p":250.0,"id":70235},{"n":"Haering","f":"Suya Haering","r":63,"p":250.0,"id":72448},{"n":"Bacoul-Juillard","f":"Kentissia Bacoul Juillard","r":60,"p":250.0,"id":75180},{"n":"Chaine","f":"Rosalie Chaine","r":62,"p":250.0,"id":75181},{"n":"Gillard","f":"Grace Gillard","r":62,"p":250.0,"id":84111},{"n":"Kharafi","f":"Bouchra Kharafi","r":60,"p":250.0,"id":87406},{"n":"Binate","f":"Adja Binate","r":63,"p":250.0,"id":264993}]},{"name":"Al Fateh","tok":13,"grade":"A","cost":6500.0,"href":"/fut-gallery/roshn-saudi-league/al-fateh/","pl":[{"n":"Harasl\xedn","f":"Lukas Haraslin","r":79,"p":650.0,"id":227562},{"n":"Batna","f":"Mourad Batna","r":78,"p":650.0,"id":259265},{"n":"Saadane","f":"Marwane Saadane","r":73,"p":550.0,"id":235890},{"n":"Boateng","f":"Kennedy Boateng","r":70,"p":550.0,"id":238987},{"n":"Kanga","f":"Wilfried Kanga","r":74,"p":600.0,"id":239589},{"n":"Lixandru","f":"Mihai Lixandru","r":68,"p":550.0,"id":253758},{"n":"Al Khaibari","f":"Abdulelah Al Khaibari","r":65,"p":550.0,"id":275549},{"n":"Al Hassan","f":"Ali Al Hassan","r":65,"p":600.0,"id":242863},{"n":"\u0160emper","f":"Adrian Semper","r":71,"p":600.0,"id":244274},{"n":"Al Zubaidi","f":"Fahad Al Zubaidi","r":60,"p":200.0,"id":73745},{"n":"Al Aboud","f":"Mahdi Al Aboud","r":52,"p":200.0,"id":74702},{"n":"Kelder","f":"Robin Kelder","r":57,"p":200.0,"id":80503},{"n":"Al Khaibari","f":"Abdulrahman Al Khaibari","r":55,"p":200.0,"id":81235},{"n":"Ramos","f":"Jefferson Ramos","r":55,"p":200.0,"id":81870},{"n":"Tombakti","f":"Sattam Tombakti","r":52,"p":200.0,"id":278133}]},{"name":"Washington Spirit","tok":28,"grade":"S","cost":15150.0,"href":"/fut-gallery/national-women-s-soccer-league/washington-spirit/","pl":[{"n":"Rodman","f":"Trinity Rodman","r":87,"p":7300.0,"id":266928},{"n":"Kingsbury","f":"Aubrey Kingsbury","r":83,"p":700.0,"id":266816},{"n":"Santos","f":"Leicy Santos","r":83,"p":700.0,"id":272115},{"n":"Cantore","f":"Sofia Cantore","r":81,"p":650.0,"id":266996},{"n":"Hatch","f":"Ashley Hatch","r":80,"p":650.0,"id":243263},{"n":"Di Guglielmo","f":"Lucia Di Guglielmo","r":80,"p":650.0,"id":266970},{"n":"Rudd","f":"Tara Mckeown","r":80,"p":650.0,"id":267261},{"n":"Sullivan","f":"Andi Sullivan","r":79,"p":650.0,"id":243261},{"n":"Tamara Bolt","f":"Tamara Bolt","r":68,"p":500.0,"id":76383},{"n":"Mart\xednez","f":"Claudia Martinez","r":68,"p":500.0,"id":83479},{"n":"Collins","f":"Kaylie Collins","r":72,"p":500.0,"id":267295},{"n":"Metayer","f":"Paige Metayer","r":72,"p":500.0,"id":274779},{"n":"Abiodun","f":"Deborah Abiodun","r":71,"p":500.0,"id":275915},{"n":"Ts\xe9","f":"Elisabeth Tse","r":73,"p":500.0,"id":276797},{"n":"Gaines-Ramos","f":"Emma Gaines Ramos","r":64,"p":200.0,"id":76283}]},{"name":"Charlton","tok":13,"grade":"A","cost":7300.0,"href":"/fut-gallery/premier-league/charlton/","pl":[{"n":"Whitehouse","f":"Sophie Whitehouse","r":75,"p":750.0,"id":86132},{"n":"Koivunen","f":"Anna Koivunen","r":74,"p":600.0,"id":72795},{"n":"Lockwood","f":"Katie Lockwood","r":69,"p":550.0,"id":74047},{"n":"Pedersen","f":"Anna Pedersen","r":68,"p":500.0,"id":86133},{"n":"Mason","f":"Ellie Mason","r":65,"p":500.0,"id":86134},{"n":"Fitzgerald","f":"Lucy Fitzgerald","r":70,"p":500.0,"id":86138},{"n":"Skeels","f":"Kiera Skeels","r":73,"p":500.0,"id":86338},{"n":"Davidson","f":"Leah Davidson","r":71,"p":500.0,"id":87754},{"n":"Johnston","f":"Grace Johnston","r":68,"p":500.0,"id":87762},{"n":"N'Dow","f":"Elisha Ndow","r":70,"p":500.0,"id":265313},{"n":"Humphrey","f":"Carla Humphrey","r":65,"p":500.0,"id":266921},{"n":"Paula Partido","f":"Paula Partido Duran Paula Partido","r":67,"p":500.0,"id":273912},{"n":"Azzaro","f":"Lorena Azzaro","r":74,"p":500.0,"id":275399},{"n":"Lobato","f":"Lucia Lobato","r":62,"p":200.0,"id":78622},{"n":"Newsham","f":"Charlotte Newsham","r":62,"p":200.0,"id":86135}]},{"name":"Le Mans FC","tok":13,"grade":"A","cost":7400.0,"href":"/fut-gallery/ligue-1/le-mans-fc/","pl":[{"n":"Voyer","f":"Harold Voyer","r":68,"p":750.0,"id":78757},{"n":"Eyoum","f":"Theo Eyoum","r":68,"p":450.0,"id":78761},{"n":"Colas","f":"Erwan Colas","r":66,"p":500.0,"id":78771},{"n":"Gueye","f":"Dame Gueye","r":71,"p":500.0,"id":78878},{"n":"Harhouz","f":"William Harhouz","r":65,"p":500.0,"id":80229},{"n":"Rabillard","f":"Antoine Rabillard","r":71,"p":500.0,"id":232118},{"n":"Kocik","f":"Nicolas Kocik","r":69,"p":500.0,"id":232417},{"n":"Buades","f":"Lucas Buades","r":71,"p":500.0,"id":241818},{"n":"Lauray","f":"Alexandre Lauray","r":67,"p":500.0,"id":248357},{"n":"Larouci","f":"Yasser Larouci","r":68,"p":450.0,"id":252302},{"n":"Brahimi","f":"Billal Brahimi","r":72,"p":500.0,"id":257975},{"n":"Torrente","f":"Torrente","r":72,"p":550.0,"id":264103},{"n":"Calodat","f":"Lucas Calodat","r":69,"p":500.0,"id":265651},{"n":"Quarshie","f":"Edwin Quarshie","r":68,"p":500.0,"id":78764},{"n":"Delbecque","f":"Augustin Delbecque","r":57,"p":200.0,"id":78756}]},{"name":"Logro\xf1o United","tok":28,"grade":"S","cost":16150.0,"href":"/fut-gallery/laliga/logrono-united/","pl":[{"n":"Isina Corte","f":"Isabel Corte Pelaez Isina Corte","r":82,"p":11300.0,"id":276887},{"n":"Isina Corte","f":"Isabel Corte Pelaez Isina Corte","r":80,"p":750.0,"id":276887},{"n":"Ana Franco","f":"Ana Franco","r":72,"p":500.0,"id":272047},{"n":"Olatz Santana","f":"Olatz Santana","r":71,"p":450.0,"id":272211},{"n":"Leitner","f":"Annelie Leitner","r":70,"p":500.0,"id":276468},{"n":"Mar\xeda Barquero","f":"Maria Barquero Gutierrez Maria Barquero","r":62,"p":350.0,"id":72366},{"n":"Mart\xedn","f":"Milagros Martin","r":61,"p":200.0,"id":72810},{"n":"Rebeca","f":"Rebeca Costa Da Silva Rebeca","r":64,"p":200.0,"id":77986},{"n":"Asenjo","f":"Mia Asenjo","r":64,"p":200.0,"id":78883},{"n":"Marta Masferrer","f":"Marta Masferrer","r":64,"p":350.0,"id":78884},{"n":"Morcillo","f":"Justina Morcillo","r":63,"p":500.0,"id":78900},{"n":"Laura Mart\xednez","f":"Laura Martinez","r":61,"p":200.0,"id":78901},{"n":"Andrea Colomina","f":"Andrea Colomina","r":62,"p":250.0,"id":79617},{"n":"Gim\xe9nez","f":"Margarita Gimenez","r":62,"p":200.0,"id":80059},{"n":"Yeboah","f":"Comfort Yeboah","r":61,"p":200.0,"id":81679}]},{"name":"Real Racing Club","tok":13,"grade":"A","cost":7600.0,"href":"/fut-gallery/laliga/real-racing-club/","pl":[{"n":"Sergio Canales","f":"Canales","r":78,"p":650.0,"id":190286},{"n":"I\xf1igo Vicente","f":"Inigo Vicente","r":77,"p":650.0,"id":243792},{"n":"Andr\xe9s Mart\xedn","f":"Andres Martin","r":77,"p":650.0,"id":246044},{"n":"Jorge Salinas","f":"Jorge Salinas Viadero Jorge Salinas","r":72,"p":500.0,"id":74606},{"n":"Gueye","f":"Maguette Gueye","r":69,"p":500.0,"id":74881},{"n":"Guliashvili","f":"Giorgi Guliashvili","r":69,"p":500.0,"id":83120},{"n":"Villalibre","f":"Villalibre","r":74,"p":550.0,"id":193794},{"n":"Manu Hernando","f":"Manu Hernando","r":69,"p":500.0,"id":243155},{"n":"\xcd\xf1igo Sainz-Maza","f":"Inigo","r":67,"p":500.0,"id":254005},{"n":"Mantilla","f":"Mantilla","r":71,"p":550.0,"id":269197},{"n":"Pablo Garc\xeda","f":"Pablo Garcia Fernandez Pablo Garcia","r":70,"p":450.0,"id":76739},{"n":"Aar\xf3n Mart\xedn","f":"Aaron","r":74,"p":450.0,"id":236295},{"n":"Belocian","f":"Jeanuel Belocian","r":71,"p":500.0,"id":268622},{"n":"Prati","f":"Matteo Prati","r":72,"p":450.0,"id":272725},{"n":"Laro G\xf3mez","f":"Laro Gomez","r":60,"p":200.0,"id":80005}]},{"name":"Hull City","tok":38,"grade":"S","cost":22750.0,"href":"/fut-gallery/premier-league/hull-city/","pl":[{"n":"Tzolakis","f":"Konstantinos Tzolakis","r":81,"p":13300.0,"id":252552},{"n":"Tzolakis","f":"Konstantinos Tzolakis","r":79,"p":650.0,"id":252552},{"n":"Morita","f":"Hidemasa Morita","r":78,"p":650.0,"id":242087},{"n":"Butland","f":"Jack Butland","r":75,"p":700.0,"id":203042},{"n":"Mendy","f":"Nobel Mendy","r":75,"p":1100.0,"id":276633},{"n":"Thomas","f":"Sorba Thomas","r":75,"p":1000.0,"id":260478},{"n":"Norton-Cuffy","f":"Brooke Norton Cuffy","r":75,"p":650.0,"id":260653},{"n":"Crooks","f":"Matt Crooks","r":71,"p":550.0,"id":202693},{"n":"Targett","f":"Matt Targett","r":72,"p":600.0,"id":218659},{"n":"Gelhardt","f":"Joe Gelhardt","r":73,"p":600.0,"id":246053},{"n":"Matazo","f":"Eliot Matazo","r":70,"p":550.0,"id":258433},{"n":"Stroud","f":"Elliot Stroud","r":74,"p":600.0,"id":272712},{"n":"Belloumi","f":"Mohamed Belloumi","r":73,"p":550.0,"id":277663},{"n":"Mouzakitis","f":"Christos Mouzakitis","r":73,"p":650.0,"id":73884},{"n":"Cho","f":"Mohamed Ali Cho","r":74,"p":600.0,"id":256476}]},{"name":"Lecce","tok":13,"grade":"A","cost":7850.0,"href":"/fut-gallery/serie-a/lecce/","pl":[{"n":"Falcone","f":"Wladimiro Falcone","r":84,"p":1100.0,"id":210676},{"n":"Coulibaly","f":"Lassana Coulibaly","r":74,"p":500.0,"id":230107},{"n":"Maleh","f":"Youssef Maleh","r":71,"p":500.0,"id":236838},{"n":"Bleve","f":"Marco Bleve","r":69,"p":500.0,"id":239573},{"n":"Geubbels","f":"Willem Geubbels","r":72,"p":600.0,"id":241266},{"n":"Ndaba","f":"Corrie Ndaba","r":66,"p":500.0,"id":247528},{"n":"Pierotti","f":"Santiago Pierotti","r":71,"p":500.0,"id":253139},{"n":"Fofana","f":"Sadik Fofana","r":65,"p":450.0,"id":263949},{"n":"Ngom","f":"Oumar Ngom","r":66,"p":500.0,"id":266848},{"n":"\u0160tuli\u0107","f":"Nikola Stulic","r":70,"p":500.0,"id":273915},{"n":"N'Dri","f":"Konan Ndri","r":68,"p":500.0,"id":247668},{"n":"Kaba","f":"Mohamed Kaba","r":69,"p":500.0,"id":263469},{"n":"Fatah","f":"Amar Ahmed Fatah","r":67,"p":500.0,"id":266049},{"n":"Demb\xe9l\xe9","f":"Ali Bina Dembele","r":65,"p":500.0,"id":273936},{"n":"Gorter","f":"Olaf Gorter","r":62,"p":200.0,"id":80606}]},{"name":"Al Shabab","tok":28,"grade":"S","cost":17050.0,"href":"/fut-gallery/roshn-saudi-league/al-shabab/","pl":[{"n":"Carrasco","f":"Yannick Carrasco","r":84,"p":11800.0,"id":208418},{"n":"Carrasco","f":"Yannick Carrasco","r":82,"p":700.0,"id":208418},{"n":"Partey","f":"Thomas Partey","r":78,"p":700.0,"id":209989},{"n":"Mart\xednez","f":"Roger Martinez","r":77,"p":900.0,"id":219797},{"n":"Daniel Podence","f":"Daniel Podence","r":76,"p":650.0,"id":226766},{"n":"Al Hammami","f":"Hammam Al Hammami","r":64,"p":300.0,"id":71832},{"n":"Qaysi","f":"Emad Qaysi","r":52,"p":200.0,"id":75490},{"n":"Al Shubili","f":"Talal Al Shubili","r":54,"p":250.0,"id":77536},{"n":"Hadhood","f":"Abdulaziz Hadhood","r":53,"p":200.0,"id":78872},{"n":"Al Bishi","f":"Nasser Al Bishi","r":51,"p":200.0,"id":83064},{"n":"Al Asmari","f":"Ali Al Asmari","r":63,"p":250.0,"id":240600},{"n":"Al Nashri","f":"Awadh Al Nashri","r":60,"p":200.0,"id":259358},{"n":"Matuq","f":"Abdullah Matuq","r":54,"p":200.0,"id":264458},{"n":"Makki","f":"Ali Makki","r":57,"p":200.0,"id":269682},{"n":"Harboush","f":"Mohammed Harboush","r":57,"p":300.0,"id":273897}]},{"name":"FC Badalona Women","tok":13,"grade":"A","cost":8250.0,"href":"/fut-gallery/laliga/fc-badalona-women/","pl":[{"n":"Elena Julve","f":"Elena Julve","r":83,"p":700.0,"id":272163},{"n":"Vicky Losada","f":"Vicky Losada","r":78,"p":650.0,"id":227201},{"n":"Sonia Majar\xedn","f":"Sonia Majarin","r":78,"p":700.0,"id":272111},{"n":"Canales","f":"Antonia Canales","r":78,"p":650.0,"id":273142},{"n":"Mar\xeda Llompart","f":"Maria Llompart","r":76,"p":650.0,"id":272148},{"n":"Irina Uribe","f":"Irina Uribe","r":76,"p":650.0,"id":272159},{"n":"Lorena Navarro","f":"Lorena Navarro","r":70,"p":500.0,"id":268994},{"n":"Mar\xeda Valenzuela","f":"Maria Valenzuela","r":72,"p":500.0,"id":272021},{"n":"Berta Pujadas","f":"Berta Pujadas","r":73,"p":500.0,"id":272085},{"n":"Sheila","f":"Sheila","r":74,"p":600.0,"id":272145},{"n":"Luc\xeda Mart\xednez","f":"Lucia Martinez","r":72,"p":500.0,"id":272188},{"n":"Mirari Uria","f":"Mirari Uria","r":69,"p":450.0,"id":272199},{"n":"Izarne Sarasola","f":"Izarne Sarasola","r":70,"p":500.0,"id":272205},{"n":"Nerea Carmona","f":"Nerea Carmona Balsera Nerea Carmona","r":65,"p":500.0,"id":278313},{"n":"Paula S\xe1nchez","f":"Paula Sanchez","r":64,"p":200.0,"id":279037}]},{"name":"Al Faisaly","tok":28,"grade":"S","cost":17950.0,"href":"/fut-gallery/roshn-saudi-league/al-faisaly/","pl":[{"n":"Mendy","f":"Alexandre Mendy","r":80,"p":13000.0,"id":223510},{"n":"Andrei Girotto","f":"Andrei Girotto","r":78,"p":650.0,"id":226515},{"n":"Subayt","f":"Abdullah Subayt","r":58,"p":300.0,"id":86466},{"n":"Ella","f":"Andre Jordy Ella","r":56,"p":400.0,"id":87434},{"n":"Jahfali","f":"Mohammed Jahfali","r":63,"p":350.0,"id":210182},{"n":"Al Shereaf","f":"Abdulrahman Al Shereaf","r":58,"p":300.0,"id":210909},{"n":"Barnawi","f":"Yaseen Barnawi","r":62,"p":300.0,"id":221648},{"n":"Al Mozairib","f":"Yousef Al Mozairib","r":61,"p":350.0,"id":241954},{"n":"Issa","f":"Jabor Issa","r":60,"p":300.0,"id":242225},{"n":"Abdu","f":"Ahmed Abdu","r":64,"p":300.0,"id":245438},{"n":"Al Mogren","f":"Abdullah Al Meqran","r":59,"p":300.0,"id":245494},{"n":"Al Shanqeeti","f":"Mohammed Al Shanqeeti","r":57,"p":350.0,"id":253015},{"n":"Al Muwallad","f":"Eid Al Muwallad","r":60,"p":400.0,"id":275561},{"n":"Al Aqeel","f":"Mohammed Al Aqeel","r":56,"p":350.0,"id":276114},{"n":"Fallatah","f":"Ayman Fallatah","r":57,"p":300.0,"id":277488}]},{"name":"Udinese","tok":13,"grade":"A","cost":8400.0,"href":"/fut-gallery/serie-a/udinese/","pl":[{"n":"Alaba","f":"David Alaba","r":82,"p":750.0,"id":197445},{"n":"Solet","f":"Oumar Solet","r":78,"p":650.0,"id":242238},{"n":"Okoye","f":"Maduka Okoye","r":76,"p":750.0,"id":257288},{"n":"Palma","f":"Matteo Palma","r":67,"p":600.0,"id":72324},{"n":"Kabasele","f":"Christian Kabasele","r":73,"p":500.0,"id":190324},{"n":"Kamara","f":"Hassane Kamara","r":72,"p":550.0,"id":220421},{"n":"Lovri\u010d","f":"Sandi Lovric","r":73,"p":600.0,"id":223866},{"n":"Ebosse","f":"Enzo Ebosse","r":69,"p":600.0,"id":241007},{"n":"Chakvetadze","f":"Giorgi Chakvetadze","r":72,"p":600.0,"id":241168},{"n":"Bayo","f":"Vakoun Issouf Bayo","r":68,"p":500.0,"id":246832},{"n":"Oier Zarraga","f":"Zarraga","r":71,"p":600.0,"id":258615},{"n":"Abankwah","f":"James Abankwah","r":69,"p":500.0,"id":264509},{"n":"Zanoli","f":"Alessandro Zanoli","r":72,"p":500.0,"id":268656},{"n":"Bertola","f":"Nicolo Bertola","r":72,"p":500.0,"id":271475},{"n":"Arizala","f":"Juan David Arizala","r":63,"p":200.0,"id":275647}]},{"name":"Deportivo Alav\xe9s","tok":13,"grade":"A","cost":8950.0,"href":"/fut-gallery/laliga/deportivo-alaves/","pl":[{"n":"Toni Mart\xednez","f":"Toni Martinez","r":78,"p":650.0,"id":234826},{"n":"Antonio Blanco","f":"Blanco","r":78,"p":650.0,"id":261987},{"n":"Boy\xe9","f":"Lucas Boye","r":77,"p":800.0,"id":222041},{"n":"Tenaglia","f":"Nahuel Tenaglia","r":77,"p":1400.0,"id":240953},{"n":"\xc1ngel P\xe9rez","f":"Angel Perez","r":72,"p":550.0,"id":76768},{"n":"Mikel Rodr\xedguez","f":"Mikel Rodriguez Ulacia Mikel Rodriguez","r":67,"p":500.0,"id":79186},{"n":"Denis Su\xe1rez","f":"Denis Suarez","r":74,"p":600.0,"id":205192},{"n":"Ale\xf1\xe1","f":"Alena","r":74,"p":550.0,"id":233113},{"n":"Ander Guevara","f":"Ander Guevara","r":74,"p":500.0,"id":240458},{"n":"Protesoni","f":"Carlos Benavidez","r":73,"p":500.0,"id":244948},{"n":"Miguel Rodr\xedguez","f":"Miguel Rodriguez","r":72,"p":500.0,"id":258730},{"n":"Pablo Ib\xe1\xf1ez","f":"Pablo Ibanez","r":73,"p":500.0,"id":264160},{"n":"Rebbach","f":"Abderrahman Rebbach","r":73,"p":500.0,"id":270834},{"n":"Yusi","f":"Youssef Enriquez Lekhedim Yusi","r":70,"p":500.0,"id":278003},{"n":"Hugo Novoa","f":"Hugo Novoa","r":64,"p":250.0,"id":258041}]},{"name":"Neom SC","tok":13,"grade":"A","cost":9050.0,"href":"/fut-gallery/roshn-saudi-league/neom-sc/","pl":[{"n":"Sarr","f":"Malang Sarr","r":79,"p":800.0,"id":235454},{"n":"Sarr","f":"Malang Sarr","r":79,"p":700.0,"id":235454},{"n":"Benrahma","f":"Said Benrahma","r":77,"p":650.0,"id":220621},{"n":"Bu\u0142ka","f":"Marcin Bulka","r":77,"p":650.0,"id":238186},{"n":"Lacazette","f":"Alexandre Lacazette","r":76,"p":850.0,"id":193301},{"n":"Masouras","f":"Giorgios Masouras","r":75,"p":1100.0,"id":246708},{"n":"Abu Taha","f":"Mohannad Abu Taha","r":66,"p":550.0,"id":76913},{"n":"Al Buraik","f":"Mohammed Al Buraik","r":68,"p":600.0,"id":221370},{"n":"Al Hajji","f":"Alaa Al Hajji","r":65,"p":550.0,"id":231801},{"n":"Al Ghamdi","f":"Faisal Al Ghamdi","r":66,"p":550.0,"id":260977},{"n":"Z\xe9z\xe9","f":"Nathan Zeze","r":74,"p":550.0,"id":273123},{"n":"Al Saad","f":"Muhannad Al Saad","r":66,"p":550.0,"id":278206},{"n":"Kon\xe9","f":"Amadou Kone","r":71,"p":550.0,"id":278902},{"n":"Al Anzi","f":"Ahmed Al Anzi","r":55,"p":200.0,"id":85160},{"n":"Al Ayeri","f":"Abdulmalek Al Ayeri","r":64,"p":200.0,"id":264823}]},{"name":"Bergamo Calcio","tok":18,"grade":"A","cost":13350.0,"href":"/fut-gallery/serie-a/bergamo-calcio/","pl":[{"n":"Carnesecchi","f":"Marco Carnesecchi","r":86,"p":4700.0,"id":252154},{"n":"De Ketelaere","f":"Charles De Ketelaere","r":81,"p":650.0,"id":251470},{"n":"Pa\u0161ali\u0107","f":"Mario Pasalic","r":79,"p":650.0,"id":223273},{"n":"Kossounou","f":"Odilon Kossounou","r":79,"p":650.0,"id":246875},{"n":"Hien","f":"Isak Hien","r":79,"p":650.0,"id":260697},{"n":"Scalvini","f":"Giorgio Scalvini","r":79,"p":650.0,"id":265188},{"n":"Bellanova","f":"Raoul Bellanova","r":78,"p":650.0,"id":247229},{"n":"Raspadori","f":"Giacomo Raspadori","r":78,"p":650.0,"id":253002},{"n":"Samard\u017ei\u0107","f":"Lazar Samardzic","r":78,"p":650.0,"id":256115},{"n":"Zalewski","f":"Nicola Zalewski","r":78,"p":650.0,"id":262113},{"n":"Rowe","f":"Jonathan Rowe","r":76,"p":650.0,"id":266500},{"n":"Bernasconi","f":"Lorenzo Bernasconi","r":71,"p":500.0,"id":74574},{"n":"Gaetano","f":"Gianluca Gaetano","r":74,"p":500.0,"id":246877},{"n":"Sulemana","f":"Kamaldeen Sulemana","r":74,"p":550.0,"id":256035},{"n":"Kristensen","f":"Thomas Thiesson Kristensen","r":74,"p":600.0,"id":261573}]},{"name":"San Diego Wave FC","tok":13,"grade":"A","cost":10500.0,"href":"/fut-gallery/national-women-s-soccer-league/san-diego-wave-fc/","pl":[{"n":"Dali","f":"Kenza Dali","r":85,"p":2500.0,"id":227353},{"n":"Sandra Pa\xf1os","f":"Sandra Panos","r":82,"p":700.0,"id":227776},{"n":"Morroni","f":"Perle Morroni","r":82,"p":700.0,"id":256095},{"n":"Catarina Macario","f":"Catarina Macario","r":82,"p":700.0,"id":262330},{"n":"Bonansea","f":"Barbara Bonansea","r":82,"p":650.0,"id":227072},{"n":"Dudinha","f":"Dudinha","r":81,"p":650.0,"id":80028},{"n":"Ludmila","f":"Ludmila","r":80,"p":650.0,"id":241023},{"n":"Leon","f":"Adriana Leon","r":77,"p":650.0,"id":227397},{"n":"Fazer","f":"Laurina Fazer","r":77,"p":650.0,"id":264900},{"n":"Armstrong","f":"Trinity Armstrong","r":70,"p":550.0,"id":76518},{"n":"Agudelo","f":"Luisa Agudelo","r":67,"p":600.0,"id":83535},{"n":"Pickett","f":"Kiki Pickett","r":70,"p":500.0,"id":267241},{"n":"Harbert","f":"Laila Harbert","r":58,"p":200.0,"id":75719},{"n":"Harrison","f":"Nya Harrison","r":60,"p":600.0,"id":77895},{"n":"Harrison","f":"Nya Harrison","r":60,"p":200.0,"id":77895}]},{"name":"Atlanta United","tok":28,"grade":"S","cost":22300.0,"href":"/fut-gallery/mls/atlanta-united/","pl":[{"n":"Edwards","f":"Matthew Edwards","r":57,"p":200.0,"id":74622},{"n":"Reilly","f":"Will Reilly","r":58,"p":200.0,"id":76454},{"n":"Chong-Qui","f":"Dominik Chong Qui","r":55,"p":200.0,"id":78044},{"n":"Sanchez","f":"Cooper Sanchez","r":61,"p":200.0,"id":79846},{"n":"Gill","f":"Adrian Gill","r":54,"p":200.0,"id":84025},{"n":"Togashi","f":"Cayman Togashi","r":61,"p":200.0,"id":232785},{"n":"Fortune","f":"Ajani Fortune","r":62,"p":200.0,"id":274273},{"n":"Brennan","f":"Luke Brennan","r":59,"p":200.0,"id":278490},{"n":"Hibbert","f":"Jayden Hibbert","r":58,"p":200.0,"id":77491},{"n":"Pita","f":"Santiago Pita","r":51,"p":200.0,"id":84042},{"n":"Sergio Santos","f":"Sergio Santos","r":64,"p":250.0,"id":226495},{"n":"Picault","f":"Fafa Picault","r":67,"p":500.0,"id":230991},{"n":"Amaro","f":"Mauricio Amaro","r":66,"p":500.0,"id":274899},{"n":"D\xedaz","f":"Paulo Diaz","r":73,"p":550.0,"id":214436},{"n":"Alonso","f":"Junior Alonso","r":85,"p":18500.0,"id":220337}]},{"name":"Inter Miami CF","tok":38,"grade":"S","cost":30550.0,"href":"/fut-gallery/mls/inter-miami-cf/","pl":[{"n":"Casemiro","f":"Casemiro","r":83,"p":700.0,"id":200145},{"n":"De Paul","f":"Rodrigo Javier De Paul","r":83,"p":700.0,"id":212616},{"n":"Fricio Caicedo","f":"Fricio Caicedo","r":58,"p":750.0,"id":87930},{"n":"Barraza","f":"Luis Barraza","r":64,"p":750.0,"id":247121},{"n":"Morales","f":"Santiago Morales","r":58,"p":750.0,"id":278217},{"n":"Su\xe1rez","f":"Luis Suarez","r":78,"p":800.0,"id":176580},{"n":"R\xedos Novo","f":"Rocco Rios Novo","r":63,"p":800.0,"id":269732},{"n":"Boatwright","f":"Israel Boatwright","r":55,"p":800.0,"id":276169},{"n":"Hall","f":"Tyler Hall","r":55,"p":800.0,"id":278495},{"n":"St. Clair","f":"Dayne St Clair","r":73,"p":850.0,"id":247228},{"n":"Pint\xe9r","f":"Daniel Pinter","r":59,"p":850.0,"id":81554},{"n":"Segovia","f":"Telasco Segovia","r":71,"p":900.0,"id":260056},{"n":"Micael","f":"Micael","r":69,"p":900.0,"id":274396},{"n":"Galarza","f":"Matias Galarza","r":69,"p":900.0,"id":278020},{"n":"Messi","f":"Lionel Messi","r":89,"p":19300.0,"id":158023}]},{"name":"AS Monaco","tok":38,"grade":"S","cost":31750.0,"href":"/fut-gallery/ligue-1/as-monaco/","pl":[{"n":"Nibomb\xe9","f":"Samuel Nibombe","r":62,"p":200.0,"id":75554},{"n":"Stawiecki","f":"Jules Stawiecki","r":60,"p":200.0,"id":75924},{"n":"Cabral","f":"Pape Cabral","r":63,"p":200.0,"id":81663},{"n":"Tour\xe9","f":"Ilane Toure","r":62,"p":450.0,"id":82978},{"n":"Brunner","f":"Paris Brunner","r":66,"p":500.0,"id":274126},{"n":"Zakaria","f":"Denis Zakaria","r":81,"p":650.0,"id":229261},{"n":"Balogun","f":"Folarin Balogun","r":80,"p":650.0,"id":247463},{"n":"Camara","f":"Lamine Camara","r":80,"p":650.0,"id":275138},{"n":"Hr\xe1deck\xfd","f":"Lukas Hradecky","r":79,"p":650.0,"id":190941},{"n":"Golovin","f":"Alexandr Golovin","r":78,"p":650.0,"id":225663},{"n":"Minamino","f":"Takumi Minamino","r":77,"p":650.0,"id":226627},{"n":"Ansu Fati","f":"Ansu Fati","r":77,"p":650.0,"id":253004},{"n":"Abline","f":"Matthis Abline","r":76,"p":650.0,"id":264422},{"n":"Dier","f":"Eric Dier","r":77,"p":700.0,"id":202335},{"n":"Camara","f":"Lamine Camara","r":85,"p":24300.0,"id":275138}]},{"name":"Diriyah","tok":28,"grade":"S","cost":38700.0,"href":"/fut-gallery/roshn-saudi-league/diriyah/","pl":[{"n":"Al Zaid","f":"Abdullah Al Zaid","r":55,"p":200.0,"id":78944},{"n":"Farhan","f":"Sultan Farhan","r":63,"p":200.0,"id":241587},{"n":"Al Sibyani","f":"Hussain Sibyani","r":61,"p":200.0,"id":271637},{"n":"Bahbri","f":"Hattan Bahebri","r":66,"p":500.0,"id":208974},{"n":"\xd3scar","f":"Oscar","r":71,"p":550.0,"id":239335},{"n":"Mathys De Carvalho","f":"Mathys De Carvalho Soares Mathys De Carvalho","r":68,"p":550.0,"id":80690},{"n":"Gueye","f":"Idrissa Gueye","r":79,"p":650.0,"id":193474},{"n":"Djimsiti","f":"Berat Djimsiti","r":79,"p":650.0,"id":208165},{"n":"Laborde","f":"Gaetan Laborde","r":78,"p":650.0,"id":209519},{"n":"Millot","f":"Enzo Millot","r":77,"p":650.0,"id":252259},{"n":"N\xfa\xf1ez","f":"Darwin Nunez","r":77,"p":650.0,"id":253072},{"n":"Vasilj","f":"Nikola Vasilj","r":77,"p":650.0,"id":262956},{"n":"Mbemba","f":"Chancel Mbemba","r":75,"p":1300.0,"id":210897},{"n":"Mbemba","f":"Chancel Mbemba","r":80,"p":13300.0,"id":210897},{"n":"Mbemba","f":"Chancel Mbemba","r":80,"p":18000.0,"id":210897}]}];
var KEY='futbuscador_v1';
var PR;try{PR=JSON.parse(localStorage.getItem(KEY+'_prices')||'null')}catch(e){PR=null}
if(!PR||!PR.ids)PR={ids:{},ts:0};
function applyPrices(){SETS.forEach(function(s){var c=0;s.pl.forEach(function(p){if(p.id&&PR.ids[p.id])p.p=PR.ids[p.id];c+=p.p||0});s.cost=c})}
applyPrices();
var refreshing=false;
function refreshPrices(){
  if(refreshing)return;
  if(typeof GM_xmlhttpRequest!='function'){msg('Tampermonkey no me deja leer fut.gg (GM_xmlhttpRequest)');return}
  refreshing=true;var i=0,upd=0,fail=0;
  function one(){
    if(i>=SETS.length){refreshing=false;PR.ts=Date.now();localStorage.setItem(KEY+'_prices',JSON.stringify(PR));applyPrices();render();msg('Precios actualizados: '+upd+' cambiados'+(fail?', '+fail+' sets sin leer':'')+'. Pulsa Poner.');return}
    var s=SETS[i++];msg('Leyendo precios '+i+'/'+SETS.length+' '+s.name+'...');
    GM_xmlhttpRequest({method:'GET',url:'https://www.fut.gg'+s.href,timeout:15000,onload:function(r){
      try{
        var re=/eaId:(\d+),playerEaId:(\d+)[^}]*?price:(\d+)/g,m,map={},n=0;
        while((m=re.exec(r.responseText))){map[m[1]]=+m[3];map[m[2]]=+m[3];n++}
        if(!n){fail++}else{s.pl.forEach(function(p){var v=map[p.id];if(v&&v!=p.p){upd++}if(v)PR.ids[p.id]=v})}
      }catch(e){fail++}
      setTimeout(one,400);
    },onerror:function(){fail++;setTimeout(one,400)},ontimeout:function(){fail++;setTimeout(one,400)}});
  }
  one();
}
var st;
try{st=JSON.parse(localStorage.getItem(KEY)||'null')}catch(e){st=null}
if(!st||!st.done){st={s:0,i:0,done:{}}}
if(!st.paid)st.paid={};if(!st.sold)st.sold={};
function save(){localStorage.setItem(KEY,JSON.stringify(st))}
function cur(){var s=SETS[st.s];if(!s)return null;return {set:s,p:s.pl[st.i]}}
function totalDone(){var n=0;for(var k in st.done)n++;return n}
function totalAll(){var n=0;SETS.forEach(function(s){n+=s.pl.length});return n}
function fmt(n){return n==null?'?':(n>=1000?(n/1000).toFixed(n%1000?1:0)+'K':String(n))}

var $=function(sel,root){return (root||document).querySelector(sel)};
var $$=function(sel,root){return [].slice.call((root||document).querySelectorAll(sel))};

function nameInput(){return $('.ut-player-search-control input.ut-text-input-control')}
function spinners(){return $$('.ut-numeric-input-spinner-control')}
function buyMaxSpinner(){var s=spinners();return s.length>=4?s[3]:null}

function setSpin(sp,v){var inp=$('input',sp);if(!inp)return false;inp.focus();inp.value=String(v);inp.dispatchEvent(new Event('input',{bubbles:true}));inp.dispatchEvent(new Event('change',{bubbles:true}));inp.blur();return true}
function setMax(price){
  var sp=buyMaxSpinner();if(!sp)return false;
  var inp=$('input',sp);inp.focus();inp.value=String(price);
  inp.dispatchEvent(new Event('input',{bubbles:true}));
  inp.dispatchEvent(new Event('change',{bubbles:true}));
  inp.blur();return true;
}
function clearMax(){var sp=buyMaxSpinner();if(!sp)return;var inp=$('input',sp);inp.focus();inp.value='';inp.dispatchEvent(new Event('input',{bubbles:true}));inp.dispatchEvent(new Event('change',{bubbles:true}));inp.blur()}
function bumpMax(){var sp=buyMaxSpinner();if(!sp)return;var b=$('.increment-value',sp);if(b)b.click();}
function lowerMax(){var sp=buyMaxSpinner();if(!sp)return;var b=$('.decrement-value',sp);if(b&&!b.disabled)b.click();}
function clearName(){var c=$('.ut-player-search-control');if(!c)return;var x=$('.exit-btn',c);if(x)x.click();}

function typeName(q){
  var inp=nameInput();clearName();inp=nameInput();
  inp.focus();inp.value=q;
  inp.dispatchEvent(new Event('input',{bubbles:true}));
  inp.dispatchEvent(new KeyboardEvent('keyup',{bubbles:true,key:q.slice(-1)}));
}
function norm(s){return String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}
function pickPlayer(p,cb){
  var inp=nameInput();if(!inp){cb('No estas en la pantalla de busqueda');return}
  var queries=[];if(p.f)queries.push(p.f);queries.push(p.n);
  if(p.f){var parts=p.f.split(' ');if(parts.length>1){var ap=parts[parts.length-1],no=parts[0];queries.push(ap);queries.push(ap+' '+no);if(no.length>4)queries.push(ap+' '+no.slice(0,4))}}
  var qi=0;
  function attempt(){
    if(qi>=queries.length){cb('No encuentro a '+p.n+' '+p.r+' en el buscador (escribelo tu)');return}
    var q=queries[qi++];typeName(q);
    var tries=0;
    var t=setInterval(function(){
      tries++;
      var bs=$$('.ut-player-search-control ul.playerResultsList button');
      if(bs.length){
        clearInterval(t);
        var same=bs.filter(function(b){var r=$('.btn-subtext',b);return r&&r.innerText.trim()==String(p.r)});
        var b=same.filter(function(b){var n=norm($('.btn-text',b).innerText);return n.indexOf(norm(p.n))>=0||norm(p.f).indexOf(n)>=0})[0]||same[0];
        if(!b){attempt();return}
        realClick(b);
        cb(null,$('.btn-text',b).innerText);
      }else if(tries>25){clearInterval(t);attempt()}
    },100);
  }
  attempt();
}
function fill(){
  var c=cur();if(!c){msg('Lista terminada');return}
  if(!nameInput()){msg('Abre Transferencias > Buscar en el mercado');return}
  msg('Buscando '+c.p.n+'...');
  pickPlayer(c.p,function(err,name){
    if(err){msg(err);return}
    searchState=null;if(c.p.p){setMax(c.p.p)}else{clearMax()}
    msg((name||c.p.n)+' puesto (max '+fmt(c.p.p)+' de fut.gg). Pulsa Buscar.');
  });
}
function key(){return st.s+':'+st.i}
function next(markDone){
  var c=cur();if(!c)return;
  if(markDone){st.done[key()]=1}
  st.i++;
  if(st.i>=c.set.pl.length){st.i=0;st.s++;if(st.s>=SETS.length){st.s=SETS.length-1;st.i=c.set.pl.length-1;save();render();msg('Todos los sets hechos');return}}
  save();render();fill();
}
function prev(){st.i--;if(st.i<0){st.s=Math.max(0,st.s-1);st.i=SETS[st.s].pl.length-1}save();render();}
function skipSet(){var c=cur();if(!c)return;st.s=Math.min(SETS.length-1,st.s+1);st.i=0;save();render();}


function vis(e){if(!e)return false;var r=e.getBoundingClientRect();return r.width>0&&r.height>0&&getComputedStyle(e).visibility!='hidden'}
function btnByText(re,root){return $$('button',root||document).filter(function(b){return vis(b)&&!b.disabled&&re.test((b.innerText||'').replace(/\s+/g,' ').trim())&&!b.__fb})[0]}
function realClick(b){if(!b)return false;['pointerdown','mousedown','pointerup','mouseup','click'].forEach(function(t){try{b.dispatchEvent(new MouseEvent(t,{bubbles:true,cancelable:true,view:(typeof unsafeWindow!='undefined'?unsafeWindow:window)}))}catch(e){}});return true}
function step(p){return p<1000?50:p<10000?100:p<50000?250:p<100000?500:1000}
function waitFor(fn,ms,cb){var t0=Date.now();var t=setInterval(function(){var r;try{r=fn()}catch(e){clearInterval(t);msg('Error: '+e.message);return}if(r){clearInterval(t);try{cb(r)}catch(e){msg('Error: '+e.message)}}else if(Date.now()-t0>ms){clearInterval(t);try{cb(null)}catch(e){msg('Error: '+e.message)}}},80)}
function dialog(){return $$('.ea-dialog-view').filter(function(d){return vis(d)&&!/Resize Window/.test(d.innerText)})[0]}

function noResults(){return /No results found|No se han encontrado|Sin resultados/i.test(document.body.innerText)&&$$('.listFUTItem').filter(vis).length==0}
function clickSearch(){var b=btnByText(/^(Search|Buscar)$/);if(!b)return false;realClick(b);return true}
function waitResults(cb){waitFor(function(){return $$('.listFUTItem').filter(vis).length>0||noResults()},5000,function(){cb($$('.listFUTItem').filter(vis).length)})}
function backToForm(cb){var back=$('button.ut-navigation-button-control');realClick(back);waitFor(nameInput,3000,cb)}
var searchState=null;
function doSearch(){
  lastKey=key();
  var c=cur();
  if(!clickSearch()){msg('No veo el boton Buscar');return}
  var mx=buyMaxSpinner()?$('input',buyMaxSpinner()).value:'';
  msg('Buscando'+(mx?' (max '+mx+')':' sin tope')+'...');
  waitResults(function(n){
    var ch=cheapestItem();
    if(n>0&&n<20){searchState={min:ch?ch.v:null};msg(n+' resultado(s); el mas barato a '+(ch?ch.v:'?')+(c&&c.p.p?' (fut.gg '+fmt(c.p.p)+')':'')+'. Pulsa Comprar.');return}
    if(n>=20){
      if(!ch){msg('Lista llena sin precios legibles. Pulsa Comprar o -1 escalon.');return}
      var lower=ch.v-step(ch.v);
      if((searchState&&searchState.probe)||lower<200){searchState={min:ch.v};msg('20+ resultados; minimo '+ch.v+'. Pulsa Comprar.');return}
      msg('Lista llena (min '+ch.v+'); miro si hay por debajo de '+lower+'...');
      backToForm(function(ok){if(!ok){msg('No he vuelto al formulario');return}setMax(lower);searchState={probe:lower,fallback:ch.v};setTimeout(doSearch,250)});
      return;
    }
    if(searchState&&searchState.fallback){
      var fb=searchState.fallback;
      msg('Nada por debajo; vuelvo a '+fb+'...');
      backToForm(function(ok){if(!ok){msg('No he vuelto al formulario');return}setMax(fb);searchState={probe:fb};setTimeout(doSearch,250)});
      return;
    }
    if(mx){
      backToForm(function(ok){if(!ok){msg('No he vuelto al formulario');return}bumpMax();msg('Vacio a '+mx+'; subo un escalon. Pulsa Buscar.')});
      return;
    }
    msg('No hay ninguno en el mercado ahora. Pulsa Saltar o vuelve a Buscar.');
  });
}
var lastEmpty=false;
function goBack(){
  searchState=null;
  var b=$('button.ut-navigation-button-control');
  if(!b||!vis(b)){msg('No veo la flecha atras');return}
  realClick(b);
  waitFor(nameInput,3000,function(ok){if(ok){fill()}else{msg('No he vuelto al formulario')}});
}
var lastKey=null;
function coins(){var e=$('.view-navbar-currency-coins')||$('.ut-navigation-bar-view .currency-coins')||$('[class*=currency-coins]');if(!e)return null;var n=parseInt((e.innerText||'').replace(/[^\d]/g,''),10);return isNaN(n)?null:n}
function binOf(li){var e=$('.auctionValue.buyNow .currency-coins, .buyNow .value, .auction .buyNow',li);var t=e?e.innerText:'';if(!t){var m=(li.innerText||'').match(/(?:Buy Now|Comprar ya)[^\d]*([\d.,]+)/i);t=m?m[1]:''}var n=parseInt(String(t).replace(/[^\d]/g,''),10);return isNaN(n)?null:n}
function cheapestItem(){var items=$$('.listFUTItem').filter(vis);var best=null,bv=1e12;items.forEach(function(li){var v=binOf(li);if(v!=null&&v<bv){bv=v;best=li}});return best?{li:best,v:bv}:null}
function doBuy(){
  var c=cur();
  var ch=cheapestItem();

  if(ch&&!/selected|active/.test(ch.li.className)){realClick(ch.li);setTimeout(function(){doBuy2(c,ch.v)},350);return}
  doBuy2(c,ch?ch.v:null);
}
function doBuy2(c,bin){
  var b=btnByText(/^(Buy Now|Comprar ya)/);
  if(!b){msg('No veo Comprar ya (hay resultados?)');return}
  var before=coins();
  realClick(b);msg('Comprando'+(bin?' a '+bin:'')+'...');
  waitFor(function(){var d=dialog();return d&&btnByText(/^(Ok|Aceptar|Yes|Si)$/i,d)},2500,function(okb){
    if(!okb){msg('No ha salido la confirmacion');return}
    realClick(okb);
    waitFor(function(){
      var d=dialog();if(d)return {err:d.innerText.replace(/\s+/g,' ').slice(0,120)};
      var sel=$('.listFUTItem.won');if(sel)return {ok:true,paid:bin||boughtFor()};
      var after=coins();if(before!=null&&after!=null&&after<before)return {ok:true,paid:bin||boughtFor()||(before-after)};
      return null;
    },6000,function(r){
      if(r&&r.ok){
        var paid=r.paid||bin;
        if(c){st.done[key()]=1;if(paid)st.paid[key()]=paid;save()}
        msg('COMPRADO '+(c?c.p.n:'')+' por '+paid+'. Poniendo en venta...');
        listNow(c,paid);
      }else if(r&&r.err){
        var ob=btnByText(/^(Ok|Aceptar)$/i,dialog());if(ob)realClick(ob);
        msg('NO comprado: '+r.err);
      }else{
        msg('No puedo confirmar la compra (saldo igual). Comprueba y usa Siguiente si lo tienes.');
      }
    });
  });
}
function boughtFor(){var m=document.body.innerText.replace(/\s+/g,' ').match(/Bought For:? ?([\d.,]+)/i);return m?parseInt(m[1].replace(/[^\d]/g,''),10):null}
function formOpen(){return $$('.ut-numeric-input-spinner-control').filter(vis).length>=2}
function listNow(c,paid){try{listNow2(c,paid)}catch(e){msg('Error al vender: '+e.message)}}
function listNow2(c,paid){
  var k=c?key():null;
  paid=boughtFor()||paid;
  waitFor(function(){return btnByText(/List on Transfer Market|Poner en el mercado/i)},4000,function(lb){
    if(!lb){if(c){advance();save();render()}msg('COMPRADO '+(c?c.p.n:'')+' pero no veo Poner en el mercado; vendelo desde Objetos ganados. Pulsa Atras.');return}
    if(!formOpen()&&!/open/.test(lb.className))realClick(lb);
    waitFor(function(){var sp=$$('.ut-numeric-input-spinner-control').filter(vis);return sp.length>=2?sp:null},3000,function(sp){
      if(!sp){if(c){advance();save();render()}msg('No sale el formulario de venta. Pulsa Atras.');return}
      var start=Math.max(150,paid-step(paid));
      setSpin(sp[0],start);setSpin(sp[1],paid);
      setTimeout(function(){
        var cb=btnByText(/List for Transfer|Poner en venta/i);
        if(!cb){if(c){advance();save();render()}msg('Precios puestos ('+start+'/'+paid+') pero no veo el boton de confirmar; pulsalo tu y luego Atras.');return}
        realClick(cb);
        waitFor(function(){return $$('.listFUTItem').filter(vis).length==0||noResults()},3000,function(gone){
          if(k)st.sold[k]=1;
          if(c){advance();save();render()}
          msg((gone?'COMPRADO y EN VENTA ':'COMPRADO; venta enviada (comprueba) ')+(c?c.p.n:'')+' por '+paid+'. Pulsa Atras.');
        });
      },300);
    });
  });
}
function advance1(){
  var c=cur();if(!c)return false;
  st.i++;
  if(st.i>=c.set.pl.length){st.i=0;st.s++;if(st.s>=SETS.length){st.s=SETS.length-1;st.i=c.set.pl.length-1;return false}}
  return true;
}
function advance(){
  var n=0;
  do{if(!advance1())break;n++}while(st.done[key()]&&n<400);
}
function allBought(){
  var out=[];
  SETS.forEach(function(s,si){s.pl.forEach(function(p,pi){var k=si+':'+pi;if(st.done[k]&&!st.sold[k])out.push({k:k,p:p,set:s,paid:st.paid[k]||p.p})})});
  return out;
}
function itemName(li){var n=$('.name',li);return n?n.innerText.trim():(li.innerText||'').split('\n')[0].trim()}
function itemRating(li){var r=$('.rating',li);return r?r.innerText.trim():''}
function matchItem(li,p){var n=norm(itemName(li)),q=norm(p.n);if(!n||!q)return false;var rt=itemRating(li);return (n.indexOf(q)>=0||q.indexOf(n)>=0)&&(!rt||rt==String(p.r))}
function doSell(){
  try{doSell2()}catch(e){msg('Error al vender: '+e.message)}
}
function doSell2(){
  var bf=boughtFor();
  var lb=btnByText(/List on Transfer Market|Poner en el mercado/i);
  if(lb&&bf){
    var sel=$('.listFUTItem.selected')||$('.listFUTItem.won')||$('.listFUTItem');
    var nm=sel?itemName(sel):'';
    var hit={b:{p:{n:nm||'jugador'},k:findKeyByName(nm)}};
    listIt(hit,bf);return;
  }
  var pend=allBought();
  var items=$$('.listFUTItem').filter(vis);
  if(!items.length){msg('Abre Transferencias > Lista de transferibles (o la pantalla del jugador comprado)');return}
  var hit=null;
  for(var i=0;i<items.length&&!hit;i++){var nm=itemName(items[i]);if(!nm)continue;for(var j=0;j<pend.length;j++){if(matchItem(items[i],pend[j].p)){hit={li:items[i],b:pend[j]};break}}}
  if(!hit){msg('Ninguno de la lista coincide con los comprados pendientes ('+pend.length+'). Selecciona el jugador y pulsa Vender.');return}
  var paid=hit.b.paid;
  realClick(hit.li);
  setTimeout(function(){
    var bf2=boughtFor();if(bf2)paid=bf2;
    if(!paid){msg('No se el precio pagado por '+hit.b.p.n);return}
    var lb2=btnByText(/List on Transfer Market|Poner en el mercado/i);
    var send=btnByText(/Send to Transfer List|Enviar a .*transferibles/i);
    if(lb2){listIt(hit,paid);return}
    if(send){realClick(send);msg(hit.b.p.n+' enviado a la lista de transferibles. Pulsa Vender para el siguiente.');return}
    msg('No veo "Poner en el mercado" para '+hit.b.p.n);
  },400);
}
function findKeyByName(nm){var k=null;if(!nm)return null;SETS.forEach(function(s,si){s.pl.forEach(function(p,pi){var kk=si+':'+pi;if(st.done[kk]&&!st.sold[kk]&&(norm(nm).indexOf(norm(p.n))>=0||norm(p.f).indexOf(norm(nm))>=0))k=kk})});return k}
function listIt(hit,paid){
  msg('Vendiendo '+hit.b.p.n+' a '+paid+'...');
  var lb=btnByText(/List on Transfer Market|Poner en el mercado|List Item/i);
  if(!formOpen()&&lb&&!/open/.test(lb.className))realClick(lb);
  waitFor(function(){var sp=$$('.ut-numeric-input-spinner-control').filter(vis);return sp.length>=2?sp:null},3000,function(sp){
    if(!sp){if(lb)realClick(lb);msg('No sale el formulario de venta; pulsa Vender otra vez');return}
    var start=Math.max(150,paid-step(paid));
    setSpin(sp[0],start);setSpin(sp[1],paid);
    setTimeout(function(){
      var cb=btnByText(/List for Transfer|Poner en venta|Poner en el mercado|List Item/i);
      if(!cb){msg('Precios puestos ('+start+'/'+paid+'); no veo el boton de confirmar, pulsalo tu');return}
      realClick(cb);
      if(hit.b.k)st.sold[hit.b.k]=1;save();render();
      msg('EN VENTA '+hit.b.p.n+' por '+paid+'. Quedan '+(allBought().length)+'. Pulsa Vender otra vez.');
    },400);
  });
}
function doSellConfirm(){doSell()}
var box,info,m;
function msg(t){if(m){m.textContent=t}try{var L=JSON.parse(localStorage.getItem(KEY+'_log')||'[]');L.push(new Date().toISOString().slice(11,19)+' '+t);while(L.length>40)L.shift();localStorage.setItem(KEY+'_log',JSON.stringify(L))}catch(e){}}
function render(){
  if(!box)return;
  var c=cur();
  if(!c){info.innerHTML='Lista terminada';return}
  var s=c.set,p=c.p;
  var setCost=0;s.pl.forEach(function(x){setCost+=x.p||0});
  var rest=s.pl.slice(st.i).map(function(x,k){return (k==0?'<b>':'')+esc(x.n)+' '+x.r+' <span style="color:#9cf">'+fmt(x.p)+'</span>'+(k==0?'</b>':'')}).join(' &middot; ');
  info.innerHTML='<div style="font-size:12px;color:#aaa">Set '+(st.s+1)+'/'+SETS.length+' &middot; grado '+s.grade+' &middot; '+s.tok+' tokens &middot; '+fmt(setCost)+' monedas &middot; comprados '+totalDone()+'/'+totalAll()+' &middot; por vender '+allBought().length+'</div>'
   +'<div style="font-size:15px;font-weight:bold;margin:2px 0">'+esc(s.name)+' &nbsp; jugador '+(st.i+1)+'/'+s.pl.length+'</div>'
   +'<div style="font-size:12px;line-height:1.5;max-height:54px;overflow:hidden">'+rest+'</div>';
}
function esc(s){return String(s).replace(/[&<>]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;'}[c]})}
function btn(t,title,fn){var b=document.createElement('button');b.textContent=t;b.title=title||'';b.style.cssText='background:#2b6cb0;color:#fff;border:0;border-radius:4px;padding:6px 10px;margin:4px 4px 0 0;cursor:pointer;font-size:13px;font-weight:bold';b.__fb=1;b.onclick=function(e){e.preventDefault();e.stopPropagation();fn()};return b}

function ui(){
  if(box)return;
  box=document.createElement('div');
  box.style.cssText='position:fixed;left:8px;bottom:8px;z-index:2147483647;background:#111c;backdrop-filter:blur(4px);color:#fff;font:13px/1.3 Arial,sans-serif;padding:8px 10px;border-radius:8px;width:420px;box-shadow:0 2px 10px #0008';
  info=document.createElement('div');box.appendChild(info);
  var row=document.createElement('div');
  row.appendChild(btn('Poner (Alt+P)','Rellena nombre y precio max del jugador actual',fill));
  row.appendChild(btn('Buscar (Alt+B)','Pulsa Buscar en la Web App',doSearch));
  row.appendChild(btn('Comprar (Alt+C)','Compra el mas barato, confirma y lo pone en venta al mismo precio',doBuy));
  row.appendChild(btn('Atras (Alt+A)','Vuelve al formulario y rellena el siguiente',goBack));
  row.appendChild(btn('Vender (Alt+V)','En Objetos ganados: pone en venta el siguiente comprado al precio pagado (una pulsacion por jugador)',doSellConfirm));
  row.appendChild(btn('Siguiente','Marca hecho y rellena el siguiente',function(){next(true)}));
  row.appendChild(btn('Saltar','Pasa al siguiente sin marcar',function(){next(false)}));
  row.appendChild(btn('<','Jugador anterior',prev));
  row.appendChild(btn('+1 escalon','Sube el precio max un paso',bumpMax));
  row.appendChild(btn('-1 escalon','Baja el precio max un paso',lowerMax));
  row.appendChild(btn('Saltar set',null,skipSet));
  row.appendChild(btn('Precios (Alt+R)','Vuelve a leer los precios actuales de fut.gg para todos los sets',refreshPrices));
  box.appendChild(row);
  m=document.createElement('div');m.style.cssText='margin-top:6px;color:#ffd97d;min-height:16px';box.appendChild(m);
  document.body.appendChild(box);
  render();
  document.addEventListener('keydown',function(e){
    if(!e.altKey)return;
    if(e.code=='KeyN'){e.preventDefault();next(true)}
    else if(e.code=='KeyB'){e.preventDefault();doSearch()}
    else if(e.code=='KeyC'){e.preventDefault();doBuy()}
    else if(e.code=='KeyA'){e.preventDefault();goBack()}
    else if(e.code=='KeyV'){e.preventDefault();doSellConfirm()}
    else if(e.code=='KeyP'){e.preventDefault();fill()}
    else if(e.code=='KeyR'){e.preventDefault();refreshPrices()}
    else if(e.code=='Equal'||e.code=='NumpadAdd'){e.preventDefault();bumpMax()}
    else if(e.code=='Minus'||e.code=='NumpadSubtract'){e.preventDefault();lowerMax()}
  },true);
}
var t0=setInterval(function(){if(document.body){ui();clearInterval(t0)}},500);
})();
