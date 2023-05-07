import { ChakraProvider, extendTheme, Heading, Text } from "@chakra-ui/react";
import FlightValidator from "./components/FlightValidator"
import "./index.css";
import travelPng from "./assets/travel.png"

const theme = extendTheme({
	fonts: {
		heading: `'Quicksand', sans-serif`,
		body: `'Quicksand', sans-serif`
	},
	colors: {
		brand: {
			bg: "#7b9acc",
			text: "#FCF6F5"
		}
	},
});

function App() {
	return (
		<ChakraProvider theme={theme}>
			<div className="app-wrapper">
				<Heading mb="4" mx="4" color="brand.text">
					The Jet Lagger
				</Heading>
				<Text mb="8" mx="4" color="gray.100">
					Don't let jet lag ruin your travel experience - plan ahead with our tool.
				</Text>
				<div className="main-icon">
					<img src={travelPng} />
				</div>
				<div className="main-card">
					<FlightValidator />
				</div>
			</div>
		</ChakraProvider>
	)
}

export default App
