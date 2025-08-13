import { MapPin, Phone, Mail, Clock, Users, Award, Zap, Shield } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">Digital Giant Global Limited</h1>
              </div>
            </div>
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </a>
                <a href="/about" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </a>
                <a
                  href="/services"
                  className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </a>
                <a
                  href="/contact"
                  className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Professional IT Solutions</span>
              <span className="block text-blue-600">for Your Business</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Leading provider of web development, CRM solutions, and digital transformation services in Hong Kong since
              2015.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <button className="w-full flex justify-center py-3 px-8 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
                  Get Started
                </button>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <button className="w-full flex justify-center py-3 px-8 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold">Web Development</h3>
              </div>
              <p className="text-gray-600">
                Custom websites and web applications built with modern technologies and best practices.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold">CRM Solutions</h3>
              </div>
              <p className="text-gray-600">
                Streamline your customer relationships with our powerful CRM systems and integrations.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold">IT Consulting</h3>
              </div>
              <p className="text-gray-600">
                Expert guidance on technology strategy, digital transformation, and system optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Why Choose Digital Giant Global</h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">10+ Years Experience</h3>
              <p className="text-gray-600">Decade of expertise in delivering successful IT solutions</p>
            </div>

            <div className="text-center bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-6">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Skilled professionals dedicated to your success</p>
            </div>

            <div className="text-center bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg p-6">
              <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Cutting-edge Technology</h3>
              <p className="text-gray-600">Latest tools and frameworks for optimal performance</p>
            </div>

            <div className="text-center bg-gradient-to-br from-orange-50 to-red-100 rounded-lg p-6">
              <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance when you need it most</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Us</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Ready to transform your business? Get in touch with our experts today.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-gray-600">
                17/F, 80 Gloucester Road
                <br />
                Wan Chai, Hong Kong
              </p>
            </div>

            <div className="text-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+852 9790 8638</p>
            </div>

            <div className="text-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@digitalgiantglobal.com</p>
            </div>

            <div className="text-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
              <p className="text-gray-600">
                Mon-Fri: 9:30 AM - 6:30 PM HKT
                <br />
                Sat-Sun: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">Digital Giant Global Limited</h3>
            <p className="mt-4 text-gray-400">Professional IT Solutions for Your Business Success</p>
            <div className="mt-8 flex justify-center space-x-6">
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-gray-700 text-gray-300">
                Web Development
              </span>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-gray-700 text-gray-300">
                CRM Solutions
              </span>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-gray-700 text-gray-300">
                IT Consulting
              </span>
            </div>
            <div className="mt-8 border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">© 2025 Digital Giant Global Limited. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
