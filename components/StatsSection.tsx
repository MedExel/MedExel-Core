export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-blue-600 mb-2">200+</h2>
            <p className="text-gray-600">Active Doctor</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-blue-600 mb-2">15K+</h2>
            <p className="text-gray-600">Active User</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-blue-600 mb-2">50+</h2>
            <p className="text-gray-600">Active Pharmacy</p>
          </div>
        </div>
      </div>
    </section>
  )
}

