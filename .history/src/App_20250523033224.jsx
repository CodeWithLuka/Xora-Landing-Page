import { HeroSection } from "./sections/Hero";
import { HeaderSection } from "./sections/Header";

const App = () => {
	return (
		<main className="overflow-hidden">
			<HeaderSection />
			<HeroSection />
		</main>
	);
};

export default App;
