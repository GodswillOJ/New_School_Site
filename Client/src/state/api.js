import { getFormLabelUtilityClasses } from '@mui/material';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://new-school-site.onrender.com/api' }),
  reducerPath: 'api',
  tagTypes: ['User', 'Home', 'Faces', 'Facilities', 'Tutors', 'Excursion', 'Events', 'Courses', 'Chemistry', 'UserVerify', 'AdminVerify', 'StudentDashboard'],
  endpoints: (builder) => ({

    registerUser: builder.mutation({
      query: (formData) => ({
        url: '/registerStudent',
        method: 'POST',
        body: formData,
        headers: {
          // 'Content-Type': 'multipart/form-data',
        },
      }),
      invalidatesTags: ['User'],
    }),

    User: builder.mutation({
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

    getTutors: builder.query({
      query: () => '/tutors',
      providesTags: ['Tutors'],
    }),

    getChemistry: builder.query({
      query: () => '/chemistry_class',
      providesTags: ['Chemistry'],
    }),

    getEvents: builder.query({
      query: () => '/events',
      providesTags: ['Events'],
    }),

    getFacilities: builder.query({
      query: () => '/facilities',
      providesTags: ['Facilities'],
    }),

    getCourses: builder.query({
      query: () => '/courses',
      providesTags: ['Courses'],
    }),

    getExcursion: builder.query({
      query: () => '/excursion',
      providesTags: ['Excursion'],
    }),

    getStudentDashboard: builder.query({
      query: (userID) => `/student/dashboard?id=${userID}`,
      providesTags: ['StudentDashboard'],
    }),
    
    getUserVerify: builder.query({
      query: (userID) => `/user_verify/${userID}`,
      providesTags: ['UserVerify'],
    }),

    getAdminVerify: builder.query({
      query: (userID) => `/admin_verify/${userID}`,
      providesTags: ['AdminVerify'],
    }),

  }),
});

export const { 
    useRegisterUserMutation, 
    useUserMutation,
    useGetHomeQuery,
    useGetFacesQuery,
    useGetTutorsQuery,
    useGetFacilitiesQuery,
    useGetExcursionQuery,
    useGetCoursesQuery,
    useGetEventsQuery,
    useGetChemistryQuery,
    useGetUserVerifyQuery,
    useGetStudentDashboardQuery,
 } = api;
