import { configureStore } from '@reduxjs/toolkit';
import windowpropertiesReducer from './reducers/windowproperties/windowproperties.reducer';

const store = configureStore({
    reducer: {
        windowproperties: windowpropertiesReducer
    }
})

export default store;