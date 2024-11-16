import Api, { errorHandler } from './ApiService';

const resource = 'jokes';

let api = Api()

export default {
    getJokesAmount(amount: number) {
        return api.get(`${resource}/random/${amount}`)
    },
    getRandomJokeByType(type: string) {
        return api.get(`${resource}/${type}/random`)
    },
    getTypes() {
        return api.get(`types`)
    },
    getRandomJoke() {
        return api.get(`random_joke`)
    }
}