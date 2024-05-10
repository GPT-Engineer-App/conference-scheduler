import { Box, Button, Container, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading mb={2}>Conference Scheduler</Heading>
          <Text fontSize="xl">Plan and manage your conferences seamlessly.</Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <VStack>
              <FaCalendarAlt size="3em" />
              <Text mt={4} fontSize="xl">
                Schedule Events
              </Text>
              <Text textAlign="center">Easily add and manage events on your personalized calendar.</Text>
            </VStack>
          </Box>

          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <VStack>
              <FaUsers size="3em" />
              <Text mt={4} fontSize="xl">
                Manage Attendees
              </Text>
              <Text textAlign="center">Keep track of who's attending and manage participant lists.</Text>
            </VStack>
          </Box>

          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <VStack>
              <FaMapMarkerAlt size="3em" />
              <Text mt={4} fontSize="xl">
                Venue Details
              </Text>
              <Text textAlign="center">View and provide details about event venues, including maps and directions.</Text>
            </VStack>
          </Box>
        </SimpleGrid>

        <Box align="center">
          <Button colorScheme="blue" size="lg">
            Get Started
          </Button>
        </Box>

        <Box align="center">
          <Image src="https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcm9vbXxlbnwwfHx8fDE3MTUzNTk5NzJ8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
