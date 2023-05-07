import { useState } from "react";
import { InputGroup, InputLeftElement, InputRightElement, Input, Button } from "@chakra-ui/react";
import { CheckIcon, CloseIcon, CalendarIcon } from "@chakra-ui/icons";
import ticketPng from "../assets/ticket.png";

function FlightValidator() {
    const [flightNumber, setFlightNumber] = useState("");
    const [isFlightValid, setFlightValid] = useState(false);
    const handleChange = (event) => setFlightNumber(event.target.value);

    return (
    	<>
	      <InputGroup>
					<InputLeftElement>
						<CalendarIcon color="brand.bg" />
					</InputLeftElement>
					<Input
						value={flightNumber}
		        onChange={handleChange}
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
			<Button mt="4" w="full" sx={{ bg: "brand.bg", color: "brand.text" }}>Add Itinerary</Button>
		</>
    );
};

export default FlightValidator;