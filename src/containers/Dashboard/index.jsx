import React from 'react'
import PaymentContextProvider from '../../PaymentContext'
import Dashboard from './Dashboard'

export default function index() {
    return (
       <PaymentContextProvider>
           <Dashboard/>
       </PaymentContextProvider>
    )
}
