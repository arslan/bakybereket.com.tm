import Head from "next/head";
import Header from "../components/sections/header";
import Hero from "../components/sections/hero";
import ContactsSection from "../components/sections/contacts";
import Footer from "../components/footer";

function HomePage() {
  return (
    <>
      <Head>
        <title>Baky Bereket</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;900&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body className="font-sans">
        <Header />
        <div className="max-w-5xl mx-auto">
          <Hero />

          <ContactsSection />
        </div>
        <Footer />
      </body>
    </>
  );
}

export default HomePage;
