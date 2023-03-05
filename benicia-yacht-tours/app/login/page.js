import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  return (
    <main className={styles.main}>
      <Link className={inter.className} href="/login/dashboard">Login</Link>
    </main>
  )
}
