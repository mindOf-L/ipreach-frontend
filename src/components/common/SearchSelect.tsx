import {
  ChangeEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { Input } from './Input'
import { Ul } from './Ul'
import { Li } from './Li'
import { Nav } from './Nav'
import { useDetectClickOutside } from '../../features/common/hooks/useDetectClickOutside'
import { ChevronDown } from 'lucide-react'

interface SearchSelectProps {
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => unknown
  onSelect: (option: Option) => unknown
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
      onInputChange(e)
    }

    const handleSelect = (option: Option) => () => {
      setInputValue(option.label)
      setShowOptions(false)
      onSelect(option)
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
            className={`bg-primary-2 dark:bg-primary-8 absolute z-10 ${!showOptions && 'hidden'} top-11`}
          >
            {options?.map((o) => (
              <Li
                key={o.value}
                onClick={handleSelect(o)}
                className='hover:bg-secondary-2 dark:hover:bg-secondary-4 rounded-none first:rounded-t-md last:rounded-b-md'
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
