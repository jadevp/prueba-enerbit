import axios from 'axios'
import React from 'react'
import { Apiurl } from '../api'

const peticionesapi = async (state) => {
    const url = 'https://ops.enerbit.dev/learning/api/v1/meters?page=0&size=50'
    const peticionGet = await axios.get(url)
    state(peticionGet.data.items)


  
}

export {peticionesapi}