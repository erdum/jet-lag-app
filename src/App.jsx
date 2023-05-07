import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      bg: "#7b9acc",
      text: "#FCF6F5"
    }
  },
  styles: {
    global: {
      body: {
        bg: 'brand.bg'
      }
    }
  }
});

function App() {
  return (
    <ChakraProvider theme={theme}>
    </ChakraProvider>
  )
}

export default App
