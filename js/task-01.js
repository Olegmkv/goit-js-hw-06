const listCategories = document.querySelectorAll("#categories > li");
console.log('Number of categories: ',listCategories.length);
listCategories.forEach(category => {
    console.log("");
    console.log('Category: ',category.children[0].innerText);
    console.log('Elements: ',category.children[1].children.length);
});

