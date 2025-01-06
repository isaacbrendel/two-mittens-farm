const MembershipComponent = {
    template: `
        <div class="space-y-12">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-playfair font-bold mb-4">Exclusive Membership Plans</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">
                    Join our prestigious membership program for priority access and exclusive benefits
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="plan in membershipPlans" 
                     :key="plan.type" 
                     class="card-luxury pricing-card"
                     :class="{ 'featured': plan.type === 'elite' }">
                    <div class="p-8 space-y-6">
                        <div>
                            <h3 class="text-2xl font-playfair font-bold">{{ plan.name }}</h3>
                            <p class="text-gray-600 mt-2">{{ plan.description }}</p>
                        </div>
                        <div class="flex items-baseline space-x-2">
                            <span class="text-4xl font-playfair font-bold text-gold">$</span>
                            <span class="text-4xl font-playfair font-bold text-gold">{{ plan.price }}</span>
                            <span class="text-gray-600">/month</span>
                        </div>
                        <ul class="space-y-4">
                            <li v-for="benefit in plan.benefits" 
                                :key="benefit" 
                                class="flex items-start space-x-3">
                                <span class="text-gold">✓</span>
                                <span class="text-gray-700">{{ benefit }}</span>
                            </li>
                        </ul>
                        <button @click="selectPlan(plan.type)" 
                                class="w-full btn-luxury py-3">
                            Select Plan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            membershipPlans: [
                {
                    type: 'standard',
                    name: 'Standard Plan',
                    description: 'Perfect for occasional transport needs',
                    price: 299,
                    benefits: [
                        'Up to 2 transports per month',
                        'Standard transport vehicle',
                        'Regular business hours support',
                        'Local routes (up to 50 miles)',
                        'Basic horse care during transport'
                    ]
                },
                {
                    type: 'elite',
                    name: 'Elite Plan',
                    description: 'Our most popular comprehensive solution',
                    price: 599,
                    benefits: [
                        'Up to 5 transports per month',
                        'Premium fleet access',
                        '24/7 priority support',
                        'Extended routes (up to 150 miles)',
                        'Premium horse care package',
                        'Dedicated transport coordinator'
                    ]
                },
                {
                    type: 'platinum',
                    name: 'Platinum Plan',
                    description: 'Ultimate in equine transportation',
                    price: 999,
                    benefits: [
                        'Unlimited transport requests',
                        'Luxury fleet exclusive access',
                        'Personal concierge service',
                        'Nationwide coverage',
                        'VIP horse care package',
                        'Emergency transport priority',
                        'Custom transport solutions'
                    ]
                }
            ]
        };
    },
    methods: {
        selectPlan(type) {
            alert(`Thank you for your interest in our ${type} plan. A representative will contact you shortly.`);
        }
    }
};