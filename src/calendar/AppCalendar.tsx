import Calendar from 'react-calendar'

interface CalendarTile {
  date: Date
  view: 'month' | 'year' | 'decade' | 'century'
}

interface AppCalendarProps {
  onClickDay?: (date: Date) => void
}

const today = new Date()
today.setHours(0, 0, 0, 0)

const tileClassName = ({}: CalendarTile) => {
  const styles = 'rounded-md'

  return styles
}

export const AppCalendar = ({ onClickDay }: AppCalendarProps) => {
  return (
    <>
      <Calendar
        className='mx-auto w-full text-center uppercase'
        tileClassName={tileClassName}
        onClickDay={onClickDay}
      />
    </>
  )
}
