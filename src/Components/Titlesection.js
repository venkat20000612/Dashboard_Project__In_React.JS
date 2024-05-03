import React from 'react'
import './Titlesection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons/faUserGroup'
import { faFilePrescription } from '@fortawesome/free-solid-svg-icons/faFilePrescription'
import { faPagelines } from '@fortawesome/free-brands-svg-icons/faPagelines'
import { faFileLines } from '@fortawesome/free-regular-svg-icons/faFileLines'
import { faMoneyBill1 } from '@fortawesome/free-regular-svg-icons/faMoneyBill1'
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons/faMoneyCheckDollar'
import { faArrowRightRotate } from '@fortawesome/free-solid-svg-icons/faArrowRightRotate'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown'

const Titlesection = () => {
  return (
    <div>
        {/* banner nav section-1 starts */}
        <nav class="navbar navbar-expand-lg navbar-light bg-white navbar-back">
        <div class="container">
            <span class="navbar-brand brand-color"><i><FontAwesomeIcon icon={faUserGroup}/></i>Consultants</span>
        </div>
        </nav>
        {/* banner nav section-1 Ends */}

        {/* Banner nav section-2 Starts */}
        <nav class="navbar navbar-expand-lg navbar-light bg-white mt-2 banner-nav">
            <ul class="navbar-nav">
            <li class="nav-item filter-back">
                <span class="nav-link">Filters</span>
            </li>
            <li class="nav-item dropdown range-dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select Range
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Range1</a>
                <a class="dropdown-item" href="#">Range2</a>
                <a class="dropdown-item" href="#">Range3</a>
                </div>
            </li>
            <li className='checked-opitions'>
            <input type="radio"  name="course" value="HTML"/>
            <label>Summary</label>
            
            
            </li>
            <li className='checked-opitions'>
            <input type="radio"  name="course" value="CSS"/>
            <label>Branch Wise</label>
            </li>
            </ul>
        
        </nav>
        {/* Banner nav section-2 Ends */}

        {/* Cards Sections Starts */}
        <div className='container'>
            <div className='row my-2'>
                <div className='col'>
                    <div className='bg-white shadow-sm d-flex justify-content-around align-items-center banner-icon'>
                        <div>
                            <p className='text1'>Consultant Count</p>
                            <h6 className='text-number'>90/900</h6>
                            <p className='period'>Today/Period</p>
                        </div>
                        <i><FontAwesomeIcon icon={faUserGroup} /></i>
                    </div>
                </div>
                <div className='col'>
                    <div className='bg-white shadow-sm d-flex justify-content-around align-items-center banner-icon banner-icon2'>
                        <div>
                            <p className='text1'>Consultations</p>
                            <h6 className='text-number'>11/25</h6>
                            <p className='period'>Today/Period</p>
                        </div>
                        <i><FontAwesomeIcon icon={faFileLines} /></i>
                    </div>
                </div>
                <div className='col'>
                    <div className='bg-white shadow-sm d-flex justify-content-around align-items-center banner-icon banner-icon3'>
                        <div>
                            <p className='text1'>Labs</p>
                            <h6 className='text-number'>25/560</h6>
                            <p className='period'>Today/Period</p>
                        </div>
                        <i><FontAwesomeIcon icon={faMoneyBill1} /></i>
                    </div>
                </div>
                <div className='col'>
                    <div className='bg-white shadow-sm d-flex justify-content-around align-items-center banner-icon banner-icon4'>
                        <div>
                            <p className='text1'>DitePlans</p>
                            <h6 className='text-number'>25/250</h6>
                            <p className='period'>Today/Period</p>
                        </div>
                        <i><FontAwesomeIcon icon={faMoneyCheckDollar} /></i>
                    </div>
                </div>
            </div>
        </div>
         {/* Cards Sections Ends */}

        {/* Table Section Starts */}
        <div class="table-section">
        <nav class="navbar bg-body-tertiary tableicon">
        <div class="container-fluid">
        <h6>Consultants</h6>
            <div className='d-flex'>
            <i className='tableicon1'><FontAwesomeIcon icon={faArrowRightRotate}/></i>
            <i><FontAwesomeIcon icon={faArrowDown}/></i>
            </div>
        </div>
        </nav>
        <table class="table table-hover table-lines">
        <thead>
            <tr>
            <th scope="col">NAME</th>
            <th scope="col">PATIENT COUNT</th>
            <th scope="col">LABS</th>
            <th scope="col">DITE PLANS</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Jhon Smith</td>
            <td>12</td>
            <td>3</td>
            <td>6</td>
            </tr>
            <tr>
            <td>Jane Doe</td>
            <td>8</td>
            <td>2</td>
            <td>4</td>
            </tr>
            <tr>
            <td>Mark Jhonson</td>
            <td>6</td>
            <td>1</td>
            <td>2</td>
            </tr>
            <tr>
            <td>Mary Lee</td>
            <td>10</td>
            <td>4</td>
            <td>8</td>
            </tr>
            <tr>
            <td>David Chen</td>
            <td>14</td>
            <td>5</td>
            <td>9</td>
            </tr>
            <tr>
            <td>Smily Wana</td>
            <td>5</td>
            <td>2</td>
            <td>3</td>
            </tr>
            <tr>
            <td>Apsara</td>
            <td>6</td>
            <td>2</td>
            <td>5</td>
            </tr>
            <tr>
            <td>Priya</td>
            <td>7</td>
            <td>5</td>
            <td>10</td>
            </tr>
            <tr>
            <td>Sravya</td>
            <td>6</td>
            <td>1</td>
            <td>2</td>
            </tr>
            <tr>
            <td>Roshini</td>
            <td>9</td>
            <td>10</td>
            <td>5</td>
            </tr>
        </tbody>
        </table>
        </div>

        {/* Table Section Ends */}


    </div>
  )
}

export default Titlesection