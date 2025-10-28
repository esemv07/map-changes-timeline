"use strict";

const timeData = [
	{
		id: 1,
		title: "Denmark Flag",
		category: "Flags",
		date: "1625",
		description: "",
		img: "flags/denmark.png",
	},

	{
		id: 2,
		title: "Netherlands Flag",
		category: "Flags",
		date: "1660",
		description: "",
		img: "flags/netherlands.png",
	},

	{
		id: 3,
		title: "United Kingdom (UK) Flag",
		category: "Flags",
		date: "1 January 1801",
		description: "",
		img: "flags/uk.png",
	},

	{
		id: 4,
		title: "Argentina Flag",
		category: "Flags",
		date: "27 February 1812",
		description: "",
		img: "flags/argentina.png",
	},

	{
		id: 5,
		title: "Chile Flag",
		category: "Flags",
		date: "18 October 1817",
		description: "",
		img: "flags/chile.png",
	},

	{
		id: 6,
		title: "Peru Flag",
		category: "Flags",
		date: "1825",
		description: "",
		img: "flags/peru.png",
	},

	{
		id: 7,
		title: "Uruguay Flag",
		category: "Flags",
		date: "1828",
		description: "",
		img: "flags/uruguay.png",
	},

	{
		id: 8,
		title: "France Flag",
		category: "Flags",
		date: "1830",
		description: "",
		img: "flags/france.webp",
	},

	{
		id: 9,
		title: "Tunisia Flag",
		category: "Flags",
		date: "1831",
		description: "",
		img: "flags/tunisia.png",
	},

	{
		id: 10,
		title: "Belgium Flag",
		category: "Flags",
		date: "1831",
		description: "",
		img: "flags/belgium.png",
	},

	{
		id: 11,
		title: "Paraguay Flag",
		category: "Flags",
		date: "1842",
		description: "",
		img: "flags/paraguay.png",
	},

	{
		id: 12,
		title: "Turkey Flag",
		category: "Flags",
		date: "1844",
		description: "",
		img: "flags/turkey.png",
	},

	{
		id: 13,
		title: "Liberia Flag",
		category: "Flags",
		date: "1847",
		description: "",
		img: "flags/liberia.png",
	},

	{
		id: 14,
		title: "Costa Rica Flag",
		category: "Flags",
		date: "1848",
		description: "",
		img: "flags/costa-rica.png",
	},

	{
		id: 15,
		title: "Bolivia Flag",
		category: "Flags",
		date: "1851",
		description: "",
		img: "flags/bolivia.png",
	},

	{
		id: 16,
		title: "Ecuador Flag",
		category: "Flags",
		date: "1860",
		description: "",
		img: "flags/ecuador.png",
	},

	{
		id: 17,
		title: "San Marino Flag",
		category: "Flags",
		date: "1862",
		description: "",
		img: "flags/san-marino.png",
	},

	{
		id: 18,
		title: "Honduras Flag",
		category: "Flags",
		date: "1866",
		description: "",
		img: "flags/honduras.png",
	},

	{
		id: 19,
		title: "Japan Flag",
		category: "Flags",
		date: "1870",
		description: "",
		img: "flags/japan.png",
	},

	{
		id: 20,
		title: "Guatemala Flag",
		category: "Flags",
		date: "1871",
		description: "",
		img: "flags/guatemala.png",
	},

	{
		id: 21,
		title: "Tonga Flag",
		category: "Flags",
		date: "1875",
		description: "",
		img: "flags/tonga.png",
	},

	{
		id: 22,
		title: "Monaco Flag",
		category: "Flags",
		date: "1881",
		description: "",
		img: "flags/monaco.png",
	},

	{
		id: 23,
		title: "South Korea Flag",
		category: "Flags",
		date: "1883",
		description: "",
		img: "flags/south-korea.png",
	},

	{
		id: 24,
		title: "Switzerland Flag",
		category: "Flags",
		date: "1889",
		description: "",
		img: "flags/switzerland.png",
	},

	{
		id: 25,
		title: "Philippines Flag",
		category: "Flags",
		date: "12 February 1898",
		description: "",
		img: "flags/philippines.png",
	},

	{
		id: 26,
		title: "Norway Flag",
		category: "Flags",
		date: "1899",
		description: "",
		img: "flags/norway.png",
	},

	{
		id: 27,
		title: "Australia Flag",
		category: "Flags",
		date: "3 September 1901",
		description: "",
		img: "flags/australia.png",
	},

	{
		id: 28,
		title: "Cuba Flag",
		category: "Flags",
		date: "1902",
		description: "",
		img: "flags/cuba.png",
	},

	{
		id: 29,
		title: "New Zealand Flag",
		category: "Flags",
		date: "1902",
		description: "",
		img: "flags/new-zealand.png",
	},

	{
		id: 30,
		title: "Sweden Flag",
		category: "Flags",
		date: "1906",
		description: "",
		img: "flags/sweden.png",
	},

	{
		id: 31,
		title: "Dominican Republic Flag",
		category: "Flags",
		date: "1908",
		description: "",
		img: "flags/dominican-republic.png",
	},

	{
		id: 32,
		title: "Portugal Flag",
		category: "Flags",
		date: "1911",
		description: "",
		img: "flags/portugal.png",
	},

	{
		id: 33,
		title: "Albania Flag",
		category: "Flags",
		date: "1912",
		description: "",
		img: "flags/albania.png",
	},

	{
		id: 34,
		title: "El Salvador Flag",
		category: "Flags",
		date: "17 May 1912",
		description: "",
		img: "flags/el-salvador.png",
	},

	{
		id: 35,
		title: "Morocco Flag",
		category: "Flags",
		date: "1915",
		description: "",
		img: "flags/morocco.png",
	},

	{
		id: 36,
		title: "Thailand Flag",
		category: "Flags",
		date: "1917",
		description: "",
		img: "flags/thailand.png",
	},

	{
		id: 37,
		title: "Austria Flag",
		category: "Flags",
		date: "1918",
		description: "",
		img: "flags/austria.png",
	},

	{
		id: 38,
		title: "Estonia Flag",
		category: "Flags",
		date: "1918",
		description: "",
		img: "flags/estonia.png",
	},

	{
		id: 39,
		title: "Finland Flag",
		category: "Flags",
		date: "1918",
		description: "",
		img: "flags/finland.png",
	},

	{
		id: 40,
		title: "Germany Flag",
		category: "Flags",
		date: "1918",
		description: "",
		img: "flags/germany.png",
	},

	{
		id: 41,
		title: "Ireland Flag",
		category: "Flags",
		date: "1919",
		description: "",
		img: "flags/ireland.png",
	},

	{
		id: 42,
		title: "Poland Flag",
		category: "Flags",
		date: "1919",
		description: "",
		img: "flags/poland.png",
	},

	{
		id: 43,
		title: "Latvia Flag",
		category: "Flags",
		date: "1921",
		description: "",
		img: "flags/latvia.png",
	},

	{
		id: 44,
		title: "Panama Flag",
		category: "Flags",
		date: "1925",
		description: "",
		img: "flags/panama.png",
	},

	{
		id: 45,
		title: "Jordan Flag",
		category: "Flags",
		date: "1928",
		description: "",
		img: "flags/jordan.png",
	},

	{
		id: 46,
		title: "Taiwan Flag",
		category: "Flags",
		date: "1928",
		description: "",
		img: "flags/taiwan.png",
	},

	{
		id: 47,
		title: "Vatican City Flag",
		category: "Flags",
		date: "1929",
		description: "",
		img: "flags/vatican.png",
	},

	{
		id: 48,
		title: "Liechtenstein Flag",
		category: "Flags",
		date: "1937",
		description: "",
		img: "flags/liechtenstein.png",
	},

	{
		id: 49,
		title: "Siam becomes Thailand",
		category: "Countries",
		date: "1939",
		description: "",
		img: "",
	},

	{
		id: 50,
		title: "Estonian S.S.R. becomes Estonia",
		category: "Countries",
		date: "1940",
		description: "",
		img: "",
	},

	{
		id: 51,
		title: "Latvian S.S.R. becomes Latvia",
		category: "Countries",
		date: "1940",
		description: "",
		img: "",
	},

	{
		id: 52,
		title: "Lithuanian S.S.R. becomes Lithuania",
		category: "Countries",
		date: "1940",
		description: "",
		img: "",
	},

	{
		id: 53,
		title: "Italian East Africa (pt.), Ethiopia becomes Ethiopia",
		category: "Countries",
		date: "1941",
		description: "",
		img: "",
	},

	{
		id: 54,
		title: "Italian East Africa (pt.), Eritrea becomes Eritrea",
		category: "Countries",
		date: "1941",
		description: "",
		img: "",
	},

	{
		id: 55,
		title: "Lebanon Flag",
		category: "Flags",
		date: "1943",
		description: "",
		img: "flags/lebanon.png",
	},

	{
		id: 56,
		title: "Italy Flag",
		category: "Flags",
		date: "1943",
		description: "",
		img: "flags/italy.png",
	},

	{
		id: 57,
		title: "Iceland Flag",
		category: "Flags",
		date: "1944",
		description: "",
		img: "flags/iceland.png",
	},

	{
		id: 58,
		title: "Indonesia Flag",
		category: "Flags",
		date: "1945",
		description: "",
		img: "flags/indonesia.png",
	},

	{
		id: 59,
		title: "Vietnam Flag",
		category: "Flags",
		date: "1945",
		description: "",
		img: "flags/vietnam.webp",
	},

	{
		id: 60,
		title: "Thailand becomes Siam",
		category: "Countries",
		date: "1945",
		description: "",
		img: "",
	},

	{
		id: 61,
		title: "Chosen (Jap.) becomes Korea",
		category: "Countries",
		date: "1945",
		description: "",
		img: "",
	},

	{
		id: 62,
		title: "Philippine Islands becomes Philippines",
		category: "Countries",
		date: "1946",
		description: "",
		img: "",
	},

	{
		id: 63,
		title: "Trans Jordan becomes Jordan",
		category: "Countries",
		date: "1946",
		description: "",
		img: "",
	},

	{
		id: 64,
		title: "Baluchistan becomes Pakistan",
		category: "Countries",
		date: "1947",
		description: "",
		img: "",
	},

	{
		id: 65,
		title: "India Flag",
		category: "Flags",
		date: "24 July 1947",
		description: "",
		img: "flags/india.png",
	},

	{
		id: 66,
		title: "Pakistan Flag",
		category: "Flags",
		date: "11 August 1947",
		description: "",
		img: "flags/pakistan.png",
	},

	{
		id: 67,
		title: "North Korea Flag",
		category: "Flags",
		date: "July 1948",
		description: "",
		img: "flags/north-korea.png",
	},

	{
		id: 68,
		title: "Israel Flag",
		category: "Flags",
		date: "1948",
		description: "",
		img: "flags/israel.png",
	},

	{
		id: 69,
		title: "Ceylon becomes Sri Lanka",
		category: "Countries",
		date: "1948",
		description: "",
		img: "",
	},

	{
		id: 70,
		title: "Palestine (pt.) becomes Israel",
		category: "Countries",
		date: "1948",
		description: "",
		img: "",
	},

	{
		id: 71,
		title: "Samoa Flag",
		category: "Flags",
		date: "1949",
		description: "",
		img: "flags/samoa.png",
	},

	{
		id: 72,
		title: "China Flag",
		category: "Flags",
		date: "1 October 1949",
		description: "",
		img: "flags/china.webp",
	},

	{
		id: 73,
		title: "French Indo-China becomes Vietnam",
		category: "Countries",
		date: "1949",
		description: "",
		img: "",
	},

	{
		id: 74,
		title: "Siam becomes Thailand",
		category: "Countries",
		date: "1949",
		description: "",
		img: "",
	},

	{
		id: 75,
		title: "French Indo-China becomes Laos",
		category: "Countries",
		date: "1949",
		description: "",
		img: "",
	},

	{
		id: 76,
		title: "Netherland Indies becomes Indonesia",
		category: "Countries",
		date: "1949",
		description: "",
		img: "",
	},

	{
		id: 77,
		title: "Germany becomes Germany, West",
		category: "Countries",
		date: "1949",
		description: "",
		img: "",
	},

	{
		id: 78,
		title: "Germany becomes Germany, East",
		category: "Countries",
		date: "1949",
		description: "",
		img: "",
	},

	{
		id: 79,
		title: "French Indo-China becomes Cambodia",
		category: "Countries",
		date: "1949",
		description: "",
		img: "",
	},

]

const timelineBox = document.querySelector('.timeline-box')
const linksEL = document.querySelectorAll('li a')

window.addEventListener('DOMContentLoaded',()=>{
	displayTimelineData(timeData);
	const buttons = document.querySelectorAll('.button');

	buttons.forEach(button => {
		button.addEventListener('click', () => {
			document.querySelector('.pressed')?.classList.remove('pressed');
			button.classList.add('pressed');
		});
	});
});

linksEL.forEach((links) => {
	links.addEventListener('click', (e) => {
		const category = e.target.dataset.id;
		const timeCategory = timeData.filter(function(data) {
			if (data.category === category) {
				return data;
			}
		});
		if (category === 'All') {
			displayTimelineData(timeData);
		}
		else {
			displayTimelineData(timeCategory);
		}
	});
});


function displayTimelineData(entries){
	let displayData = entries.map(function(cat_items){
		return `<div class="content-box" id="${cat_items.id}">	
					<div class="date">
						<i class='bxr  bx-calendar-alt'  ></i> 
						${cat_items.date}
					</div>
					<h3>${cat_items.title}</h3>
					<p>${cat_items.description}</p>
					<img class="img" src=${cat_items.img}>
				</div>`;
	})

	displayData = displayData.join("");
	timelineBox.innerHTML = displayData;
	console.log(displayData)
}
function scrollYears1600() {
	document.getElementById("1").scrollIntoView()
}

function scrollYears1800() {
	console.log("working")
	const card = document.getElementById("10")
	console.log(card)
	if (card) {
        card.scrollIntoView({
            behavior: 'smooth', // Correct spelling
            block: 'start'
        });
    } else {
        console.log("Element with id '10' not found.");
    }
}
