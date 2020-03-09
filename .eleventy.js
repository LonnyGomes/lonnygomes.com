const util = require('util');

module.exports = function(eleventyConfig) {
    const url = urlStr => eleventyConfig.nunjucksFilters.url(urlStr);

    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/assets');

    eleventyConfig.addLayoutAlias('base', 'base.njk');
    eleventyConfig.addLayoutAlias('haiku', 'haiku.njk');

    eleventyConfig.addFilter('debug', data => util.inspect(data));
    eleventyConfig.addShortcode(
        'image',
        (path, alt = '', width = '100%') =>
            `<img class="img" src="/assets/images/${url(
                path
            )}" alt="${alt}" width="${width}">`
    );

    return {
        dir: {
            input: 'src'
        },
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk'
    };
};
