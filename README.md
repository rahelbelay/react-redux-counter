# react-redux-together

# conventions

## Redux
- `actions.js` -
- `reducers.js`- import you actions and define reducer functions
- `CounterApp.js`about redux

## React
### "Dumb components" 
-they  dont know 
-accept props!
    -show the props
    - use propsas event handler
-`components/` smart containers holds all your dump component
#### smart containers
- they know all about redux
   - have acess to redux(state)
   - can call the store's `dipatch`

