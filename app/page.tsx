import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  DollarSign,
  Clock,
  Shield,
  CheckCircle,
  Star,
  Users,
  FileText,
  Cloud,
} from "lucide-react";
import Link from "next/link";

const LandingPage = () => {
  const features = [
    {
      icon: <BarChart className="h-6 w-6 text-blue-500" />,
      title: "Real-Time Analytics",
      description:
        "Get instant insights into your business finances with powerful reporting tools.",
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "Automated Bookkeeping",
      description:
        "Save hours with AI-powered automation for transactions and reconciliation.",
    },
    {
      icon: <Cloud className="h-6 w-6 text-blue-500" />,
      title: "Cloud-Based",
      description:
        "Access your accounts from anywhere, anytime, with secure cloud storage.",
    },
    {
      icon: <FileText className="h-6 w-6 text-blue-500" />,
      title: "Invoice Management",
      description:
        "Create, send, and track professional invoices with automated reminders.",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "29",
      features: [
        "Up to 100 transactions",
        "Basic reporting",
        "Email support",
        "Single user",
      ],
    },
    {
      name: "Professional",
      price: "79",
      features: [
        "Unlimited transactions",
        "Advanced analytics",
        "Priority support",
        "Up to 5 users",
      ],
    },
    {
      name: "Enterprise",
      price: "199",
      features: [
        "Custom solutions",
        "Dedicated account manager",
        "24/7 phone support",
        "Unlimited users",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Simplify Your Accounting
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Powerful cloud-based accounting software designed for modern
              businesses. Save time, reduce errors, and make smarter financial
              decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dash"
                className="bg-white inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-blue-600 hover:bg-blue-50"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything You Need to Manage Your Finances
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                50,000+
              </div>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$2B+</div>
              <p className="text-gray-600">Transactions Processed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <p className="text-gray-600">Uptime Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className="relative hover:shadow-xl transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-center">
                    {plan.name}
                  </CardTitle>
                  <div className="text-center">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6">Choose {plan.name}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Accounting?
          </h2>
          <p className="mb-8 text-blue-100">
            Join thousands of businesses that trust our platform
          </p>
          <Button className="bg-white text-blue-600 hover:bg-blue-50">
            Start Your Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">AccountPro</h3>
              <p className="text-sm">
                Modern accounting software for growing businesses.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>Features</li>
                <li>Pricing</li>
                <li>Security</li>
                <li>Updates</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>About</li>
                <li>Customers</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>Documentation</li>
                <li>Support</li>
                <li>Blog</li>
                <li>API</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>© 2024 AccountPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
