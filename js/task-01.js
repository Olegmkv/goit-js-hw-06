const listCategories = document.querySelectorAll("#categories > li");
// підраховуємо кількісь списків
console.log('Number of categories: ', listCategories.length);

// для кохного списку підраховуємо кількість елементів
listCategories.forEach(category => {
    console.log("");
    console.log('Category: ',category.children[0].innerText);
    console.log('Elements: ',category.children[1].children.length);
});

