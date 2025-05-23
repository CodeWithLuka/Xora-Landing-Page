import PropTypes from "prop-types";

export const Button = ({ icon, children }) => {
	return (
		<button>
			{icon && <span className="button-icon">{icon}</span>}
			{children}
		</button>
	);
};

Button.propTypes = {
	icon: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};
