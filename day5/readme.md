----Vit : development environment
- npm ________ => internally installed => faster
- HMR => Hot module replacement
    |
- Change a component   =>     updates the ui without even refreshing

- live - server => change in files 
- package.json => this holds the list that you have
- as we start installing packages
- packages -




- react - library
- external library : axious , router , redux
- cd into your folder
- npm install
- npm run dev

- vite react
- npm create vite@latest
- name the folder
- select react
- select js
- cd theFolderName
- npm i / install
- npm run dev

- export
- two types of export
- named export => export multiple stuff
export let fn = () => {}

export let str = "masai"

=>{fn ,str}

- default export => 

let fn =()=>{}
export default fn



-import
 - from named export
recieving an {}=obj from exportfile

{fn,str} destructure this

- from default export

fn from exportfile




lifecycle of react

birth       process      died

mount       update       unmount
            usestate     removed
            re-render


side-Effects => fetch(url)
             => consoling   