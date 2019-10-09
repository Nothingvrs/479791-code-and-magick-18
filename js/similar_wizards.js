'use strict';
(function () {
  var coatColor;
  var eyesColor;
  var wizards = [];

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };
  var similar = document.querySelector('.setup-similar');
  var similarList = window.dialog.setup.querySelector('.setup-similar-list');

  var drawWizards = function (data) {
    var takeNumber = data.length > 4 ? 4 : data.length;
    similarList.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarList.appendChild(renderWizard(data[i]));
    }
    similar.classList.remove('hidden');
  };

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    drawWizards(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  window.player.wizard.onEyesChange = window.utils.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  window.player.wizard.onCoatChange = window.utils.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  var initWizards = function (data) {
    wizards = data;
    updateWizards(wizards);
  };

  window.backend.load(initWizards, window.utils.renderErrorMessage);
})();
