import React from 'react';
import myImage from "../images/logo.jpeg"
import Exit from "../images/exit_to_app-24px.svg.svg"
import Video from "../images/videocam-24px.svg.svg";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="dialog-navigation">
        <div className="div-glue-header-tier">
          <div className="div-glue-header">
            <div className="div-primary-meet-cta-wrapper">
              <div className="div-primary-meet-cta">
                <div className="div-glue-header-cta">
                  <div className="span-cta-wrapper">
                    <div className="link">
                      <div className="text-wrapper">
                      <Link to="/auth" className="link">Sign in</Link>
                      </div>
                    </div>
                  </div>
                  <div className="div-join-meeting-wrapper">
                    <div className="div-join-meeting">
                      <div className="button-wrapper">
                        <button className="button">
                          <img className="img-margin" alt="Img margin" src={Exit} />
                          <div className="span-cta-text">
                            <div className="div">Join a meeting</div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="link-wrapper">
                    <div className="div-wrapper">
                      <button className="button-2">
                        <img className="img" alt="Img margin" src={Video} />
                        <div className="span-cta-text-2">
                          <div className="text-wrapper-2"><Link to="/dashboard">Start a meeting</Link></div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-glue-header-lock-wrapper">
            <div className="div-glue-header-lock">
              <div className="link-2">
                <img className="zoomnewlogo" alt="AIC-logo" src={myImage} />
                <div className="webname">AIC - Connect</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
