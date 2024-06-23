import React from "react";
import "./Error404.css";

const Error404 = () => {

    return(
      <div className="error-body">
        <div className="error-cont bg-orange flex">
            <div className="error-card bg-white text-dark">
                <h1>Error 404</h1>
                <p>Page not found</p>
                </div>
        </div>
        </div>
    )
}

export default Error404;