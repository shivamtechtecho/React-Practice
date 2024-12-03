export const Login = ()=>{
    return(
        <div style={{backgroundColor:"yellow",color:"midnightblue"}}>
            <h1 style={{color:"midnightblue"}}>Login Page</h1>
            <div style={{display:"flex",padding:"10px"}}>
                <h3>Email: </h3>
                <input type="email" placeholder="email"/>
            </div>
            <div style={{display:"flex",padding:"10px"}}>
                <h3>Password: </h3>
                <input type="password" placeholder="password"/>
            </div>
        </div>
    )
}