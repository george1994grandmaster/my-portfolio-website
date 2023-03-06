const Products = ({productItems, addToCart}) => {
	return (
		<div className="product-wrapper">
			<div className="container">
				<div className="products-content">
					{productItems.map((productItem) => (
						<div className="product-item" key={productItem.id}>
							<img src={productItem.image} alt={productItem.name}/>
							<div className="item-info">
								<div className="flex-content">
									<h3 className="product-title">
										{productItem.name} 
									</h3>
									<h3 className="product-price">
										GEL:{productItem.price}
									</h3>
								</div>
								<button className="btn add-cart" onClick={() => addToCart(productItem)}>ADD TO CART</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
		
	);
};

export default Products;
