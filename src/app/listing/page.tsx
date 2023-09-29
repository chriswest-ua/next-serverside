import Image from 'next/image'
import styles from './listing-page.module.scss'
import { CountryListing } from '@/components/server-side/CountryListing/CountryListing.server'

export default function ListingPage() {
  return (
    <main className={styles.ListingPage}>
      <div className={styles['content-layout']}>
        <CountryListing />
        <div>
            Content on the listing page.
        </div>
        
      </div>
    </main>
  )
}
