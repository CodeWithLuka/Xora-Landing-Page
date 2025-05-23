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
				<div className="w-full border-2 border-blue-400"></div>
			</div>
		</header>
	);
};
