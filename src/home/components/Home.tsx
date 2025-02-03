import { AppCalendar } from '../../calendar/AppCalendar'
import { Div } from '../../common/components/HTML/Div'
import { Section } from '../../common/components/HTML/Section'
import { Ul } from '../../common/components/HTML/Ul'
import { SearchSelect } from '../../common/components/SearchSelect'
import { useAppTranslation } from '../../translation/hooks/useAppTranslation'
import { LOCATION_PLACEHOLDER_ENTRY } from '../../translation/tTranslation'
import { TurnInfoCard } from '../../turns/components/TurnInfoCard'

export const HOME_ROUTE = '/'

export const Home = () => {
  const locationPlaceholder = useAppTranslation({
    sentenceKey: LOCATION_PLACEHOLDER_ENTRY,
  })
  return (
    <Div className='flex max-h-[80vh] flex-col gap-4 md:flex-row'>
      <Section>
        <SearchSelect
          onInputChange={() => {}}
          onSelect={() => {}}
          placeholder={locationPlaceholder}
        />
        <AppCalendar />
      </Section>
      <Ul className='flex w-full flex-col justify-start gap-4 overflow-y-scroll'>
        <TurnInfoCard />
        <TurnInfoCard />
        <TurnInfoCard />
        <TurnInfoCard />
        <TurnInfoCard />
        <TurnInfoCard />
        <TurnInfoCard />
        <TurnInfoCard />
        <TurnInfoCard />
        <TurnInfoCard />
        <TurnInfoCard />
        <TurnInfoCard />
        <TurnInfoCard />
        <TurnInfoCard />
      </Ul>
    </Div>
  )
}
