import React from 'react'

const CartItems = () => {
    return (
        <>
            <br />
            <div className='cart-footer'>
                <div className='cart-item'>
                    <div>10</div>
                    <div>2</div>
                    <div>
                        <button>+</button>
                        1
                        <button>-</button>
                    </div>
                    <div>20</div>
                    <button>Remove</button>
                </div>
            </div>

        </>
    )
}

export default CartItems