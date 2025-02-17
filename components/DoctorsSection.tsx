import Image from 'next/image'
import Link from 'next/link'

export default function DoctorsSection() {
  return (
    <section id="doctors" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Doctors</h2>
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <Image src="/placeholder.svg" alt="Dr. James Wellington" width={300} height={200} className="w-full" />
          <div className="p-6">
            <h3 className="font-bold text-xl mb-2">Dr. James Wellington</h3>
            <p className="text-gray-700 text-base mb-4">Orthopedy</p>
            <Link href="/doctors/james-wellington" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
              Read More
            </Link>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/doctors" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            View All Doctors
          </Link>
        </div>
      </div>
    </section>
  )
}

