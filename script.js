import data from "./items.json" assert { type: "json" };

// for (let index = 0; index < data.length; index++) {
// 	console.log(data[index]["title"]);
// }

// const obj = JSON.parse("./items.json");

function populate(obj) {
	const section = document.querySelector("section");
	const myList = document.createElement("ul");
	for (let index = 0; index < obj.length; index++) {
		const listItem = document.createElement("li");
		// listItem.style.cssText = "listStyleImage:url(sprinklr.png)";
		// listItem.style.listStyleImage = url(sprinklr.png);
		// listItem.style.width = 100;
		const imageName = obj[index]["title"];
		listItem.textContent = imageName;
		myList.appendChild(listItem);
	}
	myList.style.cssText = "listStyleImage:url(sprinklr.png)";
	// myList.style.position = inside;
	section.appendChild(myList);
}

populate(data);
