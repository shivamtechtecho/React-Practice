let { useState } = React;



function Register() {
    let [userName, setUserName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [phone, setPhone] = useState("");
    let [demoData, setDemoData] = useState([]);

    function handleUserName() {
        setUserName(event.target.value)
    }
    function handleEmail() {
        setEmail(event.target.value)
    }
    function handlePassword() {
        setPassword(event.target.value)
    }
    function handlePhone() {
        setPhone(event.target.value)
    }
    function handleClick() {
        let obj = { email, userName, phone, password };
        setDemoData((prev) => [...prev, obj])
        console.log(demoData)
        setUserName("")
        setEmail("")
        setPassword("")
        setPhone("")
    }
    return (
        <>
            <div>
                <input onChange={handleUserName} value={userName} placeholder="Name" />
                <input onChange={handleEmail} value={email} placeholder="Email" />
                <input onChange={handlePassword} value={password} placeholder="Password" />
                <input onChange={handlePhone} value={phone} placeholder="Phone" />
                <button onClick={handleClick}>Register</button>
            </div>
            <DisplayData demoData={demoData} setDemoData={setDemoData}/>
        </>
    )
}

function DisplayData({demoData,setDemoData}){
    return(
        <div className="container">
                {
                    demoData.map((ele) => {
                        return (
                            <div>
                                <p><b>Name: </b>{ele.userName}</p>
                                <p><b>Email: </b>{ele.email}</p>
                                <p><b>Password: </b>{ele.password}</p>
                                <p><b>Phone: </b>{ele.phone}</p>
                            </div>
                        )
                    })
                }
            </div>
    )
}
function App() {
    // useState => number & boolean any datatypes
    // let[toggle,setToggle] = useState(0) // counter, pagination, lists, flag
    // let[str, setStr] = useState("") // input,search, writing text
    // let[arr, setArr] = useState([]) // data Storage, lists
    // let[obj, setObj] = useStatr({}) //multiple datatype, key value pairs
    return (
        <Register />
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)