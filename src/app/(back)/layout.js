import '../globals-back.css'
import SupabaseProvider from './supabase-provider'

export const metadata = {
  title: 'Next Admin',
  description: 'Admin Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><SupabaseProvider>{children}</SupabaseProvider></body>
    </html>
  )
}
