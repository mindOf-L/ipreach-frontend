import { toast } from 'sonner'

export const handleCopyText = async (value: string) => {
  await navigator.clipboard.writeText(value)
  toast.info('Texto copiado al portapapeles!')
}
