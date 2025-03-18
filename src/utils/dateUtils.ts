export const getDateYYYYMMDD = (date: Date = new Date()) =>
  date.toLocaleDateString('sv-SE')

export const getDateFromInput = (date: string) =>
  getApiFormattedDate(new Date(date))

export const getApiFormattedDate = (date: Date = new Date()) =>
  date.toISOString().slice(0, 19)

//TODO cambiar el idioma para que sea variable
export const formatDateShort = (date: Date) =>
  date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
  })
