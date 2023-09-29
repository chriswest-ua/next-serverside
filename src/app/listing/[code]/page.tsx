import styles from '../listing-page.module.scss'
import { CountryListing } from '@/components/server-side/CountryListing/CountryListing.server'

export default function CountryLander({params}: any) {

  return (
    <main className={styles.ListingPage}>
      <div className={styles['content-layout']}>
        <CountryListing selected={params.code} />
        <div>
            Specific COUNTRY! {params.code}
        </div>
        
      </div>
    </main>
  )
}
