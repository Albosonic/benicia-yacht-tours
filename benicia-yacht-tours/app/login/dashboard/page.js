import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Dashboard() {
  return (
    <main className={styles.main}>
      <h1 className={inter.className}>Dashboard</h1>
    </main>
  )
}