import { useState } from "react";
import { InputGroup, InputLeftElement, InputRightElement, Input, Button } from "@chakra-ui/react";
import { CheckIcon, CloseIcon, CalendarIcon } from "@chakra-ui/icons";
import ticketPng from "../assets/ticket.png";

const FlightValidator = ({ clickHandler }) => {
    const [flightNumber, setFlightNumber] = useState("");
    const [isFlightValid, setFlightValid] = useState(false);
    const [isRequired, setRequired] = useState(false);
    const handleChange = (event) => setFlightNumber(event.target.value);

    const handleAddItinerary = () => {
    	
    	if (!isFlightValid) {
    		setRequired(true);
	    	setTimeout(() => {
	    		setRequired(false);
	    	}, 500);
	    } else {
	    	clickHandler();
	    }
    };

    return (
    	<>
	      <InputGroup>
					<InputLeftElement>
						<CalendarIcon color="brand.bg" />
					</InputLeftElement>
					<Input
						value={flightNumber}
				        onChange={handleChange}
				        isInvalid={isRequired}
				        errorBorderColor="red.500"
						variant="outline"
						_placeholder={{ color: "brand.bg" }}
						placeholder="Enter flight number"
						sx={{
							color: "brand.bg",
							borderColor: "brand.bg",
							_focusVisible: {
								borderColor: "gray.400",
							}
						}}
					/>
					{(flightNumber?.length > 0) &&
						<InputRightElement>
							{isFlightValid ? 
								<CheckIcon boxSize={3} color='green.500' /> :
								<CloseIcon boxSize={3} color='red.500' />
							}
						</InputRightElement>
					}
			</InputGroup>
			<Button
				onClick={handleAddItinerary}
				sx={{
					marginTop: "1rem",
					width: "full",
					bg: "brand.bg",
					color: "brand.text",
					_hover: {
						bg: "gray.500"
					}
				}}
				size={{ base: "md", md: "lg" }}
			>
				Add Itinerary
			</Button>
		</>
    );
};

export default FlightValidator;