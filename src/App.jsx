
import {Hero,PopularProducts,SuperQuality,Services,SpecialOffer,Subscribe,Footer,CustomerReviews} from "./sections/index.js";
import { Navbar } from "./components/Navbar.jsx";

function App() {

  return (
    <main className="relative">
        <Navbar />
        <section className="xl:padding-l wide:padding-r padding-b">
            <Hero />
        </section>
        <section className="padding">
         <PopularProducts />
        </section>
        <section className="padding">
            <SuperQuality />
        </section>
        <section className="padding">
            <Services />
        </section>
        <section className="padding">
            <SpecialOffer />
        </section>
        <section className="padding bg-pale-blue">
            <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
            <Subscribe />
        </section>
        <section className="bg-black text-white padding-x padding-t pb-8">
            <Footer />
        </section>

    </main>
  )
}

export default App
