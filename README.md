# Evaluates2 Site
Frontend React Site For Evaluates2.com

## Node Verison

use node v11.15.0

## Usage

install dependencies
```
npm i
```

ya also need to run yarn install for some reason
```
npx yarn install
```

start local dev server
```
npm start
```

formatting and linting
```
npm run format
```

## Scaffodling

Scaffolded with "react-starter-redux"

```sh
# create a new Gatsby site using the default starter
npx gatsby new my-redux-starter https://github.com/caki0915/gatsby-starter-redux
```

## Gatsby Gonfig Files

-  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

-  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

-  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

-  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

-  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.


## Build & Deploy (Prod Site Hosted With S3 / Cloudfront)

All builds and deployment are done manulally right now with these commands:
```
npm run build
```
```
npm run deploy
```


*Also, be sure to point a "Cloudfront Distribution" at your S3 bucket with `index.html` as the error file, redirect HTTP to HTTPS, and map 403 and 404 errors to `/index.html`.*

you will need aws creds as well

--- 

## Google Recaptcha

Recaptcha human verification is tied to Jim's gmail account. Captcha ettings can be changed at https://www.google.com/recaptcha/admin/site/347840789/settings.
