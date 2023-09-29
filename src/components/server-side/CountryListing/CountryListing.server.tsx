import { Welcome, data } from "@/components/Listing/Welcome"
import { countryCodes } from "@/components/CountryCodes"
import Link from 'next/link'

export const CountryListing = ({selected}: any) => {
    return (
        <div>
            --{selected}
            <ul>
                {Object.keys(countryCodes).map((code) => (
                    <li data-selected={`${(selected === code) ? 'selected' : ''}`}><Link href={`/listing/${code}`}>{countryCodes[code]}</Link></li>
                ))}
            </ul>
        </div>
    )
}