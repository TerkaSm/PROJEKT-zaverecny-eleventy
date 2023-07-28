module.exports = function(eleventyConfig) {
    // Výchozí výstupní složka je: _site
    // Zkopírovat images/ do _site/images
    eleventyConfig.addPassthroughCopy("images");
    // Zkopírovat css/ to _site/css/
    eleventyConfig.addPassthroughCopy("css");

    eleventyConfig.addPassthroughCopy("icons");

    eleventyConfig.addPassthroughCopy("kocky");

    // Přidání passthrough pro soubory .txt
    eleventyConfig.addPassthroughCopy("*.txt");

    // Přidání passthrough pro soubory .xml
    eleventyConfig.addPassthroughCopy("*.xml");

    return {
        // možné formáty šablon
        templateFormats: ["njk", "html", "md"],
        // jako šablonovací jazyk zvolíme Nunjucks`
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
      }    
   };
   