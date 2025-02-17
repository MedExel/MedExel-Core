export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Find Doctors</h3>
            <ul className="space-y-1">
              <li>Neurologists</li>
              <li>Psychiatrists</li>
              <li>Oncologists</li>
              <li>Dermatologists</li>
              <li>Cardiologists</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Staff</h3>
            <ul className="space-y-1">
              <li>Manager</li>
              <li>Offer jobs</li>
              <li>SEO</li>
              <li>Help desk support</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              <li>Terms</li>
              <li>Privacy Policy</li>
              <li>How it Works</li>
              <li>About</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">More</h3>
            <ul className="space-y-1">
              <li>License</li>
              <li>Documentation</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <p>Copyright © 2023. Created with love.</p>
          <div className="space-x-2">
            <button className="bg-transparent border border-white text-white px-2 py-1">PL</button>
            <button className="bg-transparent border border-white text-white px-2 py-1">EN</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

