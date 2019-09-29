'use strict';
(function () {
  var wizardCoat = window.setupWizard.querySelector('.wizard-coat');
  var wizardEyes = window.setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = window.setup.querySelector('.setup-fireball-wrap');
  var coatInput = window.setup.querySelector('[name = coat-color]');
  var eyesInput = window.setup.querySelector('[name = eyes-color]');
  var fireballInput = window.setup.querySelector(('[name = fireball-color]'));

  wizardCoat.addEventListener('click', function () {
    var color = window.getRandomElement(window.WIZARD_COAT_COLOR);
    wizardCoat.style.fill = color;
    coatInput.value = color;
  });

  wizardEyes.addEventListener('click', function () {
    var color = window.getRandomElement(window.WIZARD_EYES_COLOR);
    wizardEyes.style.fill = color;
    eyesInput.value = color;
  });
  wizardFireball.addEventListener('click', function () {
    var color = window.getRandomElement(window.WIZARD_COLOR_FIREBALL);
    wizardFireball.style.backgroundColor = color;
    fireballInput.value = color;
  });
})();
