import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '1299',
    duration: 'month',
    features: [
      'Access to gym facilities',
      'Basic equipment usage',
      'Locker room access',
      '2 Guest passes per month',
      'Fitness assessment'
    ],
    recommended: false
  },
  {
    name: 'Premium',
    price: '1499',
    duration: 'month',
    features: [
      'All Basic features',
      'Unlimited classes',
      'Personal trainer sessions (2x/month)',
      'Nutrition consultation',
      'Access to all locations',
      'Premium equipment access',
      'Towel service'
    ],
    recommended: true
  },
  {
    name: 'Elite',
    price: '1999',
    duration: 'month',
    features: [
      'All Premium features',
      'Unlimited personal training',
      'Monthly massage session',
      'Private locker',
      'Spa access',
      'Priority class booking',
      'Personalized workout plans'
    ],
    recommended: false
  }
];

const Memberships = () => {
  return (
    <section id="memberships" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Membership <span className="text-red-600">Plans</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect membership plan that fits your fitness goals and budget.
            All plans include access to our state-of-the-art facilities and expert staff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-gray-900 rounded-lg p-8 ${
                plan.recommended ? 'ring-2 ring-red-600' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-red-600 text-white text-sm px-4 py-1 rounded-full">
                    Recommended
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">Rs. {plan.price}</span>
                  <span className="text-gray-400 ml-2">/{plan.duration}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-400">
                    <Check className="h-5 w-5 text-red-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg transition-colors ${
                  plan.recommended
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-gray-800 hover:bg-gray-700 text-white'
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Need a custom plan? Contact us for corporate memberships and special packages.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Memberships;