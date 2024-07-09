import { emailicon, phoneIcon } from '../assets/icons';

interface footerOptions {
	id: number;
	title: string;
	navLinks: {
		link1: string;
		link2: string;
		link3: string;
		link4?: string;
	};
}

const footerData: footerOptions[] = [
	{
		id: 1,
		title: 'Company',
		navLinks: {
			link1: 'About Us',
			link2: 'Careers',
			link3: 'Press',
			link4: 'Blog',
		},
	},
	{
		id: 2,
		title: 'Shop',
		navLinks: {
			link1: 'Shop All',
			link2: 'Shop new Arrivals',
			link3: 'Shop Best sellers',
			link4: 'Shop sales',
		},
	},
	{
		id: 3,
		title: 'Support',
		navLinks: {
			link1: 'Contact Us',
			link2: 'FAQ',
			link3: 'Shipping',
			link4: 'Returns',
		},
	},
	{
		id: 4,
		title: 'Explore',
		navLinks: {
			link1: 'Home',
			link2: 'Testimonial',
			link3: 'Privacy policy',
			link4: 'Terms of service',
		},
	},
	{
		id: 5,
		title: 'Follow Us',
		navLinks: {
			link1: 'Facebook',
			link2: 'Instagram',
			link3: 'Twitter',
			link4: 'Pinterest',
		},
	},
];

const Footer = () => {
	return (
		<footer className="lg:flex grid justify-center gap-10 bg-[#FFF8E7] mt-10 py-10 px-6 ">
			<div className="flex flex-col gap-y-4 mt-12">
				<div>
					<h2 className="pl-1.5 font-MerriWeather font-bold text-xl leading-normal">
						AIRIAM JEWELS
					</h2>
				</div>
				<div className="font-Raleway font-normal space-y-4">
					<div className="flex space-x-2">
						<img src={emailicon} alt={emailicon} />
						<p className="">Mstephen130@yahoo.com</p>
					</div>
					<div className="flex space-x-2">
						<img src={phoneIcon} alt={phoneIcon} />
						<p className="">+234 810 282 0129</p>
					</div>
				</div>
			</div>
			<div className="grid gap-x-12 gap-y-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:py-10">
				{footerData.map((item, index) => (
					<div key={index} className="">
						<div className="space-y-3.5">
							<h3 className="font-Raleway font-normal text-3xl">
								{item.title}
							</h3>
							<ul className="space-y-2">
								{Object.values(item.navLinks).map((link, linkIndex) => (
									<li
										key={linkIndex}
										className="font-Raleway font-normal text-sm"
									>
										<a
											href={`/${link.toLowerCase()}`}
											className="hover:opacity-80 "
										>
											{link}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</footer>
	);
};

export default Footer;
