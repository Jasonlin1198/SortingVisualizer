# SortingVisualizer

Web application that utilizes various sorting algorithms to show visual sorting of arrays


**Features:**

- Integrated IDE
- Sorting algorithms (Bubble sort, insertion sort, selection sort, merge sort)
- Visual sorting process
- Allow users to manually input array

**Tools:**

- Web application using Vanilla JS
- AWS back-end server

**Setup Process:**

`npm init` - initalize packages (package.json & package-lock.json) 

`npm install`

`npm install -g live-server` (install live server module)

`live-server` (starts live server)

**Jest setup process:**

`npm i -D jest` (install jest as a dependency) or `npm install --save-dev jest` 

add to package.json: 

```jsx
"scripts": {
	"test": "jest"
}
```

to run jest tests: **`npm run`** 

**Resources:** 

- Babel: [https://babeljs.io/docs/en/babel-preset-env](https://babeljs.io/docs/en/babel-preset-env)
- Jest: [https://jestjs.io/docs/en/getting-started](https://jestjs.io/docs/en/getting-started)

**VS code extensions:**

- ESLint
- Prettier
- Path Intellisense
- HTML CSS support
- HTML snippets

**API:**

- Sphere Engine:
    - [https://docs.sphere-engine.com/](https://docs.sphere-engine.com/)
    - [https://sphere-engine.com/services](https://sphere-engine.com/services)
    - [https://sphere-engine.com/services/compilers/widgets/79ac3ef2d4fc3d8586fbb912590868ba](https://sphere-engine.com/services/compilers/widgets/79ac3ef2d4fc3d8586fbb912590868ba)

**JSDoc**:

- Setup: [https://alligator.io/js/jsdoc/](https://alligator.io/js/jsdoc/)
- `npm install -g jsdoc`
- `npm install --save-dev jsdoc-to-markdown`


**Issues**: 

- (Solved) Cannot import outside of module - [https://xperimentalhamid.com/how-do-i/fix-cannot-use-import-statement-outside-a-module/](https://xperimentalhamid.com/how-do-i/fix-cannot-use-import-statement-outside-a-module/)
- (Solved) LF will be replace with CLRF in git - `git config --global core.autocrlf false`
- (Solved) Import outside of module in testing files
    - npm i --save-dev jest babel-jest @babel/preset-env
    - [https://github.com/facebook/jest/issues/9395#issuecomment-583799300](https://github.com/facebook/jest/issues/9395#issuecomment-583799300)
- (Solved) JS file not found (404) - [https://stackoverflow.com/questions/37261879/js-files-not-found-404](https://stackoverflow.com/questions/37261879/js-files-not-found-404)
