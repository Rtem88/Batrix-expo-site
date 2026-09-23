import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata={title:'Batrix Expo — Industrial wood packaging',description:'Custom pallets, crates and export packaging made for demanding logistics.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="uk"><body>{children}</body></html>}
