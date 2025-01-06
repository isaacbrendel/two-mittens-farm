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
                horses: ''
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