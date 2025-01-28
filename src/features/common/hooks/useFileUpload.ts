import { ChangeEvent, useRef, useState } from 'react'
import { toast } from 'sonner'

export const useFileUpload = () => {
  const [file, setFile] = useState<File | null>(null)
  const inputFileRef = useRef<HTMLInputElement>(null)
  const handleAddFile = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const file = (e.target.files ?? [])[0]
    console.log(e.target.files)
    if (!file) {
      return
    }

    if (file.size > 2000000) {
      toast.error('El archivo no puede ser mayor de 2MB.')
      return
    }

    setFile(file)
  }

  const handleRemoveFile = () => {
    inputFileRef.current!.value = ''
    console.log(inputFileRef.current?.files)
    setFile(null)
  }

  return { inputFileRef, handleAddFile, handleRemoveFile, file }
}
