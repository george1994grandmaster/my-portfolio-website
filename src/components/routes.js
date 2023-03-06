import Products from "./products";
import Cart from "./cart";
import { Route, Routes } from 'react-router-dom';

const Navigator = ({productItems, addToCart, cartItems, removeFromCart, increase, decrease, clearCart}) => {
	return (
	<div>
		<Routes>
			<Route path="/" exact element={<Products productItems = {productItems} addToCart={addToCart} />}></Route>
			<Route path="/cart" exact element={<Cart cartItems = {cartItems} removeFromCart={removeFromCart}
			 increase={increase} decrease={decrease} clearCart={clearCart}/>}></Route>
		</Routes>
	</div>
	);
};

export default Navigator;
