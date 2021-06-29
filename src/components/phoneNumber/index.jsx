import React  from 'react';
import "./index.css"
import CircularProgress from '@material-ui/core/CircularProgress';

class PhoneNumber extends React.Component {

    render() {

        const {handleButtonClick, onInputChange, isWrongNumber, isLoading} = this.props
        return (
            <div className="phone_number_container">
                <div className="get_otp_container"><p>Get OTP</p></div>
                <div className="phone_number_text_container"><p>Enter Your Phone Number</p></div>
                <div className="phone_number_input_container">
                    <input className="country_code_input" placeholder="+91"></input>
                    <input className="ph_number_input" onChange={onInputChange}></input>
                    {isWrongNumber && <p style={{color: "red"}}>Please enter registered phone number</p>}
                </div>
                <div className="ph_num_btn_container">
                <button type="button" onClick={handleButtonClick}>
                    {!isLoading ? "Continue" : <CircularProgress color="primary" size="28px"/>}
                </button>
                </div>
            </div>
        )
    }
}

export default PhoneNumber;