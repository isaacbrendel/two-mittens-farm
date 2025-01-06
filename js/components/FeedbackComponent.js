const FeedbackComponent = {
    template: `
        <div class="space-y-12">
            <div class="card-luxury p-8">
                <h2 class="text-3xl font-playfair font-bold mb-8">Client Testimonials</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div v-for="review in testimonials" 
                         :key="review.id" 
                         class="p-6 bg-cream rounded-lg space-y-4">
                        <div class="flex space-x-2">
                            <span v-for="n in 5" :key="n" class="text-gold">
                                {{ n <= review.rating ? '★' : '☆' }}
                            </span>
                        </div>
                        <p class="text-gray-700 italic">"{{ review.comment }}"</p>
                        <p class="text-gray-600 font-medium">- {{ review.author }}</p>
                    </div>
                </div>
            </div>
            
            <div class="card-luxury p-8">
                <h3 class="text-2xl font-playfair font-bold mb-6">Share Your Experience</h3>
                <form @submit.prevent="submitFeedback" class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                            <input v-model="feedbackForm.name" type="text" required 
                                class="input-luxury w-full" placeholder="Your name" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                            <select v-model="feedbackForm.rating" required class="input-luxury w-full">
                                <option value="">Select rating</option>
                                <option v-for="n in 5" :key="n" :value="n">{{ n }} Star{{ n === 1 ? '' : 's' }}</option>
                            </select>
                        </div>
                        <div class="md:col-span-2">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Your Experience</label>
                            <textarea v-model="feedbackForm.comment" required 
                                class="input-luxury w-full" rows="4" 
                                placeholder="Share your experience with our services"></textarea>
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <button type="submit" class="btn-luxury px-8 py-3">
                            Submit Feedback
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `,
    data() {
        return {
            testimonials: [
                {
                    id: 1,
                    rating: 5,
                    comment: "Two Mittens Farm provided exceptional care during our cross-country transport. Our horses arrived relaxed and happy.",
                    author: "Sarah Thompson, Professional Trainer"
                },
                {
                    id: 2,
                    rating: 5,
                    comment: "Their attention to detail and professional service is unmatched. The elite membership is worth every penny.",
                    author: "Michael Reynolds, Competition Rider"
                },
                {
                    id: 3,
                    rating: 5,
                    comment: "The platinum service exceeded all expectations. The personal concierge made everything effortless.",
                    author: "Elizabeth Chen, Stable Owner"
                },
                {
                    id: 4,
                    rating: 5,
                    comment: "Outstanding service! The team went above and beyond to ensure our horses' comfort and safety.",
                    author: "James Wilson, Breeder"
                }
            ],
            feedbackForm: {
                name: '',
                rating: '',
                comment: ''
            }
        };
    },
    methods: {
        submitFeedback() {
            alert('Thank you for your feedback!');
            this.feedbackForm = {
                name: '',
                rating: '',
                comment: ''
            };
        }
    }
};