import React from "react";
import './SignInSignUp.css';
function Home(){
    const logout=()=>{
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    const deleteAccount=()=>{ 
        localStorage.clear()
        window.location.reload()
    }
    
    return(
        <div className="container">
            <h1>Home Page </h1>
            <p>Wellcome {localStorage.getItem('name')}</p>
            <div className="button-box">
                <button onClick={logout} className="logout">LogOut</button>
                <button onClick={deleteAccount} className="delete">Delete</button>
            </div>
        </div>
    );
}
export default Home;