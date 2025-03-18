import { Option, SearchSelect } from '../../common/components/SearchSelect'
import { useAppTranslation } from '../../translation/hooks/useAppTranslation'
import { LOCATION_PLACEHOLDER_ENTRY } from '../../translation/tTranslation'
import { useGetLocationsQuery } from '../hooks/locationsQueries'
import { Location } from '../tLocations'

interface LocationSelectProps {
  selectLocation: (location: Location) => void
}

export const LocationSelect = ({ selectLocation }: LocationSelectProps) => {
  const locationPlaceholder = useAppTranslation({
    sentenceKey: LOCATION_PLACEHOLDER_ENTRY,
  })
  const { data: locations } = useGetLocationsQuery()

  const handleSelectLocation = (option: Option) => {
    const location = locations?.find((location) => location.id === option.value)
    location && selectLocation(location)
  }

  return (
    <SearchSelect
      onSelect={handleSelectLocation}
      placeholder={locationPlaceholder}
      options={locations?.map((location) => ({
        label: location.name,
        value: location.id,
      }))}
    />
  )
}
