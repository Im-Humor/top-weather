import { weatherObj, populateArray } from "./objects";
import "./style.css";

const searchBar = document.getElementById("search-bar");
const searchButton = document.getElementById("search-button");
let currentLocation = "85017";

export const widgetSection = document.getElementById("widget-section");

// todo: make search bar functional
// and implement images (giphy?)

const getLocation = () => {
	searchButton.addEventListener("click", () => {
		populateArray(
			`https://api.weatherapi.com/v1/forecast.json?key=361dc693efc441f48af165347232109&q=${searchBar.value}&days=3`
		);
	});
};

getLocation();
