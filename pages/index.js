import Head from 'next/head'
import Footer from '../components/footer'

function HomePage() {
  return (
    <div className="md:container">
      <Head>
        <title>Baky Bereket</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <header className="header">
          <div className="container">
            <div className="flex justify-between items-center ">
              <a className="logo" href="#">
                <img className="logo_img" src="/logo.svg" alt="" />
                <img className="logo_titles" src="/logo_titles.svg" alt="" />
              </a>
              <nav className="menu">
                <ul className="menu__list">
                  <li className="menu__item">
                    <a className="menu__link" href="#section1">
                      Главная
                    </a>
                  </li>
                  <li className="menu__item">
                    <a className="menu__link" href="#section2">
                      Проекты
                    </a>
                  </li>
                  <li className="menu__item">
                    <a className="menu__link" href="#section3">
                      О Нас
                    </a>
                  </li>
                  <li className="menu__item">
                    <a className="menu__link" href="#section4">
                      Контакты
                    </a>
                  </li>

                  <li className="menu__item">
                    <button className="menu__link" href="#">
                      <img className="len__left" src="/len_left.svg" alt="" />
                      РУ
                      <img className="pointer" src="/pointer_down.svg" alt="" />
                      <img className="len__right" src="/len_right.svg" alt="" />
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <div id="section1">
          <h1>Section Главная</h1>
        </div>
        <div id="section2">
          <h1>Section Проекты</h1>
        </div>
        <div id="section3">
          <h1>Section Нас</h1>
        </div>
        <div id="section4">
          <h1>Section Контакты</h1>
        </div>

        <Footer />
      </body>
    </div>
  )
}

export default HomePage
