import React from 'react';
import { Link } from "react-router-dom";


function Apis(props) {


  return (
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <div class="content">
            <h1>Application Programming Interface (API)</h1>
            <p >Definition of the API that taxpayer systems can leverage to integrate with e-Invoicing solution</p>
            <div>
              <Link to="/GetEInvoice">Get E-Invoice</Link>
            </div>
            <br />
            <div>
              <Link to="/PostEInvoice" >Post E-Invoice</Link>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
}


export default Apis;