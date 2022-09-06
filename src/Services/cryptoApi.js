import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'ba16cb5be2msh6535b6ead74c882p15ce85jsn0b795a808275',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;