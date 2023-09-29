import { revalidatePath } from 'next/cache'
import styles from './Satellite.module.scss'
import { cache } from 'react'

async function getSatelliteInfo() {
    const res = await fetch(`https://api.wheretheiss.at/v1/satellites/25544`, { next: { revalidate: 10 } })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    console.log('MADE SATELLITE API CALL!')
    return res.json()
  }

export const revalidate = 10
export const Satellite = async () => {
    const satelliteRes = await getSatelliteInfo()
    return (
        <div className={styles.Satellite}>
            <h4>Realtime Satellite Tracker</h4>
            <p>Name: {satelliteRes.name}:  Timestamp: {satelliteRes.timestamp}, Long: {satelliteRes.longitude} Lat: {satelliteRes.latitude}</p>
        </div>
    )
}