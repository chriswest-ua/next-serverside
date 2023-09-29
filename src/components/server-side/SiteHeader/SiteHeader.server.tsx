import Link from "next/link"
import { Satellite } from "../Satellite/Satellite.server"

export const SiteHeader = () => {
    return (
        <header>
            <h1>NextJS Experimentation Header (<Link href="/">home</Link>)</h1>
            <p>This content here is completely generated on the server side, and does not need any client side rendering.</p>
            <Satellite />
        </header>
    )
}