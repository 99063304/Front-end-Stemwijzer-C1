var parties = [{
		name: "PVV",
		secular: true,
		size: 20,
		long: "Partij voor de Vrijheid"
	},
	{
		name: "D66",
		secular: true,
		size: 19,
		long: "Democratie 66"
	},
	{
		name: "CU",
		secular: false,
		size: 6,
		long: 'Christen Unie'
	},
	{
		name: "SP",
		secular: true,
		size: 14,
		long: "Socialistische Partij"
	}
];

// Testen op correcte match, voer in:
// PVV: contra, pro, contra, pro
// SP: pro, contra, contra, contra
// D66: pro, contra, pro, contra
// CU: pro, pro, pro, contra

var subjects = [{
		"title": "Bindend referendum",
		"statement": "Er moet een bindend referendum komen, waarmee burgers door het parlement aangenomen wetten kunnen tegenhouden.",
		"parties": [{
				"name": "PVV",
				"position": "contra",
				"opinion": "Geen toelichting gegeven"
			},
			{
				"name": "SP",
				"position": "pro",
				"opinion": "Directe inspraak en zeggenschap van mensen maakt onze democratie sterker en de besluiten beter. In plaats van een raadgevend referendum willen we zo snel mogelijk een correctief referendum, zodat de bevolking ook tussen de verkiezingen door de gekozen vertegenwoordigers kan corrigeren, zowel bij lokale, nationale als Europese onderwerpen."
			},
			{
				"name": "D66",
				"position": "pro",
				"opinion": "D66 wil de democratische controle moderniseren. Daarom wil D66 kiezers een noodrem geven met de mogelijkheid om via een correctief bindend referendum wetsvoorstellen tegen te houden, nadat het parlement deze heeft aangenomen. Dit correctief bindend referendum omvat geen internationale verdragen."
			},
			{
				"name": "CU",
				"position": "pro",
				"opinion": "Wij willen experimenteren met nieuwe vormen van directe democratie. Wij werken daarom aan alternatieve modellen om burgers te betrekken en hechten vooral aan het uitwisselen van argumenten en samen zoeken naar oplossingen. Tot dan steunen wij het referendum om burgers meer invloed te geven."
			}
		]
	},
	{
		"title": "Maatschappelijke dienstplicht",
		"statement": "Er moet een maatschappelijke dienstplicht voor jongeren komen. Zij kunnen dan dienen in het leger, bij de politie of in de zorg.",
		"parties": [{
				"name": "PVV",
				"position": "pro",
				"opinion": "Geen toelichting gegeven"
			},
			{
				"name": "SP",
				"position": "contra",
				"opinion": "De SP is voorstander van een maatschappelijke stage voor jongeren binnen het onderwijs om kennis te maken met de maatschappij, bijvoorbeeld in zorg of onderwijs. Een maatschappelijke dienstplicht voor langere tijd buiten het onderwijs gaat echter veel te ver, zal veel kosten en weinig opleveren. Belangrijke maatschappelijke taken moeten worden verricht door mensen die daar gemotiveerd en goed opgeleid voor zijn,"
			},
			{
				"name": "D66",
				"position": "contra",
				"opinion": "Natuurlijk is het mooi als jongeren zich willen inzetten voor de maatschappij, maar dat is het juist als zij er zÃ©lf voor kiezen. Daarom wil D66 dit niet verplicht stellen. Scholen kunnen kiezen voor het aanbieden van een maatschappelijke stage, maar dat moet niet door de overheid worden opgelegd."
			},
			{
				"name": "CU",
				"position": "pro",
				"opinion": "Mensen nemen op allerlei manieren deel aan de samenleving: door te werken, te leren, vrijwilligerswerk te doen, buren of familie te helpen. Een maatschappelijke dienstplicht doet geen recht aan de verschillende manieren waarop mensen participeren en beperkt de individuele vrijheid te veel."
			}
		]
	},
	{
		"title": "Anoniem solliciteren",
		"statement": "Om discriminatie op basis van de naam te voorkomen, moet anoniem solliciteren bij de overheid en bij openbare instellingen de regel worden.",
		"parties": [{
				"name": "PVV",
				"position": "contra",
				"opinion": "Geen toelichting gegeven"
			},
			{
				"name": "SP",
				"position": "contra",
				"opinion": "Discriminatie  moet fel bestreden worden in alle delen van de maatschappij. Experimenten met anoniem solliciteren uitbreiden is daarom een goed idee. Dit algeheel doorvoeren gaat nu echter een stap te ver. Bovendien zit anoniem solliciteren ook een actief diversiteitsbeleid juist in de weg."
			},
			{
				"name": "D66",
				"position": "pro",
				"opinion": "Nederlanders met een niet-westerse achtergrond zijn drie keer vaker werkloos dan Nederlanders met een westerse achtergrond. D66 wil dit verschil terugdringen. EÃ©n van de maatregelen die D66 wil nemen is het opzetten van experimenten met neutrale sollicitatie- en promotieprocedures."
			},
			{
				"name": "CU",
				"position": "pro",
				"opinion": "Waar het gaat om vacatures van de overheid wordt anoniem solliciteren de norm. GroenLinks wil dat de overheid een goede afspiegeling vormt van de samenleving, zeker bij publieke topfuncties. "
			}
		]
	},
	{
		"title": "Groepsbelediging",
		"statement": "Belediging van groepen op grond van ras, godsdienst of geaardheid moet niet langer strafbaar zijn.",
		"parties": [{
				"name": "PVV",
				"position": "pro",
				"opinion": "Geen toelichting gegeven"
			},
			{
				"name": "SP",
				"position": "contra",
				"opinion": "De strafbaarheid op belediging van groepen blijkt in de praktijk een nuttig middel om bijvoorbeeld antisemitisme of religieuze haatoproepen tegen homoseksuelen tegen te gaan."
			},
			{
				"name": "D66",
				"position": "contra",
				"opinion": "D66 is voor vrije meningsuiting maar vindt dat het opzettelijk beledigen, discrimineren en haat zaaien tegen mensen vanwege het behoren tot een bepaalde bevolkingsgroep, niet past in onze samenleving."
			},
			{
				"name": "CU",
				"position": "contra",
				"opinion": "Onze samenleving is de afgelopen vijftien jaar verruwd. Respectloos gedrag lijkt normaal te zijn geworden. GroenLinks stelt een harde grens: we pakken racisme en discriminatie keihard aan, zeker als het gekoppeld wordt aan geweld of het oproepen tot geweld, intimidatie en bedreigingen."
			}
		]
	}
];
// variables worden aangemaakt
var dividervalGp = 0;
var dividervalSp = 0;
var ids = ['slaoverknop', 'eensknop', 'oneensknop', 'geenvanbeideknop', 'back'];
var eensCount = -2;
var oneensCount = 0;
var stellingCount = 0;
var pastChoice = 0;
var patroon = [];
var newPartypointers = {};
var partyPointers2 = {};
var pasPastChoice = 0;
var oneUseArray = [];
var partyPointersSort = [];
var resultCount = [[]];
var partyPointers = [];
var extragewicht = [];
var new_array = [];
var subjectsInnersubject = ['name', 'opinion', 'position'];
var gvbknop = 0;
var stellingTitel = document.getElementById('stellingTitel');
var stelling = document.getElementById('stelling');
var bar = document.getElementById('bar');
var start = 'eensknop';
const VOTE_DIVIDER = 10;
var slaVraagOver = 0;
var number = 100 / subjects.length-1;

var calc = '-' + number + '%';

// Er wordt een event op de buttons gezet
// BUG: en er wordt 2x extra geklikt om bug te voorkomen
for (var i = 0; i < ids.length; i++) {
	var replace = document.getElementById(ids[i]);
	replace.value = ids[i];
	replace.onclick = stemwijzerstart;
	if (replace.id == 'eensknop') {
		replace.click();
		replace.click();
	}
}
  // De punten telling van de parties worden aangemaakt
for (var t = 0; t < parties.length; t++) {
	partyPointers[parties[t]['name']] = 0;
}
  // Hier staat de event die op de buttons geplaatst zijn
function stemwijzerstart() {
	var sum = '+';
	var val = this.value;

  // Dit zorgt ervoor dat de punten omhoog gaan wanneer je erop klikt
  // En de gebruiker stem wordt ook opgeslagen

	if (val == 'slaoverknop') {
		patroon.push("-");
		slaVraagOver++;
	}
	if (val == 'eensknop') {
		eensCount++;
		patroon.push("pro");
	}
	if (val == 'oneensknop') {
		oneensCount++;
		patroon.push("contra");
	}
	if (val == 'geenvanbeideknop') {
		gvbknop++;
		patroon.push("none");
	}

  // Dit zorgt eroor dat als je terug klikt de punten en de sten worden verwijdert zodat de telling goed blijft
  // het zorgt er ook voor dat kleur verandert naar blauw op de vorige stem van de gebruiker
  // en ook dat de knop terug gaat naar zijn oude kleur

	if (val == 'back') {
		for (var ji = 0; ji < ids.length; ji++) {
			document.getElementById(ids[ji]).style.backgroundColor = null;
		}
		if (stellingCount >= 0) {
			stellingCount -= 2;
			sum = '-';
		}
		if (patroon[patroon.length - 2] == 'pro') {
			document.getElementById('eensknop').style.backgroundColor = 'blue';
			eensCount--;
		} else if (patroon[patroon.length - 2] == 'contra') {
			document.getElementById('oneensknop').style.backgroundColor = 'blue';
			oneensCount--;
		} else if (patroon[patroon.length - 2] == 'none') {
			document.getElementById('geenvanbeideknop').style.backgroundColor = 'blue';

			gvbknop--;
		} else if (patroon[patroon.length - 2] == '-') {
			document.getElementById('slaoverknop').style.backgroundColor = 'blue';
			slaVraagOver--;
		}
		patroon.pop();
	} else {
		for (var ves = 0; ves < ids.length; ves++) {
			document.getElementById(ids[ves]).style.backgroundColor = null;
		}
		pasPastChoice = pastChoice;
		pastChoice = this.id;
		document.getElementById(pasPastChoice).style.backgroundColor = null;
	}
    // Berekent de blauwe lijn boven de pagina
	calc = calc + ' ' + sum + ' ' + number + '%';

    // Hier worden de stellingen aangemaakt in de pagina
	if (stellingCount <= subjects.length - 1) {
		stellingTitel.innerHTML = stellingCount + 1 + '. ' + subjects[stellingCount]['title'];
		stelling.innerHTML = subjects[stellingCount]['statement'];

		bar.style.width = 'calc(' + calc + ')';
		stellingCount++;
		if (this.value != 'back') {
			this.style.backgroundColor = '#0d6efd';
		}
		if (stellingCount == 1) {
			back.style.display = 'none';
		} else {
			back.style.display = 'block';
		}
	} else {
    // hier Worden alle elementen verwijdert en wordt er een functie aangeroepen die je laat kiezen welke vraag meer gewicht krijgt
    // en of je wel of niet grote of seculiere partijen wil zien

		var overzicht = document.getElementById('overzicht');
		for (var i = 0; i <= diediv.children.length + 6; i++) {
			diediv.removeChild(diediv.lastChild);
		}
		gewichtVraag();
	}
}

function makeOneUseArray() {
  // hierin wordt de nieuwe array verwisselt
	for (var re = 0; re < parties.length; re++) {
		oneUseArray[parties[re]['name']] = partyPointers[parties[re]['name']];
	}
	oneUseArray['Niet Stemmers'] = gvbknop;

	partyPointers = oneUseArray;
}

function getResults() {
  // BUG: dit is om de 2extra clicks weg te halen die veroorzaakt zijn door een bug op te lossen
	patroon.shift();
	patroon.shift();
  // BUG:

  // er wordt gekeken of de de gebruiker seculiere of grote partijen wilt laten zien
	for (var vi = 0; vi < 2; vi++) {
		var checks = document.getElementById(vi + 'partij');
		if (checks.checked) {
			if (checks.id == '0partij') {
				dividervalGp = true;
			} else {
				dividervaSp = true;
			}
		}
	}
  // Hier worden array gefilterd gebaseerd op de keuze van de gebruiker dat houd in dat als de gebruiker
  // alleen grote partijen wilt zien of seculiere of beide
  // dan Worden partijen die dat niet zijn eruitgehaald
	if (dividervalGp == true) {
		parties = parties.filter(checkAdult);
    // verwisselt array
		makeOneUseArray();
	}
	if (dividervalSp == true) {
		parties = parties.filter(checkAdult2);
    // verwisselt array
		makeOneUseArray();
	}

  // hier wordt per keuze van gebruiker gekeken welke het best bij hem past
  // en alle scorres worden uitgerekent van alle partijen

	for (var o = 0; o < subjects.length; o++) {
		for (var a = 0; a < subjects[o]['parties'].length; a++) {
			var limiArray = [];
			for (var e = 0; e < subjectsInnersubject.length; e++) {
				if (e == 2) {
					if (subjects[o]['parties'][a][subjectsInnersubject[e]] == patroon[o]) {
						partyPointers[subjects[o]['parties'][a][subjectsInnersubject[0]]]++;
						if (extragewicht[o] == 'x') {
							partyPointers[subjects[o]['parties'][a][subjectsInnersubject[0]]]++;
						}
					}
				}
				limiArray.push(subjects[o]['parties'][a][subjectsInnersubject[e]]);
			}
			resultCount.push(limiArray);
		}
	}

  // hier worden de partij scorres gestorteerd van hoog naar laag
	for (var g = 0; g < parties.length - 1; g++) {
		partyPointersSort[g] = partyPointers[subjects[0]['parties'][g][subjectsInnersubject[0]]];
	}
	for (key in partyPointers) {
		new_array.push([key, partyPointers[key]])
	}
	new_array.sort(function (item1, item2) {
		return item2[1] - item1[1];
	});
	partyPointersSort.sort();
}

function gewichtVraag() {
  // hier wordt heel de pagina van keuze gemaakt
  // hier krijgt de gebruiker de keuze of die grote, seculiere partijen wilt zien
  // en of een vraag extra gewicht moet krijgen

	var textArr = ['Zijn er onderwerpen die u extra belangrijk vindt?', 'Aangevinkte stellingen tellen extra mee bij het berekenen van het resultaat.'];
	var textPartijen = ['Laat grote partijen zien', 'Laat seculiere partijen zien'];
	for (var i = 0; i < 2; i++) {
		var type = 'p';
		if (i == 0) {
			type = 'h1';
		}
		var elemt = document.createElement(type);
		elemt.innerHTML = textArr[i];
		overzicht.appendChild(elemt);
	}
	var elemtp = document.createElement('p');
	elemtp.innerHTML = 'Extra belangrijke onderwerpen';
	overzicht.appendChild(elemtp);

	for (var s = 0; s < subjects.length; s++) {
		var label = document.createElement('label');
		var input = document.createElement('input');
		var br = document.createElement('br');

		input.setAttribute('type', 'checkbox');
		label.innerHTML = subjects[s]['title'];
		input.id = s;
		label.id = s + 'label';

		overzicht.appendChild(input);
		overzicht.appendChild(label);
		overzicht.appendChild(br);

	}
	for (var p = 0; p < textPartijen.length; p++) {
		var label2 = document.createElement('label');
		var input2 = document.createElement('input');
		var br2 = document.createElement('br');

		input2.setAttribute('type', 'checkbox');
		label2.innerHTML = textPartijen[p];
		input2.id = p + 'partij';
		overzicht.appendChild(input2);
		overzicht.appendChild(label2);
		overzicht.appendChild(br2);
	}
  // Hier wordt er een event geplaatst op de ga verder button die eerst de resultaten berekent en dan laat zien
	var button = document.createElement('button');
	button.className = 'btn btn-primary';
	button.innerHTML = 'Ga verder';
	button.onclick = function () {
		for (var i = 0; i < subjects.length; i++) {
			var check = document.getElementById(i);
			if (check.checked) {
				extragewicht[i] = 'x';
			}
		}
		getResults();
		Showresult();
	}
	overzicht.appendChild(button);
}

function Showresult() {
	var overzicht = document.getElementById('overzicht');
  // Alle elementen worden verwijdert om ruimte te maken voor de resultaat
	for (var v = 0; v <= overzicht.children.length + 15; v++) {
		overzicht.removeChild(overzicht.lastChild);
	}
  //// /// /

	var element = document.createElement('h1');
	element.innerText = 'Overzicht';
	overzicht.appendChild(element);

 // de resultaten worden opgehaald en laat ze aan de gebruiker zien in de vlgorde van de partij zijn stemmen
 // en welke het best bij de gebruiker past naar minder
	for (var i = 0; i < new_array.length; i++) {
		if (new_array[i][1] != 0) {
			var elemt = document.createElement('p');
			if (new_array[i][0] != 'Niet Stemmers') {
				elemt.innerHTML = i + 1 + '. ' + subjects[0]['parties'][i]['position'] + ',' + subjects[1]['parties'][i]['position'] + ',' + subjects[2]['parties'][i]['position'] + ',' + subjects[3]['parties'][i]['position'] + ': ' + new_array[i][0];
			} else {
				elemt.innerHTML = i + 1 + '. ' + 'Geen stemmen: Niet Stemmers';
			}
			overzicht.appendChild(elemt);
		}
	}
  // als de gebruiker geen stmmen heeft ingevuld dan krijgt die dit als resultaat
	if (slaVraagOver == subjects.length) {
		var slaVraagOverText = document.createElement('p');
		slaVraagOverText.innerHTML = 'U heeft geen Stem gegeven';
		overzicht.appendChild(slaVraagOverText);

	}
}

function checkAdult(age) {
	return age.size >= VOTE_DIVIDER;
}

function checkAdult2(age) {
	return age.secular == true;
}
