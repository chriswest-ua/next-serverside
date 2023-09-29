import { Welcome } from "@/components/Listing/Welcome"
import { countryCodes } from "@/components/CountryCodes"
import Link from 'next/link'

export const CountryListing = ({selected}: any) => {
    return (
        <div>
            <ul>
                {Object.keys(countryCodes).map((code) => (
                    <li key={code} data-selected={`${(selected === code) ? 'selected' : ''}`}><Link href={`/listing/${code}`}>{countryCodes[code]}</Link></li>
                ))}
            </ul>
        </div>
    )
}