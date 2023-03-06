import React from "react";
import {Link} from "react-router-dom";

const HeaderComponent = ({quantity}) => {

	return (
		<header className="header">
			<div className="container">
				<div className="header-area">
					<h1 className="title">
						<Link to="/">
							products
						</Link>
					</h1>
					<div className="cart-btn-content">
						<Link to="/cart" className="cart-btn">
							<img src="./img/shopping-cart.png" alt="cart"/>
						</Link>
						<span>
							{quantity > 0 && quantity}
						</span>
					</div>
				</div>
			</div>
		</header>
	)
}

export default HeaderComponent;
