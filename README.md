# README

[![Netlify Status](https://api.netlify.com/api/v1/badges/e1d648db-f1ad-4b81-889c-2b097c5e40b5/deploy-status)](https://app.netlify.com/sites/lonnygomes/deploys)

This is the GitHub repo for http://lonnygomes.com. It is built using a static site generator called [eleventy](https://www.11ty.dev).

## Prerequisites

-   [NodeJS](https://nodejs.org/)

## Local Development

Before starting, be sure that you've installed Node.

Next install the node dependencies:

```bash
npm install
```

Run the following to start the site locally:

```bash
npm start
```

## Short codes

### image

```
{% image "lonny-sp.png", "alt", "30%", "right" %}
```

### readTime

```
{% readTime content %}
```

### tweet

```
{% tweet title, page.url %}
```

### code

```
{% code %}
console.log('hello world');
{% endcode %}
```

### responsiveVideo

```
{% responsiveVideo %}

<iframe width="560" height="315" src="https://www.youtube.com/embed/fAmY5sgu3_s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{% endresponsiveVideo %}
```
