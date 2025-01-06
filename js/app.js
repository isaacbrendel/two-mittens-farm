// @ts-nocheck
document.addEventListener('DOMContentLoaded', () => {
    // Components
    const BookingComponent = {
        template: '#booking-template',
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
            };
        },
        methods: {
            submitBooking() {
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

    const MembershipComponent = {
        template: '#membership-template',
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
            };
        },
        methods: {
            selectPlan(type) {
                console.log('Selected plan:', type);
                alert(`Thank you for your interest in our ${type} plan. A representative will contact you shortly.`);
            }
        }
    };

    const FeedbackComponent = {
        template: '#feedback-template',
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
                ]
            };
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
        data() {
            return {
                loading: true,
                isAuthenticated: false,
                username: '',
                tabs: [
                    { id: 'booking', name: 'Book Transport' },
                    { id: 'membership', name: 'Membership' },
                    { id: 'feedback', name: 'Testimonials' }
                ]
            };
        },
        mounted() {
            this.loading = false;
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