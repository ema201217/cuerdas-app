module.exports = {
  search: {
    fieldsToSearch: ["title", "subtitle", "description", "model"],
    externalFieldsFromSearch: ["$Brand.name$", "$Type.name$", "$Color.text$"],
  },
};
