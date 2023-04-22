module.exports = (
  arrFilterQueries = [{ elementsFilter: [], key: "" }],
  attributeToRead = ""
) => {
  let labelFilter;
  if (arrFilterQueries.length) {
    arrFilterQueries.forEach(({ key, elementsFilter }) => {
      if(key && elementsFilter){
        labelFilter = elementsFilter.find((c) => c.id == key)[attributeToRead];
      }
    });
  }
  return labelFilter;
};
