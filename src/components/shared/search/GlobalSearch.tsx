import Image from 'next/image'
import SearchIcon from '../../../../public/assets/icons/search.svg'
import { Input } from '@/components/ui/input'

const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
        <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
            <Image
            src={SearchIcon}
            width={24}
            height={24}
            alt="Search"
            className='cursor-pointer'
            />
            <Input
            className='paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none text-dark-100 dark:text-light-900'
            type='text'
            placeholder='Search globally'
            />
        </div>
    </div>
  )
}

export default GlobalSearch