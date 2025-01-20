import React, { useState, useEffect } from "react";
import { useCart } from "../CartContext";
import "./Cart.css";
import QR from "../../assets/qr.png";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );
  const [showPayment, setShowPayment] = useState(false);
  const [timer, setTimer] = useState(14 * 60); // Timer in seconds (14 minutes)
  const [showQR, setShowQR] = useState(false);
  const [qrTimer, setQrTimer] = useState(5 * 60); // Timer for QR display
  const [successMessage, setSuccessMessage] = useState("");
  const [showCreditModal, setShowCreditModal] = useState(false);
  const [creditCardDetails, setCreditCardDetails] = useState({
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
  });

  useEffect(() => {
    let countdown;
    if (showPayment) {
      countdown = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else {
      setTimer(14 * 60); // Reset timer when payment options are closed
    }
    return () => clearInterval(countdown); // Cleanup interval
  }, [showPayment]);

  useEffect(() => {
    let qrCountdown;
    if (showQR) {
      qrCountdown = setInterval(() => {
        setQrTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else {
      setQrTimer(5 * 60); // Reset QR timer when closed
    }
    return () => clearInterval(qrCountdown); // Cleanup interval
  }, [showQR]);

  useEffect(() => {
    if (qrTimer === 0) {
      setShowQR(false); // Auto-close QR after 5 minutes
    }
  }, [qrTimer]);

  const handleIncrease = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const handleDecrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * quantities[item.id], 0)
      .toFixed(2);
  };

  const calculateDiscount = () => {
    return cartItems
      .reduce(
        (total, item) =>
          total + (item.price * item.discount * quantities[item.id]) / 100,
        0
      )
      .toFixed(2);
  };

  const calculateDeliveryCharges = () => {
    return calculateTotal() > 1000 ? 0 : 50; // Free delivery for orders above ₹1000
  };

  const calculateFinalAmount = () => {
    return (
      parseFloat(calculateTotal()) -
      parseFloat(calculateDiscount()) +
      calculateDeliveryCharges()
    ).toFixed(2);
  };

  const handlePlaceOrder = () => {
    setShowPayment(true);
  };

  const handleClosePayment = () => {
    setShowPayment(false);
  };

  const handleUPI = () => {
    setShowQR(true);
  };

  const handleCashOnDelivery = () => {
    setSuccessMessage("Your Order is Successfully Placed with Cash on Delivery!");
    setTimeout(() => {
      setSuccessMessage("");
      window.location.reload();
    }, 5000); // Display success message for 5 seconds
  };

  const handleCreditCardSubmit = () => {
    const { cardNumber, cardExpiry, cardCVV } = creditCardDetails;
    if (!cardNumber || !cardExpiry || !cardCVV) {
      alert("Please fill in all the card details.");
      return;
    }
    setSuccessMessage("Your Order is Successfully Placed with Credit/Debit/ATM!");
    setTimeout(() => {
      setSuccessMessage("");
      setShowCreditModal(false); // Close modal
      window.location.reload();
    }, 5000); // Display success message for 5 seconds
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="cart-wrapper">
      {successMessage && (
        <div className="cod-overlay">
          <div className="cod-content">
            <button
              className="close-cod-btn"
              onClick={() => setSuccessMessage("")}
            >
              ✖
            </button>
            <h3>Order Placed Successfully!</h3>
            <p>{successMessage}</p>
          </div>
        </div>
      )}
      <div className="cart-container">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => {
            const discountedPrice =
              item.price - (item.price * item.discount) / 100;
            return (
              <div key={item.id} className="cart-item">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="cart-image"
                />
                <div className="cart-details">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p className="cart-price">
                    <span className="original-price">₹{item.price}</span> &nbsp;
                    <span className="discounted-price">
                      ₹{discountedPrice.toFixed(2)}
                    </span>
                  </p>
                  <p className="cart-discount">
                    Discount: ₹{(item.price * item.discount) / 100}
                  </p>
                  <p className="cart-rating">Rating: {item.rating} ⭐</p>
                  <div className="cart-quantity">
                    <button onClick={() => handleDecrease(item.id)}>-</button>
                    <span>{quantities[item.id]}</span>
                    <button onClick={() => handleIncrease(item.id)}>+</button>
                  </div>
                  <div className="cart-buttons">
                    <button
                      className="buy-now-btn"
                      onClick={() =>
                        alert(`Buying ${quantities[item.id]} of ${item.title}`)
                      }
                    >
                      Buy Now
                    </button>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="cart-summary">
        <h2>Price Details</h2>
        <div className="summary-item">
          <span>Price ({cartItems.length} items)</span>
          <span>₹{calculateTotal()}</span>
        </div>
        <div className="summary-item">
          <span>Discount</span>
          <span>-₹{calculateDiscount()}</span>
        </div>
        <div className="summary-item">
          <span>Buy more & save more</span>
          <span>-</span>
        </div>
        <div className="summary-item">
          <span>Coupons for you</span>
          <span>-</span>
        </div>
        <div className="summary-item">
          <span>Delivery Charges</span>
          <span>₹{calculateDeliveryCharges()}</span>
        </div>
        <hr />
        <div className="summary-item total">
          <span>Total Amount</span>
          <span>₹{calculateFinalAmount()}</span>
        </div>
        {!showPayment && (
          <button className="place-order-btn" onClick={handlePlaceOrder}>
            Place Order
          </button>
        )}
        {showPayment && (
          <div className="payment-options active">
            <button className="close-btn" onClick={handleClosePayment}>
              ✖
            </button>
            <h2>Payment Options</h2>
            <div className="payment-button">
              <button onClick={handleUPI}>UPI</button>
              <button onClick={() => setShowCreditModal(true)}>
                Credit/Debit/ATM
              </button>
              <button onClick={handleCashOnDelivery}>Cash on Delivery</button>
            </div>
          </div>
        )}
      </div>
      {showQR && (
        <div className="qr-overlay">
          <div className="qr-content">
            <button className="close-qr-btn" onClick={() => setShowQR(false)}>
              ✖
            </button>
            <img src={QR} alt="QR Code" />
            <p>Complete your payment within {formatTime(qrTimer)}.</p>
          </div>
        </div>
      )}
      {showCreditModal && (
        <div className="credit-modal-overlay">
          <div className="credit-modal-content">
            <button
              className="close-modal-btn"
              onClick={() => setShowCreditModal(false)}
            >
              ✖
            </button>
            <h2>Enter Credit/Debit/ATM Details</h2>
            <form>
              <input
                type="text"
                placeholder="Card Number"
                value={creditCardDetails.cardNumber}
                onChange={(e) =>
                  setCreditCardDetails({
                    ...creditCardDetails,
                    cardNumber: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="Expiry Date (MM/YY)"
                value={creditCardDetails.cardExpiry}
                onChange={(e) =>
                  setCreditCardDetails({
                    ...creditCardDetails,
                    cardExpiry: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="CVV"
                value={creditCardDetails.cardCVV}
                onChange={(e) =>
                  setCreditCardDetails({
                    ...creditCardDetails,
                    cardCVV: e.target.value,
                  })
                }
              />
              <button
                type="button"
                className="submit-btn"
                onClick={handleCreditCardSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      <footer className="footer2">
        <p>© {new Date().getFullYear()}, Bmarket.com, Inc. or its affiliates</p>
      </footer>
    </div>
  );
};

export default Cart;
