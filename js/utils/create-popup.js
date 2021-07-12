const popupWrapper = document.querySelector('.map');
const cardTemplate = document.querySelector('#card').content;

export const createPopup = ({
  author,
  offer,
}) => {

  const cloneCard = cardTemplate.cloneNode(true);

  const title = cloneCard.querySelector('.popup__title');
  title.textContent = offer.title;

  const address = cloneCard.querySelector('.popup__text--address');
  address.textContent = offer.address;

  const price = cloneCard.querySelector('.popup__text--price');
  price.textContent = `${offer.price} ₽/ночь`;

  const type = cloneCard.querySelector('.popup__type');
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

  const capacity = cloneCard.querySelector('.popup__text--capacity');
  capacity.textContent = `${offer.rooms} комнат(ы) для ${offer.guests}`;

  const time = cloneCard.querySelector('.popup__text--time');
  time.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  const features = cloneCard.querySelector('.popup__features');
  features.innerHTML = '';
  offer.features.forEach((feature) => {
    const featuresItem = document.createElement('li');
    featuresItem.className = `popup__feature popup__feature--${feature}`;
    featuresItem.textContent = feature;
    features.append(featuresItem);
  });

  const description = cloneCard.querySelector('.popup__description');
  description.textContent = offer.description;

  const photos = cloneCard.querySelector('.popup__photos');
  photos.innerHTML = '';
  offer.photos.forEach((photo) => {
    const photosItem = document.createElement('img');
    photosItem.className = 'popup__photo';
    photosItem.src = photo;
    photos.append(photosItem);
  });

  const avatar = cloneCard.querySelector('.popup__avatar');
  avatar.src = author.avatar;

  popupWrapper.append(cloneCard);
};
