const DARK = 'dark'
const html = document.querySelector('html')
const darkMode = localStorage.getItem(DARK)

function selectInitialMode() {
  if (html === null) return

  if (
    (darkMode === null &&
      window.matchMedia('(prefers-color-scheme: dark)').matches) ||
    (darkMode !== null && JSON.parse(darkMode))
  ) {
    html.classList.add(DARK)
  }
}

export const toggleColorSchema = () => {
  html?.classList.toggle(DARK)
  localStorage.setItem(DARK, JSON.stringify(isDarkMode()))
}

export const isDarkMode = () => html?.classList.contains(DARK)

selectInitialMode()
