import { Checkbox} from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import { Button, Stack, EmailIcon} from '@chakra-ui/react'

export default function Home() {

  return (
    <>
      Quais adesivos: 
      <div>
      <Checkbox defaultChecked>React</Checkbox>
      </div>
      <div>
      <Checkbox defaultChecked>Vue</Checkbox>
      </div>
      <div>
      <Checkbox defaultChecked>Angular</Checkbox>
      </div>

      <div>
        Observações:
      <Textarea rows="7"  cols={20} resize='none'
      backgroundColor='blackAlpha.800'
       color="whiteAlpha.800" 
       placeholder='Alguma dúvida? Recado?'
       w='520px'
       />

      <div>
      <Button colorScheme='blue'>Button</Button>
      </div>
      </div>

      
    </>
  )
}

