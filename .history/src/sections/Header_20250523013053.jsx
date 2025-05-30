import { Link as LinkScroll } from "react-scroll";
import PropTypes from "prop-types";

const NavLink = ({ title }) => (
	<LinkScroll className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5">
		{title}
	</LinkScroll>
);

NavLink.propTypes = {
	title: PropTypes.string.isRequired,
};

export const Header = () => {
	return (
		<header className="fixed top-0 left-0 z-50 w-full py-10">
			<div className="container flex h-14 items-center max-lg:px-5">
				<a href="/" className="lg:hidden flex-1 cursor-pointer z-2">
					<img
						src="/images/xora.svg"
						width={115}
						height={55}
						alt="Xora Logo"
					/>
				</a>
				<div className="w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0">
					<div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
						<nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
							<ul className="flex max-lg:block max-lg:px-12">
								<li className="nav-li">
									<NavLink title="features" />
									<div className="dot" />
									<NavLink title="pricing" />
								</li>

								<li className="nav-logo">
									<LinkScroll>
										<img
											src="/images/xora.svg"
											width={160}
											height={55}
											alt="Xora Logo"
										/>
									</LinkScroll>
								</li>

								<li className="nav-li">
									<NavLink title="faq" />
									<div className="dot" />
									<NavLink title="download" />
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};
