import React, { useState } from 'react'

const InputBox = () => {
    const [inputText, setInputText] = useState("")
    const [quantity, setQuantity] = useState()

    const handleClick = () => {
        alert(inputText)
        setInputText("")
    }
    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    }
    return (
        <div>
            <h3>Add Products...</h3>
            <br />
            <input type="text"
                placeholder='Type...'
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <input type="number"
                placeholder='Enter Quantity...'
                value={quantity}
                onChange={handleQuantityChange}
            />
            <button
                onClick={handleClick}
            >Click</button>
        </div>
    )
}

export default InputBox