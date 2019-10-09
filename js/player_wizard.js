'use strict';
(function () {
  var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_COLOR_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var wizardCoat = window.dialog.setupWizard.querySelector('.wizard-coat');
  var wizardEyes = window.dialog.setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = window.dialog.setup.querySelector('.setup-fireball-wrap');
  var coatInput = window.dialog.setup.querySelector('[name = coat-color]');
  var eyesInput = window.dialog.setup.querySelector('[name = eyes-color]');
  var fireballInput = window.dialog.setup.querySelector(('[name = fireball-color]'));
  var getRandomElement = function (arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  };
  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  wizardCoat.addEventListener('click', function () {
    var newColor = getRandomElement(WIZARD_COAT_COLOR);
    wizardCoat.style.fill = newColor;
    coatInput.value = newColor;
    wizard.onCoatChange(newColor);
  });

  wizardEyes.addEventListener('click', function () {
    var newColor = getRandomElement(WIZARD_EYES_COLOR);
    wizardEyes.style.fill = newColor;
    eyesInput.value = newColor;
    wizard.onEyesChange(newColor);
  });

  wizardFireball.addEventListener('click', function () {
    var newColor = getRandomElement(WIZARD_COLOR_FIREBALL);
    wizardFireball.style.backgroundColor = newColor;
    fireballInput.value = newColor;
  });

  window.player = {};
  window.player.wizard = wizard;
})();
