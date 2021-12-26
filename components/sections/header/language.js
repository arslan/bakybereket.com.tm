import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Link from 'next/link'
import { ChevronDownIcon, UserRemoveIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'

const flags = [
  {
    language: 'ru',
    shortName: 'Рус',
    longName: 'Русский',
    iconPath: '/ru.svg',
  },
  {
    language: 'en',
    shortName: 'Eng',
    longName: 'English',
    iconPath: '/gb.svg',
  },
  {
    language: 'tk',
    shortName: 'Tkm',
    longName: 'Türkmençe',
    iconPath: '/tm.svg',
  },
]

function Language() {
  const router = useRouter()
  const currentLang = router.locale

  const lang = { ru: 'Рус', en: 'Eng', tk: 'Tkm' }

  return (
    <Menu
      as="div"
      className="relative inline-block text-right border-x-[3px] border-solid border-light-blue"
    >
      <Menu.Button className="w-full h-max px-2 py-2 relative">
        <div className="flex justify-center">
          <a>{lang[currentLang]}</a>
          <div>
            <ChevronDownIcon className="w-5 h-5 mt-1" aria-hidden="true" />
          </div>
        </div>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-32 mt-2 origin-top-right bg-white divide-y divide-light-grey shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
          {flags.map(({ language, longName, iconPath }) => {
            return (
              <Menu.Item key={longName}>
                {({ active }) => (
                  <button className="flex w-full p-2">
                    <div className="w-5 h-5 relative mr-2 my-auto">
                      <Image src={iconPath} objectFit="contain" layout="fill" />
                    </div>
                    <Link
                      href="/"
                      locale={language}
                      className={`${active && 'bg-dark-blue'}`}
                    >
                      <a>{longName}</a>
                    </Link>
                  </button>
                )}
              </Menu.Item>
            )
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Language
