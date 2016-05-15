class Unit {
  constructor(name = 'Unit') {
    this.name = name;
  }
  getCodeStyleUrl(ECMAScriptVersion = 6) {
    if (ECMASCriptVersion === 6) {
      return 'https://github.com/airbnb/javascript';
    }
  }
}

