import '../globals-back.css'
import SupabaseProvider from './provider/supabase'

export const metadata = {
  title: 'NextCongress',
  description: 'Admin Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><SupabaseProvider>{children}</SupabaseProvider></body>
    </html>
  )
}
