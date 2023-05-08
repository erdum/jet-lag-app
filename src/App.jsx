import { useReducer } from "react";
import { ChakraProvider, extendTheme, Heading, Text } from "@chakra-ui/react";
import FlightValidator from "./components/FlightValidator"
import AddItineraryPage from "./components/AddItineraryPage"
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

const reducer = (state, action) => {

	switch (action.type) {
		case "show_itinerary_page":
			return {
				...state,
				showItineraryPage: true
			};

		case "hide_itinerary_page":
			return {
				...state,
				showItineraryPage: false
			}
	}
};

const initialAppState = {
	showItineraryPage: false,
	showPlanPage: false
};

const App = () => {
	const [state, dispatcher] = useReducer(reducer, initialAppState);

	return (
		<ChakraProvider theme={theme}>
			<div className="app-wrapper">
				{ (!state.showItineraryPage && !state.showPlanPage) &&
					<>
						<Heading mb={{ base: "4", md: "6" }} mx="4" color="brand.text" as="h1" size={{ base: "md", md: "3xl"}}>
							The Jet Lagger
						</Heading>
						<Text mx="4" mb="8" color="gray.100" display={{ base: "block", md: "none" }}>
							Don't let jet lag ruin your travel experience - plan ahead with our tool.
						</Text>
						<Text mb="20" mx="4" w={{ base: "auto", lg: "35rem" }} color="gray.100" display={{ base: "none", md: "block" }}>
							Say goodbye to the exhaustion and discomfort of jet lag with our innovative travel app. Our app takes the hassle out of jet lag, helping you arrive at your destination feeling refreshed and ready to explore
						</Text>
						<div className="main-icon">
							<img src={travelPng} />
						</div>
						<div className="main-card">
							<FlightValidator clickHandler={() => dispatcher({type: "show_itinerary_page"})} />
						</div>
					</>
				}
				{state.showItineraryPage && <AddItineraryPage />}
			</div>
		</ChakraProvider>
	)
}

export default App
