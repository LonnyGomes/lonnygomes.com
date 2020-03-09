const util = require('util');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/css');

    eleventyConfig.addLayoutAlias('base', 'base.njk');
    eleventyConfig.addLayoutAlias('haiku', 'haiku.njk');

    eleventyConfig.addFilter('debug', data => util.inspect(data));

    return {
        dir: {
            input: 'src'
        },
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk'
    };
};
