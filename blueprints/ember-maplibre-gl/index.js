module.exports = {
  description: 'add maplibre-gl npm package',

  normalizeEntityName() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter to us)
  },

  afterInstall() {
    return this.addPackageToProject('maplibre-gl', '^1.0.0');
  },
};
