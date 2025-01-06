document.addEventListener('DOMContentLoaded', () => {
    // Booking Component
    const BookingComponent = {
        template: `
            <div class="space-y-8">
                <div class="bg-white shadow-md rounded-lg p-8">
                    <h2 class="text-2xl font-semibold mb-6">Book a Horse Transport</h2>
                    <form @submit.prevent="$emit('submit-booking')">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Contact Name</label>
                                <input type="text" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <!-- Add other fields similarly -->
                        </div>
                        <div class="mt-6 flex justify-end">
                            <button type="submit" class="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700">
                                Submit Booking
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `
    };

    // Membership Component
    const MembershipComponent = {
        template: `
            <div class="space-y-8">
                <div class="bg-white shadow-md rounded-lg p-8">
                    <h2 class="text-2xl font-semibold mb-6">Horse Transportation Membership Plans</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div v-for="plan in $parent.membershipPlans" :key="plan.type" class="p-6 border rounded-lg shadow-lg">
                            <h3 class="text-xl font-bold text-gray-800 mb-4">{{ plan.name }}</h3>
                            <p class="text-sm text-gray-600 mb-4">{{ plan.description }}</p>
                            <p class="text-3xl font-extrabold text-blue-600 mb-4">${{ plan.price }}/month</p>
                            <ul class="list-disc list-inside space-y-2 mb-6">
                                <li v-for="benefit in plan.benefits" :key="benefit">{{ benefit }}</li>
                            </ul>
                            <button @click="$parent.selectPlan(plan.type)" class="w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600">
                                Choose Plan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `
    };

    // Feedback Component
    const FeedbackComponent = {
        template: `
            <div class="space-y-8">
                <div class="bg-white shadow-md rounded-lg p-8">
                    <h2 class="text-2xl font-semibold mb-6">Leave Feedback</h2>
                    <form @submit.prevent="$emit('submit-feedback')">
                        <div class="grid grid-cols-1 gap-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Title</label>
                                <input type="text" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Rating</label>
                                <select required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                                    <option disabled value="">Select rating</option>
                                    <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
                                </select>
                            </div>
                            <!-- Add other fields similarly -->
                        </div>
                        <div class="mt-6 flex justify-end">
                            <button type="submit" class="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700">
                                Submit Feedback
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `
    };

    const routes = [
        { path: '/', redirect: { name: 'booking' } },
        { path: '/booking', name: 'booking', component: BookingComponent },
        { path: '/membership', name: 'membership', component: MembershipComponent },
        { path: '/feedback', name: 'feedback', component: FeedbackComponent }
    ];

    const router = new VueRouter({
        mode: 'history',
        routes
    });

    new Vue({
        el: '#app',
        router,
        data: {
            isAuthenticated: false,
            username: '',
            tabs: [
                { id: 'booking', name: 'Book Transport' },
                { id: 'membership', name: 'Membership' },
                { id: 'feedback', name: 'Feedback' }
            ],
            membershipPlans: [
                {
                    type: 'basic',
                    name: 'Basic Plan',
                    description: 'Essential features for occasional users.',
                    price: 99,
                    benefits: [
                        'Up to 2 transports per month',
                        '24/7 customer support',
                        'Access to local routes'
                    ]
                },
                {
                    type: 'premium',
                    name: 'Premium Plan',
                    description: 'Advanced features for frequent users.',
                    price: 249,
                    benefits: [
                        'Up to 5 transports per month',
                        'Priority booking',
                        'Extended routes (up to 100 miles)'
                    ]
                },
                {
                    type: 'unlimited',
                    name: 'Unlimited Plan',
                    description: 'Unlimited features for power users.',
                    price: 499,
                    benefits: [
                        'Unlimited transports',
                        'Nationwide routes',
                        'Premium 24/7 support'
                    ]
                }
            ]
        },
        methods: {
            login() {
                this.isAuthenticated = true;
                this.username = 'JohnDoe';
            },
            logout() {
                this.isAuthenticated = false;
                this.username = '';
            }
        }
    });
});
