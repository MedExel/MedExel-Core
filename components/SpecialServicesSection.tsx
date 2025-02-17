export default function SpecialServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Special Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Covid-19 Test</h3>
            <p>Prevention and Testing, Rapid and PCR Testing, Antibody Testing, Diagnosis and Initial Care.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Herbal Supplement</h3>
            <p>Herbal medicine uses plant-based substances to support healing and maintain health. These treatments are often used as a natural alternative or complement to conventional medicine.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Laboratory Test</h3>
            <p>1. Blood Tests<br/>2. Infection and Immunity Tests<br/>3. Hormonal and Reproductive Health Tests<br/>4. Additional Services</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Health care regular</h3>
            <p>1. General Medical Services<br/>2. Diagnostic Services<br/>3. Women's Health Services</p>
          </div>
        </div>
      </div>
    </section>
  )
}

