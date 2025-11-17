export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation - Mismo que home */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg"></div>
              <a href="/" className="text-xl font-bold text-gray-900">HYBRID90</a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="/#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="https://khanda.mintlify.app" className="text-gray-600 hover:text-gray-900">Docs</a>
              <a href="https://priceapi-mvp.onrender.com/docs" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Complete Feature Set
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to build profitable price tracking applications
          </p>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Features by Tier
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-6 py-4 text-left font-semibold text-gray-900 border-b-2">Feature</th>
                <th className="px-6 py-4 text-center border-b-2">
                  <div className="font-semibold text-gray-900">Free</div>
                  <div className="text-2xl font-bold text-gray-900 mt-1">$0</div>
                  <div className="text-sm text-gray-500">/month</div>
                </th>
                <th className="px-6 py-4 text-center border-b-2">
                  <div className="font-semibold text-gray-900">Starter</div>
                  <div className="text-2xl font-bold text-gray-900 mt-1">$49</div>
                  <div className="text-sm text-gray-500">/month</div>
                </th>
                <th className="px-6 py-4 text-center border-b-2">
                  <div className="font-semibold text-green-600">Professional</div>
                  <div className="text-2xl font-bold text-green-600 mt-1">$149</div>
                  <div className="text-sm text-gray-500">/month</div>
                  <div className="mt-1">
                    <span className="bg-green-600 text-gray-50 px-2 py-1 rounded text-xs font-semibold">POPULAR</span>
                  </div>
                </th>
                <th className="px-6 py-4 text-center border-b-2">
                  <div className="font-semibold text-gray-900">Business</div>
                  <div className="text-2xl font-bold text-gray-900 mt-1">$299</div>
                  <div className="text-sm text-gray-500">/month</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {/* API Requests */}
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">API Requests/month</td>
                <td className="px-6 py-4 text-center text-gray-600">500</td>
                <td className="px-6 py-4 text-center text-gray-600">10,000</td>
                <td className="px-6 py-4 text-center text-green-600 font-semibold">50,000</td>
                <td className="px-6 py-4 text-center text-gray-600">250,000</td>
              </tr>

              {/* Rate Limit */}
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Rate Limit</td>
                <td className="px-6 py-4 text-center text-gray-600">5/min</td>
                <td className="px-6 py-4 text-center text-gray-600">30/min</td>
                <td className="px-6 py-4 text-center text-green-600 font-semibold">100/min</td>
                <td className="px-6 py-4 text-center text-gray-600">500/min</td>
              </tr>

              {/* Countries */}
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">Countries Supported</td>
                <td className="px-6 py-4 text-center text-gray-600">US only</td>
                <td className="px-6 py-4 text-center text-gray-600">5 countries</td>
                <td className="px-6 py-4 text-center text-green-600 font-semibold">All (20+)</td>
                <td className="px-6 py-4 text-center text-gray-600">All + Priority</td>
              </tr>

              {/* Historical Data */}
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Historical Data</td>
                <td className="px-6 py-4 text-center text-gray-600">7 days</td>
                <td className="px-6 py-4 text-center text-gray-600">30 days</td>
                <td className="px-6 py-4 text-center text-green-600 font-semibold">365 days</td>
                <td className="px-6 py-4 text-center text-gray-600">365 days</td>
              </tr>

              {/* Price Predictions */}
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">Price Predictions (ML)</td>
                <td className="px-6 py-4 text-center">
                  <svg className="w-5 h-5 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="px-6 py-4 text-center text-gray-500 text-sm">+$20/mo</td>
                <td className="px-6 py-4 text-center">
                  <svg className="w-5 h-5 text-green-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="px-6 py-4 text-center">
                  <svg className="w-5 h-5 text-green-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </td>
              </tr>

              {/* Webhooks */}
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Webhooks</td>
                <td className="px-6 py-4 text-center text-gray-600">0</td>
                <td className="px-6 py-4 text-center text-gray-600">1</td>
                <td className="px-6 py-4 text-center text-green-600 font-semibold">10</td>
                <td className="px-6 py-4 text-center text-gray-600">Unlimited</td>
              </tr>

              {/* Uptime SLA */}
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">Uptime SLA</td>
                <td className="px-6 py-4 text-center text-gray-600">-</td>
                <td className="px-6 py-4 text-center text-gray-600">-</td>
                <td className="px-6 py-4 text-center text-green-600 font-semibold">99.5%</td>
                <td className="px-6 py-4 text-center text-gray-600">99.9%</td>
              </tr>

              {/* Support */}
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Support</td>
                <td className="px-6 py-4 text-center text-gray-600 text-sm">Docs only</td>
                <td className="px-6 py-4 text-center text-gray-600 text-sm">AI Chat</td>
                <td className="px-6 py-4 text-center text-green-600 text-sm font-semibold">Email &lt;24hrs</td>
                <td className="px-6 py-4 text-center text-gray-600 text-sm">Email &lt;2hrs</td>
              </tr>

              {/* White Label */}
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">White Label</td>
                <td className="px-6 py-4 text-center">
                  <svg className="w-5 h-5 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="px-6 py-4 text-center text-gray-500 text-sm">+$80/mo</td>
                <td className="px-6 py-4 text-center text-gray-500 text-sm">+$80/mo</td>
                <td className="px-6 py-4 text-center">
                  <svg className="w-5 h-5 text-green-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <a href="/#pricing" className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
            View Pricing
          </a>
          <a href="https://priceapi-mvp.onrender.com/docs" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
            Start Free
          </a>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What You Can Build
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Price Drop Alerts</h3>
              <p className="text-gray-600 mb-4">
                Monitor thousands of products and notify users when prices drop below their target.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Email/SMS notifications</li>
                <li>• Custom price thresholds</li>
                <li>• Historical price charts</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Deal Aggregator</h3>
              <p className="text-gray-600 mb-4">
                Find and display the best deals across multiple categories automatically.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Real-time deal discovery</li>
                <li>• Category filtering</li>
                <li>• Affiliate commissions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Browser Extension</h3>
              <p className="text-gray-600 mb-4">
                Show price history and predictions directly on Amazon product pages.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Overlay on Amazon</li>
                <li>• Price predictions</li>
                <li>• Best time to buy alerts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Footer - Mismo que home */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg"></div>
                <span className="text-xl font-bold text-white">HYBRID90</span>
              </div>
              <p className="text-sm">Amazon Price Intelligence API for developers</p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/#features" className="hover:text-white">Features</a></li>
                <li><a href="/#pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="https://khanda.mintlify.app" target="_blank" rel="noopener" className="hover:text-white">Documentation</a></li>
                <li><a href="https://priceapi-mvp.onrender.com/docs" className="hover:text-white">API Reference</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:support@hybrid90.com" className="hover:text-white">Contact</a></li>
                <li><a href="mailto:support@hybrid90.com" className="hover:text-white">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2025 HYBRID90. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://twitter.com/hybrid90api" target="_blank" rel="noopener" className="hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}