import { Suspense } from 'react'
import { useLoaderData, Await } from 'react-router-dom'

function SuspenseWrapper({ children }) {
    const data = useLoaderData()
  return (
    <Suspense fallback={<p>Loading recipes...</p>}>
        <Await resolve={data} errorElement={<p>Problem fetching the data...</p>}>
            {children}
        </Await>
    </Suspense> 
  )
}

export default SuspenseWrapper