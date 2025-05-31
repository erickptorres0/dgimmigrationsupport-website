"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  FileText,
  Users,
  ClipboardCheck,
  Clock,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  BookOpen,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"
import LanguagePopup from "@/components/language-popup"
import { useLanguage } from "@/hooks/use-language"

export default function HomePage() {
  const { currentLanguage, changeLanguage, t } = useLanguage()

  // Services focused on forms preparation rather than legal advice
  const services = [
    {
      title: "Family-Based Immigration Forms",
      description: "Assistance with completing forms for family-based immigration petitions and applications.",
      icon: Users,
      features: [
        "Form I-130 (Petition for Alien Relative)",
        "Form I-485 (Adjustment of Status)",
        "Form I-129F (Fiancé Visa)",
        "Form I-751 (Remove Conditions on Residence)",
      ],
    },
    {
      title: "Employment-Based Forms",
      description: "Support with employment-related immigration documentation and applications.",
      icon: FileText,
      features: [
        "Form I-765 (Employment Authorization)",
        "Form I-140 (Immigrant Petition for Worker)",
        "Form I-539 (Extend/Change Nonimmigrant Status)",
        "Form I-9 Verification Assistance",
      ],
    },
    {
      title: "Citizenship & Naturalization Forms",
      description: "Help with completing forms for the naturalization process to become a U.S. citizen.",
      icon: ClipboardCheck,
      features: [
        "Form N-400 (Application for Naturalization)",
        "Form N-600 (Certificate of Citizenship)",
        "Form N-565 (Replace Naturalization Certificate)",
        "Document Organization",
      ],
    },
    {
      title: "Humanitarian Relief Forms",
      description: "Assistance with forms for asylum seekers, refugees, and victims of crime or trafficking.",
      icon: Clock,
      features: [
        "Form I-589 (Asylum Application)",
        "Form I-918 (U Nonimmigrant Status)",
        "Form I-914 (T Nonimmigrant Status)",
        "Form I-821 (Temporary Protected Status)",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <LanguagePopup onLanguageSelect={changeLanguage} />

      {/* Header */}
      <header className="border-b bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-navy-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">DG</span>
            </div>
            <span className="text-2xl font-serif font-bold text-gray-900">DG Immigration Support</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-navy-700 transition-colors font-medium">
              {t("services")}
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-navy-700 transition-colors font-medium">
              {t("about")}
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-navy-700 transition-colors font-medium">
              {t("contact")}
            </Link>
          </nav>
          <Button className="bg-navy-700 hover:bg-navy-800 text-white">{t("freeConsultation")}</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-navy-100 text-navy-700 hover:bg-navy-100">
              Professional Immigration Forms Preparation
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">{t("heroTitle")}</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">{t("heroSubtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-navy-700 hover:bg-navy-800 text-white">
                {t("requestConsultation")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-navy-700 text-navy-700 hover:bg-navy-50">
                {t("learnAboutServices")}
              </Button>
            </div>
          </div>

          {/* Important Disclaimer */}
          <div className="mt-12 max-w-3xl bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-800">{t("importantDisclaimer")}</h3>
                <p className="text-amber-700">{t("disclaimerText")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">{t("ourServices")}</h2>
            <p className="text-lg text-gray-700 max-w-3xl">{t("servicesDescription")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-navy-50 rounded-lg">
                      <service.icon className="h-6 w-6 text-navy-700" />
                    </div>
                    <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-700">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-navy-700" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-4 border-navy-700 text-navy-700 hover:bg-navy-50">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">About Our Services</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                DG Immigration Support provides comprehensive immigration forms preparation assistance to individuals,
                families, and businesses navigating the complex U.S. immigration system. Our experienced team offers
                personalized support throughout your immigration journey.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We believe in a client-centered approach, providing personalized attention to each case while
                maintaining the highest standards of professionalism and accuracy. Our commitment is to deliver
                practical solutions and clear guidance through complex immigration forms and processes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-navy-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Experienced Forms Specialists</h3>
                    <p className="text-gray-700">Knowledgeable in USCIS forms and documentation requirements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-navy-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Personalized Approach</h3>
                    <p className="text-gray-700">Customized assistance based on your specific circumstances</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-navy-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Clear Communication</h3>
                    <p className="text-gray-700">Regular updates and transparent explanations throughout the process</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Request a Consultation</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Immigration Need</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500">
                    <option>Select your immigration need</option>
                    <option>Family-Based Immigration Forms</option>
                    <option>Employment-Based Forms</option>
                    <option>Citizenship & Naturalization Forms</option>
                    <option>Humanitarian Relief Forms</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Brief Description</label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500"
                    rows={3}
                    placeholder="Briefly describe your immigration need"
                  ></textarea>
                </div>
                <Button className="w-full bg-navy-700 hover:bg-navy-800 text-white">Request Consultation</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Immigration Resources</h2>
            <p className="text-lg text-gray-700 max-w-3xl">
              Access helpful information about immigration processes and stay informed about important updates.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="pt-6">
                <BookOpen className="h-8 w-8 text-navy-700 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Immigration Guides</h3>
                <p className="text-gray-700 mb-4">
                  Access our comprehensive guides on various immigration forms and requirements.
                </p>
                <Button variant="outline" className="w-full border-navy-700 text-navy-700 hover:bg-navy-50">
                  View Guides
                </Button>
              </CardContent>
            </Card>
            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="pt-6">
                <FileText className="h-8 w-8 text-navy-700 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Latest Updates</h3>
                <p className="text-gray-700 mb-4">
                  Stay informed about recent changes in immigration forms and policies.
                </p>
                <Button variant="outline" className="w-full border-navy-700 text-navy-700 hover:bg-navy-50">
                  Read Updates
                </Button>
              </CardContent>
            </Card>
            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="pt-6">
                <Users className="h-8 w-8 text-navy-700 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">FAQ</h3>
                <p className="text-gray-700 mb-4">
                  Find answers to commonly asked questions about immigration forms and processes.
                </p>
                <Button variant="outline" className="w-full border-navy-700 text-navy-700 hover:bg-navy-50">
                  View FAQ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">{t("contactUs")}</h2>
            <p className="text-lg text-gray-700">
              We are available to address your immigration forms inquiries and provide the guidance you need.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border border-gray-200 shadow-sm text-center">
              <CardContent className="pt-6">
                <Phone className="h-8 w-8 text-navy-700 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{t("phone")}</h3>
                <p className="text-gray-700">(727) 505-7383</p>
                <p className="text-sm text-gray-600 mt-1">Monday-Friday, 9AM-5PM</p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200 shadow-sm text-center">
              <CardContent className="pt-6">
                <Mail className="h-8 w-8 text-navy-700 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{t("email")}</h3>
                <p className="text-gray-700">contact@yourfirm.com</p>
                <p className="text-sm text-gray-600 mt-1">We respond within 24 hours</p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200 shadow-sm text-center">
              <CardContent className="pt-6">
                <MapPin className="h-8 w-8 text-navy-700 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{t("office")}</h3>
                <p className="text-gray-700">123 Legal Avenue</p>
                <p className="text-gray-700">City, State ZIP</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer with Disclaimer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-navy-700 font-bold text-sm">DG</span>
                </div>
                <span className="text-xl font-serif font-bold">DG Immigration Support</span>
              </div>
              <p className="text-gray-400">
                Dedicated to providing professional immigration forms preparation services with accuracy and attention
                to detail.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Family-Based Immigration Forms</li>
                <li>Employment-Based Forms</li>
                <li>Citizenship & Naturalization Forms</li>
                <li>Humanitarian Relief Forms</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Resources</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>(727) 505-7383</li>
                <li>contact@yourfirm.com</li>
                <li>123 Legal Avenue</li>
                <li>City, State ZIP</li>
              </ul>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="bg-gray-800 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-gray-200 mb-2">Legal Disclaimer</h4>
              <p className="text-gray-400 text-sm">
                DG Immigration Support is not a law firm and does not provide legal advice. We are an immigration forms
                preparation service. The information provided on this website is for general informational purposes only
                and is not intended to be legal advice. No attorney-client relationship is formed by using our services.
                For legal advice, please consult with a licensed attorney who can give you advice tailored to your
                specific situation.
              </p>
            </div>
            <p className="text-center text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} DG Immigration Support. All rights reserved. | Privacy Policy | Terms of
              Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
