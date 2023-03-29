import { useState } from "react";
import "./Payment.css";

function Payment({ price }) {
  const [pay, setPay] = useState(false);
  const [payment, setPayment] = useState(true);

  return (
    <>
      {payment ? (
        <>
          <div className="total">
            <span>Total Transport charge</span>
            <span>Rs - {price}</span>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <div className="payment-cont">
              <h2 style={{ margin: "10px", textDecoration: "underline" }}>
                Select a Payment method
              </h2>
              <div className="payment-upi">
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/upi-icon.png"
                  alt="UPI "
                  width="40px"
                  height="40px"
                  style={{ marginLeft: "10px" }}
                />
                <p style={{ padding: "10px" }}>UPI Id</p>
                <input
                  type="text"
                  style={{ height: "24px", marginTop: "10px", width: "64%" }}
                />
              </div>
              <div className="payment-card">
                <img
                  src="data:image/png;base64,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"
                  alt="UPI "
                  width="40px"
                  height="40px"
                  style={{ marginLeft: "10px" }}
                />
                <p style={{ padding: "10px" }}>Card Payment</p>
              </div>
              <div className="payment-card-child">
                <div>
                  <p>Card holder name</p>
                  <input type="text" className="payment-card-input" />
                  <p>Card Number</p>
                  <input type="text" className="payment-card-input" />
                </div>
                <div>
                  <p>Expiry date</p>
                  <input type="date" className="payment-card-input" />
                  <p>CVV</p>
                  <input type="password" className="payment-card-input" />
                </div>
              </div>
              <h2 style={{ cursor: "pointer", marginTop: "10px" }}>
                Cash In Delivery
              </h2>
              <button
              onClick={()=>setPayment(false)}
                style={{
                  borderRadius: "10px",
                  padding: "10px",
                  backgroundColor: "yellow",
                  color: "black",
                }}
              >
                Payment
              </button>
            </div>
          </div>
        </>
      ) : (
        <div>Thank You for payment!</div>
      )}
    </>
  );
}

export default Payment;
