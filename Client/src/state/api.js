import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://go-tech-school.onrender.com/api' }),
  reducerPath: 'api',
  tagTypes: ['User', 'Home'],
  endpoints: (builder) => ({

    registerUser: builder.mutation({
      query: (formData) => ({
        url: '/register',
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
      invalidatesTags: ['User'],
    }),

    loginUser: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['User'],
    }),

    getHome: builder.query({
      query: () => '/',
      providesTags: ['Home'],
    }),

  }),
});

export const { 
    useRegisterUserMutation, 
    useLoginUserMutation,
    useGetHomeQuery,
 } = api;
