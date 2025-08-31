import { Container, Box, Link, Text } from "@chakra-ui/react";

interface AnnouncementsProps {
  message?: string;
}

function Announcements({ message }: AnnouncementsProps) {
  return (
    <Box
      bgColor="blue.950"
      p={3}
      rounded="full"
      color="white"
      textAlign="center"
    >
      <Text fontWeight="medium" fontSize="small" textTransform="uppercase">
        {message}
        <Link marginInline={2} color="white" textDecoration="underline">
          Learn More
        </Link>
      </Text>
    </Box>
  );
}

export default Announcements;
