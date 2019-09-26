'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_COLOR_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var COUNT_OF_WIZARD = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var nameInput = document.querySelector('.setup-user-name');
var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');
var coatInput = setup.querySelector('.coat-color');
var wizards = [];
var userDialog = document.querySelector('.setup');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var getRandomElement = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

var createRandomWizardCollection = function (count) {
  for (var i = 0; i <= count; i++) {
    wizards[i] = {
      name: getRandomElement(WIZARD_NAMES),
      lastname: getRandomElement(WIZARD_LASTNAMES),
      coatColor: getRandomElement(WIZARD_COAT_COLOR),
      eyesColor: getRandomElement(WIZARD_EYES_COLOR)
    };
  }
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.lastname + ' ';
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var getDrawWizard = function (collection) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < collection.length; i++) {
    fragment.appendChild(renderWizard(collection[i]));
  }
  similarListElement.appendChild(fragment);
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

nameInput.addEventListener('keydown', function (evt) {
  evt.stopPropagation();
});

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomElement(WIZARD_COAT_COLOR);
  coatInput.value = 'wizardCoat.style.fill';
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomElement(WIZARD_EYES_COLOR);
});

wizardFireball.addEventListener('click', function () {
  wizardFireball.style.backgroundColor = getRandomElement(WIZARD_COLOR_FIREBALL);
});

createRandomWizardCollection(COUNT_OF_WIZARD);
getDrawWizard(wizards);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
