"use strict"

function Unit () {
  this.name = 'Unit';
}

Unit.prototype.getCodeStyleUrl(ECMAScriptVersion) {
  if (ECMASCriptVersion === 6) {
     return 'https://github.com/airbnb/javascript';
  }
};
