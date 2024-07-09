import { heroBg } from '../assets/icons';

const Home = () => {
	return (
		<div className="bg-[#FFF8E7]">
			<div className="grid justify-center place-items-center lg:text-left text-center px-6 lg:px-20 gap-y-3 lg:py-0 py-4 lg:grid-flow-col">
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
		</div>
	);
};

export default Home;
