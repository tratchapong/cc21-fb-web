import { SearchIcon } from '../icons'
import MenuItem from './MenuItem'
import Avatar from './Avatar'

function SidebarContact() {
  return (
    <div className='fixed top-14 right-0 p-2 h-full w-[350px] overflow-auto flex flex-col gap-2 max-xl:hidden'>
      <div className="flex justify-between text-gray-500">
        <span>contact</span>
        <div className="flex gap-2">
          <SearchIcon />
          ...
        </div>
      </div>
      <MenuItem  
        icon={Avatar}
        text="Nile Codecamp20"
        className="w-11 h-11 rounded-full bg-slate-200"
        imgSrc='https://www.svgrepo.com/show/303599/spider-man-4-logo.svg'
      />
      <MenuItem  
        icon={Avatar}
        text="Judo Codecamp20"
        className="w-11 h-11 rounded-full bg-slate-200"
        imgSrc='https://www.svgrepo.com/show/107388/iron-man.svg'
      />
      <MenuItem  
        icon={Avatar}
        text="Pik Codecamp20"
        className="w-11 h-11 rounded-full bg-slate-200"
        imgSrc='https://www.svgrepo.com/show/163518/catwoman.svg'
      />
    </div>
  )
}

export default SidebarContact