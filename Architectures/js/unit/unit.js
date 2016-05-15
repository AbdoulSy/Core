class Unit {
  constructor(name = 'Unit') {
    this.name = name;
  }
  getCodeStyleUrl (ECMAScriptVersion = 6) {
    if (ECMASCriptVersion === 6) {
      return 'https://github.com/airbnb/javascript';
    }
  }
  getOldestES6SetupTutorialUrl () {
    return 'http://codeutopia.net/blog/2014/12/18/getting-started-with-using-es6-ecmascript-6/'
  }
}

