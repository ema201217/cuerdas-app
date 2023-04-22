module.exports = (
  { files, propToRead, savePath = "../../public/images/Products/" }
) => {
  files.forEach(async (file) => {
    const pathImage = path.join(__dirname, savePath + file[propToRead]);
    if (existsSync(pathImage)) console.log(); // unlinkSync(pathImage);
  });
};
