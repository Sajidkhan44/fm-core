
import Banner from '../pages/Banner'
import ContactForm from '../pages/ContactForm'
import Gallery from '../pages/Gallery'
import QuickServiceSection from '../pages/QuickServiceSection'
import Services from '../pages/Services'
import Footer from './Footer'
import Navbar from './Navbar'

export default function FZlayout() {
  return (
    <div className='w-[98%] mx-auto'>
    <Navbar />
    <Banner />
    <Services />
    <Gallery />
    <QuickServiceSection />
    <ContactForm />
    <Footer />
    </div>
  )
}
