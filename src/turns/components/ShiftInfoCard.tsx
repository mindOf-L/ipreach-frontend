import { ChevronDown, ChevronRight } from 'lucide-react'
import { Li } from '../../common/components/HTML/Li'
import { Span } from '../../common/components/HTML/Span'
import { Ul } from '../../common/components/HTML/Ul'
import { Details } from '../../common/components/HTML/Details'
import { Summary } from '../../common/components/HTML/Summary'
import { Strong } from '../../common/components/HTML/Strong'
import { Shift } from '../tShifts'
import { formatDateShort } from '../../utils/dateUtils'
import { useAppTranslation } from '../../translation/hooks/useAppTranslation'
import { AVAILABLE_SHIFTS_ENTRY } from '../../translation/tTranslation'

interface TurnInfoCardParams {
  shift: Shift
}

export const ShiftInfoCard = ({ shift }: TurnInfoCardParams) => {
  const availableShifts = useAppTranslation({
    sentenceKey: AVAILABLE_SHIFTS_ENTRY,
    dynamicValues: { slots: shift.slotsAvailable },
  })

  return (
    <Li
      className='min-h-8 rounded-md border-l-6 border-sky-300 px-4'
      key={shift.id}
    >
      <Details className='group'>
        <Summary className='flex w-full items-center justify-between gap-2 text-lg text-sky-800 dark:text-sky-200'>
          <Strong className='grow text-xl uppercase'>
            {formatDateShort(new Date(shift.dateTimeFrom))}
          </Strong>
          <Span>{availableShifts}</Span>
          <ChevronDown className='hidden group-open:block' />
          <ChevronRight className='group-open:hidden' />
        </Summary>

        <Ul className='font-semibold'>
          <Li>Superintendente</Li>
          <Li>Auxiliar</Li>
          <Li className='border-t-2 font-thin'>Hermano 1</Li>
          <Li className='font-thin'>Hermano 2</Li>
          <Li className='font-thin'>Hermano 3</Li>
        </Ul>
      </Details>
    </Li>
  )
}
