import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';



export const postApi=createApi({
    reducerPath:"postApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3002"}),
    endpoints:(builder)=>({
        getAllData:builder.query({
            query:()=>({
                url:"/posts",
                method:"GET"
            })
        }),
        getAllDataById:builder.query({
            query:(id)=>({
                url:`/posts/${id}`,
                method:"GET"
            })
        })
    }),
   
})

export const {useGetAllDataQuery,useGetAllDataByIdQuery}=postApi