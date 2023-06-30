import Image from 'next/image'
import { Inter, Poppins, Roboto } from 'next/font/google'
import styles from './page.module.css'
import FZlayout from './components/layout/FZlayout'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'] , weight:["100", "200", "300", "400", "500"] })
const roboto = Roboto({ subsets: ['latin'] , weight:["100", "300", "400", "500"] })



export default function Home() {
  return (
    <main className={poppins.className} >
      <FZlayout />
    </main>
  )
}
