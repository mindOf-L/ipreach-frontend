import { AppCalendar } from '../../calendar/AppCalendar'
import { Div } from '../../common/components/HTML/Div'
import { Main } from '../../common/components/HTML/Main'
import { LocationSelect } from '../../locations/components/LocationSelect'
import { FC, useState } from 'react'
import { Location } from '../../locations/tLocations'
import { ShiftList } from '../../shifts/components/ShiftList'
import { ProtectedElement } from '../../routes/components/Protected'

export const HOME_ROUTE = '/'

export const Home: FC<ProtectedElement> = () => {
  const [location, setLocation] = useState<Location>()
  const handleChangeLocation = (newLocation: Location) =>
    setLocation(newLocation)

  const [date, setDate] = useState(new Date())
  const handleChangeDate = (newDate: Date) => setDate(newDate)

  return (
    <Main className='mx-10 my-10 flex flex-col items-center gap-4 md:flex-row lg:my-10'>
      <Div>
        <LocationSelect selectLocation={handleChangeLocation} />
        <AppCalendar onClickDay={handleChangeDate} />
      </Div>
      <ShiftList location={location} date={date} />
    </Main>
  )
}
