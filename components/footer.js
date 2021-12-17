import Link from 'next/link'

const Footer = () => {
  return (
    <div className="flex items-center justify-between px-60 bg-vary_dark_grey h-11">
      <div className="text-vary_light_grey text-xs">
        © 2021/All rights reserved
      </div>
      <div className="text-vary_light_grey flex items-center justify-center text-xs">
        <div className=" px-2">developed by</div>
        <Link href="https://hillitilsimat.com">
          <a className="underline text-strong_blue hover:text-sm">
            hillitilsimat.com
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Footer
