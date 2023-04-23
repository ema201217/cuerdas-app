module.exports = ({where, exclude = [], include = [], other = {}}) => {
  return {
    where,
    attributes: {
      exclude,
    },
    include,
  };
};
