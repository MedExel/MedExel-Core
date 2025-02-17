export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Main Services Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Chat with doctor</h3>
            <p>You can connect directly, quickly and easily, and there is no need to doubt the quality of the consultation and treatment offered.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">First Aid and Wound Care</h3>
            <p>Get priority services in hospitals with MedExel. Which allows you to go to the hospital more practically in Emergency and Urgent Care.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Health Store</h3>
            <p>Talk about the health complaints you are experiencing and don't hesitate to ask about the proper treatment.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

