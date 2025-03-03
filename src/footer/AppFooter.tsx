import { Moon, Sun } from 'lucide-react'
import { Button } from '../common/components/HTML/Button'
import { Footer } from '../common/components/HTML/Footer'
import { isDarkMode, toggleColorSchema } from '../utils/colorSchema'
import { useState } from 'react'
import { Span } from '../common/components/HTML/Span'
import { AppText } from '../translation/components/AppText'
import { FOOTER_ENTRY } from '../translation/tTranslation'

export const AppFooter = () => {
  const [dark, setDark] = useState(isDarkMode())
  const handleClick = () => {
    toggleColorSchema()
    setDark(!dark)
  }
  return (
    <Footer className='flex h-16 w-full items-center justify-around bg-slate-200 px-4 dark:bg-slate-800'>
      <Span size='small' className='flex-1 text-center'>
        <AppText sentenceKey={FOOTER_ENTRY} />
      </Span>
      <Button onClick={handleClick}>
        {dark && <Sun />}
        {dark || <Moon />}
      </Button>
    </Footer>
  )
}
