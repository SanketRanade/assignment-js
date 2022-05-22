// import { doc } from "prettier";
import data from "./items.json" assert { type: "json" };

// for (let index = 0; index < data.length; index++) {
// 	console.log(data[index]["title"]);
// }

// const obj = JSON.parse("./items.json");

let currentIndex = 0;

function populate(obj, array) {
	const section = document.querySelector("div");
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
			let temp = document.querySelectorAll("li");
			let imgSourceBefore = document.getElementById("mainimage").src;
			temp[array.indexOf(imgSourceBefore)].classList.remove(
				"active-item"
			);
			document.getElementById("mainimage").src = imageURL;

			currentIndex = index;
			listItem.classList.add("active-item");
			const figCaption = document.querySelector("figcaption");
			figCaption.textContent = listItem.innerHTML;
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
	const figCaption = document.querySelector("figcaption");
	figCaption.textContent = obj[0]["title"];
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
		temp[currentIndex].classList.remove("active-item");
		currentIndex = (currentIndex + 1) % data.length;
		document.getElementById("mainimage").src = array[currentIndex];
		// selector item will also change
		temp[currentIndex].classList.add("active-item");

		const figCaption = document.querySelector("figcaption");
		figCaption.textContent = temp[currentIndex].innerHTML;
	} else if (event.keyCode === 38) {
		temp[currentIndex].classList.remove("active-item");
		currentIndex = (currentIndex - 1 + data.length) % data.length;
		document.getElementById("mainimage").src = array[currentIndex];
		temp[currentIndex].classList.add("active-item");

		const figCaption = document.querySelector("figcaption");
		figCaption.textContent = temp[currentIndex].innerHTML;
	}
});

// making image title editable
// on clicking enter
let figcapt_op = document.querySelector("figcaption");
figcapt_op.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		let temp = document.querySelectorAll("li");
		event.preventDefault();
		let figCapt = document.querySelector("figcaption");
		temp[currentIndex].innerHTML = figCapt.innerHTML;
	}
});

// get saved on clicking somewhere else
figcapt_op = document.querySelector("figcaption");
document.addEventListener("click", function (event) {
	if (figcapt_op.contains(event.target)) {
		return;
	}

	let temp = document.querySelectorAll("li");
	event.preventDefault();
	let figCapt = document.querySelector("figcaption");
	temp[currentIndex].innerHTML = figCapt.innerHTML;
});
