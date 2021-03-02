# vite-ant-design

create a react admin page in Vite

## Errors

` findDOMNode is deprecated in StrictMode`:

repalce `.StrickMode` with `.Fragment` in `main.tsx` file

`TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
    at Function.o (<anonymous>:1:83)`

strick mode history.push not working