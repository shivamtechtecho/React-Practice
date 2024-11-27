let {useState} = React;

function Counter(){
    let [count, setCount] = useState(0);

function handleDec(){
    setCount(prev=>prev-1)
}
function handleInc(){
    setCount(prev=>prev+1)
}
    return (
        <>
        <button onClick={handleDec}>DEC</button>
        <h2>{count}</h2>
        <button onClick={handleInc}>INC</button>
        </>
    )
}

function App(){
    return(
        <Counter/>
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)