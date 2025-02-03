import { MouseEvent } from 'react'
import { Button } from '../../common/components/HTML/Button'
import { Form } from '../../common/components/HTML/Form'
import { H3 } from '../../common/components/HTML/H3'
import { Input } from '../../common/components/HTML/Input'
import { Label } from '../../common/components/HTML/Label'
import { Hero } from '../../hero/Hero'
import { AppText } from '../../translation/components/AppText'
import { useAppTranslation } from '../../translation/hooks/useAppTranslation'
import {
  LOGIN_BUTTON_ENTRY,
  LOGIN_ENTRY,
  PASSWORD_LABEL_ENTRY,
  USERNAME_LABEL_ENTRY,
} from '../../translation/tTranslation'
import { useLogin } from '../hooks/useLogin'
import { Div } from '../../common/components/HTML/Div'

export const LOGIN_ROUTE = '/login'

export const Login = () => {
  const userLabel = useAppTranslation({
    sentenceKey: USERNAME_LABEL_ENTRY,
  })

  const passwordLabel = useAppTranslation({
    sentenceKey: PASSWORD_LABEL_ENTRY,
  })

  const { handleLogin } = useLogin()

  return (
    <Div className='h-[70vh]'>
      <Hero />
      <Form className='mx-auto h-full' onSubmit={handleLogin}>
        <H3 className='self-start'>
          <AppText sentenceKey={LOGIN_ENTRY} />
        </H3>
        <Label htmlFor='username' className='self-start'>
          {userLabel}
        </Label>
        <Input id='username' name='username' type='text' />
        <Label htmlFor='password' className='self-start'>
          {passwordLabel}
        </Label>
        <Input id='password' name='password' type='password' />
        <Button variant='colored'>
          <AppText sentenceKey={LOGIN_BUTTON_ENTRY} />
        </Button>
      </Form>
    </Div>
  )
}
