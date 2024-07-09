import {
	carticon,
	closeIcon,
	menuOpen,
	mobileCart,
	mobileSearch,
	search,
	user,
} from '../assets/icons';
import { useState } from 'react';

const Navbar = () => {
	const [toggle, settoggle] = useState<boolean>(false);

	const toggleMenu = (): boolean => {
		settoggle(!toggle);
		return toggle;
	};

	return (
		<div className="overflow-hidden">
			{/* Desktop Navigation */}
			<div className="lg:flex hidden justify-between px-[100px] py-10 bg-[#FFF8E7] items-center">
				<h1 className="font-MerriWeather font-bold text-xl leading-normal">
					AIRIAM JEWELS
				</h1>
				<ul className="flex space-x-8 font-MerriWeather font-normal text-xl">
					<li>Home</li>
					<li>Shop</li>
					<li>About Us</li>
					<li>Contact Us</li>
				</ul>
				<div className="flex relative">
					<input
						type="text"
						className="bg-[#FFF8E7] border border-[#D4AF37] rounded-full py-1 px-2"
					/>
					<img
						src={search}
						alt={search}
						className="absolute w-6 h-6 left-4 top-1.5"
					/>
				</div>
				<div className="flex space-x-7">
					<button>
						<img src={carticon} alt={carticon} className="h-6 w-6" />
					</button>
					<button>
						<img src={user} alt={user} className="h-6 w-6" />
					</button>
				</div>
			</div>
			{/* mobile Navigation */}
			<div
				className={`flex lg:hidden justify-between items-center px-2 py-8 ${
					toggle ? 'bg-white' : 'bg-[#FFF8E7]'
				} `}
			>
				<div className="font-MerriWeather font-bold text-base px-4">
					<p>AIRIAM JEWELS</p>
				</div>
				<div className="flex gap-5 pr-4">
					<button>
						<img src={mobileSearch} alt={mobileSearch} />
					</button>
					<button>
						<img src={mobileCart} alt={mobileCart} />
					</button>
					<button onClick={toggleMenu} className="">
						<img
							src={!toggle ? menuOpen : closeIcon}
							alt="Toggle"
							className="h-6 w-6"
						/>
					</button>
					<div
						className={`${
							toggle == false
								? 'hidden'
								: 'absolute top-20 left-0 right-0 mt-2 z-10 text-left px-6 space-y-4 font-MerriWeather font-normal bg-white py-0 pb-14'
						}`}
					>
						{toggle && <hr className="border-b border-[#BABABA] mb-10" />}
						<div>Home</div>
						<div>Shop</div>
						<div>About us</div>
						<div>Contact Us</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
