import React from "react";
import "./Phone.css";
import Flag from "./flag.png";
import PhoneInput from "react-phone-input-2";
import {useState} from "react";
import 'react-phone-input-2/lib/style.css'

function Phone() {

  const [phone, setPhone] = useState("");
  
  const handleChange = (phone) => {
    setPhone(phone);
  }

  return (
    <>
    <div className="container">
      <div className="container-input">
        <label htmlFor="phone">Phone Number</label>
        <PhoneInput
          country={'in'}
          value={phone}
          onChange={handleChange}
          autoFocus={true}
        />
      </div>
    </div>
    </>
  );
}

export default Phone;
