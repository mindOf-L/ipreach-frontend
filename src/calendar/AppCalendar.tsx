import Calendar from 'react-calendar'

interface CalendarTile {
  date: Date
  view: 'month' | 'year' | 'decade' | 'century'
}

const today = new Date()
today.setHours(0, 0, 0, 0)

const tileClassName = ({}: CalendarTile) => {
  const styles = 'rounded-md'

  return styles
}

export const AppCalendar = () => {
  return (
    <>
      <Calendar
        className='mx-auto w-full text-center uppercase'
        tileClassName={tileClassName}
      />
    </>
  )
}
