// @ts-nocheck
document.addEventListener('DOMContentLoaded', () => {
    // Login Modal Component
    const LoginModal = {
        template: `
            <div v-if="show" class="fixed inset-0 flex items-center justify-center z-50">
                <div class="absolute inset-0 bg-black bg-opacity-50" @click="$emit('close')"></div>
                <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative z-10">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-2xl font-playfair font-bold">Member Login</h3>
                        <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">
                            <span class="text-2xl">×</span>
                        </button>
                    </div>
                    <form @submit.prevent="handleLogin" class="space-y-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input type="email" required v-model="email" 
                                class="input-luxury w-full" placeholder="your@email.com">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
                            <input type="password" required v-model="password" 
                                class="input-luxury w-full" placeholder="••••••••">
                        </div>
                        <div class="flex items-center justify-between">
                            <label class="flex items-center">
                                <input type="checkbox" class="form-checkbox text-gold">
                                <span class="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                            <a href="#" class="text-sm text-gold hover:text-dark-gold">Forgot password?</a>
                        </div>
                        <button type="submit" class="w-full btn-luxury py-3">
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        `,
        props: ['show'],
        data() {
            return {
                email: '',
                password: ''
            };
        },
        methods: {
            handleLogin() {
                this.$emit('login', { email: this.email });
                this.$emit('close');
            }
        }
    };

    // Booking Component
    const BookingComponent = {
        template: `
            <div class="space-y-8">
                <div class="card-luxury">
                    <h2 class="text-3xl font-playfair font-bold mb-8">Premium Transport Booking</h2>
                    <form @submit.prevent="submitBooking" class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Contact Name</label>
                                <input v-model="formData.contactName" type="text" required 
                                    class="input-luxury" placeholder="Your full name" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input v-model="formData.email" type="email" required 
                                    class="input-luxury" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
                                <input v-model="formData.pickup" type="text" required 
                                    class="input-luxury" placeholder="Enter pickup address" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Dropoff Location</label>
                                <input v-model="formData.dropoff" type="text" required 
                                    class="input-luxury" placeholder="Enter dropoff address" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Transport Date</label>
                                <input v-model="formData.date" type="date" required class="input-luxury" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Number of Horses</label>
                                <select v-model="formData.horses" required class="input-luxury">
                                    <option value="">Select number</option>
                                    <option v-for="n in 5" :key="n" :value="n">{{ n }} {{ n === 1 ? 'Horse' : 'Horses' }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="flex justify-end pt-6">
                            <button type="submit" class="btn-luxury px-8 py-3">
                                Request Transport
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `,
        data() {
            return {
                formData: {
                    contactName: '',
                    email: '',
                    pickup: '',
                    dropoff: '',
                    date: '',
                    horses: '',
                }
            };
        },
        methods: {
            submitBooking() {
                alert('Thank you for your booking request. We will contact you shortly.');
                this.resetForm();
            },
            resetForm() {
                Object.keys(this.formData).forEach(key => {
                    this.formData[key] = '';
                });
            }
        }
    };

    // Membership Component
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

    // Router Configuration
    const routes = [
        { path: '/', redirect: { name: 'booking' }},
        { path: '/booking', name: 'booking', component: BookingComponent },
        { path: '/membership', name: 'membership', component: MembershipComponent },
        { path: '/feedback', name: 'feedback', component: FeedbackComponent }
    ];

    const router = new VueRouter({
        mode: 'hash',
        routes
    });

    // Vue Instance
    new Vue({
        el: '#app',
        router,
        components: {
            LoginModal
        },
        data() {
            return {
                showLoginModal: false,
                isAuthenticated: false,
                username: '',
                tabs: [
                    { id: 'booking', name: 'Book Transport' },
                    { id: 'membership', name: 'Membership' },
                    { id: 'feedback', name: 'Testimonials' }
                ]
            };
        },
        methods: {
            login() {
                this.showLoginModal = true;
            },
            handleLogin(userData) {
                this.isAuthenticated = true;
                this.username = userData.email.split('@')[0];
                this.showLoginModal = false;
            },
            logout() {
                this.isAuthenticated = false;
                this.username = '';
            }
        }
    });
});