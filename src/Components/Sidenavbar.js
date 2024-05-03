import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { faCertificate, faDatabase, faFlask, faHotTubPerson, faMoneyBill, faMoneyBill1Wave, faPaperclip, faShop, faShopSlash } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons/faMoneyBillWave'
import { faTumblrSquare } from '@fortawesome/free-brands-svg-icons/faTumblrSquare'
import { faVialVirus } from '@fortawesome/free-solid-svg-icons/faVialVirus'
import { faVial } from '@fortawesome/free-solid-svg-icons/faVial'
import { faApper } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons/faFile'
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons/faFileInvoice'
import { faFileLines } from '@fortawesome/free-regular-svg-icons/faFileLines'
import './Sidenavbar.css'

const Sidenavbar = () => {
  return (
    <div className='bg-white sidebar'>
        <div className='list-group'>
            <p>Dashboards</p>
        <a className='list-group-item className text-center'>
            <i><FontAwesomeIcon icon={faCircleUser}/></i>
            <div>
            <span>patients</span>
            </div>
        </a>
        <a className='list-group-item className text-center'>
            <i ><FontAwesomeIcon icon={faDatabase}/></i>
            <div>
            <span>HR</span>
            </div>
        </a>
        <a className='list-group-item className text-center'>
            <i ><FontAwesomeIcon icon={faFlask}/></i>
            <div>
            <span>Labs</span>
            </div>
        </a>
        <a className='list-group-item className text-center'>
            <i><FontAwesomeIcon icon={faShop}/></i>
            <div>
            <span>Pharma</span>
            </div>
        </a>

        </div>



        <div className='list-group'>
            <p>Process</p>
        <a className='list-group-item className text-center'>
            <i ><FontAwesomeIcon icon={faFileInvoice}/></i>
            <div>
            <span>Registration</span>
            </div>
        </a>
        <a className='list-group-item className text-center'>
            <i ><FontAwesomeIcon icon={faFileLines}/></i>
            <div>
            <span>Consolutation</span>
            </div>
        </a>
        <a className='list-group-item className text-center'>
            <i ><FontAwesomeIcon icon={faVial}/></i>
            <div>
            <span>Test&Reports</span>
            </div>
        </a>
        <a className='list-group-item className text-center'>
            <i ><FontAwesomeIcon icon={faMoneyBill}/></i>
            <div>
            <span>Billing</span>
            </div>
        </a>
            
        </div>

    </div>
  )
}

export default Sidenavbar