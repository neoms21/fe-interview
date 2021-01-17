## Cleo Frontend Interview - Bills
### Get Started
1. Fork or clone this repo (a simple [`create-react-app`](https://github.com/facebook/create-react-app) extended with [`json-server`](https://github.com/typicode/json-server) and some Cleo-specific goodies)
1. Install dependencies via `yarn` (or `npm`)
1. Run `yarn start` to start the dev server
1. Run `yarn api` in a different terminal to start the json-api server

### The Task
1. Create a Tabs component that allows multiple pages to be switched between.
1. One tab should show a list of merchants with transactions that have been marked as bills. These can be found at http://localhost:3002/merchants. Merchant's marked as bills, have a flag `isBill` set to `true`.
1. Another tab should show a list of merchants with transactions which are potential bills. These can also be found at http://localhost:3002/merchants. Merchant's that could be potentially bills have a flag `isBill` set to `false`.
1. Under each merchant row for both lists, should be a hidden list of transactions for that merchant. This should show when the merchant row is clicked.
1. Under the name of each merchant should show a count of the transactions for it
1. Add an action to the bills tab for each merchant called "remove bill" which updates the relevant merchant's `isBill` flag to `false`. You can use a `PATCH` request to `http://localhost:3002/merchants/:id` using the id of the merchant to update the resource.
1. Add an action to the potential bills tab for each merchant called "Add as bill" which updates the relevant merchant's `isBill` flag to `true`.
1. After each action, the lists should reflect the changes.

### Notes
- Please aim to spend 2-3 hours completing this task
- We'd like to see state management tools being used
- Tools we use at Cleo include styled-components, Typescript and Redux (with Sagas)
- Style the components however you see fit. SASS or PostCSS are fine, but we'd prefer CSS in JS
- We love tests, linted code and great looking UIs
- The API contains other data, feel free to use this creatively if you have the time
- Remember to check your project runs before submitting


### Implementation misses
- Spent around 5-6 hours, got a bit stuck on Tabs implementation to make it generic with fully composable from the consumers.
- Idea would be to implement accordions in the same way as Tabs but was running out of time so used a library
- I just couldn't arrive at a logical design to show the category along with Merchant information. Tried coupld of designs but just couldn't quite fit it in.
- Couldn't test the chevron toggling using RTL as jsdom doesn't support pseudo elements selection yet
- Could have used redux-saga-test-plan for unit testing sagas as it would also test the watchers but it becomes more of an integration test and I wanted to keep the tests atomic.
- Ran out of time for writing tests for Tabs component
- Workers have return type as any which should be changed to strongly typed.