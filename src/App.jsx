import {Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider
} from 'react-router-dom'

import React from 'react'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'



const App = () => 
  // Add New Job
  {const addJob = async (newJob) => { 
   
  
    return("added ")
  }

  // Delete Job
  const deleteJob = async (id) => { 
   console.log("delete")
  }

  // Update Job
  const updateJob = async (job) => {
    
    return("updated")
  }

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<MainLayout />}> 
      <Route index element={<HomePage />}/>
      <Route path='/jobs' element={<JobsPage />}/>
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />}/>
      <Route path='/edit-job/:id' element={<EditJobPage  updateJobSubmit={updateJob} />} />
      <Route path='/jobs/:id' element={<JobPage deleteJob={ deleteJob } />} />
      <Route path='*' element={<NotFoundPage />}/>
   </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App