import { doc } from "prettier";
import data from "./items.json" assert { type: "json" };

// for (let index = 0; index < data.length; index++) {
// 	console.log(data[index]["title"]);
// }

// const obj = JSON.parse("./items.json");

let currentIndex = 0;

function populate(obj, array) {
	const section = document.querySelector("section");
	const myList = document.createElement("ul");
	for (let index = 0; index < obj.length; index++) {
		const listItem = document.createElement("li");
		const buttonItem = document.createElement("button");
		// listItem.style.cssText = "listStyleImage:url(sprinklr.png)";
		// listItem.style.listStyleImage = url(sprinklr.png);
		// listItem.style.width = 100;
		const imageName = obj[index]["title"];
		const imageURL = obj[index]["previewImage"];
		array.push(imageURL);

		listItem.textContent = imageName;
		// buttonItem.setAttribute("id", imageURL);
		// listItem.style.backgroundImage = "url(" + imageURL + ")";

		// function to change image on click
		listItem.addEventListener("click", function () {
			document.getElementById("mainimage").src = imageURL;
			currentIndex = index;
		});

		// listItem.style.backgroundImage = "url(" + imageURL + ")";

		// listItem.appendChild(buttonItem);
		myList.appendChild(listItem);
	}
	// myList.style.cssText = "listStyleImage:url(sprinklr.png)";
	// myList.style.position = inside;
	section.prepend(myList);

	const myImage = document.querySelector("img");
	// myImage.setAttribute("id", "mainimage");
	myImage.src = obj[0]["previewImage"];
	document.querySelector("li").setAttribute("class", "active-item");
	// section.prepend(myImage);
}

// function changeImage(srce) {
// 	document.getElementById("mainimage").src = srce;
// 	// imageVar.src = srce;
// }

const array = [];
populate(data, array);

// function for arrow key navigation
document.addEventListener("keydown", function (event) {
	let temp = document.querySelectorAll("li");
	if (event.keyCode === 40) {
		temp[currentIndex].removeAttribute("active-item");
		currentIndex = (currentIndex + 1) % data.length;
		document.getElementById("mainimage").src = array[currentIndex];
		// selector item will also change
		temp[currentIndex].setAttribute("active-item");
	} else if (event.keyCode === 38) {
		temp[currentIndex].removeAttribute("active-item");
		currentIndex = (currentIndex - 1 + data.length) % data.length;
		document.getElementById("mainimage").src = array[currentIndex];
		temp[currentIndex].setAttribute("active-item");
	}
});
