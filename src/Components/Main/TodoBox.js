import { Box } from "@chakra-ui/react";
import TodoCard from "./TodoCard";

function TodoBox({title}) {
    if (title=='TodoList'){
        return(
            <Box width={'600px'} margin="3" shadow='md' borderWidth='1px' borderRadius='lg'>
                <TodoCard name="Morning List" />
                <TodoCard name="Evening List" />
                <TodoCard name="Anime List" />
                <TodoCard name="Movie List" />
            </Box>
        )      
    }else{
        return(
            <Box width={'600px'} margin="3" shadow='md' borderWidth='1px' borderRadius='lg'>
                <TodoCard name="AOT" />
                <TodoCard name="HxH" />
            </Box>
        ) 
    }
    
}

export default TodoBox;