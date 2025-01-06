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