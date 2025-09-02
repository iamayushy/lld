import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pagination from './pagination'

function App() {
  const [pageProps, setPageProps] = useState({
    totalPages: 123,
    pageOptions: [10, 20, 30, 40, 50],
    currentPage: 1,
    size: 7
  })
  const dummyData = Array.from({ length: pageProps.size }, (_, i) => `Item ${(pageProps.currentPage - 1) * pageProps.size + i + 1}`);
  return (
    <>
    <div>
      <div>
        {dummyData.map(item => <div key={item} className="p-2 border-b">{item}</div>)}
      </div>
    <Pagination
      pageProps={pageProps}
      setPageProps={setPageProps}
    />
      </div>
    </>
  )
}

export default App
