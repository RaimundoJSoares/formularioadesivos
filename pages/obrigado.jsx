import {Flex, Link} from '@chakra-ui/react'

function Obrigado() {
  return(
    <Flex
    h="100vh"
    justifyContent="center"
    alignItems="center"
    color="green.300"
    fontSize={40}
    flexDir='column'
    >
      Pedido enviado com sucesso! <br></br>

      <Flex mt={30} fontSize={20}>
        Para retornar a página inicial, <br></br> 
        <Link color="blue.500" href='formularioadesivos.vercel.app'> clique aqui</Link>
      </Flex>
    </Flex>
  )
}

export default Obrigado