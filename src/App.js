import './App.css';
import data from "./data";
import HeaderComponent from "./components/header";
import Navigator from "./components/routes";
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
	const { productItems } = data;
	const[cartItems, setCartItems] = useState([]);
	const[quantity, setQuantity] = useState(0);
	
	const addToCart = (selectedItem) => {
		let productExist = cartItems.find((item) => item.id === selectedItem.id);
		if(!productExist) {
			setCartItems(oldArr => [...oldArr, {...selectedItem, quantity: 1, initialPrice: selectedItem.price}]);
			setQuantity(quantity + 1);
		}else {
			if(productExist.quantity < 10) {
				setCartItems(cartItems.map((cartItem) => cartItem.id === selectedItem.id ?
				{...productExist, quantity: productExist.quantity + 1, price: productExist.price + productExist.initialPrice} :cartItem));
				setQuantity(quantity + 1);
			}
		}
	}

	const removeFromCart = (selectedItem) => {
		setCartItems(cartItems.filter((item) => item.id !== selectedItem.id));
		setQuantity(quantity - selectedItem.quantity);
	}

	const increase = (selectedItem) => {
		let productExist = cartItems.find((item) => item.id === selectedItem.id);
		if(productExist.quantity < 10) {
			setCartItems(cartItems.map((cartItem) => cartItem.id === selectedItem.id ?
			{...selectedItem, quantity: productExist.quantity + 1, price: productExist.price + productExist.initialPrice} :cartItem));
			setQuantity(quantity + 1);
		}
	}

	const decrease = (selectedItem) => {
		let productExist = cartItems.find((item) => item.id === selectedItem.id);
		if(productExist.quantity === 1) {
			setCartItems(cartItems.filter((item) => item.id !== selectedItem.id));
		}else{
			setCartItems(cartItems.map((cartItem) => cartItem.id === selectedItem.id ?
			{...selectedItem, quantity: productExist.quantity - 1, price: selectedItem.price - selectedItem.initialPrice} :cartItem));
		}
		setQuantity(quantity - 1);
	}

	const clearCart = () => {
		setCartItems([]);
		setQuantity(0);
	}

	return (
		<div>
			<Router>
				<HeaderComponent quantity={quantity}/>	
				<Navigator clearCart={clearCart} increase={increase} decrease={decrease}
				 productItems={productItems} cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart}/>
			</Router>
		</div>
	)
};

export default App;
