import React, { useState } from 'react';
import PhoneNumber from '../phoneNumber';
import { useHistory } from "react-router-dom";
import axios from 'axios';


const Profile = () => {

    let history = useHistory();

    const [phoneNumber, setPhoneNumber] = useState(null);
    const [isWrongNumber, setisWrongNumber] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const fetchPhoneNumberStatus = () => {
      axios.post("https://testa2.aisle.co/V1/users/phone_number_login", {
        number: `+91${phoneNumber}`
      })
      .then(({data: {status}}) => {
         if(status) {
           setIsLoading(false)
           history.push(`/profile/phone-number/otp/${phoneNumber}`)  
         }
         else {
          setIsLoading(false)
          setisWrongNumber(true)
         }
      })
    }

    const handleButtonClick = () => {
        setIsLoading(true)
        fetchPhoneNumberStatus();
    }

    const onInputChange = ({ target: { value } }) => {
        setPhoneNumber(value)
    }
    return (
        <PhoneNumber
            handleButtonClick={handleButtonClick}
            onInputChange={onInputChange}
            phoneNumber
            isWrongNumber={isWrongNumber}
            isLoading={isLoading}
        />
    )
}

export default Profile;