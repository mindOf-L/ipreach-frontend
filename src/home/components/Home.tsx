import { AppCalendar } from '../../calendar/AppCalendar'
import { Div } from '../../common/components/HTML/Div'
import { Main } from '../../common/components/HTML/Main'
import { Ul } from '../../common/components/HTML/Ul'
import { SearchSelect } from '../../common/components/SearchSelect'
import { useGetLocationsQuery } from '../../locations/hooks/locationsQueries'
import { useAppTranslation } from '../../translation/hooks/useAppTranslation'
import { LOCATION_PLACEHOLDER_ENTRY } from '../../translation/tTranslation'
import { TurnInfoCard } from '../../turns/components/TurnInfoCard'

export const HOME_ROUTE = '/'

export const Home = () => {
  const locationPlaceholder = useAppTranslation({
    sentenceKey: LOCATION_PLACEHOLDER_ENTRY,
  })

  const { data: locations } = useGetLocationsQuery()

  console.log(locations)
  return (
    <Main className='mx-10 my-5 flex flex-col items-center justify-center gap-4 md:flex-row lg:my-10'>
      <Div>
        <SearchSelect
          onInputChange={() => {}}
          onSelect={() => {}}
          placeholder={locationPlaceholder}
        />
        <AppCalendar />
      </Div>
      <Ul className='max-h-[50vh] w-full max-w-xl space-y-4 overflow-auto sm:max-h-[70vh] lg:max-h-[82vh]'>
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
    </Main>
  )
}
