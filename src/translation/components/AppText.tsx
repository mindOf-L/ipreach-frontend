import { useTranslation } from 'react-i18next'

interface AppTextParameters {
  sentenceKey: string
  dynamicValues?: {}
  translationFile?: string
}

export const AppText = ({
  sentenceKey,
  dynamicValues = {},
  translationFile = 'translation',
}: AppTextParameters) => {
  const { t } = useTranslation([translationFile])
  return <>{t(sentenceKey, dynamicValues)}</>
}
