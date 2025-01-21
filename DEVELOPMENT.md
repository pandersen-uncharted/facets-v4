<div align="center">

![Uncharted Facets](assets/logo_320.png)

</div>

# Development Notes for Uncharted's Facets
---  
The Facets library is split in five packages:
1. `facets-core` contains all the components necessary to start using facets in your project
2. `facets-plugins` is a collection of components that extend facets' behavior, look and feel
3. `facets-docs` documentation and examples live here
4. `facets-builder` tool to create and customize facets (under construction, Facets 4+ feature)

The only packages published to the registry are `facets-core` and `facets-plugins` 


## Installation

Use `yarn` to install the desired packages:
```shell script
$ yarn add @uncharted.software/facets-core
$ yarn add @uncharted.software/facets-plugins
```
or `npm`:
```shell script
$ npm install @uncharted.software/facets-core
$ npm install @uncharted.software/facets-plugins
```


## Usage

The documentation is not hosted anywhere at the moment but can be accessed by building the project and running the
`facets-docs` package.


Check out or download this repo, then, from the repo's root folder run the following commands:
```shell script
$ yarn install
$ yarn build
```

You can now run the documentation:
```shell script
$ cd packages/facets-docs
$ yarn start
```

On your browser navigate to http://localhost:5173/


## Development

Check out or download this repo.

Build `facets-core`.
```shell script
$ cd packages/facets-core
$ yarn build
```

Build `facets-plugins`. (Optional)
```shell script
$ cd packages/facets-plugins
$ yarn build
```

To develop locally, run the `facets-docs` package and use it as a testbed:
```shell script
$ cd packages/facets-docs
$ yarn build
$ yarn start
```

On your browser navigate to http://localhost:5173/  

Changes to the docs code will appear automatically but if you make changes to `facets-core` or `facets-plugins` you will need to rerun `yarn build` for
whichever you've changed, and then `yarn build` and `yarn start` for `facets-docs`. (Note: In theory you could do `yarn start` in `facets-core` and `facets-plugins`
and have everything update automatically but I've not had success with that.)
  
To develop in your own app, link ALL the published facets packages to your app, from the root of the Facets repo run: 
```shell script
$ cd ../facets-core
$ yarn link
$ cd ../facets-plugins
$ yarn link
```

Then, from the root of your project run:
```shell script
$ yarn link @uncharted.software/facets-core @uncharted.software/facets-plugins
```

Start (or re-start) your project and continue with development.


---

## Publish
- Bump the packages using yarn bump or npm run bump
```shell script
$ yarn bump
```
- One <strong>must</strong> have an npm account that belongs to the uncharted organization and be logged into the npm scope
- Run npm whoami to confirm npm is logged in (if not follow the prompts)
```shell script
$ npm whoami
```
- Log into the uncharted npm scope
```shell script
$ npm login --registry https://npm.uncharted.software --scope @uncharted
```
- Individually publish the following packages: css-tools, facets-core, and facets-plugins
 ```shell script
$ cd css-tools
$ yarn publish
$ cd ../facets-core
$ yarn publish
$ cd ../facets-plugins
$ yarn publish
```
