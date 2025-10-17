"use strict";

const timeData = [
	{
		id: 1,
		title: "Ecuador Flag",
		category: "Flags",
		date: "1900",
		description: "",
		img: "flags/ecuador-1900.png",
	},

	{
		id: 1,
		title: "Iceland Flag",
		category: "Flags",
		date: "1900",
		description: "",
		img: "flags/iceland-1900.png",
	},

	{
		id: 1,
		title: "Mauritania Flag",
		category: "Flags",
		date: "1900",
		description: "",
		img: "flags/mauritania-1900.png",
	},

	{
		id: 1,
		title: "Samoa Flag",
		category: "Flags",
		date: "1900",
		description: "",
		img: "flags/samoa-1900.png",
	},

	{
		id: 1,
		title: "Nigeria Flag",
		category: "Flags",
		date: "1900",
		description: "",
		img: "flags/nigeria-1900.png",
	},


	{
		id: 1,
		title: "Afghanistan Flag",
		category: "Flags",
		date: "1901",
		description: "",
		img: "flags/afg-1901.png",
	},

	{
		id: 1,
		title: "Australia Flag",
		category: "Flags",
		date: "1901",
		description: "",
		img: "flags/australia-1901.png",
	},

	{
		id: 1,
		title: "Philippines Flag",
		category: "Flags",
		date: "1901",
		description: "",
		img: "flags/philippines-1901.png",
	},

	{
		id: 1,
		title: "Albania Flag",
		category: "Flags",
		date: "1902",
		description: "",
		img: "flags/albania-1902.png",
	},

	{
		id: 1,
		title: "Cuba Flag",
		category: "Flags",
		date: "1902",
		description: "",
		img: "flags/cuba-1902.png",
	},

	{
		id: 1,
		title: "Saudi Arabia Flag",
		category: "Flags",
		date: "1902",
		description: "",
		img: "flags/saudi-1902.png",
	},

	{
		id: 1,
		title: "Siam becomes Thailand",
		category: "Countries",
		date: "1939",
		description: "",
		img: "",
	},

	{
		id: 2,
		title: "Estonian S.S.R. becomes Estonia",
		category: "Countries",
		date: "1940",
		description: "",
		img: "",
	},

	{
		id: 3,
		title: "Latvian S.S.R. becomes Latvia",
		category: "Countries",
		date: "1940",
		description: "",
		img: "",
	},

	{
		id: 4,
		title: "Lithuanian S.S.R. becomes Lithuania",
		category: "Countries",
		date: "1940",
		description: "",
		img: "",
	},

	{
		id: 5,
		title: "Italian East Africa (pt.), Ethiopia becomes Ethiopia",
		category: "Countries",
		date: "1941",
		description: "",
		img: "",
	},

	{
		id: 6,
		title: "Italian East Africa (pt.), Eritrea becomes Eritrea",
		category: "Countries",
		date: "1941",
		description: "",
		img: "",
	},

	{
		id: 7,
		title: "Thailand becomes Siam",
		category: "Countries",
		date: "1945",
		description: "",
		img: "",
	},

	{
		id: 8,
		title: "Chosen (Jap.) becomes Korea",
		category: "Countries",
		date: "1945",
		description: "",
		img: "",
	},

	{
		id: 9,
		title: "Philippine Islands becomes Philippines",
		category: "Countries",
		date: "1946",
		description: "",
		img: "",
	},

	{
		id: 10,
		title: "Trans Jordan becomes Jordan",
		category: "Countries",
		date: "1946",
		description: "",
		img: "",
	},

	{
		id: 11,
		title: "Baluchistan becomes Pakistan",
		category: "Countries",
		date: "1947",
		description: "",
		img: "",
	},

	{
		id: 12,
		title: "Ceylon becomes Sri Lanka",
		category: "Countries",
		date: "1948",
		description: "",
		img: "",
	},

	{
		id: 13,
		title: "Palestine (pt.) becomes Israel",
		category: "Countries",
		date: "1948",
		description: "",
		img: "",
	},
]

const timelineBox = document.querySelector('.timeline-box')

window.addEventListener('DOMContentLoaded',()=>{
	displayTimelineData(timeData);
	const buttons = document.querySelectorAll('.button');

	buttons.forEach(button => {
		button.addEventListener('click', () => {
			document.querySelector('.pressed')?.classList.remove('pressed');
			button.classList.add('pressed');
		});
	});
})


function displayTimelineData(entries){
	let displayData = entries.map(function(cat_items){
		return `<div class="content-box">	
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
}

