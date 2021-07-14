import React, { useState } from 'react';
import axios from 'axios';

function GetEInvoice(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState('');


  // handleRequest
  const handleRequest = () => {
    setError(null);
    setLoading(true);
    axios.get(`https://service.eu.apiconnect.ibmcloud.com/gws/apigateway/api/c6f67c2cdd95f02d20d7f7b73e93aff66942f7bb0099dffe80f34008ba46e75a/GXabLG/eInvoicing/${23213123}`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-IBM-Client-Id': '2196e515-c1af-4b0f-8c01-d7ade8457b22',
        }
      }).then(response => {
        setLoading(false);
        console.log('responssse', response);
        setData(JSON.stringify(response));
      }).catch(error => {
        setLoading(false);
        if (error.response.status === 401) setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
      });
  }

  return (
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <div class="content">
            <h2 id="overview">Overview</h2>
            <p>API allows caller to get data related to specific e-Invoice </p>

            <h2 id="signature">Signature</h2>
            <p>API is REST based API that takes unique ID of the e-Invoice as URL parameter and returns Json Object contain all data related to this ID.</p>
            <p>Signature:
              <code >{`GET https://service.eu.apiconnect.ibmcloud.com/gws/apigateway/api/c6f67c2cdd95f02d20d7f7b73e93aff66942f7bb0099dffe80f34008ba46e75a/GXabLG/eInvoicing/{id}`}</code></p>

            <h2>Security</h2>
            <table>
              <thead>
                <tr>
                  <th>client_id</th>
                  <th>Type: Client ID</th>
                  <th>value Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>X-IBM-Client-Id</td>
                  <td>apiKey located in header</td>
                  <td>2196e515-c1af-4b0f-8c01-d7ade8457b22</td>
                </tr>
              </tbody>
            </table>

            <h2 id="inputs">Parameters</h2>
            <p>Header</p>
            <table>
              <thead>
                <tr>
                  <th>Accept *optional</th>
                  <th>Content-Type *optional</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>application/json</td>
                  <td>application/json</td>
                </tr>
              </tbody>
            </table>

            <p>Path</p>
            <table>
              <thead>
                <tr>
                  <th>URL parameter *Required</th>
                  <th>Type</th>
                  <th>Description</th>
                  <th>Value example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>id</td>
                  <td>Number</td>
                  <td>Unique ID of the e-Invoice</td>
                  <td>6572802379350016</td>
                </tr>
              </tbody>
            </table>

            <h2 id="outputs">Outputs</h2>
            <h3 id="successful-response">Successful Response</h3>
            <p>API returns HTTP status code <code class="highlighter-rouge">200 OK</code>.</p>
            <p>The Response will be a Json object contain all data related to this e-Invoice</p>
            <table>
              <thead>
                <tr>
                  <th>Retrived data Example (Json Object)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{`
                  {
                    "AccountName":"AntoniosMiladIbraheim",
                    "AccountNumber":123500500,
                    "Installments":100,
                    "InvoiceDate":"2021-07-10",
                    "InvoiceID":1212121,
                    "MonthlyFees":{
                      "MonthlySubscriptionFees":100,
                      "MonthlySubscriptionFeesForServices":150
                      },
                      "OverDueBalanceFromPreviousPeriods":200,
                      "ServiceByCompanyDataTax":300,
                      "ShouldPayBefore":"2021-07-20",
                      "SubTotalBeforeTax":{
                        "VATTableRate":80
                        },
                        "SubTotalIncludingVATTableRate":{
                          "VATGeneralrate":2500
                          },
                          "SubTotalIncludingValueAddedTax":2580,
                          "TotalChargesForThisPeriod":3000,
                          "TotalDueAmount":3500,
                          "UsageCharges":{
                            "DataRomaingUsage":100,
                            "Discounts":10,
                            "InternationalUsage":500,
                            "MobileInternet":200,
                            "MobileUsage":100,
                            "NationalUsage":200,
                            "OtherCharges":90,
                            "RoamingUsage":100
                            }`}</td>
                </tr>
              </tbody>
            </table>


            <h3 id="error-response">Error Response</h3>
            <p>Error situations are reported back by this API through the standard error response.</p>
            <table>
              <thead>
                <tr>
                  <th>HTTP Status Code</th>
                  <th>Error Code</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>401</td>
                  <td>Unauthorized</td>
                  <td>code indicates that the request has not been applied because it lacks valid authentication credentials for the target resource.
                    This status is sent with a WWW-Authenticate header that contains information on how to authorize correctly.</td>
                </tr>
              </tbody>
            </table>

            <h3 id="try-response">Try it</h3>
            <p>Click on Button try it below in the table, to get real response from api.</p>
            <table>
              <thead>
                <tr>
                  <th>Test</th>
                  <th>real response</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                  {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                    <input type="button" value={loading ? 'Loading...' : 'Click here'} onClick={handleRequest} disabled={loading} /> 
                    </td>
                  <td>{data}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}


export default GetEInvoice;