import React, { useEffect, useState } from 'react';
import "./index.css"
import { useParams } from 'react-router';
import Timer from '../timer';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';

const OtpScreen = () => {

    let history = useHistory();
    const { phId } = useParams()

    const [otp, setOtp] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setOtp("1234")
        }, 3000)
    }, [])

    const onSumbitOtp = () => {
        setIsLoading(true)
        axios.post("https://testa2.aisle.co/V1/users/verify_otp", {
            number: `+91${phId}`,
            otp: otp
        })
        .then(({status}) => {
            if(status) {
                setIsLoading(false)
                history.push("/")  
            }
        })
    }
    return (
        <div className="otp_screen_container">
            <div className="otp_screen_header"><p>{phId}</p></div>
            <div className="otp_screen_sub">
                <p>Enter The OTP</p>
                <i class="fas fa-pen"></i>
            </div>
            <div className="otp_screen_input_container">
                <input className="otp_screen_input" value={otp}></input>
                <span className="timer_container"><Timer/></span>
            </div>
            <div className="otp_screen_btn_container">
                <button type="button" onClick={onSumbitOtp}>
                {!isLoading ? "Continue" : <CircularProgress color="primary" size="28px"/>}
                </button>
            </div>
        </div>
    )
}

export default OtpScreen;