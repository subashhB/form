import React from 'react'
import GeneralDetails from '../components/GeneralDetails'

export default function PersonalDetails() {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Name, Address and Details</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Individual Details</a>
        </li>
      </ul>
      <GeneralDetails/>
    </div>
  )
}
