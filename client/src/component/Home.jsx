import React from 'react'
import Homebag from "../images/home-bag.png"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="section">
    <div className="div-card-background">
        <div className="picture">
            <img className="RWHCVL-hero-desktop" alt="Rwhcvl hero desktop" src={Homebag} />
        </div>
    </div>
    <div className="div-w">
            <div className="div-card-body">
                <div className="heading">
                    <p className="welcome-to-AIC">
                        Welcome to <br />
                        AIC - Connect
                    </p>
                </div>
                <div className="div-mb">
                    <div className="div">
                        <p className="text-wrapper">Sign in now to chat, meet, call, and collaborate all in one place.</p>
                    </div>
                </div>
                <div className="div-link-group">
                    <div className="div-wrapper">
                        <div className="link-sign-in-and-get">
                            <div className="text-wrapper-2"> <Link to="/auth">Sign in</Link> </div>
                        </div>
                    </div>
                    <div className="div-wrapper">
                        <div className="link-download">
                            <div className="text-wrapper-3"> <Link to="/Dashboard">Join Now</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
  )
}

export default Home;