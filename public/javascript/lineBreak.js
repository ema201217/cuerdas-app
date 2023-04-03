const lineBreak = (element) => {
  element.addEventListener("keyup", function (e) {
    if (e.key == ".") {
      let valor = element.value;
      element.value = valor += "\n";
    }
  });
};
