const util = require('util');
const { DateTime } = require('luxon');
const Prism = require('prismjs');
const { default: readTime } = require('read-time-estimate');

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
    eleventyConfig.addFilter('fullDate', dateStr =>
        DateTime.fromJSDate(dateStr).toLocaleString(DateTime.DATE_FULL)
    );

    eleventyConfig.addShortcode(
        'image',
        (path, alt = '', width = '100%', align = '') =>
            `<img class="img" src="/assets/images/${url(
                path
            )}" alt="${alt}" width="${width}" align="${align}" >`
    );

    eleventyConfig.addShortcode(
        'readTime',
        text => readTime(text).humanizedDuration
    );

    eleventyConfig.addPairedShortcode(
        'code',
        (content, language = 'javascript') =>
            `<pre class="language-${language}"><code class="language-${language}">${Prism.highlight(
                content.trim(),
                Prism.languages[language],
                language
            )}</code></pre>`
    );

    eleventyConfig.addPairedShortcode(
        'responsiveVideo',
        content => `<div class="video-responsive">${content}</div>`
    );

    eleventyConfig.addCollection('tagsList', collection =>
        Object.keys(collection.getAll().shift().data.collections).filter(
            curTag => {
                let result = true;
                switch (curTag) {
                    case 'all':
                    case 'haiku':
                    case 'poem':
                    case 'quote':
                        result = false;
                        break;
                }

                return result;
            }
        )
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
