import Link from 'next/link'

const Footer = () => {
  return (
    <div className="px-60 bg-very_dark_grey">
      <div className="flex items-center justify-between min-h-min px-14 py-3">
        <div className="text-very_light_grey text-xs">
          © 2021/All rights reserved
        </div>
        <div className="text-very_light_grey flex items-center justify-center text-xs">
          <div className=" px-2">developed by</div>
          <Link href="https://hillitilsimat.com">
            <a className="underline text-strong_blue hover:text-sm">
              hillitilsimat.com
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
