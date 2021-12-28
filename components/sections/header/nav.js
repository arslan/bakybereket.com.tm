import { useTranslation } from 'next-i18next'

function Nav(props) {
  const { t } = useTranslation('common')
  const navigation = [
    { name: 'header.home', href: '#home' },
    { name: 'header.projects', href: '#projects' },
    { name: 'header.about', href: '#about' },
    { name: 'header.gallery', href: '#gallery' },
    { name: 'header.contacts', href: '#contacts' },
  ]
  return (
    <div {...props}>
      <ul className="flex justify-end mr-6">
        {navigation.map(({ name, href }) => {
          return (
            <li className="mx-4" key={name}>
              <a href={href}>{t(name)}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Nav
