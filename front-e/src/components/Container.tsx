import { PropsWithChildren } from "react"

export const Container = ({children}:PropsWithChildren) => {
    return (
        <main className="w-screen">
            {children}
        </main>
    )
}