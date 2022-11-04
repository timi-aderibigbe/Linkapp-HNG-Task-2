import React from "react";
import zuriLogo from '../assets/zuri-logo.png'
import ingressiveLogo from '../assets/ingressive-logo.png'

export default function Footer() {
    return(
        <footer className="justify-content-center justify-content-sm-between">
            <div className="col-12 col-sm">
                <img  src={zuriLogo} alt="Zuri Internship Logo" />
            </div>
            <div className="col-12 col-sm">
                <div className="footer-text">HNG Internship 9 Frontend Task 2.</div>
            </div>
          <div className="col-12 col-sm">
              <img  src={ingressiveLogo} alt="I4G Logo" />
          </div>
        </footer>
    )
}