import { getFormLabelUtilityClasses } from '@mui/material';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://go-tech-school.onrender.com/api' }),
  reducerPath: 'api',
  tagTypes: ['User', 'Home', 'Faces'],
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

    getFaces: builder.query({
      query: () => '/our_faces',
      providesTags: ['Faces'],
    }),

  }),
});

export const { 
    useRegisterUserMutation, 
    useLoginUserMutation,
    useGetHomeQuery,
    useGetFacesQuery,
 } = api;
