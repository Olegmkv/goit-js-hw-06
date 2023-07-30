const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const markingGallery = document.querySelector(".gallery");

// формування масиву ромітки елементів списку
const markingImages = images.map(({ url, alt }) => {
  return `<li><img src="${url}" alt="${alt}" width="500" /></li>`
}) 

// заміна стилів
markingGallery.style.listStyle = "none";
markingGallery.style.display = "flex";
markingGallery.style.gap = "30px"; 

// додавння розмінки в DOM одним рядком 
markingGallery.insertAdjacentHTML("afterbegin", markingImages.join(""));
