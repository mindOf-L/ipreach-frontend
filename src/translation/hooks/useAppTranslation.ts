import { useTranslation } from 'react-i18next'
import { AppTranslation } from '../tTranslation'

export const useAppTranslation = ({
  sentenceKey,
  dynamicValues = {},
  translationFile = 'translation',
}: AppTranslation) => {
  const { t } = useTranslation([translationFile])
  return t(sentenceKey, dynamicValues)
}
