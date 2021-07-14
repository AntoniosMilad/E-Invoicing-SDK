import React, { useState } from 'react';
import axios from 'axios';

function PostEInvoice(props) {
  const [loading, setLoading] = useState(false);
  const InvoiceID = useFormInput('');
  const AccountNumber = useFormInput('');
  const AccountName = useFormInput('');
  const InvoiceDate = useFormInput('');
  const MonthlySubscriptionFees = useFormInput('');
  const MonthlySubscriptionFeesForServices = useFormInput('');
  const MobileUsage = useFormInput('');
  const NationalUsage = useFormInput('');
  const InternationalUsage = useFormInput('');
  const RoamingUsage = useFormInput('');
  const MobileInternet = useFormInput('');
  const DataRomaingUsage = useFormInput('');
  const OtherCharges = useFormInput('');
  const Discounts = useFormInput('');
  const VATTableRate = useFormInput('');
  const VATGeneralrate = useFormInput('');
  const SubTotalIncludingValueAddedTax = useFormInput('');
  const Installments = useFormInput('');
  const ServiceByCompanyDataTax = useFormInput('');
  const TotalChargesForThisPeriod = useFormInput('');
  const OverDueBalanceFromPreviousPeriods = useFormInput('');
  const TotalDueAmount = useFormInput('');
  const ShouldPayBefore = useFormInput('');
  const [error, setError] = useState(null);
  const [data, setData] = useState('');


  // handle Request fun
  const handleRequest = () => {
    setError(null);
    setLoading(true);
    axios({
      method: 'post',
      url: 'https://service.eu.apiconnect.ibmcloud.com/gws/apigateway/api/c6f67c2cdd95f02d20d7f7b73e93aff66942f7bb0099dffe80f34008ba46e75a/GXabLG/eInvoicing',
      params: {
        "InvoiceID": InvoiceID.value,
        "AccountNumber": AccountNumber.value,
        "AccountName": AccountName.value,
        "InvoiceDate": InvoiceDate.value,
        "MonthlyFees": {
          "MonthlySubscriptionFees": MonthlySubscriptionFees.value,
          "MonthlySubscriptionFeesForServices": MonthlySubscriptionFeesForServices.value,
        },
        "UsageCharges": {
          "MobileUsage": MobileUsage.value,
          "NationalUsage": NationalUsage.value,
          "InternationalUsage": InternationalUsage.value,
          "RoamingUsage": RoamingUsage.value,
          "MobileInternet": MobileInternet.value,
          "DataRomaingUsage": DataRomaingUsage.value,
          "OtherCharges": OtherCharges.value,
          "Discounts": Discounts.value,
        },
        "SubTotalBeforeTax": {
          "VATTableRate": VATTableRate.value,
        },
        "SubTotalIncludingVATTableRate": {
          "VATGeneralrate": VATGeneralrate.value,
        },
        "SubTotalIncludingValueAddedTax": SubTotalIncludingValueAddedTax.value,
        "Installments": Installments.value,
        "ServiceByCompanyDataTax": ServiceByCompanyDataTax.value,
        "TotalChargesForThisPeriod": TotalChargesForThisPeriod.value,
        "OverDueBalanceFromPreviousPeriods": OverDueBalanceFromPreviousPeriods.value,
        "TotalDueAmount": TotalDueAmount.value,
        "ShouldPayBefore": ShouldPayBefore.value,
      },
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
            <p>API allows caller to Post request that create e-Invoice with specific data </p>

            <h2 id="signature">Signature</h2>
            <p>API is REST based API that takes specific data for the e-Invoice as body Json object and returns with values success created or not.</p>

            <p>Signature:
              <code>{`POST https://service.eu.apiconnect.ibmcloud.com/gws/apigateway/api/c6f67c2cdd95f02d20d7f7b73e93aff66942f7bb0099dffe80f34008ba46e75a/GXabLG/eInvoicing`}</code></p>

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

            <h2>Parameters</h2>
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

            <p>Body</p>
            <table>
              <thead>
                <tr>
                  <th>data *Required</th>
                  <th>Type</th>
                  <th>Description</th>
                  <th>Value example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>InvoiceID</td>
                  <td>Number</td>
                  <td>Unique ID of the e-Invoice</td>
                  <td>6572802379350</td>
                </tr>
                <tr>
                  <td>AccountNumber</td>
                  <td>Number</td>
                  <td>Number of the e-Invoice</td>
                  <td>657280350016</td>
                </tr>
                <tr>
                  <td>AccountName</td>
                  <td>String or number</td>
                  <td>Name of the owner of account</td>
                  <td>Antonios Milad</td>
                </tr>
                <tr>
                  <td>InvoiceDate</td>
                  <td>Date</td>
                  <td>date of the e-Invoice</td>
                  <td>2021-07-9</td>
                </tr>
                <tr>
                  <td>Installments</td>
                  <td>Number</td>
                  <td>Installments exist</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>MonthlySubscriptionFees</td>
                  <td>Number</td>
                  <td>Monthly Subscription Fees</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>MonthlySubscriptionFeesForServices</td>
                  <td>Number</td>
                  <td>Monthly Subscription Fees For Services</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>OverDueBalanceFromPreviousPeriods</td>
                  <td>Number</td>
                  <td>Over Due Balance From Previous Periods</td>
                  <td>2150</td>
                </tr>


                <tr>
                  <td>MobileUsage</td>
                  <td>Number</td>
                  <td>Mobile Usage</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>NationalUsage</td>
                  <td>Number</td>
                  <td>National Usage</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>InternationalUsage</td>
                  <td>Number</td>
                  <td>International Usage</td>
                  <td>4000</td>
                </tr>
                <tr>
                  <td>RoamingUsage</td>
                  <td>Number</td>
                  <td>Roaming Usage</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>DataRomaingUsage</td>
                  <td>Number</td>
                  <td>Data Romaing Usage</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>OtherCharges</td>
                  <td>Number</td>
                  <td>OtherCharges</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>Discounts</td>
                  <td>Number</td>
                  <td>Discounts</td>
                  <td>50</td>
                </tr>

                <tr>
                  <td>VATTableRate</td>
                  <td>Number</td>
                  <td>VAT Table Rate</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td>VATGeneralrate</td>
                  <td>Number</td>
                  <td>VAT General rate</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>SubTotalIncludingValueAddedTax</td>
                  <td>Number</td>
                  <td>Sub Total Including Value Added Tax</td>
                  <td>400</td>
                </tr>
                <tr>
                  <td>ServiceByCompanyDataTax</td>
                  <td>Number</td>
                  <td>Service By Company Data Tax</td>
                  <td>60</td>
                </tr>
                <tr>
                  <td>TotalChargesForThisPeriod</td>
                  <td>Number</td>
                  <td>Discounts</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td>OverDueBalanceFromPreviousPeriods</td>
                  <td>Number</td>
                  <td>Over Due Balance From Previous Periods</td>
                  <td>2000</td>
                </tr>

                <tr>
                  <td>TotalDueAmount</td>
                  <td>Number</td>
                  <td>Total Due Amount</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>ShouldPayBefore</td>
                  <td>Date</td>
                  <td>ShouldPayBefore</td>
                  <td>2021-10-8</td>
                </tr>
              </tbody>
            </table>

            <h2 id="outputs">Outputs</h2>

            <h3 id="successful-response">Successful Response</h3>

            <p>API returns HTTP status code <code>201 Created</code>.</p>

            <p>The Response will be a Json object contain some data related to entered e-Invoice</p>

            <table>
              <thead>
                <tr>
                  <th>Retrived data Example (Json Object)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{`
                 {"AccountName":"5018812677435445",
                 "AccountNumber":81.04689976,"InvoiceID":93.94031589,
                 "ShouldPayBefore":"2015-08-01T13:31:58.223Z",
                 "TotalDueAmount":17.27684904}`}</td>
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
            <p>Here can test Api online , to get real response depend on your data from IBM App Coonnect api.</p>
            <table>
              <thead>
                <tr>
                  <th>API Test Form</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div>
                      Invoice Required Information<br /><br />
                      <div>
                        Invoice ID<br />
                        <input type="InvoiceID" {...InvoiceID} />
                      </div>
                      <div style={{ marginTop: 10 }}>
                        Account Number<br />
                        <input type="AccountNumber" {...AccountNumber} />
                      </div>

                      <div style={{ marginTop: 10 }}>
                        Account Name<br />
                        <input type="AccountName" {...AccountName} />
                      </div>

                      <div style={{ marginTop: 10 }}>
                        Invoice Date<br />
                        <input type="InvoiceDate" {...InvoiceDate} />
                      </div>

                      {/* MonthlyFees */}
                      <div style={{ marginTop: 10 }}>Monthly Fees<br />
                        Monthly Subscription Fees<br />
                        <input type="MonthlySubscriptionFees" {...MonthlySubscriptionFees} />
                      </div>

                      <div style={{ marginTop: 10 }}>
                        Monthly Subscription Fees For Services<br />
                        <input type="MonthlySubscriptionFeesForServices" {...MonthlySubscriptionFeesForServices} />
                      </div>

                      {/* UsageCharges */}
                      <div style={{ marginTop: 10 }}>Usage Charges<br />
                        Mobile Usage<br />
                        <input type="MobileUsage" {...MobileUsage} />
                      </div>

                      <div style={{ marginTop: 10 }}>
                        National Usage<br />
                        <input type="NationalUsage" {...NationalUsage} />
                      </div>

                      <div style={{ marginTop: 10 }}>
                        International Usage<br />
                        <input type="InternationalUsage" {...InternationalUsage} />
                      </div>

                      <div style={{ marginTop: 10 }}>
                        Roaming Usage<br />
                        <input type="RoamingUsage" {...RoamingUsage} />
                      </div>

                      <div style={{ marginTop: 10 }}>
                        Mobile Internet<br />
                        <input type="MobileInternet" {...MobileInternet} />
                      </div>

                      <div style={{ marginTop: 10 }}>
                        Data Romaing Usage<br />
                        <input type="DataRomaingUsage" {...DataRomaingUsage} />
                      </div>

                      <div style={{ marginTop: 10 }}>
                        Other Charges<br />
                        <input type="OtherCharges" {...OtherCharges} />
                      </div>

                      <div style={{ marginTop: 10 }}>
                        Discounts<br />
                        <input type="Discounts" {...Discounts} />
                      </div>

                      {/* SubTotalBeforeTax */}
                      <div style={{ marginTop: 10 }}>Sub Total Before Tax<br />
                        VAT Table Rate<br />
                        <input type="VATTableRate" {...VATTableRate} />
                      </div>

                      {/* SubTotalIncludingVATTableRate */}
                      <div style={{ marginTop: 10 }}>Sub Total Including VAT Table Rate<br />
                        VAT General rate<br />
                        <input type="VATGeneralrate" {...VATGeneralrate} />
                      </div>

                      <div style={{ marginTop: 10 }}>
                        Sub Total Including Value Added Tax<br />
                        <input type="SubTotalIncludingValueAddedTax" {...SubTotalIncludingValueAddedTax} />
                      </div>

                      <div style={{ marginTop: 10 }}>
                        Installments<br />
                        <input type="Installments" {...Installments} />
                      </div>

                      <div style={{ marginTop: 10 }}>
                        Service By Company Data Tax<br />
                        <input type="ServiceByCompanyDataTax" {...ServiceByCompanyDataTax} />
                      </div>

                      <div style={{ marginTop: 10 }}>
                        Total Charges For This Period<br />
                        <input type="TotalChargesForThisPeriod" {...TotalChargesForThisPeriod} />
                      </div>

                      <div style={{ marginTop: 10 }}>
                        Over Due Balance From Previous Periods<br />
                        <input type="OverDueBalanceFromPreviousPeriods" {...OverDueBalanceFromPreviousPeriods} />
                      </div>

                      <div style={{ marginTop: 10 }}>
                        Total Due Amount<br />
                        <input type="TotalDueAmount" {...TotalDueAmount} />
                      </div>

                      <div style={{ marginTop: 10 }}>
                        Should Pay Before<br />
                        <input type="ShouldPayBefore" {...ShouldPayBefore} />
                      </div>


                      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                      <input type="button" value={loading ? 'Loading...' : 'Click here'} onClick={handleRequest} disabled={loading} /><br />
                    </div></td>
                </tr>
              </tbody>
            </table>

            <table>
              <thead>
                <tr>
                  <th>real response (JSon object)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
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

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default PostEInvoice;