import { ChakraProvider } from '@chakra-ui/react'
import { ResizeExample} from './observacoes'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <ResizeExample/>
    </ChakraProvider>
  )
}

export default MyApp