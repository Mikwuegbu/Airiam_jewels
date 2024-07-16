import { useContext } from 'react';
import { ProductContext } from '../Components/ProductProvider';
import { RiDeleteBin5Line } from 'react-icons/ri';

const CartPage = () => {
	const cartItems = useContext(ProductContext);
	const products = cartItems?.cartItems;
	const dispatch = cartItems?.dispatch;
	return (
		<div className="px-6 py-10 space-y-6">
			<h1 className="font-MerriWeather font-normal text-3xl">Cart</h1>
			<div>
				{!products?.length ? (
					<p className="font-MerriWeather font-normal text-sm text-gray-500">
						Cart is empty. Add some items to continue shopping.
					</p>
				) : (
					<div>
						{products.map((products) => (
							<div key={products.id} className="flex justify-center">
								<img
									src={products.image}
									alt={products.image}
									className="w-[79px] h-[146px]"
								/>
								<div>
									<h2>{products.name}</h2>
									<div className="flex space-x-4">
										<button>-</button>
										<p>2</p>
										<button>+</button>
									</div>
									<div>In stock</div>
									<button className="flex space-x-2">
										<RiDeleteBin5Line size={24} />
										<p>Remove</p>
									</button>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default CartPage;
