const path = require("path");
module.exports = ({
  files,
  propToRead,
  savePath = "../../public/images/Products/",
  nameFunctionCreate,
}) => {
  try {
    files.forEach((file) => {
      const pathImage = path.join(__dirname, savePath + file[propToRead]);
      file[nameFunctionCreate](pathImage);
    });
    return true;
  } catch (error) {
    return false;
  }
};
