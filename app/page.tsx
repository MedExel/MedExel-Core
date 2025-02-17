import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Image src="/placeholder.svg" alt="MedExel Logo" width={150} height={40} className="h-10 w-auto" />
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">About Us</Button>
              <Button variant="ghost">Doctors</Button>
              <Button variant="ghost">Appointment</Button>
              <Button variant="ghost">Services</Button>
              <Button variant="outline">Register</Button>
              <Button>Try Free Consultation</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-white pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled-1-01-04-01.jpg-vDFQS9uH4DWEFCHnxdSJtWPOhXaUgI.jpeg"
                alt="MedExel Hero"
                width={600}
                height={400}
                className="w-full"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <h1 className="text-[#1B2C56] text-4xl lg:text-5xl font-bold mb-6">
                We Are Ready to <span className="text-[#40C7CF]">Help Your Health</span> Problems
              </h1>
              <p className="text-gray-600 mb-8">
                In times like today, your health is very important, especially since the number of COVID-19 cases is
                increasing day by day, so we are ready to help you with your health consultation
              </p>
              <Button size="lg">Try Free Consultation</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-[#1B2C56] text-4xl font-bold">200+</h3>
              <p className="text-gray-600">Active Doctor</p>
            </div>
            <div className="text-center">
              <h3 className="text-[#1B2C56] text-4xl font-bold">15K+</h3>
              <p className="text-gray-600">Active User</p>
            </div>
            <div className="text-center">
              <h3 className="text-[#1B2C56] text-4xl font-bold">50+</h3>
              <p className="text-gray-600">Active Pharmacy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">
            <span className="text-[#1B2C56] text-3xl font-bold">Our </span>
            <span className="text-[#40C7CF] text-3xl font-bold">Main Services</span>
            <br />
            <span className="text-[#1B2C56] text-3xl font-bold">Categories</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="mb-6">
                <Image src="/placeholder.svg" alt="Chat with doctor" width={60} height={60} />
              </div>
              <h3 className="text-[#1B2C56] text-xl font-semibold mb-4">Chat with doctor</h3>
              <p className="text-gray-600 mb-6">
                You can connect directly, quickly and easily, and there is no need to doubt the quality of the
                consultation and treatment offered.
              </p>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </div>
            <div className="bg-[#40C7CF] p-8 rounded-2xl shadow-lg text-white">
              <div className="mb-6">
                <Image src="/placeholder.svg" alt="Health store" width={60} height={60} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Health Store</h3>
              <p className="mb-6">
                Talk about the health complaints you are experiencing and don't hesitate to ask about the proper
                treatment.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="border-white text-white hover:bg-white hover:text-[#40C7CF]"
              >
                Learn More
              </Button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="mb-6">
                <Image src="/placeholder.svg" alt="First Aid" width={60} height={60} />
              </div>
              <h3 className="text-[#1B2C56] text-xl font-semibold mb-4">First Aid and Wound Care</h3>
              <p className="text-gray-600 mb-6">
                Get priority services in hospitals with MedExel, which allows you to go to the hospital more practically
                in Emergency and Urgent Care.
              </p>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[#1B2C56] text-3xl font-bold">Our Doctors</h2>
            <h3 className="text-[#40C7CF] text-3xl font-bold">Qualified Doctors</h3>
            <p className="text-gray-600 mt-4">
              Handled directly by general doctors and professional
              <br />
              and experienced specialists doctors
            </p>
          </div>
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled-1-01-04-03.jpg-mPJNLDxQlfoveUMcglpkkulYCcyn7V.jpeg"
              alt="Qualified Doctors"
              width={1200}
              height={600}
              className="w-full rounded-2xl"
            />
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
              <Button variant="ghost" size="icon" className="bg-white/80 rounded-full">
                •
              </Button>
              <Button variant="ghost" size="icon" className="bg-white/80 rounded-full">
                •
              </Button>
              <Button variant="default" size="icon" className="rounded-full">
                •
              </Button>
              <Button variant="ghost" size="icon" className="bg-white/80 rounded-full">
                •
              </Button>
              <Button variant="ghost" size="icon" className="bg-white/80 rounded-full">
                •
              </Button>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button size="lg">View All Doctors</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[#1B2C56] text-3xl font-bold mb-8">Get started with MedExel</h2>
          <div className="flex justify-center gap-4">
            <Button size="lg">Try Free Consultation</Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

