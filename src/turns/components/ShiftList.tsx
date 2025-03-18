import { Ul } from '../../common/components/HTML/Ul'
import { Location } from '../../locations/tLocations'
import { useGetShiftsQuery } from '../hooks/shiftsQueries'
import { ShiftInfoCard } from './ShiftInfoCard'
import { getDateYYYYMMDD } from '../../utils/dateUtils'
import { Li } from '../../common/components/HTML/Li'
import { AppLoading } from '../../common/components/AppLoading'
import { useAppTranslation } from '../../translation/hooks/useAppTranslation'
import { SELECT_LOCATION_ENTRY } from '../../translation/tTranslation'

interface ShiftListProps {
  location?: Location
  date: Date
}
interface ShiftListLocationProps extends ShiftListProps {
  location: Location
}
export const ShiftList = ({ location, date }: ShiftListProps) => {
  if (!location) return <ShiftListNoLocation />

  return <ShiftListLocation location={location} date={date} />
}

const ShiftListNoLocation = () => {
  const selectLocation = useAppTranslation({
    sentenceKey: SELECT_LOCATION_ENTRY,
  })
  return (
    <Ul className='grid w-full max-w-xl grow place-content-center'>
      <Li className='w-full italic'>{selectLocation}</Li>
    </Ul>
  )
}

const ShiftListLocation = ({ location, date }: ShiftListLocationProps) => {
  const { data: shifts, isLoading } = useGetShiftsQuery({
    params: {
      locationId: location.id,
      detailed: true,
      date: getDateYYYYMMDD(date),
    },
  })

  return (
    <Ul className='max-h-[50vh] w-full max-w-xl space-y-4 overflow-auto sm:max-h-[70vh] lg:max-h-[82vh]'>
      {shifts?.map((shift) => <ShiftInfoCard shift={shift} />)}
      {isLoading && <AppLoading />}
    </Ul>
  )
}
