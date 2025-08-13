import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Users, Award, Zap, Shield, ArrowRight } from 'lucide-react'
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">Digital Giant Global Limited</h1>
              </div>
            </div>
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
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
              <span className="block">Professional IT Solutions</span>
              <span className="block text-blue-600">for Your Business</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Leading provider of web development, CRM solutions, and digital transformation services in Hong Kong since 2015.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Button size="lg" className="w-full">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Button variant="outline" size="lg" className="w-full bg-transparent">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-6 w-6 text-blue-600 mr-2" />
                  Web Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Custom websites and web applications built with modern technologies and best practices.
                </p>
                <Link href="/services#web-development">
                  <Button variant="outline" size="sm">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-6 w-6 text-blue-600 mr-2" />
                  CRM Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Streamline your customer relationships with our powerful CRM systems and integrations.
                </p>
                <Link href="/services#crm-solutions">
                  <Button variant="outline" size="sm">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 text-blue-600 mr-2" />
                  IT Consulting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Expert guidance on technology strategy, digital transformation, and system optimization.
                </p>
                <Link href="/services#it-consulting">
                  <Button variant="outline" size="sm">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
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
            <Card className="text-center bg-gradient-to-br from-blue-50 to-indigo-100 border-0">
              <CardHeader>
                <Award className="h-12 w-12 text-blue-600 mx-auto" />
                <CardTitle>10+ Years Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Decade of expertise in delivering successful IT solutions</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-green-50 to-emerald-100 border-0">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mx-auto" />
                <CardTitle>Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Skilled professionals dedicated to your success</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-purple-50 to-violet-100 border-0">
              <CardHeader>
                <Zap className="h-12 w-12 text-purple-600 mx-auto" />
                <CardTitle>Cutting-edge Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Latest tools and frameworks for optimal performance</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-orange-50 to-red-100 border-0">
              <CardHeader>
                <Shield className="h-12 w-12 text-orange-600 mx-auto" />
                <CardTitle>24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Round-the-clock assistance when you need it most</p>
              </CardContent>
            </Card>
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
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-8 w-8 text-blue-600 mx-auto" />
                <CardTitle>Address</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  17/F, 80 Gloucester Road
                  <br />
                  Wan Chai, Hong Kong
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="h-8 w-8 text-blue-600 mx-auto" />
                <CardTitle>Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">+852 9790 8638</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="h-8 w-8 text-blue-600 mx-auto" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">info@digitalgiantglobal.com</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-8 w-8 text-blue-600 mx-auto" />
                <CardTitle>Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Mon-Fri: 9:30 AM - 6:30 PM HKT
                  <br />
                  Sat-Sun: Closed
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button size="lg">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
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
              <Badge variant="secondary">Web Development</Badge>
              <Badge variant="secondary">CRM Solutions</Badge>
              <Badge variant="secondary">IT Consulting</Badge>
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
