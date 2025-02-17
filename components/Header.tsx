import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">MedExel</div>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link href="#about" className="hover:text-blue-600">About Us</Link></li>
          <li><Link href="#doctors" className="hover:text-blue-600">Doctors</Link></li>
          <li><Link href="#appointment" className="hover:text-blue-600">Appointment</Link></li>
          <li><Link href="#services" className="hover:text-blue-600">Services</Link></li>
          <li><Link href="/register" className="hover:text-blue-600">Register</Link></li>
          <li><Link href="/consultation" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Try Free Consultation</Link></li>
        </ul>
      </nav>
    </header>
  )
}

