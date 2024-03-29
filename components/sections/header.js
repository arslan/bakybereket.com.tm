import Language from './header/language'
import Logo from './header/logo'
import MobileMenu from './header/menu'
import Nav from './header/nav'

function Header() {
  return (
    <div className="py-2 shadow-lg mb-5">
      <div className="flex md:max-w-5xl m-auto items-center">
        <Logo />
        <Nav className="grow mr-4 hidden lg:inline" />
        <MobileMenu />
        <Language />
      </div>
    </div>
  )
}

export default Header
