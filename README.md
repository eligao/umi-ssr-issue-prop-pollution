# umi-ssr-issue-prop-pollution

This repo reproduces and verifies SSR server side prop pollution issues.

Forked from [umi-ssr-example-normal](https://github.com/umijs/umi-server/tree/master/examples/normal)

Also available on [CodeSandbox](https://codesandbox.io/s/github/eligao/umi-ssr-issue-prop-pollution)

## Development

run `yarn install`

```bash
$ yarn dev
```

(if doesn't work, run `yarn start` then `yarn build` manually, or just open the CodeSandbox link above)

## Production

```bash
$ yarn start
```

# How to reproduce the issues:

- Run the project

## issue 1:
Stale initProps from server pollutes dynamic routes
- Go to subroute 001 page
- Switch between subroute 002 and 001, page content loads correctly after client-side getInitProps
- refresh the page at one subroute
- Switch between subroute 002 and 001

## Issue 2: 
Navigating between page anchors trigger unexpected getInitProps
- Go to "Page with hash"
- click "#" anchors ahead of paragraphs
- Unexpected getInitProps called
- issue 1 above may also appear
