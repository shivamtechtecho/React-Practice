let { useState } = React;

let apiUrl = "https://axios-36da1-default-rtdb.firebaseio.com/todos.json";

let Form = () => {
    let initState = {
        task: "",
        status: "",
        priority: ""
    }

    let [getData, setGetData] = useState({});
    let [data, setData] = useState(initState);

    function handleForm(e) {
        let { name, value } = e.target;
        setData({ ...data, [name]: value })
    }


    async function handleSubmit(e) {
        e.preventDefault()
        // console.log(data)
        let response = await axios.post(apiUrl, data);
        // console.log(response.data)
        setData(initState)
        showData()
    }

    async function showData() {
        let res = await axios.get(apiUrl)
        setGetData(res.data)
        // console.log(res.data)
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="task" value={data.task} placeholder="Task" onChange={handleForm} />
                <input name="status" value={data.status} placeholder="Status" onChange={handleForm} />
                <input name="priority" value={data.priority} placeholder="Priority" onChange={handleForm} />
                <button type="submit">Submit</button>
            </form>
            <button onClick={showData}>Show Data</button>
            <div>
                {
                    Object.entries(getData).map(([ id, value ],i) => {
                        return (
                            <div key={i}>
                                <p><b>Task: </b>{value.task}</p>
                                <p><b>Priority: </b>{value.priority}</p>
                                <p><b>Status: </b>{value.status}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

function App() {
    return (
        <Form />
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)