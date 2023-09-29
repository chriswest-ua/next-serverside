import { Satellite } from '@/components/server-side/Satellite/Satellite.server'
import styles from '../listing-page.module.scss'
import { CountryListing } from '@/components/server-side/CountryListing/CountryListing.server'

async function getCountry(code: string) {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`, { next: { revalidate: 20 } })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  console.log('MADE COUNTRY API CALL!', code)
  return res.json()
}

export default async function CountryLander({params}: any) {
  const countryDataRes = await getCountry(params.code)
  const countryData = countryDataRes[0]

  return (
    <main className={styles.ListingPage}>
      <div className={styles['content-layout']}>
        <CountryListing selected={params.code} />
        {countryData && (<div className={styles['country-detail']}>
            <Satellite />
            <h3>{countryData.name?.common}</h3>
            <img src={countryData.flags?.png} />
            <div className={styles['metadata-table']}>
              <label>Population:</label><p>{countryData.population}</p>
            </div>
            <div className={styles['metadata-table']}>
              <label>Region:</label><p>{countryData.region}</p>
            </div>
            <div className={styles['metadata-table']}>
              <label>Capital:</label><p>{countryData.capital?.join(',')}</p>
            </div>
            <div className={styles['metadata-table']}>
              <label>Continents:</label><p>{countryData.continents?.join(',')}</p>
            </div>
            <div className={styles['metadata-table']}>
              <label>Currency:</label><p>{countryData.currencies ? Object.keys(countryData.currencies).map((currency) => (<span key={currency}>{currency}</span>)): '--'}</p>
            </div>
        </div>)}
        
      </div>
    </main>
  )
}
