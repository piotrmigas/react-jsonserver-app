import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  tagTypes: ['Tasks'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/tasks' }),
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      query: () => '/',
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Tasks' as const, id })), { type: 'Tasks', id: 'LIST' }]
          : [{ type: 'Tasks', id: 'LIST' }],
    }),
    addTask: builder.mutation<Task, { text: string; day: string; reminder: boolean }>({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Tasks'],
    }),
    deleteTask: builder.mutation<Task, number>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Tasks'],
    }),
    toggleTask: builder.mutation<Task, Task>({
      query: (task) => {
        const updTask = { ...task, reminder: !task.reminder };
        return {
          url: `/${task.id}`,
          method: 'PUT',
          body: updTask,
        };
      },
      invalidatesTags: ['Tasks'],
    }),
  }),
});

export const { useToggleTaskMutation, useGetTasksQuery, useAddTaskMutation, useDeleteTaskMutation } = api;
