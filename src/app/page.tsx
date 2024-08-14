import CrudForm from '@/components/Form'
import CrudTable from '@/components/Table'
import { CrudProvider } from '@/context/CrudContext'


import React from 'react'

const page = () => {
  return (
    <div>
      <CrudProvider><CrudForm/>
      <CrudTable/></CrudProvider>

    </div>
  )
}

export default page