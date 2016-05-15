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

  getCodeStyleReport (nodeId = example) {
    return `http://ryu.abdoulsy.eu/codeStyle/Reports/${example}.html`;
  }

  getLintReport (nodeId = example) {
    return `http://ryu.abdoulsy.eu/lint/reports/${example}.html`;
  }

  getTestSetupUrl () {
    return false;
  }

  getTestReportUrl (nodeId = example) {
    return `http://ryu.abdoulsy.eu/test/reports/${example}.html`;
  }

  getNode (nodeId = example) {
    return `http://aria.abdoulsy.eu/ontology/nodes/${nodeId}`;
  }

  getMetadata (nodeId = example) {
    return `http://aria.abdoulsy.eu/ontology/metadata/${nodeId}`;
  }

  getVisualisation (nodeId = 'example') {
    return `http://glacius.abdoulsy.eu/visualisations/${nodeId}`;
  }

  getIssues (nodeId = 'example') {
    return `http://ryu.abdoulsy.eu/issues/${nodeId}`
  }

  build () {
    return 'capability not implemented';
  }

  publish () {
    return 'capability not implemented';
  }

  test () {
    return 'capability not implemented';
  }

  install () {
    return 'capability not implemented';
  }

  render () {
    return 'capability not implemented';
  }

  getInfoUrl (nodeId = example) {
    return `http://ryu.abdoulsy.eu/info/${nodeId}`;
  }

  toString (nodeId = example) {
    return `this is the class Unit with the nodeId ${nodeId}`;
  }

  getHelpUrl (nodeId = example) {
    return `http://ryu.abdoulsy.eu/help/${nodeId}`;
  }

  getVersion (nodeId = 'example') {
    return 0.0.1;
  }

  getTrackerUrl (nodeId = 'example') {
    return `https://trello.com/AbdoulSy/Core/${nodeId}`;
  }

  getBuildParent (nodeId = 'example') {
    return 'capability not implemented';
  }
  
  getDocumentation (nodeId = 'example') {
    return `http://ryu.abdoulsy.eu/documentation/${nodeId}`;
  }

}

