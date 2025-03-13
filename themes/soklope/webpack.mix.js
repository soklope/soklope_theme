let mix = require('laravel-mix');

mix.setPublicPath('dist')
   .options({
      processCssUrls: false
   })
   .js('src/app.js', 'js') 
   .sass('src/app.scss', 'css'); 