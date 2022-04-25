import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const initialState: Photo = {
  albumId: 0,
  id: 0,
  title: "",
  url: "",
  thumbnailUrl: "",
};
// https://github.dev/learnwithjason/lets-learn-redux-toolkit
// const photoSlice = createSlice({
//   name: "photos",
//   initialState,
//   reducers: {},
// });

export const photoSlice = createApi({
  reducerPath: "/photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/albums/1/photos",
  }),
  endpoints(builder) {
    return {
      fetchPhotos: builder.query<Photo[], void>({
        query() {
          return "/";
        },
      }),
      addPhoto: builder.mutation<Photo, Partial<Photo>>({
        // Partial is a typescript utility which make every field of interface optional
        query: (body) => ({
          url: "/",
          method: "POST",
          body,
        }),
      }),
      removePhoto: builder.mutation<Photo, { id: string }>({
        query: ({ id }) => ({
          url: `/${id}`,
          method: "PUT",
        }),
      }),
    };
  },
});

export const {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} = photoSlice;
