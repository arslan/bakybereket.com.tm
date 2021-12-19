import Link from 'next/link'

const Footer = () => {
  return (
    <div className="px-60 bg-dark-grey">
      <div className="flex items-center justify-between min-h-min px-14 py-3">
        <div className="text-light-grey text-xs">
          © 2021/All rights reserved
        </div>
        <div className="text-light-grey flex items-center justify-center text-xs pl-7">
          <div className=" pr-2">developed by</div>
          <Link href="https://hillitilsimat.com">
            <a className="text-dark-blue transition duration-300 ease-out underline underline-offset-1 animate-pulse hover:ease-in hover:-translate-y-1">
              hillitilsimat.com
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
