export const createPopup = (wrapper, obj) => {
  const title = document.createElement('h3');
  title.className = 'popup__title';
  title.textContent = obj.offer.title;

  const address = document.createElement('p');
  address.className = 'popup__text--address';
  address.textContent = obj.offer.address;

  const price = document.createElement('p');
  price.className = 'popup__text--price';
  price.textContent = `${obj.offer.price} ₽/ночь`;

  const type = document.createElement('h4');
  type.className = '.popup__type';
  if (obj.offer.type === 'flat') {
    type.textContent = 'Квартира';
  }
  if (obj.offer.type === 'bungalow') {
    type.textContent = 'Бунгало';
  }
  if (obj.offer.type === 'house') {
    type.textContent = 'Дом';
  }
  if (obj.offer.type === 'palace') {
    type.textContent = 'Дворец';
  }
  if (obj.offer.type === 'hotel') {
    type.textContent = 'Отель';
  }

  const capacity = document.createElement('p');
  capacity.className = 'popup__text--capacity';
  capacity.textContent = `${obj.offer.rooms} комнат(ы) для ${obj.offer.guests}`;

  const time = document.createElement('p');
  time.className = 'popup__text--time';
  time.textContent = `Заезд после ${obj.offer.checkin}, выезд до ${obj.offer.checkout}`;

  const features = document.createElement('ul');
  features.className = 'popup__features';
  obj.offer.features.forEach((feature) => {
    const featuresItem = document.createElement('li');
    featuresItem.className = `popup__feature popup__feature--${feature}`;
    featuresItem.textContent = feature;
    features.append(featuresItem);
  });

  const description = document.createElement('p');
  description.className = 'popup__description';
  description.textContent = obj.offer.description;

  const photos = document.createElement('div');
  photos.className = 'popup__photos';
  obj.offer.photos.forEach((photo) => {
    const photosItem = document.createElement('img');
    photosItem.className = 'popup__photo';
    photosItem.src = photo;
    photos.prepend(photosItem);
  });

  const avatar = document.createElement('img');
  avatar.className = 'popup__avatar';
  avatar.src = obj.author.avatar;


  const popup = document.createElement('article');
  popup.className = 'popup';
  popup.appendChild(avatar);
  popup.appendChild(title);
  popup.appendChild(address);
  popup.appendChild(price);
  popup.appendChild(type);
  popup.appendChild(capacity);
  popup.appendChild(time);
  popup.appendChild(features);
  popup.appendChild(description);
  popup.appendChild(photos);

  wrapper.appendChild(popup);
};
