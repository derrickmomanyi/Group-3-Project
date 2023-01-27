import React from "react";
import "../css/Footer.css"

function Footer(){
    return(
        <div className="mainfooter">
            <div className="row">
                <div className="column">
                    <h3>CONTACTS</h3>
                    <ul className="list">
                        <p>Tel: 0712345678</p>
                        <p>Email: thriftshop@gmail.com</p>
                        
                    </ul>
                </div>
                <div className="column">
                    <h3>SOCIAL MEDIA</h3>
                   
                        <div>
                         <i aria-hidden="true" className="twitter icon">@thrift_shop</i>
                      </div>
                        <div>
                        <i aria-hidden="true" className="instagram icon">@thrift_shop</i>
                        </div>
                    
                </div>
            </div>
            <div className="row">
                <p className="col-mn">
                    &copy;{new Date().getFullYear()}    Designer wear INC|     All rights reserved|     Terms of service|Privacy
                </p>
            </div>
        </div>
    )
}
export default Footer;