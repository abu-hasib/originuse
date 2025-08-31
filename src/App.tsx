import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import Announcements from "./components/Announcements";
import Navbar from "./components/Navbar";
import "./App.css";
import { useRef } from "react";
import useDataStateSwitch from "./hooks/useDataStateSwitch";

function App() {
  const navRef = useRef<HTMLElement | undefined>(undefined);
  const containerRef = useRef<HTMLElement | undefined>(undefined);
  const { target } = useDataStateSwitch(containerRef, navRef);

  return (
    <Container pt={3} height="100vw">
      <Flex gap={3} flexDir="column" position="sticky" top="3%">
        <Announcements message="NEW in Origin: Financial Forecasting" />
        <Navbar ref={navRef} />
      </Flex>
      <Box as="main">
        <Box as="header" paddingTop="72px">
          <VStack
            flexDir="column"
            alignItems="center"
            textAlign="center"
            ref={containerRef}
            gapY={3}
          >
            <Text>
              <Text as="span" display="block" fontSize="102px">
                Money management,
                <Text as="span" display="block">
                  simplified.
                </Text>
              </Text>
            </Text>
            <Text maxW="580px">
              More than just a Mint alternative—track your spending and build
              wealth with investing, financial planning, and estate planning.
            </Text>
            <Box>
              <Button
                asChild
                _hover={{ color: "white", bg: "black" }}
                textDecoration="none"
                bg="green.950"
                px="25px"
                color="black"
                textTransform="uppercase"
                size="xl"
                rounded="full"
                marginBlock="3"
              >
                <a>Try Origin For Free</a>
              </Button>
            </Box>
          </VStack>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
