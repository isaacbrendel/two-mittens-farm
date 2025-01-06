// js/app.js

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        delimiters: ['{{', '}}'],
        data: {
            isAuthenticated: false,
            username: '',
            currentTab: 'booking',
            tabs: [
                { id: 'booking', name: 'Book Transport' },
                { id: 'membership', name: 'Membership' },
                { id: 'feedback', name: 'Feedback' },
            ],
            showBookingConfirmation: false,
            showFeedbackConfirmation: false,
            showMembershipModal: false,
            bookingConfirmation: {
                id: null,
                status: null
            },
            bookingForm: {
                contact_name: '',
                email: '',
                phone: '',
                date: '',
                time: '',
                pickup_location: '',
                dropoff_location: '',
                horse_details: '',
                special_requirements: ''
            },
            availableSlots: [],
            minDate: new Date().toISOString().split('T')[0],
            feedbackForm: {
                title: '',
                rating: 0,
                content: ''
            },
            membershipPlans: [
                {
                    type: 'basic',
                    name: 'Basic Plan',
                    description: 'Essential features for occasional users.',
                    price: 49,
                    period: 'month',
                    benefits: [
                        'Up to 2 transports per month',
                        'Standard support',
                        'Access to basic features'
                    ]
                },
                {
                    type: 'premium',
                    name: 'Premium Plan',
                    description: 'Advanced features for frequent users.',
                    price: 99,
                    period: 'month',
                    benefits: [
                        'Up to 5 transports per month',
                        'Priority support',
                        'Access to premium features'
                    ]
                },
                {
                    type: 'unlimited',
                    name: 'Unlimited Plan',
                    description: 'Unlimited features for power users.',
                    price: 199,
                    period: 'month',
                    benefits: [
                        'Unlimited transports',
                        '24/7 support',
                        'Access to all features'
                    ]
                }
            ],
            selectedPlan: null,
            membershipForm: {
                fullName: '',
                email: '',
                phone: ''
            },
            userBookings: [] // Mock data for user bookings
        },
        computed: {
            isBookingFormValid() {
                return this.bookingForm.contact_name &&
                       this.bookingForm.email &&
                       this.bookingForm.phone &&
                       this.bookingForm.date &&
                       this.bookingForm.time &&
                       this.bookingForm.pickup_location &&
                       this.bookingForm.dropoff_location &&
                       this.bookingForm.horse_details;
            },
            isFeedbackFormValid() {
                return this.feedbackForm.title &&
                       this.feedbackForm.rating > 0 &&
                       this.feedbackForm.content;
            },
            selectedPlanDetails() {
                return this.membershipPlans.find(plan => plan.type === this.selectedPlan) || {};
            },
            isMembershipFormValid() {
                return this.membershipForm.fullName &&
                       this.membershipForm.email &&
                       this.membershipForm.phone;
            }
        },
        methods: {
            login() {
                // Simulate a login process
                // In a real app, you would have a login form and authentication
                this.isAuthenticated = true;
                this.username = 'JohnDoe';
                // Load mock bookings
                this.userBookings = [
                    {
                        id: 1,
                        start_datetime: '2025-01-15T10:00:00',
                        horse: { name: 'Thunder' },
                        status: 'Confirmed'
                    },
                    {
                        id: 2,
                        start_datetime: '2025-02-20T14:30:00',
                        horse: { name: 'Lightning' },
                        status: 'Confirmed'
                    }
                ];
            },
            logout() {
                this.isAuthenticated = false;
                this.username = '';
                this.userBookings = [];
            },
            formatDate(datetime) {
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                return new Date(datetime).toLocaleDateString(undefined, options);
            },
            formatTime(datetime) {
                const options = { hour: 'numeric', minute: 'numeric', hour12: true };
                return new Date(datetime).toLocaleTimeString(undefined, options);
            },
            async fetchAvailableSlots() {
                if (!this.bookingForm.date) return;
                try {
                    // Simulate an API call with mock data
                    // Replace this with actual API calls if available
                    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
                    // Mock available slots
                    this.availableSlots = [
                        '08:00 AM',
                        '10:00 AM',
                        '12:00 PM',
                        '02:00 PM',
                        '04:00 PM'
                    ];
                } catch (error) {
                    console.error('Error fetching available slots:', error);
                }
            },
            async submitBooking() {
                try {
                    // Simulate an API call to submit booking
                    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
                    // Simulate successful response
                    const response = {
                        data: {
                            status: 'success',
                            booking_id: Math.floor(Math.random() * 10000)
                        }
                    };
                    if (response.data.status === 'success') {
                        this.bookingConfirmation.id = response.data.booking_id;
                        this.showBookingConfirmation = true;
                        // Reset form
                        this.bookingForm = {
                            contact_name: '',
                            email: '',
                            phone: '',
                            date: '',
                            time: '',
                            pickup_location: '',
                            dropoff_location: '',
                            horse_details: '',
                            special_requirements: ''
                        };
                        // Optionally, add the booking to userBookings if authenticated
                        if (this.isAuthenticated) {
                            this.userBookings.push({
                                id: response.data.booking_id,
                                start_datetime: `${this.bookingForm.date}T${this.bookingForm.time}:00`,
                                horse: { name: this.bookingForm.horse_details },
                                status: 'Confirmed'
                            });
                        }
                    }
                } catch (error) {
                    console.error('Error submitting booking:', error);
                }
            },
            closeBookingConfirmation() {
                this.showBookingConfirmation = false;
                // Optionally, navigate or reset state
            },
            async submitFeedback() {
                try {
                    // Simulate an API call to submit feedback
                    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
                    // Simulate successful response
                    const response = {
                        data: {
                            status: 'success'
                        }
                    };
                    if (response.data.status === 'success') {
                        this.showFeedbackConfirmation = true;
                        // Reset form
                        this.feedbackForm = {
                            title: '',
                            rating: 0,
                            content: ''
                        };
                    }
                } catch (error) {
                    console.error('Error submitting feedback:', error);
                }
            },
            selectPlan(planType) {
                this.selectedPlan = planType;
                this.showMembershipModal = true;
            },
            async processMembership() {
                try {
                    // Simulate an API call to process membership
                    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
                    // Simulate successful response
                    const response = {
                        data: {
                            status: 'success'
                        }
                    };
                    if (response.data.status === 'success') {
                        this.showMembershipModal = false;
                        alert('Your membership has been successfully activated! Check your email for confirmation.');
                        // Optionally, update user data or state
                    }
                } catch (error) {
                    alert('Error processing membership. Please try again.');
                    console.error('Error:', error);
                }
            }
        },
        watch: {
            'bookingForm.date': 'fetchAvailableSlots'
        },
        mounted() {
            // Optionally, fetch initial data
        }
    });
});
