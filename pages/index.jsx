import { Checkbox, Flex } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Button} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex h='100vh' w="100vw" justifyContent='center' alignItems='center' flexDir='column' > 
      <Flex flexDir='column' mr={410} >
        <strong>Quais adesivos:   </strong>
        <Checkbox mt={5} mb={1} defaultChecked color='blue.50' >React</Checkbox>
        <Checkbox mb={1} defaultChecked color='blue.50' >Vue</Checkbox>
        <Checkbox mb={1} defaultChecked color='blue.50' >Angular</Checkbox>
      </Flex>
     
      <Flex mt={10} flexDir='column' color='blue.50'>
        <strong>Observações:</strong>
        <Flex mt={1.5}>
          <Textarea
            rows="7"
            cols={20}
            resize="none"
            backgroundColor="blackAlpha.800"
            color="whiteAlpha.800"
            placeholder="Alguma dúvida? Recado?"
            w="520px"
          />
        </Flex>
      </Flex>
      <Flex mt={10} ml={435}>
          <Button colorScheme="purple">ENVIAR</Button>
        </Flex>
    </Flex>
  );
}
