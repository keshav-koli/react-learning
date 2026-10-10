# React Learning 

# react js 
- ReactJS is a JavaScript library used to build User Interfaces (UI).,
- follow component based architecture 
- it used to make single page applications 

## Module 
### why are we using type ='module' in script tag 
- when we are using es6+ export and import in js file then it becomes a module therefore we have to specify the type=module 
- two type of export 
- export default name -> name can be any , only one default export in a file 
- named export -> export (a) from a.js  - > it export multiple , name should be same inside a experssion {}

### Parcel / Webpack
- these are module bundler which take the code , optimise them to clean package , problem they are solving for a large project we are having multiple file sending request to server , getting response , make page slow , 

### babel 
- it is a transpiler which converts react code to older browser understandable code 

## What is react
-  It significantly decreases the code with its components, states i.e., hooks, etc.

### What is reactDOM
- React Dom is a library which is used to manupulate the dom , or render the component into the DOM

### Reconciliation
- it is process of camparing real dom with virtual dom and updated the neccessary changes in dom with the help of diffing algorithum is called reconciliation


### React fiber 
- it is a complete rewrite of react reconcilation 
- with its help we can pause , rewrite rendering work 

#### createRoot method 
- it is uused to create a root element to display react component inside DOM

#### render method 
- it is used to render jsx, html into the dom


#### Component 
- component are building block of code 
- functional based compoenent
- class based component
-component name should be in 1 first charater capital

#### JSX
- stands for javascript xml and it is more stricter than html.
- it looks like html but it is actually not a html

`Rules`
- html class become classname  and for become htmlfor
- element lower case only 
- when writing html always have return but when writing js use {}
- multiple html element must be stored in one parent that can be div , or react fragment =><></>



#### props and props drilling 
- way of sending data from parent to child component 
- props means properties
- unidirectional
- props children - way of sending jsx element in props to child component
- default props - suppose we have destruture props in child , want if particular props don't come have a ddefault value
- props drilling -  way of sending props to child then grandchild then greatgrandchild and so on


#### Css in react
- inline css , in jsx element we have style attribute to give inline style 
- module css ,  having a separte module.css file 
- globale css - index.css 


#### UseState
- when we want to show dynamics data in Ui 
- State is a value React remembers between renders. Calling a state setter requests an update
- [name,useName]=useState()



#### Why do we needs keys in React 
- We need keys in React to give array elements a stable identity, which allows React's diffing algorithm to efficiently track, update, and reorder components across renders
- use a stable key , don't use index and math.random() as a key 