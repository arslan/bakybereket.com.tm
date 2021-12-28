import Link from 'next/link'

const Footer = () => {
  return (
    <div className="px-5 bg-dark-grey">
      <div className="flex max-w-5xl m-auto items-center justify-between min-h-min py-3">
        <p className="text-light-grey text-xs">
          © 2021 / All rights reserved. / IE "Baky Bereket"
        </p>
        <div className="text-light-grey flex items-center justify-center text-xs pl-7">
          <Link href="https://hillitilsimat.com">
            <a>
              <p className="pr-1">
                developed by&nbsp;
                <span className="text-dark-blue underline">
                  hillitilsimat.com
                </span>
              </p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
