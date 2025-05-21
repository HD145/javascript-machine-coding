import React, { useEffect, useRef, useState } from 'react'

const OtpScreen = () => {

    const NUMBER_OF_DIGITS = 5
    const [state, setState] = useState(new Array(NUMBER_OF_DIGITS).fill(""))

    const inputArrs = useRef([]);

    useEffect(() => {
        inputArrs.current[0]?.focus();
    }, [])

    const handleChange = (newVal, id) => {
        const val = newVal.trim();
        if (val === "") return;
        if (isNaN(val)) return;
        const newArray = [...state];
        newArray[id] = val.slice(-1);
        setState(newArray)
        inputArrs.current[id + 1]?.focus();
    }

    const handleBackspace = (e, id) => {
        if (e.key === "Backspace") {
            const newArr = [...state];
            newArr[id] = "";
            setState(newArr);
            inputArrs.current[id - 1]?.focus();
        }
    }

    const handlePaste = (e) => {
        e.preventDefault();

        const pastedData = e.clipboardData.getData('text'); 

        const digits = pastedData.replace(/\D/g, '').slice(0, NUMBER_OF_DIGITS);
        const newState = [...state];
        for (let j = 0; j < digits.length; j++) {
            newState[j] = digits[j];
            inputArrs.current[j].value = digits[j];
        }
        setState(newState);

        const nextIndex = digits.length < NUMBER_OF_DIGITS ? digits.length : NUMBER_OF_DIGITS - 1;
        inputArrs.current[nextIndex]?.focus();
    }

    return (
        <div className='main'>
            <h2>OTP Generator</h2>
            <div className='boxes'>
            {
                state.map((item, i) => (
                    <div className='box'>
                        <input key={i} ref={(el) => inputArrs.current[i] = el} type='text' onChange={(e) => handleChange(e.target.value, i)} value={item} onKeyDown={(e) => handleBackspace(e, i)} onPaste={(e) => handlePaste(e)} />
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default OtpScreen