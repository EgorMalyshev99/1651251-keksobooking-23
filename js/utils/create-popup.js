const popupInner = document.querySelector('.map');

export const createPopup = (obj) => {
  const {
    author,
    offer,
  } = obj;

  const title = document.createElement('h3');
  title.className = 'popup__title';
  title.textContent = offer.title;

  const address = document.createElement('p');
  address.className = 'popup__text--address';
  address.textContent = offer.address;

  const price = document.createElement('p');
  price.className = 'popup__text--price';
  price.textContent = `${offer.price} ₽/ночь`;

  const type = document.createElement('h4');
  type.className = '.popup__type';
  switch (offer.type) {
    case 'flat':
      type.textContent = 'Квартира';
      break;
    case 'bungalow':
      type.textContent = 'Бунгало';
      break;
    case 'house':
      type.textContent = 'Дом';
      break;
    case 'palace':
      type.textContent = 'Дворец';
      break;
    case 'hotel':
      type.textContent = 'Отель';
      break;
    default:
      break;
  }

  const capacity = document.createElement('p');
  capacity.className = 'popup__text--capacity';
  capacity.textContent = `${offer.rooms} комнат(ы) для ${offer.guests}`;

  const time = document.createElement('p');
  time.className = 'popup__text--time';
  time.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  const features = document.createElement('ul');
  features.className = 'popup__features';
  offer.features.forEach((feature) => {
    const featuresItem = document.createElement('li');
    featuresItem.className = `popup__feature popup__feature--${feature}`;
    featuresItem.textContent = feature;
    features.append(featuresItem);
  });

  const description = document.createElement('p');
  description.className = 'popup__description';
  description.textContent = offer.description;

  const photos = document.createElement('div');
  photos.className = 'popup__photos';
  offer.photos.forEach((photo) => {
    const photosItem = document.createElement('img');
    photosItem.className = 'popup__photo';
    photosItem.src = photo;
    photos.prepend(photosItem);
  });

  const avatar = document.createElement('img');
  avatar.className = 'popup__avatar';
  avatar.src = author.avatar;

  const popup = document.createElement('article');
  popup.className = 'popup';
  popup.append(avatar, title, address, price, type, capacity, time, features, description, photos);

  popupInner.append(popup);
};
