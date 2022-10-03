const numberOfCategiries = document.querySelectorAll(".item");
console.log("Number of categories:", numberOfCategiries.length);

const categoryOfTitles = document.querySelectorAll("h2");
// console.log(categoryOfTitles);
const numberOfCategoryElements = document.querySelectorAll("li > ul");
// console.log(numberOfCategoryElements);

console.log("Category:", categoryOfTitles[0].textContent);
console.log("Elements:", numberOfCategoryElements[0].children.length);

console.log("Category:", categoryOfTitles[1].textContent);
console.log("Elements:", numberOfCategoryElements[1].children.length);

console.log("Category:", categoryOfTitles[2].textContent);
console.log("Elements:", numberOfCategoryElements[2].children.length);
