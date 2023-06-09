import React, {useEffect, useState} from 'react';
import OtpInput from 'react18-input-otp';
import {VerifyApi, ResendVerifyCodeApi} from "../../api";
import {VerifyCodeStyles, Count} from "./verify-code.styles";
import {ChangeTitle} from "../../middleware";
import {signFailure, signSuccess} from "../../action/signup-action";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import NewPassword from "../new-password";
import {Button} from "../../components";
import {toast} from "react-toastify";

export default function VerifyCode({phone, type, navigateTo, newPhone}) {

    ChangeTitle("Verify your phone number")

    localStorage.setItem("phone_number", phone)

    const [verified, setVerified] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [otp, setOtp] = useState('');

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleChange = (enteredOtp) => {
        setOtp(enteredOtp);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setIsLoading(true)
            const response = await VerifyApi({phone: type === "change_phone" ? phone : "+998" + phone, new_phone: newPhone ?  newPhone : null, code: otp, type: type})
            dispatch(signSuccess(response.data))
            navigate(navigateTo)
            setVerified(true)
            if(type === "change_phone") {
                toast.success("Phone number successfully changed")
            }
            localStorage.removeItem("oldPhone")
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            setVerified(false)
            dispatch(signFailure(error))
            toast.error("Incorrect Code")
        }
    }

    const [countdown, setCountdown] = useState(60);

    useEffect(() => {
        let intervalId = null;
        if (countdown > 0) {
            intervalId = setInterval(() => {
                setCountdown(countdown - 1);
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [countdown]);

    const handleResendCode = async (e) => {
        e.preventDefault()
        setCountdown(60);
        try {
            const response = await ResendVerifyCodeApi({phone: type === "change_phone" ? phone : "+998" + phone, type: "resend"})
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <VerifyCodeStyles.Form onSubmit={handleSubmit}>
                <h1>Confirm the SMS code received on your phone number in <Count>{countdown}s</Count></h1>
                <OtpInput
                    id="otp-input"
                    autoComplete="off"
                    onChange={handleChange}
                    shouldAutoFocus
                    value={otp}
                    separator={<span>-</span>}
                    numInputs={6}
                />
                <Button type={"button"} className="resend">{countdown === 0 && (
                        <p onClick={handleResendCode}>
                            <i className='fa-solid fa-repeat'></i> Resend Code
                        </p>
                    )}</Button>
                <Button type="submit" loading={isLoading && true}>Send</Button>
            </VerifyCodeStyles.Form>
            {verified === true && type === "password_reset" &&
                <NewPassword/>
            }
        </>
    )
}
