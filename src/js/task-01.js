const numberOfCategiries = document.querySelectorAll(".item");
console.log("Number of categories:", numberOfCategiries.length);

const categoryOfTitles = document.querySelectorAll("h2");
// console.log(categoryOfTitles);
const numberOfCategoryElements = document.querySelectorAll("li > ul");
// console.log(numberOfCategoryElements);

for (let element of numberOfCategiries) {
  console.log("Category:", element.firstElementChild.textContent);
  console.log("Elements:", element.lastElementChild.children.length);
}

// -------спосіб №1 (костиль)-------
// console.log("Category:", categoryOfTitles[0].textContent);
// console.log("Elements:", numberOfCategoryElements[0].children.length);

// console.log("Category:", categoryOfTitles[1].textContent);
// console.log("Elements:", numberOfCategoryElements[1].children.length);

// console.log("Category:", categoryOfTitles[2].textContent);
// console.log("Elements:", numberOfCategoryElements[2].children.length);

// -------спосіб №2--------
// numberOfCategiries.forEach((element) => {
//   console.log("Category:", element.firstElementChild.textContent);
//   console.log("Elements:", element.lastElementChild.children.length);
// });
