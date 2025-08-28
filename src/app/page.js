import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white text-gray-900">
      {/* Navbar */}
      <header className="fixed w-full bg-white/70 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">Innara</h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-lg">
            <a href="#features" className="hover:text-indigo-600 transition">Features</a>
            <a href="#about" className="hover:text-indigo-600 transition">About</a>
            <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden px-6 py-4 bg-white shadow-md flex flex-col gap-4">
            <a href="#features" className="hover:text-indigo-600">Features</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 bg-gradient-to-br from-indigo-100 via-white to-pink-100">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight"
        >
          Empowering Your Digital Future
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl"
        >
          Innara helps you build modern, scalable, and impactful solutions with ease.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-8 flex gap-4"
        >
          <Button size="lg" className="px-6 py-3 text-lg rounded-2xl">
            Get Started
          </Button>
          <Button variant="outline" size="lg" className="px-6 py-3 text-lg rounded-2xl">
            Learn More
          </Button>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
        {["Seamless Integration", "Modern Design", "Scalable Solutions"].map(
          (feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <Card className="rounded-2xl shadow-lg hover:shadow-xl transition border-0">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-semibold mb-4">{feature}</h3>
                  <p className="text-gray-600">
                    Experience cutting-edge technology crafted for performance and usability.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )
        )}
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Innara, we believe in creating meaningful digital products that simplify
            lives and empower businesses to grow in the modern digital era.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-10">Get in Touch</h2>
        <form className="grid gap-6 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
          ></textarea>
          <Button size="lg" className="w-full py-4 text-lg rounded-2xl">
            Send Message
          </Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© {new Date().getFullYear()} Innara. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
