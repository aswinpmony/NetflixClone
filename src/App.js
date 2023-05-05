import React from 'react'
import NavBa from './Compone/NavBa/NavBa';
import { action, comedy, originals,horror,documentaries,romance } from './urls'
import './App.css'
import Banner from './Compone/Banner/Banner';
import RowPost from './Compone/RowPoster/RowPost';

function App() {
  return (
    <div className='App'>
      <NavBa/>
      <Banner/>
      <RowPost url={originals}  title='Netflix Originals'/>
      <RowPost url={action}  title='Action' isSmall />
      <RowPost url={comedy}  title='Comedy' isSmall />
      <RowPost url={horror}  title='Horror' isSmall />
      <RowPost url={romance}  title='Romantic' isSmall />
      <RowPost url={documentaries}  title='Documentaries' isSmall />
      
      
    </div>
  )
}

export default App;

