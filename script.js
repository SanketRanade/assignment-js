import data from "./items.json" assert { type: "json" };

// index for displaying image
let currentIndex = 0;

function populate(obj) {
	const section = document.querySelector("div");
	const myList = document.createElement("ul");
	for (let index = 0; index < obj.length; index++) {
		const listItem = document.createElement("li");
		const imageName = obj[index]["title"];
		const imageURL = obj[index]["previewImage"];
		arrayURL.push(imageURL);
		arrayTitle.push(imageName);

		listItem.textContent = imageName;

		// function to change image on click
		listItem.addEventListener("click", function () {
			let temp = document.querySelectorAll("li");
			let imgSourceBefore = document.getElementById("mainimage").src;
			temp[arrayURL.indexOf(imgSourceBefore)].classList.remove(
				"active-item"
			);
			document.getElementById("mainimage").src = imageURL;

			currentIndex = index;
			listItem.classList.add("active-item");
			const figCaption = document.querySelector("figcaption");
			figCaption.textContent = arrayTitle[currentIndex];
		});

		myList.appendChild(listItem);
	}
	// prepending unordered list before image to be shown on right
	section.prepend(myList);

	// setting the initial image
	const myImage = document.querySelector("img");
	myImage.src = obj[0]["previewImage"];
	const figCaption = document.querySelector("figcaption");
	figCaption.textContent = obj[0]["title"];

	// setting the active element as first item
	document.querySelector("li").setAttribute("class", "active-item");
}

// creating empty arrays
const arrayURL = [];
const arrayTitle = [];
// calling the function
populate(data);

// truncating the text
for (let index = 0; index < arrayURL.length; index++) {
	truncateText(index);
}

// arrow key navigation
document.addEventListener("keydown", function (event) {
	let temp = document.querySelectorAll("li");
	// if key is arrow down
	if (event.keyCode === 40) {
		// remove the active-item class
		temp[currentIndex].classList.remove("active-item");
		// change the current index
		currentIndex = (currentIndex + 1) % data.length;

		// add the active-item class
		temp[currentIndex].classList.add("active-item");
		// change the image and caption
		document.getElementById("mainimage").src = arrayURL[currentIndex];
		let figCaption = document.querySelector("figcaption");
		figCaption.textContent = arrayTitle[currentIndex];
	}
	// if key is arrow up
	else if (event.keyCode === 38) {
		// remove the active-item class
		temp[currentIndex].classList.remove("active-item");
		// change the current index
		currentIndex = (currentIndex - 1 + data.length) % data.length;

		// add the active-item class
		temp[currentIndex].classList.add("active-item");

		// change the image and caption
		document.getElementById("mainimage").src = arrayURL[currentIndex];
		let figCaption = document.querySelector("figcaption");
		figCaption.textContent = arrayTitle[currentIndex];
	}
});

// making image title editable
// on clicking enter
let figcapt_1 = document.querySelector("figcaption");
figcapt_1.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		let temp = document.querySelectorAll("li");
		event.preventDefault();
		let figCapt = document.querySelector("figcaption");
		temp[currentIndex].innerHTML = figCapt.innerHTML;
		arrayTitle[currentIndex] = figCapt.innerHTML;

		truncateText(currentIndex);
		// console.log(arrayTitle[currentIndex]);
	}
});

// get saved on clicking somewhere else
figcapt_1 = document.querySelector("figcaption");
document.addEventListener("click", function (event) {
	if (figcapt_1.contains(event.target)) {
		return;
	}

	// if the click is not within the figcaption textbox, save the contents
	let temp = document.querySelectorAll("li");
	let figCapt = document.querySelector("figcaption");
	temp[currentIndex].innerHTML = figCapt.innerHTML;
	arrayTitle[currentIndex] = figCapt.innerHTML;

	// truncate the text
	truncateText(currentIndex);
});

// function to truncate text
function truncateText(index) {
	let liItem = document.querySelectorAll("li");
	let str = arrayTitle[index];
	if (str.length > 35) {
		let subStr =
			str.substring(0, 15) +
			"..." +
			str.substring(str.length - 15, str.length);
		liItem[index].innerHTML = subStr;
	}
}
