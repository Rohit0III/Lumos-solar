'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sun, Zap, Tv, Fan, Laptop, Smartphone, Shield, CreditCard, CheckCircle, Phone, Mail, MapPin, Star, Users, Award, ArrowRight, Play, Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function LumosSolarWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-black to-blue-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
        </div>
      </div>

      {/* Header with Glass Effect */}
      <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Sun className="h-10 w-10 text-yellow-400 animate-spin" style={{animationDuration: '8s'}} />
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Lumos Solar
              </span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {['Home', 'Services', 'Products', 'Plans', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="relative text-white/80 hover:text-yellow-400 transition-all duration-300 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Button className="hidden md:block bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold shadow-lg hover:shadow-yellow-500/25 transition-all duration-300">
                Get Quote
              </Button>
              <button 
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
            {['Home', 'Services', 'Products', 'Plans', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-white hover:text-yellow-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section with Parallax */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <Image
            src="/solar.jpg"
            alt="Futuristic solar installation"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 border-green-500/30 backdrop-blur-sm">
                  ⚡ Revolutionary Solar Technology
                </Badge>
                
                <h1 className="text-5xl md:text-7xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                    Power
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                    Tomorrow
                  </span>
                  <br />
                  <span className="text-white">Today</span>
                </h1>
                
                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                  Experience the future of energy with Lumos Solar. We revolutionize your power consumption with 
                  <span className="text-yellow-400 font-semibold"> zero upfront costs</span> and 
                  <span className="text-green-400 font-semibold"> install-first payment plans</span>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Start Solar Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="group border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full transition-all duration-300"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
            
            {/* 3D Solar Panel Visualization */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] ">
                <Image
                  src="/solar-2.jpg"
                  alt="3D Solar System"
                  fill
                  className="object-contain drop-shadow-2xl "
                  priority
                />
                
                {/* Floating Energy Indicators */}
                <div className="absolute top-10 right-10 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-4 border border-green-500/30 animate-pulse">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                    <span className="text-green-400 font-semibold">Live Energy</span>
                  </div>
                  <p className="text-2xl font-bold text-white mt-1">2.4kW</p>
                </div>
                
                <div className="absolute bottom-10 left-10 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-4 border border-yellow-500/30 animate-bounce">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-yellow-400 font-semibold">Savings</span>
                  </div>
                  <p className="text-2xl font-bold text-white mt-1">$127/mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-blue-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "500+", label: "Happy Customers", color: "from-blue-400 to-purple-400" },
              { icon: Sun, number: "1000+", label: "Solar Installations", color: "from-yellow-400 to-orange-400" },
              { icon: Award, number: "5", label: "Years Experience", color: "from-green-400 to-teal-400" },
              { icon: Star, number: "4.9", label: "Customer Rating", color: "from-pink-400 to-red-400" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group text-center transform hover:scale-110 transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`mx-auto mb-4 w-20 h-20 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-lg transition-all duration-300`}>
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-black text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {stat.number}
                </div>
                <p className="text-gray-400 group-hover:text-white transition-colors">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Features with Hexagonal Design */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Why Choose
              </span>
              <br />
              <span className="text-white">Lumos Solar?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Install First, Pay Later",
                description: "Revolutionary approach - we install your complete solar system before you make any payment. Zero upfront costs!",
                image: "/install.png",
                gradient: "from-green-500 to-teal-500"
              },
              {
                title: "Flexible Payment Plans",
                description: "Choose from 12, 18, or 24-month installment plans designed to fit your budget perfectly.",
                image: "/flexibleww.jpg",
                gradient: "from-blue-500 to-purple-500"
              },
              {
                title: "Complete Solar Ecosystem",
                description: "From consultation to maintenance, we provide end-to-end solar solutions with cutting-edge technology.",
                image: "/solar eco sys.jpg",
                gradient: "from-yellow-500 to-orange-500"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative"
              >
                {/* Hexagonal Card */}
                <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                  {/* Glowing Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6">
                      <Image
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        width={200}
                        height={200}
                        className="w-full h-48 object-cover rounded-2xl"
                      />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products with Floating Cards */}
      <section id="products" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-white">Power Your</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Digital Life
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our advanced solar systems seamlessly power all your essential devices with clean, renewable energy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Tv, 
                title: "50W Smart TVs", 
                description: "Crystal clear entertainment powered by the sun",
                image: "/solartv.jpeg",
                color: "from-blue-500 to-cyan-500"
              },
              { 
                icon: Fan, 
                title: "DC Ceiling Fans", 
                description: "Whisper-quiet cooling with maximum efficiency",
                image: "/dc celling.jpg",
                color: "from-green-500 to-emerald-500"
              },
              { 
                icon: Laptop, 
                title: "Laptop Charging", 
                description: "Uninterrupted productivity with solar power",
                image: "/laptop charging.webp",
                color: "from-purple-500 to-pink-500"
              },
              { 
                icon: Smartphone, 
                title: "Phone Charging", 
                description: "Stay connected with renewable energy",
                image: "/mobile charging.jpg",
                color: "from-orange-500 to-red-500"
              }
            ].map((product, index) => (
              <div 
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 hover:rotate-1">
                  {/* Floating Icon */}
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r ${product.color} rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <product.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="pt-8 text-center">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={150}
                      height={150}
                      className="w-full h-32 object-cover rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                      {product.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revolutionary Payment Plans */}
      <section id="plans" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/20 via-transparent to-blue-900/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-white">Payment Plans</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your energy needs. We install first, you pay later!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                duration: "12 Months",
                popular: false,
                features: ["No upfront payment", "Basic solar system", "1-year warranty", "Email support"],
                gradient: "from-blue-500 to-purple-500",
                borderGradient: "from-blue-400 to-purple-400"
              },
              {
                name: "Popular",
                duration: "18 Months",
                popular: true,
                features: ["No upfront payment", "Enhanced solar system", "2-year warranty", "Priority support", "Free maintenance"],
                gradient: "from-yellow-500 to-orange-500",
                borderGradient: "from-yellow-400 to-orange-400"
              },
              {
                name: "Premium",
                duration: "24 Months",
                popular: false,
                features: ["No upfront payment", "Premium solar system", "3-year warranty", "24/7 support", "Free upgrades"],
                gradient: "from-green-500 to-teal-500",
                borderGradient: "from-green-400 to-teal-400"
              }
            ].map((plan, index) => (
              <div 
                key={index}
                className={`relative group ${plan.popular ? 'transform scale-110 z-10' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold px-4 py-1 rounded-full shadow-lg">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border-2 border-gradient-to-r ${plan.borderGradient} hover:from-white/20 hover:to-white/10 transition-all duration-500 transform hover:scale-105`}>
                  {/* Glowing Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 text-center">
                    <div className={`mx-auto mb-6 w-20 h-20 bg-gradient-to-r ${plan.gradient} rounded-full flex items-center justify-center shadow-2xl`}>
                      <CreditCard className="h-10 w-10 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name} Plan</h3>
                    <div className="text-4xl font-black text-yellow-400 mb-6">{plan.duration}</div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button className={`w-full bg-gradient-to-r ${plan.gradient} hover:shadow-lg hover:shadow-current/25 text-white font-bold py-3 rounded-full transition-all duration-300 transform hover:scale-105`}>
                      Choose {plan.name}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Video Style */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-white">Customer</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Homeowner",
                image: "/testimonialdd.avif",
                quote: "Lumos Solar transformed my energy bills! The install-first approach made it so easy to get started.",
                rating: 5,
                savings: "$150/month"
              },
              {
                name: "Michael Chen",
                role: "Small Business Owner",
                image: "/testimonialdd.avif",
                quote: "The flexible payment plan was perfect for my budget. Professional service from start to finish!",
                rating: 5,
                savings: "$300/month"
              },
              {
                name: "Emma Davis",
                role: "Tech Professional",
                image: "/testimonialdd.avif",
                quote: "My entire home office runs on solar now. Best investment I've ever made for my productivity!",
                rating: 5,
                savings: "$200/month"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4 border-2 border-yellow-400"
                    />
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      <div className="flex text-yellow-400 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 italic mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-lg p-3 border border-green-500/30">
                    <p className="text-green-400 font-semibold text-center">
                      Saves {testimonial.savings}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact with Futuristic Design */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/30 via-transparent to-blue-900/30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Ready to Go
              </span>
              <br />
              <span className="text-white">Solar?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied customers who've made the switch to clean, affordable solar energy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Phone,
                title: "Call Us",
                info: "08033956612",
                subtitle: "Mon-Fri 8AM-6PM",
                gradient: "from-blue-500 to-purple-500"
              },
              {
                icon: Mail,
                title: "Email Us",
                info: "adollyboy@gmail.com",
                subtitle: "24/7 Support",
                gradient: "from-green-500 to-teal-500"
              },
              {
                icon: MapPin,
                title: "Visit Us",
                info: "Nigeria",
                subtitle: "Sango Ota ",
                gradient: "from-yellow-500 to-orange-500"
              }
            ].map((contact, index) => (
              <div 
                key={index}
                className="group text-center"
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105">
                  <div className={`mx-auto mb-6 w-20 h-20 bg-gradient-to-r ${contact.gradient} rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{contact.title}</h3>
                  <p className="text-yellow-400 font-semibold text-lg mb-1">{contact.info}</p>
                  <p className="text-gray-400 text-sm">{contact.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold px-12 py-4 rounded-full shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-110"
            >
              <Sun className="mr-3 h-6 w-6 group-hover:animate-spin" />
              Get Your Free Solar Quote
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="relative">
                <Sun className="h-8 w-8 text-yellow-400" />
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Lumos Solar
              </span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © 2024 Lumos Solar Energy Distribution. Powering the future with clean energy.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
