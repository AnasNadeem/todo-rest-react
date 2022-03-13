import { AddIcon } from "@chakra-ui/icons";
import { Button, VStack } from "@chakra-ui/react";

function MainButton() {
    return(
        <VStack alignContent={'center'} justifyContent='center'>
            <Button size={'lg'} colorScheme={'teal'}>
                New Task List
                <AddIcon m={2}/>
            </Button>
            <Button size={'lg'} colorScheme={'teal'}>
                New Task
                <AddIcon m={2}/>
            </Button>
        </VStack>
    )
}

export default MainButton;