import { AppTranslation } from '../tTranslation'
import { useAppTranslation } from '../hooks/useAppTranslation'

export const AppText = (translationPrams: AppTranslation) => {
  const text = useAppTranslation(translationPrams)

  return <>{text}</>
}
