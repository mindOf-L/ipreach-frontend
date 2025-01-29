import { Moon, Sun } from "lucide-react"
import { Button } from "../common/components/Button"
import { Footer } from "../common/components/Footer"
import { isDarkMode, toggleColorSchema } from "../utils/colorSchema"
import { useState } from "react"
import { Span } from "../common/components/Span"

export const AppFooter = () => {
  const [dark, setDark] = useState(isDarkMode())
  const handleClick = () => {
    toggleColorSchema()
    setDark(!dark)
  }
  return (
    <Footer className="bg-slate-200 dark:bg-slate-800 w-full min-h-16 flex justify-around items-center absolute bottom-0">
      <Span>iPreach 2025</Span>
      <Button onClick={handleClick}>
        {dark && <Sun />}
        {dark || <Moon />}
      </Button>
    </Footer>
  )
}