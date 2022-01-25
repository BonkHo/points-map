import React from "react";
import { useWorldAtlas } from "./hooks/useWorldAtlas";
import { useCities } from "./hooks/useCities";
import "./App.css";

// Components
import Mark from "./components/Mark";

const App = () => {
	const width = 1200;
	const height = 500;
	const worldAtlas = useWorldAtlas();
	const cities = useCities();

	if (!worldAtlas || !cities) {
		return <pre>"Loading"</pre>;
	}

	return (
		<svg width={width} height={height}>
			<Mark worldAtlas={worldAtlas} cities={cities} />
		</svg>
	);
};

export default App;
