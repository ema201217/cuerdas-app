module.exports = (
  res,
  {
    viewItemPath,
    viewParentPath = "partials/sidebar",
    localsTitle = "",
    localsPage = "",
    localsViewItem = {},
  }
) => {
  res.render(viewItemPath, { ...localsViewItem }, (err, rawRenderBefore) => {
    if (err) console.log(err);
    res.render(viewParentPath, {
      contents: rawRenderBefore,
      page: localsPage,
      title: localsTitle,
    });
  });
};
