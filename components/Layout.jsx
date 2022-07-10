import { Fragment } from "react"
import Meta from "./Meta"

/**
 * Layout component
 * @param {{ title: string, description?: string, imageURL?: string, children?: import("react").ReactNode }} props
 * @returns 
 */
export default function Layout({ title, description, imageURL, children }) {
    return <Fragment>
        <Meta {...{ title, description, imageURL }} />

        <main>
            {children}
        </main>
    </Fragment>
}