const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const createimgCard = image => {
  const liRef = document.createElement('li');
  const imgRef = document.createElement('img');
  imgRef.setAttribute('src', image.url);
  imgRef.setAttribute('alt', image.alt);
  imgRef.setAttribute('height', '200px');
  liRef.append(imgRef);
  return liRef;
};

const imgCard = images.map(image => createimgCard(image));
const galleryRef = document.querySelector('#gallery');
galleryRef.append(...imgCard);
