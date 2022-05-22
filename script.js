import data from "./items.json" assert { type: "json" };

// for (let index = 0; index < data.length; index++) {
// 	console.log(data[index]["title"]);
// }

// const obj = JSON.parse("./items.json");

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

		buttonItem.textContent = imageName;
		// buttonItem.setAttribute("id", imageURL);
		// listItem.style.backgroundImage = "url(" + imageURL + ")";

		// buttonItem.style.onclick = changeImage(array[index]);
		buttonItem.addEventListener("click", changeImage);
		buttonItem.style.backgroundImage = "url(" + imageURL + ")";
		listItem.appendChild(buttonItem);
		myList.appendChild(listItem);
	}
	// myList.style.cssText = "listStyleImage:url(sprinklr.png)";
	// myList.style.position = inside;
	section.prepend(myList);

	const myImage = document.querySelector("img");
	// myImage.setAttribute("id", "mainimage");
	myImage.src = obj[4]["previewImage"];
	// section.prepend(myImage);
}

// function changeImage(srce) {
// 	document.getElementById("mainimage").src = srce;
// 	// imageVar.src = srce;
// }

const changeImage = (src) => {
	// document.getElementById("mainimage").src = src;
	console.log("hi\n");
};

const array = [];
populate(data, array);
