import React, { useRef } from "react";
import "./OtpVerificationPage.css";
import { Assets } from "../../Components/Assets/Assets";

const OtpVerificationPage = () => {
  const inputRefs = useRef([]);

  const handleInputChange = (index, e) => {
    const value = e.target.value;
    if (value.length === 1 && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <>
      <video autoPlay muted loop className="authvideo">
        <source src={Assets.authBackground} type="video/mp4" />
      </video>
      <div className="otp-verification-page">
        <div className="otp-content">
          <div className="otp-head">
            <h1>
              <span>Please enter</span> OTP
            </h1>
            <p>Sent to +971 2-8765432</p>
          </div>
          <form className="otp-form">
            <div className="otp-fields">
              {Array.from({ length: 6 }).map((_, index) => (
                <input
                  key={index}
                  type="number"
                  maxLength="1"
                  max={1}
                  ref={(el) => (inputRefs.current[index] = el)}
                  onChange={(e) => handleInputChange(index, e)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="otp-input"
                />
              ))}
            </div>
            <button type="submit" className="otp-submit-btn">
              Verify
            </button>
          </form>
          <p className="resend-otp">
            <u>Resend OTP</u>
          </p>
        </div>
      </div>
    </>
  );
};

export default OtpVerificationPage;
