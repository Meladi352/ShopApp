import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/pages/home/Home'
import './index.css'

import {QueryClient, QueryClientProvider}  from 'react-query'
import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render( 
<QueryClientProvider client = {queryClient}> <Home />
</QueryClientProvider>

)
