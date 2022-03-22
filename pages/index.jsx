import { Checkbox, Flex, Heading, Input, Link } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);

  function aumentar() {
    setCounter(counter + 1);
  }

  function subtrair() {
    setCounter(counter - 1);
    while (counter < 0) {
      throw ErrorEvent;
    }
  }
  return (
    <Flex
      h="100vh"
      justifyContent="center"
      alignItems="center"
      
    >
      <Flex flexDir="column">
        <Flex fontSize={30} mb={10}><strong>Formulário para compra de Pacote de adesivos</strong></Flex>
        <strong>Quais adesivos:</strong>
        <Checkbox mt={1} mb={1} color="blue.50">
          React
        </Checkbox>
        <Checkbox mb={1} color="blue.50">
          Vue
        </Checkbox>
        <Checkbox mb={1} color="blue.50">
          Angular
        </Checkbox>

        <Flex mb={1} mt={10}>
          <strong>Quantos adesivos de cada?</strong>{" "}
        </Flex>
        <Flex>
          <Button onClick={subtrair} color="blue.50" colorScheme="purple">
            -
          </Button>
          <Flex
            bg="blackAlpha.800"
            borderRadius="5"
            w={20}
            h={10}
            color="white.900"
            justify="center"
            align="center"
          >
            {counter}
          </Flex>
          <Button color="blue.50" colorScheme="purple" onClick={aumentar}>
            {" "}
            +
          </Button>
        </Flex>
        <Flex mt={10} flexDir="column" color="blue.50">
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
        <Link href='/obrigado'>
          <Flex mt={8} ml={435}>
            <Button colorScheme="purple">ENVIAR</Button>
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
}
