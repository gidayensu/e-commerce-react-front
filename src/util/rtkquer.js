import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => 'posts',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Post', id })),
              { type: 'Post', id: 'LIST' },
            ]
          : [{ type: 'Post', id: 'LIST' }],
    }),
    addPost: build.mutation({
      query: (body) => ({
        url: `posts`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),
    getPost: build.query({
      query: (id) => `posts/${id}`,
      providesTags: (result, error, id) => [{ type: 'Post', id }],
    }),
    updatePost: build.mutation({
      query: ({ id, ...patch }) => ({
        url: `posts/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          api.util.updateQueryData('getPost', id, (draft) => {
            Object.assign(draft, patch);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Post', id }],
    }),
    deletePost: build.mutation({
      query(id) {
        return {
          url: `posts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (result, error, id) => [{ type: 'Post', id }],
    }),
  }),
});

const {
  useGetPostQuery,
  useGetPostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = api;

export { useGetPostQuery, useGetPostsQuery, useAddPostMutation, useUpdatePostMutation, useDeletePostMutation };
