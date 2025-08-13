import { ArrowRight, Users, Award, Target, Globe, Calendar, MapPin, Phone, Mail, Clock, Building, Lightbulb } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">Digital Giant Global Limited</h1>
              </Link>
            </div>
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/services" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Services
                </Link>
                <Link href="/contact" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
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
              <span className="block">About</span>
              <span className="block text-blue-600">Digital Giant Global</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Leading Hong Kong IT solutions provider since 2015, transforming businesses through technology
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Story</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              A decade of innovation and excellence in IT solutions
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Company Foundation */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Building className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Founded in 2015</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Established in Hong Kong with a vision to provide cutting-edge IT solutions to businesses across Asia-Pacific region.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 text-green-500 mr-2" />
                  Hong Kong Headquarters
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 text-green-500 mr-2" />
                  Expert Team Assembly
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Target className="h-4 w-4 text-green-500 mr-2" />
                  Clear Vision & Mission
                </div>
              </div>
            </div>

            {/* Growth & Expansion */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Growth & Innovation</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Continuous expansion of services and expertise, adapting to emerging technologies and market demands.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Award className="h-4 w-4 text-green-500 mr-2" />
                  Service Portfolio Expansion
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Lightbulb className="h-4 w-4 text-green-500 mr-2" />
                  Technology Innovation
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 text-green-500 mr-2" />
                  Client Base Growth
                </div>
              </div>
            </div>

            {/* Current Success */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Today's Success</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Trusted partner for 200+ businesses, delivering exceptional results and maintaining long-term relationships.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Target className="h-4 w-4 text-green-500 mr-2" />
                  200+ Satisfied Clients
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Globe className="h-4 w-4 text-green-500 mr-2" />
                  Regional Market Leader
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Award className="h-4 w-4 text-green-500 mr-2" />
                  Industry Recognition
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Mission & Vision</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Driving digital transformation across Hong Kong and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Target className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, improve efficiency, and create lasting competitive advantages in the digital age.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Lightbulb className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the leading IT solutions provider in Asia-Pacific, recognized for excellence, innovation, and transformative impact on businesses across all industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Get In Touch</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Ready to start your digital transformation journey?
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
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

          <div className="text-center mt-12">
            <Link href="/contact">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-blue-600 text-white hover:bg-blue-700 h-11 px-8">
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </Link>
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
