import { Flex, Box, Spacer, Center, Text } from "@chakra-ui/react";
import TodoBox from "./TodoBox";
import MainButton from "./MainButtons";

function MainSec() {
   return(
        <Flex m={4}>
            <TodoBox title='TodoList'/>
            <Spacer/>
            <MainButton/>
            <Spacer/>
            <TodoBox/>
        </Flex>
   )
}

export default MainSec;