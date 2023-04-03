module.exports = (
  arrFilterQueries = [{ elementsFilter: [], key: "" }],
  attributeToRead = ""
) => {
  let labelFilter;
  console.log(arrFilterQueries)
  if (arrFilterQueries.length) {
    arrFilterQueries.forEach(({ key, elementsFilter }) => {
      if(key && elementsFilter){
        labelFilter = elementsFilter.find((c) => c.id == key)[attributeToRead];
      }
    });
  }
  console.log(labelFilter)
  return labelFilter;
};
