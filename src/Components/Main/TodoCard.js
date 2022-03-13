import { Flex,Spacer, Box, Text, Checkbox } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function TodoCard({name}) {
    return(
        <Box m={3}>
            <Flex p={3} w="100%" shadow='md' borderWidth='1px' borderRadius='2'>
                <Text fontSize={20} fontWeight="normal">{name}</Text>
                <Spacer/>
                <DeleteIcon color={'red'}/>
            </Flex>
        </Box>
    )
}

export default TodoCard;