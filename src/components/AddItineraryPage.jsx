import { FormControl, FormLabel, Input, Select, Heading, Box, Button } from "@chakra-ui/react";

const AddItineraryPage = () => {
	return (
		<Box px="4">
			<Heading color="brand.text" size="lg" mb="4">Add Details</Heading>
			<FormControl my="2">
				<FormLabel color="brand.text">Enter sleep time</FormLabel>
				<Input sx={{ bg: "brand.text", color: "brand.bg" }} type="time" size="md"/>
			</FormControl>
			<FormControl my="2">
				<FormLabel color="brand.text">Enter wake-up time</FormLabel>
				<Input sx={{ bg: "brand.text", color: "brand.bg" }} type="time"/>
			</FormControl>
			<Input my="2" sx={{ bg: "brand.text", color: "brand.bg", _placeholder: { color: "brand.bg" } }} type="number" placeholder="Enter your age"/>
			<Select sx={{ my: "2", bg: "brand.text", color: "brand.bg", _placeholder: { color: "brand.bg" } }} placeholder='Select your gender'>
			  <option value='male'>Male</option>
			  <option value='Female'>Female</option>
			</Select>
			<Select sx={{ my: "2", bg: "brand.text", color: "brand.bg", _placeholder: { color: "brand.bg" } }} placeholder='Select chronotype'>
			  <option value='lion'>Lion</option>
			  <option value='dolphin'>Dolphin</option>
			  <option value='bear'>Bear</option>
			  <option value='wolf'>Wolf</option>
			</Select>
			<Button bg="brand.text" color="brand.bg" w="full" my="2">Get my plan</Button>
		</Box>
	);
};

export default AddItineraryPage;
