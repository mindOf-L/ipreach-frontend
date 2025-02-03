import { ChevronDown, ChevronRight } from 'lucide-react'
import { Button } from '../../common/components/HTML/Button'
import { Li } from '../../common/components/HTML/Li'
import { Span } from '../../common/components/HTML/Span'
import { useState } from 'react'
import { Ul } from '../../common/components/HTML/Ul'
import { Section } from '../../common/components/HTML/Section'

export const TurnInfoCard = () => {
  const [opened, setOpened] = useState(false)
  return (
    <Li className='min-h-16 rounded-md border-l-8 border-sky-300 px-4 font-bold'>
      <Section className='flex w-full items-center justify-between text-lg text-sky-800 dark:text-sky-200'>
        <Span className='text-xl'>30 ENE</Span>
        <Span>3 Turnos disponibles</Span>
        <Button onClick={() => setOpened(!opened)}>
          {opened && <ChevronDown />}
          {opened || <ChevronRight />}
        </Button>
      </Section>
      {opened && (
        <Ul className='font-semibold'>
          <Li>Superintendente</Li>
          <Li>Auxiliar</Li>
          <Li className='border-t-2 font-thin'>Hermano 1</Li>
          <Li className='font-thin'>Hermano 2</Li>
          <Li className='font-thin'>Hermano 3</Li>
        </Ul>
      )}
    </Li>
  )
}
