document.addEventListener('DOMContentLoaded', () => {
    // Booking Component
    const BookingComponent = {
        template: `
            <div class="space-y-8 animate-fadeIn">
                <div class="card-luxury">
                    <h2 class="text-3xl font-playfair font-bold mb-8">Premium Transport Booking</h2>
                    <form @submit.prevent="submitBooking" class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-medium text-charcoal mb-2">Contact Name</label>
                                <input type="text" v-model="formData.contactName" required 
                                    class="input-luxury" placeholder="Your full name" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-charcoal mb-2">Email</label>
                                <input type="email" v-model="formData.email" required 
                                    class="input-luxury" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-charcoal mb-2">Pickup Location</label>
                                <input type="text" v-model="formData.pickup" required 
                                    class="input-luxury" placeholder="Enter pickup address" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-charcoal mb-2">Dropoff Location</label>
                                <input type="text" v-model="formData.dropoff" required 
                                    class="input-luxury" placeholder="Enter dropoff address" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-charcoal mb-2">Transport Date</label>
                                <input type="date" v-model="formData.date" required 
                                    class="input-luxury" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-charcoal mb-2">Special Requirements</label>
                                <textarea v-model="formData.requirements" 
                                    class="input-luxury" rows="3" 
                                    placeholder="Any specific requirements for your horse"></textarea>
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
                    requirements: ''
                }
            }
        },
        methods: {
            submitBooking() {
                // Handle booking submission
                console.log('Booking submitted:', this.formData);
                alert('Thank you for your booking request. We will contact you shortly.');
                this.resetForm();
            },
            resetForm() {
                this.formData = {
                    contactName: '',
                    email: '',
                    pickup: '',
                    dropoff: '',
                    date: '',
                    requirements: ''
                };
            }
        }
    };

    // Membership Component
    const MembershipComponent = {
        template: `
            <div class="space-y-12 animate-fadeIn">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-playfair font-bold mb-4">Exclusive Membership Plans</h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">
                        Experience unparalleled service with our premium membership options
                    </p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div v-for="(plan, index) in membershipPlans" 
                         :key="plan.type" 
                         class="card-luxury pricing-card"
                         :class="{ 'featured': plan.type === 'elite' }">
                        <div class="space-y-6">
                            <div>
                                <h3 class="text-2xl font-playfair font-bold">{{ plan.name }}</h3>
                                <p class="text-gray-600 mt-2">{{ plan.description }}</p>
                            </div>
                            <div class="flex items-baseline space-x-2">
                                <span class="text-4xl font-playfair font-bold text-gold">${{ plan.price }}</span>
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
                ]
            }
        },
        methods: {
            selectPlan(type) {
                console.log('Selected plan:', type);
                alert(`Thank you for your interest in our ${type} plan. A representative will contact you shortly.`);
            }
        }
    };

    // Feedback Component
    const FeedbackComponent = {
        template: `
            <div class="space-y-8 animate-fadeIn">
                <div class="card-luxury">
                    <h2 class="text-3xl font-playfair font-bold mb-8">Client Testimonials</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div v-for="review in testimonials" :key="review.id" class="space-y-4">
                            <div class="flex space-x-2">
                                <template v-for="n in 5">
                                    <span :key="n" class="text-gold">
                                        {{ n <= review.rating ? '★' : '☆' }}
                                    </span>
                                </template>
                            </div>
                            <p class="text-gray-700 italic">"{{ review.comment }}"</p>
                            <p class="text-gray-600 font-medium">- {{ review.author }}</p>
                        </div>
                    </div>
                    <div class="mt-12 pt-8 border-t border-gray-200">
                        <h3 class="text-2xl font-playfair font-bold mb-6">Share Your Experience</h3>
                        <form @submit.prevent="submitFeedback" class="space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-sm font-medium text-charcoal mb-2">Name</label>
                                    <input type="text" v-model="feedbackForm.author" required 
                                        class="input-luxury" placeholder="Your name" />
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-charcoal mb-2">Rating</label>
                                    <select v-model="feedbackForm.rating" required class="input-luxury">
                                        <option value="">Select rating</option>
                                        <option v-for="n in 5" :key="n" :value="n">{{ n }} Stars</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-charcoal mb-2">Your Experience</label>
                                <textarea v-model="feedbackForm.comment" required 
                                    class="input-luxury w-full" rows="4" 
                                    placeholder="Share your experience with our services"></textarea>
                            </div>
                            <div class="flex justify-end">
                                <button type="submit" class="btn-luxury px-8 py-3">
                                    Submit Feedback
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `,
        data() {
            return {
                testimonials: [
                    {
                        id: 1,
                        rating: 5,
                        comment: "Exceptional service! The attention to detail and care for our horses was outstanding.",
                        author: "Sarah Thompson"
                    },
                    {
                        id: 2,
                        rating: 5,
                        comment: "The most professional horse transportation service I've ever used. Highly recommended!",
                        author: "Michael Reynolds"
                    },
                    {
                        id: 3,
                        rating: 5,
                        comment: "Their platinum service exceeded all expectations. Worth every penny.",
                        author: "Elizabeth Chen"
                    }
                ],
                feedbackForm: {
                    author: '',
                    rating: '',
                    comment: ''
                }
            }
        },
        methods: {
            submitFeedback() {
                console.log('Feedback submitted:', this.feedbackForm);
                alert('Thank you for your feedback!');
                this.resetFeedbackForm();
            },
            resetFeedbackForm() {
                this.feedbackForm = {
                    author: '',
                    rating: '',
                    comment: ''
                };
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
        mode: 'history',
        routes
    });

    // Vue Instance
    new Vue({
        el: '#app',
        router,
        data: {
            isAuthenticated: false,
            username: '',
            tabs: [
                { id: 'booking', name: 'Book Transport' },
                { id: 'membership', name: 'Membership' },
                { id: 'feedback', name: 'Testimonials' }
            ]
        },
        methods: {
            login() {
                this.isAuthenticated = true;
                this.username = 'John Doe';
            },
            logout() {
                this.isAuthenticated = false;
                this.username = '';
            }
        }
    });
});