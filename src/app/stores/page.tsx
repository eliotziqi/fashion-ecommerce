import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ComingSoon from '@/components/ComingSoon'

export default function StoresPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ComingSoon />
      </main>
      <Footer />
    </div>
  )
}

