const sitemap = require('nextjs-sitemap-generator');  

sitemap({  
  baseUrl: 'https://entretiensgouttieresrivesud.ca',  
  pagesDirectory: __dirname + "/pages",  
  targetDirectory : 'public/'  
});
