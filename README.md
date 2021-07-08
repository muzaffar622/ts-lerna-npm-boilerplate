# ts-lerna-npm-boilerplate

this boilerplate maked for who wants to use modules alias with ts based lerna monorepo. 
### if you want to deploy it, then recommend to add
```js
alias: {
    "@serviceA/*": path.resolve(__dirname, "./services/serviceA/src/*"),
    "@serviceB/*": path.resolve(__dirname, "./services/serviceB/src/*"),
    "libs/helper": path.resolve(__dirname, "./libs/src/index.ts"),
    // include here your own
}
```
inside to your `webpack.config.js`'s `resolve{}`

### shared `libs`
If you check lerna `workspace`, package does not included libs. the reason for it I use `libs` as shared library in `packages/*` 


#### Included services

packages/* `serviceA` and `serviceB`. you can add your another services as much as you want.


### Lint

there is two lerna scripts for lint each package

```js
  "scripts": {
    "linter": "lerna run linter",
    "test": "lerna run unit-test"
  },
```

* If you want to include specific packages for lint checker then use `--scope` (should same name as name in service's `package.json`)

```js
   "scripts": {
    "linter": "lerna run linter --scope={service-b}",
    "test": "lerna run unit-test"
  },
```

after each service's package.json should have script as below

```js
"linter": "npx eslint \"src/**/*.@(ts)\" --fix ; npx prettier --check \"src/**/*.@(ts)\" --write"
```


### Feel free to ask questions or make an issue.
