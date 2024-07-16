import { useContext } from 'react';
import { heroBg } from '../assets/icons';
import { filledStar, grayStar } from '../assets/icons';
import data from '../data.json';
import { ProductContext } from '../Components/ProductProvider';

//rating icons
const renderRating = (rating: number): JSX.Element[] => {
	const filledStars = Array.from({ length: rating }, (_, index) => (
		<img
			key={`filled-${index}`}
			src={filledStar}
			alt="filled star"
			className="w-4 h-4"
		/>
	));
	const unfilledStars = Array.from({ length: 5 - rating }, (_, index) => (
		<img
			key={`unfilled-${index}`}
			src={grayStar}
			alt="unfilled star"
			className="w-4 h-4"
		/>
	));
	return [...filledStars, ...unfilledStars];
};

const Home = () => {
	const cartSelections = useContext(ProductContext);
	const dispatch = cartSelections?.dispatch;

	return (
		<div className="bg-[#FFF8E7]">
			<div className="grid justify-center lg:justify-between place-items-center lg:text-left text-center px-6 lg:px-20 gap-y-3 lg:py-0 pt-4 lg:grid-flow-col">
				<div className="space-y-3 lg:space-y-9 max-w-[624px]">
					<h1 className="font-MerriWeather text-3xl lg:text-5xl font-bold text-nowrap lg:leading-[64px]">
						Define your style
						<br /> Shop now, discover.
					</h1>
					<p className="font-normal text-sm lg:text-2xl font-Raleway lg:leading-[40px]">
						Discover curated jewelry essentials that redefine your style.
						Explore trends, quality craftsmanship, and timeless elegance, all at
						your fingertips.
					</p>
					<button className="font-Raleway text-sm lg:text-2xl border border-[#C99A9A] rounded-full w-[120px] lg:w-[267px] p-2.5 lg:p-3">
						Shop Now
					</button>
				</div>
				<img
					src={heroBg}
					alt={heroBg}
					className="w-[249px] h-[283px] lg:w-[612px] lg:h-[696px] flex-shrink-0"
				/>
			</div>
			<div className="bg-white grid justify-center place-items-center py-10 lg:py-16 gap-y-10">
				<h1 className="font-MerriWeather font-bold text-2xl lg:text-5xl">
					NEW ARRIVALS
				</h1>
				<div className="grid gap-10 lg:gap-24 lg:grid-cols-3">
					{data.products.map((product) => (
						<div key={product.id} className="">
							<div className="grid border border-[#D4AF37] gap-y-2 px-14 py-6 rounded-2xl">
								<img
									src={product.image}
									alt={product.image}
									className="w-28 h-56 justify-self-center"
								/>
								<h2 className="font-Raleway font-normal text-[28px]">
									{product.name}
								</h2>
								<div className="flex gap-2">{renderRating(product.rating)}</div>
								<p className="font-MerriWeather font-medium text-3xl">
									${product.price.toFixed(2)}
								</p>
								<button
									type="button"
									onClick={() =>
										dispatch!({ type: 'ADD_TO_CART', payload: product })
									}
									className="active:bg-[#b48e8e] flex font-Raleway text-2xl font-medium text-white justify-center bg-[#C99A9A] py-2.5 px-1 rounded-lg mt-2"
								>
									Add to cart
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
