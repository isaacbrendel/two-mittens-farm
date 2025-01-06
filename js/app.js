// @ts-nocheck
document.addEventListener('DOMContentLoaded', () => {
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