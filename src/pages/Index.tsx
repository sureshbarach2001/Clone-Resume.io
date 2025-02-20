
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CheckCircle,
  Star,
  Users,
  FileText,
  ChevronRight,
  Menu,
  Globe,
  Award,
  Briefcase,
  Download
} from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-primary">Resume.io</a>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <a href="/templates" className="nav-link">Templates</a>
          <a href="#examples" className="nav-link">Examples</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#resources" className="nav-link">Resources</a>
          <Button variant="ghost" className="mr-2">Log in</Button>
          <Button>Create Resume</Button>
        </div>
        
        <button className="md:hidden p-2">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </div>
  </nav>
);

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    content: "The best resume builder I've ever used. Got my dream job within weeks!",
    rating: 5,
    company: "Google",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    content: "Professional templates and easy to use. Highly recommend!",
    rating: 5,
    company: "Microsoft",
  },
  {
    name: "Emily Davis",
    role: "Marketing Director",
    content: "Outstanding service. Worth every penny! Got multiple interviews.",
    rating: 5,
    company: "Apple",
  },
];

const features = [
  {
    title: "Professional Templates",
    description: "Choose from our collection of ATS-friendly templates designed by experts",
    icon: FileText,
  },
  {
    title: "Easy to Use",
    description: "Create your resume in minutes with our intuitive builder",
    icon: CheckCircle,
  },
  {
    title: "ATS Optimized",
    description: "Ensure your resume passes applicant tracking systems every time",
    icon: Users,
  },
];

const stats = [
  { number: "10M+", label: "Resumes Created", icon: FileText },
  { number: "40M+", label: "Job Seekers Helped", icon: Users },
  { number: "120+", label: "Countries Served", icon: Globe },
  { number: "94%", label: "Success Rate", icon: Award },
];

const Index = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="min-h-screen pt-16">
      <Navbar />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Create a professional resume in minutes
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Land your dream job with our easy-to-use resume builder trusted by millions worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="animate-scale w-full sm:w-auto">
                Create My Resume <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Templates <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 mx-auto text-primary mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Why choose our resume builder?</h2>
            <p className="section-subtitle">
              Create a professional resume that gets you hired faster
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-6 glass-card hover:scale-105 transition-transform">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Examples Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Resume examples by industry</h2>
            <p className="section-subtitle">
              Get inspired by our collection of resume examples for every career path
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {['Marketing', 'Technology', 'Business'].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="relative overflow-hidden group cursor-pointer">
                  <div className="aspect-[3/4] bg-gray-100 flex items-center justify-center">
                    <Briefcase className="h-12 w-12 text-gray-400" />
                  </div>
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="secondary">
                      View Examples <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{industry}</h3>
                    <p className="text-gray-600">View examples</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center">Loved by professionals</h2>
          <div className="relative">
            <div className="flex overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    opacity: activeTestimonial === index ? 1 : 0,
                    x: `${(index - activeTestimonial) * 100}%`,
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-full flex-shrink-0"
                >
                  <Card className="p-8 glass-card mx-4">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-lg mb-4">{testimonial.content}</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-600">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    activeTestimonial === index ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to create your professional resume?
            </h2>
            <p className="text-xl mb-8 text-white/80">
              Join millions of job seekers who've found success with our platform
            </p>
            <Button size="lg" variant="secondary" className="animate-scale">
              Get Started Now <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Resume Builder</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Create Resume</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Templates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Examples</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Career Advice</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Resume Builder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
