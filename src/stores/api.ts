import type { RequestError } from '../services/ApiService';
import { defineStore } from 'pinia';

export const useApiStore = defineStore({
    id: 'api',
    state: () => {
        const working = false;
        const error: RequestError | null = null;
        const message = null;
        const last = new Date();
        return { working, error, message };
    },
    actions: {
        
    },
})

