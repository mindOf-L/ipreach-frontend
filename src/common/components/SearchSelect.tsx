import {
  ChangeEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { Input } from './HTML/Input'
import { Ul } from './HTML/Ul'
import { Li } from './HTML/Li'
import { Nav } from './HTML/Nav'
import { ChevronDown } from 'lucide-react'
import { useDetectClickOutside } from '../hooks/useDetectClickOutside'

interface SearchSelectProps {
  onInputChange?: (e: ChangeEvent<HTMLInputElement>) => unknown
  onSelect?: (option: Option) => unknown
  options?: Option[]
  placeholder?: string
  inputDefault?: string
}

export interface Option {
  label: string
  value: string | number
}
export type SearchSelectRef = {
  reset: () => void
}

export const SearchSelect = forwardRef<SearchSelectRef, SearchSelectProps>(
  (
    { onInputChange, onSelect, options, placeholder, inputDefault },
    searchSelectRef
  ) => {
    const [showOptions, setShowOptions] = useState(false)
    const [inputValue, setInputValue] = useState(inputDefault || '')
    const ref = useRef(null)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value)
      onInputChange && onInputChange(e)
    }

    const handleSelect = (option: Option) => () => {
      setInputValue(option.label)
      setShowOptions(false)
      onSelect && onSelect(option)
    }

    useDetectClickOutside({
      ref,
      onClickedOutside: () => setShowOptions(false),
    })

    useImperativeHandle(searchSelectRef, () => ({
      reset,
    }))

    const reset = () => setInputValue('')

    return (
      <Nav ref={ref} className='relative flex items-center'>
        <Input
          type='text'
          onChange={handleChange}
          value={inputValue}
          onClick={() => setShowOptions(true)}
          placeholder={placeholder}
        />
        <ChevronDown className='text-primary-8 pointer-events-none absolute right-0' />
        {(options?.length || 0) > 0 && (
          <Ul
            className={`absolute z-10 bg-slate-100 dark:bg-slate-900 ${!showOptions && 'hidden'} top-11 w-full rounded-md border-1 border-slate-900 px-2 dark:border-slate-100`}
          >
            {options?.map((o) => (
              <Li
                key={o.value}
                onClick={handleSelect(o)}
                className='my-1 rounded-none first:rounded-t-md last:rounded-b-md hover:bg-slate-200 dark:hover:bg-slate-800'
              >
                {o.label}
              </Li>
            ))}
          </Ul>
        )}
      </Nav>
    )
  }
)
