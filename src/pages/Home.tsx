import { heroBg } from '../assets/icons';

const Home = () => {
	return (
		<div className="bg-[#FFF8E7]">
			<div className="grid justify-center place-items-center text-center px-6 gap-y-3 py-4">
				<h1 className="font-MerriWeather text-3xl font-bold">
					Define your style
					<br /> Shop now, discover.
				</h1>
				<p className="font-normal text-sm font-Raleway">
					Discover curated jewelry essentials that redefine your style. Explore
					trends, quality craftsmanship, and timeless elegance, all at your
					fingertips.
				</p>
				<button className="font-Raleway text-sm border border-[#C99A9A] rounded-full w-[120px] p-2.5">
					Shop Now
				</button>
				<img src={heroBg} alt={heroBg} className="w-[249px] h-[283px]" />
			</div>
		</div>
	);
};

export default Home;
