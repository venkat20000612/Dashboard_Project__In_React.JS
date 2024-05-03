import React from 'react'
import Titlesection from './Titlesection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons/faUserGroup'


const Home = () => {
  return (
    <div className='container-fluid'>
        <div className='row g-3 my-1'>
            <div className='col-sm-12'>
                <Titlesection/>
            </div>
        </div>
    </div>
  )
}

export default Home