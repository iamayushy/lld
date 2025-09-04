import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pagination from './pagination'
import { useToast } from './context/Toast'
import Toast from './Toast'
import TicTacToe from './tic'

function App() {
  const [pageProps, setPageProps] = useState({
    totalPages: 123,
    pageOptions: [10, 20, 30, 40, 50],
    currentPage: 1,
    size: 7
  })
  const dummyData = Array.from({ length: pageProps.size }, (_, i) => `Item ${(pageProps.currentPage - 1) * pageProps.size + i + 1}`);
  const {addToast} = useToast();
  return (
    <>
    <div>
        <TicTacToe n={3}/>
       <Toast/>
    </div>
    </>
  )
}

export default App
