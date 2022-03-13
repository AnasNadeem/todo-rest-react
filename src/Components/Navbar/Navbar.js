import { Flex, Box, Button, Heading, Spacer } from "@chakra-ui/react";

function Navbar() {
    return(
        <Flex>
            <Box m={4}>
                <Heading size={'xl'}>Todo App</Heading>
            </Box>
            <Spacer/>
            <Box m={4}>
                <Button colorScheme={'teal'} mr={4}>Signup</Button>
                <Button colorScheme={'teal'}>Login</Button>
            </Box>
        </Flex>
    )
}

export default Navbar;