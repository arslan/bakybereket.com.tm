import Link from 'next/link'

const Footer = () => {
  return (
    <div className="px-60 bg-dark-grey">
      <div className="flex items-center justify-between min-h-min px-14 py-3">
        <div className="text-light-grey text-xs">
          © 2021/All rights reserved
        </div>
        <div className="text-very_light_grey flex items-center justify-center text-xs">
          <div className=" px-2">developed by</div>
          <Link href="https://hillitilsimat.com">
            <a className="underline text-dark-blue hover:text-sm">
              hillitilsimat.com
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
