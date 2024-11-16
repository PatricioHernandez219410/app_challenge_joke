import type { RequestError } from '../services/ApiService';
import { defineStore } from 'pinia';

export const useApiStore = defineStore({
    id: 'api',
    state: () => {
        const error: RequestError | null = null;
        const message = null;
        return { error, message };
    },
})

