import { widgetSection } from "./script";

const daySections = document.querySelectorAll(".day-section");

export class weatherObj {
	constructor(label, imageUrl, value, daySection) {
		this.label = label;
		this.imageUrl = imageUrl;
		this.value = value;
		this.daySection = daySection;
	}
	draw() {
		const widgetContainer = document.createElement("div");
		widgetContainer.classList.add("widget");
		widgetContainer.setAttribute("id", this.label);

		const widgetImage = document.createElement("img");
		widgetImage.classList.add("widget-image");
		widgetImage.setAttribute("id", this.label);
		widgetImage.setAttribute("src", this.imageUrl);

		const widgetLabel = document.createElement("h4");
		widgetLabel.classList.add("widget-label");
		widgetLabel.setAttribute("id", this.label);
		widgetLabel.textContent = this.label;

		const widgetData = document.createElement("p");
		widgetData.classList.add("widget-data");
		widgetData.setAttribute("id", this.label);
		widgetData.innerHTML = this.value;

		daySections[this.daySection].appendChild(widgetImage);
		daySections[this.daySection].appendChild(widgetLabel);
		daySections[this.daySection].appendChild(widgetData);
		widgetSection.appendChild(daySections[this.daySection]);
	}
}

const clearSections = () => {
	daySections.forEach((element) => {
		element.innerHTML = "";
	});
};

export const populateArray = async (url) => {
	const response = await fetch(url);
	const forecast = await response.json();
	clearSections();
	forecast.forecast.forecastday.forEach((day, index) => {
		let highTempObj = new weatherObj(
			"High Temperature",
			day.day.condition.icon,
			day.day.maxtemp_f,
			index
		);
		let rainChanceObj = new weatherObj(
			"Rain Chance %",
			day.day.condition.icon,
			day.day.daily_chance_of_rain,
			index
		);
		let sunRiseObj = new weatherObj(
			"Sunrise time",
			day.day.condition.icon,
			day.astro.sunrise,
			index
		);
		highTempObj.draw();
		rainChanceObj.draw();
		sunRiseObj.draw();
	});
};
