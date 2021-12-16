import Link from 'next/link'

const Footer = () => {
  return (
    <div className="flex items-center justify-between px-60 bg-vary_dark_grey h-11">
      <div className="text-vary_light_grey">© 2021/All rights reserved</div>
      <div className="text-vary_light_grey">
        <divc className="justify-between">developed by </divc>
        <Link href="https://hillitilsimat.com">
          <a>hillitilsimat.com</a>
        </Link>
      </div>
    </div>
  )
}

export default Footer
