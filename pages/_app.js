import { ChakraProvider } from '@chakra-ui/react'
import { ResizeExample} from './observacoes'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <ResizeExample/>
    </ChakraProvider>
  )
}

export default MyApp