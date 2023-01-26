import React from "react";

function Footer(){
    return(
        <div className="mainfooter">
            <div className="row">
                <div className="column">
                    <h3>CONTACTS</h3>
                    <ul className="list">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="column">
                    <h3>SOCIAL MEDIA</h3>
                    <ul className="list">
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <p className="col-mn">
                    &copy;{new Date().getFullYear()}Designer wear INC|All rights reserved|Terms of service|Privacy
                </p>
            </div>
        </div>
    )
}
export default Footer;