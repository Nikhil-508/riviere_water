import React, { useState } from 'react'
import { BottomNav } from '../../Components/BottomNav/BottomNav';
import { Assets } from '../../Components/Assets/Assets';
import './Cart.css'


const Cart = () => {

        const [currentScreen, setCurrentScreen] = useState("Cart");
        const [isMobile, setIsMobile] = useState(window.innerWidth <= 870);

  return (
    <div className="cart-container">
      <div className="cart-head">
        <h1>Cart</h1>
      </div>
      <div className="cart-items">
        <img src={Assets.cartIcon} alt="" />
        <h1>Your Cart Is Empty</h1>
        <p>Looks like you haven't added any products to your cart yet.</p>
        <button>Add Products</button>
      </div>

      {isMobile && (
        <BottomNav
          currentScreen={currentScreen}
          setCurrentScreen={setCurrentScreen}
        />
      )}
    </div>
  );
}

export default Cart
