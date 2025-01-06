// Basic app.js
document.addEventListener('DOMContentLoaded', () => {
    const BookingComponent = {
        template: `
            <div class="card-luxury p-8">
                <h2 class="text-3xl font-bold mb-6">Book Transport</h2>
                <p>Booking form content here</p>
            </div>
        `
    };

    const MembershipComponent = {
        template: `
            <div class="card-luxury p-8">
                <h2 class="text-3xl font-bold mb-6">Membership Plans</h2>
                <p>Membership content here</p>
            </div>
        `
    };

    const FeedbackComponent = {
        template: `
            <div class="card-luxury p-8">
                <h2 class="text-3xl font-bold mb-6">Testimonials</h2>
                <p>Feedback content here</p>
            </div>
        `
    };

    // Router setup
    const router = new VueRouter({
        mode: 'history',
        routes: [
            { path: '/', redirect: '/booking' },
            { path: '/booking', name: 'booking', component: BookingComponent },
            { path: '/membership', name: 'membership', component: MembershipComponent },
            { path: '/feedback', name: 'feedback', component: FeedbackComponent }
        ]
    });

    // Vue instance
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