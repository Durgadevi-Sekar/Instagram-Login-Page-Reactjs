import React,{useState} from "react";
import './Instagram.css';
function Instagram() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Login Successfully')
    }
    return (
        <>
            <div className="background">
                <div className="overlay"></div>
                <div className="login-container">
                    <div className="login-box">
                        <h1><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUtZ2q6Dr4ZP4zU01VfGffyc_u-z8vIY4BCA&s" width={150} height={90}  /></h1>
                        
                        <form onSubmit={handleSubmit}>
                            <div className="input" >
                                <input type="text" value={email}
                                    placeholder="Phone number,email or username"
                                    onChange={(e) => setEmail(e.target.value)} req />
                            {/* </div>
                            <div className="input-group"  > */}
                                <input type="password" value={password} md={6}
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                            </div>
                            <br/>
                            <button type="submit" className="login-button">Log in</button>
                            <h5>Forgot your login details?<a>Get help logging in.</a></h5>
                            <div class="or-container">
                                <div class="line" ></div>
                                <div class="or">OR</div>
                                <div class="line"></div>
                            </div>
                            <div>
                                <h4>Log in with Facebook</h4>
                            </div>
                            <br/>
                            <div>
                            <h5>Don't have an account?<a>Sign up.</a></h5>
                            
                            </div>

                        </form>
                        
                        
                    </div >
                </div>
            </div>

        </>
    )

}
export default Instagram