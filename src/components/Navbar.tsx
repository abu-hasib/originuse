import { Box, Button, Flex, HStack, Icon } from "@chakra-ui/react";
import origin from "../assets/origin.svg";
import RSVG from "./ui/svg";
import { LiaGripLinesSolid } from "react-icons/lia";
import React from "react";

interface NavbarProps {
  title?: string;
}

const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(function (
  props,
  ref
) {
  return (
    <Box
      as="nav"
      ref={ref}
      _off={{ bg: "transparent" }}
      _on={{ bg: "white", shadow: "rgba(0, 0, 0, 0.1) 15px 15px 20px" }}
      px={4}
      py={2}
      rounded="full"
    >
      <Flex justifyContent="space-between">
        <HStack>
          <RSVG src={origin} width={88} height="auto" />
          {/* <Text>Origin</Text> */}
        </HStack>
        <HStack>
          <Button size="md" rounded="4xl" textTransform="uppercase">
            Sign Up
          </Button>
          <Icon as={LiaGripLinesSolid} size="xl" cursor="pointer" />
        </HStack>
      </Flex>
    </Box>
  );
});

export default Navbar;
