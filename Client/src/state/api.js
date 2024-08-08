import { getFormLabelUtilityClasses } from '@mui/material';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://new-school-site.onrender.com/api' }),
  reducerPath: 'api',
  tagTypes: ['User', 'Home', 'Faces', 'Facilities', 'Tutors', 'Excursion', 'Events', 'Courses', 'Chemistry', 'UserVerify', 'AdminVerify', 'StudentDashboard', 'Profile', 'Timetable', 'Messages', 'Geography', 'Assignments', 'Attendance', 'Grades', 'Results', 'Activities', 'Payments', 'Library'],
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

    // students dashboard
    getProfile: builder.query({
      query: () => '/student/profile',
      providesTags: ['Profile'],
    }),

    getTable: builder.query({
      query: () => '/student/timetable',
      providesTags: ['Table'],
    }),

    getMessages: builder.query({
      query: () => '/student/messages',
      providesTags: ['Messages'],
    }),

    getGeography: builder.query({
      query: () => '/student/geography',
      providesTags: ['Geography'],
    }),

    getAssignments: builder.query({
      query: () => '/student/assignments',
      providesTags: ['Assignments'],
    }),

    getAttendance: builder.query({
      query: () => '/student/attendance',
      providesTags: ['Attendance'],
    }),

    getGrades: builder.query({
      query: () => '/student/grades',
      providesTags: ['Grades'],
    }),

    getResults: builder.query({
      query: () => '/student/results',
      providesTags: ['Results'],
    }),

    getActivities: builder.query({
      query: () => '/student/activities',
      providesTags: ['Activities'],
    }),

    getPayments: builder.query({
      query: () => '/student/payments',
      providesTags: ['Payments'],
    }),

    getLibrary: builder.query({
      query: () => '/student/library',
      providesTags: ['Library'],
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
