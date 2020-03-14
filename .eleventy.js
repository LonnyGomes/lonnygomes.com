const util = require('util');
const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {
    const url = urlStr => eleventyConfig.nunjucksFilters.url(urlStr);

    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/assets');

    eleventyConfig.addLayoutAlias('base', 'base.njk');
    eleventyConfig.addLayoutAlias('haiku', 'haiku.njk');
    eleventyConfig.addLayoutAlias('post', 'post.njk');
    eleventyConfig.addLayoutAlias('poem', 'poem.njk');

    eleventyConfig.addFilter('debug', data => util.inspect(data));
    eleventyConfig.addFilter('hugeDate', dateStr =>
        DateTime.fromJSDate(dateStr).toLocaleString(DateTime.DATE_HUGE)
    );

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
