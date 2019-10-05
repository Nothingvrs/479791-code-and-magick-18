'use strict';
(function () {
  var COUNT_OF_WIZARDS = 4;
  var similarListElement = window.dialog.setup.querySelector('.setup-similar-list');
  window.dialog.setup.querySelector('.setup-similar').classList.remove('hidden');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  var onLoad = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < COUNT_OF_WIZARDS; i++) {
      fragment.appendChild(renderWizard(wizards[getRandomInt(0, wizards.length)]));
    }
    similarListElement.appendChild(fragment);

    window.dialog.setup.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.backend.load(onLoad, window.backend.error);
})();
