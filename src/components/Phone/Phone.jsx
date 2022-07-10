import React from "react";
import "./Phone.css";
import Flag from "./flag.png";

function Phone() {
  return (
    <>
    <div className="container">
    <div className="container-input">
        <div className="label">   
            <label htmlFor="phone-input">Phone Number</label>
        </div>
        <div className="phone">
          <div className="country-dropdown">
            <select name="country" id="country">
                <option id="india" value="+91">+91</option>
            </select>
          </div>
          <div className="number-input">
            <input type="number" id="phone-input" maxLength="11" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Phone;
