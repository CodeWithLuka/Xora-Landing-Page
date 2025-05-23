import clsx from "clsx";
import PropTypes from "prop-types";

Button.propTypes = {
	icon: PropTypes.string,
	containerClassName: PropTypes.node,
	children: PropTypes.node.isRequired,
	href: PropTypes.string,
	onClick: PropTypes.func,
};

export const Button = ({
	icon,
	children,
	href,
	containerClassName,
	onClick,
}) => {
	const Inner = () => (
		<>
			<span>
				<span>Marker</span>
				{icon && (
					<img
						src={icon}
						alt="Button Icon"
						className="size-10 mr-5 object-contain z-10"
					/>
				)}
				<span>{children}</span>
			</span>
		</>
	);

	return href ? (
		<a
			href={href}
			className={clsx(
				"relative p-0.5 g5 rounded-2xl shadow-500 group",
				containerClassName,
			)}
		>
			<Inner />
		</a>
	) : (
		<button
			className={clsx(
				"relative p-0.5 g5 rounded-2xl shadow-500 group",
				containerClassName,
			)}
			onClick={onClick}
		>
			<Inner />
		</button>
	);
};
