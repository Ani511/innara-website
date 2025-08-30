"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart,
  Bell,
  CheckCircle,
  Database,
  Globe,
  LayoutDashboard,
  LineChart,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: <Database className="w-8 h-8 text-purple-500" />,
    title: "Smart Data Capture",
    desc: "Collect, clean & organize your data with automated pipelines.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-indigo-500" />,
    title: "Deep Insights",
    desc: "AI-driven analytics with dashboards that reveal hidden trends.",
  },
  {
    icon: <Bell className="w-8 h-8 text-pink-500" />,
    title: "Real-time Alerts",
    desc: "Stay ahead with instant notifications & anomaly detection.",
  },
  {
    icon: <LayoutDashboard className="w-8 h-8 text-blue-500" />,
    title: "Custom Dashboards",
    desc: "Tailor visualizations for every workflow or client need.",
  },
];

const timeline = [
  {
    step: "01",
    title: "Connect",
    desc: "Plug in your databases, CRMs & APIs securely.",
  },
  {
    step: "02",
    title: "Process",
    desc: "Our AI cleans & structures raw data instantly.",
  },
  {
    step: "03",
    title: "Visualize",
    desc: "Interactive dashboards & predictive analytics.",
  },
  {
    step: "04",
    title: "Decide",
    desc: "Turn insights into smarter business actions.",
  },
];

const blog = [
  {
    title: "The Future of Data Analytics",
    desc: "Discover trends shaping tomorrow’s AI-driven businesses.",
    tag: "Insights",
  },
  {
    title: "5 Mistakes to Avoid in BI",
    desc: "Common pitfalls teams face and how to overcome them.",
    tag: "Guides",
  },
  {
    title: "Why Real-Time Data Matters",
    desc: "Learn how instant insights create faster decision-making.",
    tag: "Trends",
  },
];

export default function Page() {
  return (
    <main className="overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero */}
      <section className="relative py-24 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100 opacity-60 blur-3xl" />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
        >
          Transform Your Data into <br />{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Actionable Insights
          </span>
        </motion.h1>
        <p className="relative mt-6 max-w-2xl mx-auto text-lg text-gray-600">
          Innara helps you collect, analyze & visualize data—so you can make
          decisions that matter.
        </p>
        <div className="relative mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl shadow-lg hover:scale-105 transition flex items-center gap-2">
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-6 py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-14">
          Powerful Features, <span className="text-purple-600">Simplified</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition border border-gray-100"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="font-semibold text-gray-800 text-lg mb-2">
                {f.title}
              </h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-r from-purple-50 via-white to-pink-50">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-14">
          How It <span className="text-purple-600">Works</span>
        </h2>
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full" />
          <div className="space-y-12 relative">
            {timeline.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-center ${
                  i % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className="w-1/2">
                  <div className="bg-white border border-gray-100 shadow-md rounded-xl p-6 hover:shadow-lg transition">
                    <span className="text-sm font-bold text-purple-600">
                      Step {t.step}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-800 mt-1">
                      {t.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">{t.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-14">
          From Our <span className="text-purple-600">Blog</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blog.map((b, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="rounded-xl bg-white border border-gray-100 shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="p-6">
                <span className="text-xs font-medium px-3 py-1 bg-purple-100 text-purple-600 rounded-full">
                  {b.tag}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {b.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{b.desc}</p>
                <button className="mt-4 text-purple-600 font-medium hover:underline flex items-center gap-1">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <h2 className="text-4xl font-bold relative">Ready to Get Started?</h2>
        <p className="mt-4 text-lg relative max-w-2xl mx-auto">
          Join innovative teams using Innara to unlock the full potential of
          their data.
        </p>
        <div className="mt-8 flex justify-center gap-4 relative">
          <button className="px-8 py-3 bg-white text-purple-600 rounded-xl font-medium shadow-lg hover:scale-105 transition">
            Start Free Trial
          </button>
          <button className="px-8 py-3 border border-white text-white rounded-xl font-medium hover:bg-white/10 transition">
            Contact Sales
          </button>
        </div>
      </section>
    </main>
  );
}
