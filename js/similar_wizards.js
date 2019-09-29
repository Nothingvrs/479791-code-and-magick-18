'use strict';
(function () {
  window.WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  window.WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  window.WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  window.WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  window.WIZARD_COLOR_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var COUNT_OF_WIZARD = 4;
  var wizards = [];
  window.setupWizard = document.querySelector('.setup-wizard');
  var similarListElement = window.setup.querySelector('.setup-similar-list');
  window.setup.querySelector('.setup-similar').classList.remove('hidden');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  window.getRandomElement = function (arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  };

  var createRandomWizardCollection = function (count) {
    for (var i = 0; i <= count; i++) {
      wizards[i] = {
        name: window.getRandomElement(window.WIZARD_NAMES),
        lastname: window.getRandomElement(window.WIZARD_LASTNAMES),
        coatColor: window.getRandomElement(window.WIZARD_COAT_COLOR),
        eyesColor: window.getRandomElement(window.WIZARD_EYES_COLOR)
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
  createRandomWizardCollection(COUNT_OF_WIZARD);
  getDrawWizard(wizards);
})();
