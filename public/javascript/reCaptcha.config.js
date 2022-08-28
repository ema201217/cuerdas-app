var onloadCallback = function () {
  grecaptcha.render('ReCaptcha', {
      sitekey: /https:\/\/cuerdas-app.herokuapp.com/.test(window.location.href) ? '6Lf31UAcAAAAABrw2DUMZXzCldUObT0L4lEoBJcP': '6LfpdrQhAAAAAMlJq4D37DZoDctHcG38mI7exiEW',
      theme: 'light',
      size: 'normal',
  })
}