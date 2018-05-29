This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## How to run
Remember to do a `yarn` or `npm install` after cloning or pulling this repo.

All the usual `create-react-app` scripts work here:  
- `yarn start` - Run in development mode
- `yarn test`  - Run tests and validate snaps
- `yarn build` - Build a production build (pls don't use this in production)

## Notes
- There was an error in `data.json` line 10. The key for the room name was `name` instead of `roomName`. I have  corrected this error. 
- I've chosen a lightweight react component from NPM to do the star ratings (`react-stars`). Some of the other options had a lot of superflous features or a lot of dependencies, so I didn't choose those. If this were going into production I'd revisit this choice. 
- I used CSS grid to lay out the search result items, mainly because I wanted to have a play with it. Obviously this is bad for browser compatibility and would need to be changed for a production system.
- Unfortunately the rendering of `react-stars` uses `Math.random()`, which means I need to mock `Math.random()` in each test where I need an idempotent snapshot. If you know a better solution to this I'd love to hear it!

## Future improvements
- Improve design to work on mobile resolutions
- Connect to a real API
- Add a loading screen while data is being fetched
- Move to a better state management solution - Redux, Relay, GraphQL + local UI state
- Audit `react-stars` package, consider forking to remove edit function or creating custom solution
- Test a11y
- Test on older browsers (CSS grid ain't gonna work)
- Schema validation for hotels array
- Move to locally scopped CSS (e.g. CSS Modules)