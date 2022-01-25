import React from "react";
import { useWorldAtlas } from "./hooks/useWorldAtlas";
import { useCities } from "./hooks/useCities";
import "./App.css";

// Components
import CircleMark from "./components/CircleMark";

const App = () => {
	const width = 1200;
	const height = 500;
	const worldAtlas = useWorldAtlas();
	const cities = useCities();

	if (!worldAtlas) {
		return <pre>"Loading"</pre>;
	}

	return (
		<svg width={width} height={height}>
			<CircleMark data={worldAtlas} />
		</svg>
	);
};

export default App;
