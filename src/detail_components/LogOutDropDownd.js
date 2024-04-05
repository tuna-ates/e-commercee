import { Menu } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const LogOutDropDown=()=>{
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

    return (
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className=" border-transparent inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:   hover:bg-gray-50">
    
              <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            </Menu.Button>
          </div>
    
    
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1"  >
              <Menu.Item      >
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                 Loguot
                  </a>
                )}
              </Menu.Item>
    
            </div>
          </Menu.Items>
    
    
          
    
    
        </Menu>
      )
}
export default LogOutDropDown;