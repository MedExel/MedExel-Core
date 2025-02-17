import Link from 'next/link'

export default function HomeSection() {
  return (
    <section className="bg-blue-50 py-20 mt-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">We Are Ready to Help Your Health Problems</h1>
        <p className="mb-6 max-w-2xl">
          In times like today, your health is very important, especially since the number of COVID-19 cases is
          increasing day by day, so we are ready to help you with your health consultation
        </p>
        <Link href="/get-started" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Let's Get Started
        </Link>
      </div>
    </section>
  )
}

