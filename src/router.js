import React from 'react'
import Home from './pages/Home'
import Obligorview from './pages/View'

const routes = [
    {path: '/', name: 'Home', element: Home},
    {path: '/obligor/:id', name: 'obligor-view', element: Obligorview}
]
export default routes