import React, { useState } from 'react';
import { Calendar, MapPin, Crown, Truck, Shield, Star } from 'lucide-react';

const Navigation = ({ isAuthenticated, username, onLogin, onLogout }) => (
  <nav className="nav-luxury py-4 sticky top-0 z-50 shadow-md">
    <div className="container mx-auto px-6 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Truck className="text-gold h-10 w-10" />
          <Crown className="absolute -top-2 -right-2 text-gold h-4 w-4" />
        </div>
        <h1 className="text-3xl font-playfair font-bold">Two Mittens Farm</h1>
      </div>
      <div className="flex items-center space-x-6">
        {isAuthenticated ? (
          <>
            <span className="font-inter text-charcoal">Welcome, {username}</span>
            <button 
              onClick={onLogout}
              className="btn-luxury px-6 py-2 rounded-md font-medium"
            >
              Sign Out
            </button>
          </>
        ) : (
          <button 
            onClick={onLogin}
            className="btn-luxury px-6 py-2 rounded-md font-medium"
          >
            Member Access
          </button>
        )}
      </div>
    </div>
  </nav>
);

const BookingForm = () => {
  const [formData, setFormData] = useState({
    contactName: '',
    email: '',
    pickupLocation: '',
    dropoffLocation: '',
    date: '',
    specialRequirements: ''
  });

  return (
    <div className="card-luxury p-8 rounded-lg animate-fadeIn">
      <div className="flex items-center space-x-4 mb-8">
        <Calendar className="h-8 w-8 text-gold" />
        <h2 className="text-3xl font-playfair font-bold">Premium Transport Booking</h2>
      </div>
      <form className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-charcoal">Contact Name</label>
            <input
              type="text"
              className="input-luxury w-full px-4 py-3 rounded-md"
              placeholder="Your full name"
              value={formData.contactName}
              onChange={(e) => setFormData({...formData, contactName: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-charcoal">Email Address</label>
            <input
              type="email"
              className="input-luxury w-full px-4 py-3 rounded-md"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-charcoal">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gold" />
                <span>Collection Location</span>
              </div>
            </label>
            <input
              type="text"
              className="input-luxury w-full px-4 py-3 rounded-md"
              placeholder="Enter collection address"
              value={formData.pickupLocation}
              onChange={(e) => setFormData({...formData, pickupLocation: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-charcoal">Special Requirements</label>
            <textarea
              className="input-luxury w-full px-4 py-3 rounded-md"
              placeholder="Any specific requirements for your horse"
              rows="3"
              value={formData.specialRequirements}
              onChange={(e) => setFormData({...formData, specialRequirements: e.target.value})}
            />
          </div>
        </div>
        <div className="flex justify-end pt-6">
          <button className="btn-luxury px-8 py-3 rounded-md font-medium flex items-center space-x-2">
            <span>Request Transport</span>
            <Truck className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

const MembershipCard = ({ plan, onSelect, isPopular }) => (
  <div className={`card-luxury p-8 rounded-lg relative ${isPopular ? 'border-2 border-gold' : ''}`}>
    {isPopular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold text-white px-4 py-1 rounded-full text-sm">
        Most Popular
      </div>
    )}
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-playfair font-bold">{plan.name}</h3>
          <p className="text-gray-600 mt-2">{plan.description}</p>
        </div>
        <Crown className={`h-6 w-6 ${isPopular ? 'text-gold' : 'text-gray-400'}`} />
      </div>
      <div className="flex items-baseline space-x-2">
        <span className="text-4xl font-playfair font-bold text-gold">${plan.price}</span>
        <span className="text-gray-600">/month</span>
      </div>
      <ul className="space-y-4">
        {plan.benefits.map((benefit, index) => (
          <li key={index} className="flex items-start space-x-3">
            <Shield className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{benefit}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={() => onSelect(plan.type)}
        className={`w-full btn-luxury py-3 rounded-md font-medium ${
          isPopular ? 'shadow-lg' : ''
        }`}
      >
        Select Plan
      </button>
    </div>
  </div>
);

const Footer = () => (
  <footer className="footer-luxury py-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-playfair font-bold text-white mb-4">Two Mittens Farm</h3>
          <p className="text-gray-400">Luxury horse transportation services</p>
        </div>
        <div>
          <h4 className="text-lg font-playfair font-bold text-white mb-4">Contact</h4>
          <p className="text-gray-400">Email: contact@twomittensfarm.com</p>
          <p className="text-gray-400">Phone: (555) 123-4567</p>
        </div>
        <div>
          <h4 className="text-lg font-playfair font-bold text-white mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            {/* Add social media icons here */}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center">
        <p className="text-gray-400">&copy; 2025 Two Mittens Farm. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [activeTab, setActiveTab] = useState('booking');

  const membershipPlans = [
    {
      type: 'premium',
      name: 'Premium Access',
      description: 'Elevated horse transport experience',
      price: 299,
      benefits: [
        'Priority scheduling',
        'Luxury transport vehicles',
        'Dedicated concierge',
        'Regional coverage'
      ]
    },
    {
      type: 'elite',
      name: 'Elite Membership',
      description: 'Ultimate in equine transportation',
      price: 599,
      benefits: [
        'Unlimited priority transport',
        'Premium vehicle fleet access',
        '24/7 dedicated support',
        'Nationwide coverage'
      ]
    },
    {
      type: 'platinum',
      name: 'Platinum Circle',
      description: 'Bespoke transportation solutions',
      price: 999,
      benefits: [
        'Custom transport planning',
        'Private fleet access',
        'Personal transport coordinator',
        'International services available'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navigation
        isAuthenticated={isAuthenticated}
        username={username}
        onLogin={() => setIsAuthenticated(true)}
        onLogout={() => setIsAuthenticated(false)}
      />
      
      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="space-y-12">
          {activeTab === 'booking' && <BookingForm />}
          
          {activeTab === 'membership' && (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-4xl font-playfair font-bold mb-4">Exclusive Membership Plans</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Experience unparalleled service with our premium membership options
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {membershipPlans.map((plan, index) => (
                  <MembershipCard
                    key={plan.type}
                    plan={plan}
                    isPopular={index === 1}
                    onSelect={(type) => console.log('Selected plan:', type)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;