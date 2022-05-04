import { configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { postApi } from '../feture/postApi'

export const store=configureStore({
    reducer:{
        [postApi.reducerPath]:postApi.reducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(postApi.middleware)
    }
})

setupListeners(store.dispatch)