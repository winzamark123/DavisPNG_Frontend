import React from "react";


const logIn =() =>{
    return{
        <div id="whole">
            <div id="backgroundPictures">
                <img id="logo" src="../../assets/logo1.png" alt="loadFail" />
                <img id="cloud1" src="../../assets/clouds031.png" alt="loadFail" />
                <img id="cloud2" src="../../assets/clouds041.png" alt="loadFail" />
                <img id="cloud3" src="../../assets/clouds142.png" alt="loadFail" />
                <img id="cow" src="../../assets/cowCam.png" alt="loadFail" />
                <img id="cloud4" src="../../assets/clouds102.png" alt="loadFail" />
                <img id="cloud5" src="../../assets/clouds121.png" alt="loadFail" />
                <img id="cloud6" src="../../assets/clouds093.png" alt="loadFail" />
                <img id="cloud7" src="../../assets/clouds132.png" alt="loadFail" />
            </div>
            <div className="login">
                <h1 id="header">Login</h1>
                <p id="subtitle">Don't have an account? <span id="SignUp"><a href=" ">Sign Up</a></span></p>
                <div id="E&P">
                    <form action="">
                        <label htmlFor="email">Email Address</label><br>
                        <input type="text" id="email" name="Email" placeholder="Enter your email">
                    </form>
                    <br>
                        <form action="">
                            <label htmlFor="password">Password</label><br>
                            <input type="text" id="password" name="Password" placeholder="Enter your password">
                        </form>
                        <br>
                            <div id="annotation">
                                <span id="commentPh">Log in as Photographers</span> <span id="forgot"><a href=" ">Forgot password?</a></span>
                            </div>
                            <br>
                </div>
                <div id="signButton">
                    <button>
                        Sign In
                    </button>
                </div>
                <div id="orSignGoogle">
                    <hr className="line"> <span id="commentOr">Or sign in with</span> <hr className="line">
                        <button>
                            <span><img src="../../assets/Group.png" alt="LoadFail" /></span> <span id="google">Google</span>
                        </button>
                </div>
            </div>
            <button id="back">
                <img src="../../assets/Back.png" alt="loadFail" />
            </button>
        </div>
    };

};

export default logIn;