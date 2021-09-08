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

const list = document.querySelector("ul#gallery");

images.forEach(function (image) {
  list.insertAdjacentHTML("beforeend", `<li style="margin: 0 auto"><img src="${image.url}"alt="${image.alt}" height="230" ></li>`);
});
list.style.cssText =`
  padding: 0 15px;
  margin: 0 auto;
  max-width: 1200px;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 30px;
  grid-column-gap: 40px;
;`
