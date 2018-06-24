# README

This is the GitHub repo for http://lonnygomes.com. It is built using a static site generator called [hugo](https://gohugo.io/).

## Prerequisites

-   [NodeJS](https://nodejs.org/)
-   [hugo](https://gohugo.io/)

## Local Development

Before starting, be sure that you've installed [hugo](https://gohugo.io/getting-started/quick-start/).

After you've installed hugo, install the node depenencies:

```bash
npm install
```

Run the following to start the site locally:

```bash
npm start
```

## Deployment

This site is hosted via an s3 bucket. Run the following to update to production:

```bash
npm run deploy
```
