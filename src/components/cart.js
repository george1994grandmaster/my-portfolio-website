const Cart = ({cartItems, removeFromCart, increase, decrease, clearCart}) => {
  let total = 0;
	
  cartItems.forEach((item) => {
    total = total + item.price;
  })
	
	return (
		<div className="cart-wrapper">
			<div className="container">
				<div className={total > 0 ? "cart-content-orange": "cart-content-transparent"}>
					{cartItems.map((cartItem) => (
						<div className="cart-item" key={cartItem.id}>
							<div className="box">
								<img src={cartItem.image} alt={cartItem.name}/>
								<div className="item-info">
									<div className="flex-content">
										<h3 className="cart-title">
											{cartItem.name} 
										</h3>
										<h3 className="cart-price">
											GEL:{'$' + cartItem.price}
										</h3>
										<h3 className="cart-price">
											quantity:{cartItem.quantity}
										</h3>
									</div>
									<div className="cart-icons-container">
										<div>
											<button className="cart-icon-btn" onClick={() => increase(cartItem)}>&#43;</button>
											<button className="cart-icon-btn" onClick={() => decrease(cartItem)}>&#45;</button>
										</div>
										<div className="btn-remove-container">
											<button onClick={() => removeFromCart(cartItem)}>
												<img src="./img/delete.png" alt="delete"/>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className={total > 0 ? "total-primary":"total-hidden"}>
					<div className="cart-space-bottom">
						<h3>{ total > 0 && 'AMOUNT: $' +  total}</h3>
						<div className="d-flex ai-center">
							<span>CLEAR CART:</span>
							<button className="cart-btn" onClick={() => clearCart()} >
								<img src="./img/delete.png" alt="delete"/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	) 
}

export default Cart;
