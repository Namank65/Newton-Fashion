import {configureStore} from '@reduxjs/toolkit';
import aiReducer from './AiCompSlice';


const appStore = configureStore({
    reducer: {
        ai: aiReducer
    }
})

export default appStore;