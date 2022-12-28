import React from 'react'

export default function () {
    const memberNumber = '000001'
  return (
    <form action=""><div className='row my-2'>
        
    <div className="col-md-6">
        <label className='ms-3'>Date: </label><input type="date" className='ms-2'/> <input type='date'/>
    </div>
    <div className='col-md-6 my-2'>
        <input type="radio"/> Institution <input type="radio"/> Person <input type='radio'/> Joint
    </div>
    <div className="row my-2">
        <div className="col-md-6 my-2">
            Member: <u>{memberNumber}</u>
        </div>
        <div className="col-md-5 d-flex flex-nowrap ">
            <label className='control-label my-2'>Area/Group</label>  <select className='form-control ms-2'>
                <option value=""></option>
            </select>
        </div>
    </div>
    <div className="row ">
        <div className="col-md-6 d-flex wrap">
            <label className='control-labelp '>First & Middle Name</label>
            <input type='text' className='form-control d-flex flex-nowrap '/>
        </div>
        <div className="col-md-6 d-flex wrap">
            <label className='control-label'>Last Name</label>
            <input type='text' className='form-control d-flex flex-nowrap '/>
        </div>
    </div>
    <div className="row">
        <div className="col-md-12 my-3 d-flex flex-nowrap">
            <label className='control-label d-flex flex-wrap'>नेपालीमा नाम </label>
            <input type='text' className='form-control  d-flex flex-wrap'/>
        </div>
    </div>
    <div className="row">
        <div className="col-md-6 my-3 d-flex  flex-nowrap">
            <label className='control-label d-flex flex-wrap'>Permanent Address: </label>
            <input type='text' className='form-control  d-flex flex-wrap'/>
        </div>
        <div className="col-md-2 my-2 d-flex  flex-nowrap">
            Ward: <input type="number" className='form-control-sm ms-2'/>
        </div>
        <div className="col-md-3 ms-5 d-flex  flex-nowrap ">
            <label className='control-label my-2'>Municipality</label> <select className='form-control ms-2'>
                <option value=""></option>
            </select>
        </div>
    </div>
    <div className="row">
    <div className="col-md-6 my-3 d-flex  flex-nowrap">
            <label className='control-label d-flex flex-wrap'>Current Address: </label>
            <input type='text' className='form-control  d-flex flex-wrap'/>
        </div>
        <div className="col-md-2 my-2 d-flex  flex-nowrap">
            Ward: <input type="number" className='form-control-sm ms-2'/>
        </div>
        <div className="col-md-3 ms-5 d-flex  mt-2 flex-nowrap ">
            <label className='control-label'>Municipality</label> <select className='form-control ms-2'>
                <option value=""></option>
            </select>
        </div>
    </div>
    <div className="row">
        <div className="col-md-12 my-3 d-flex flex-nowrap">
            <label className='control-label d-flex flex-wrap'>Postal Address: </label>
            <input type='text' className='form-control  d-flex flex-wrap'/>
        </div>
    </div>
    <div className="row">
        <div className="col-md-12 my-3 d-flex flex-nowrap">
            <label className='control-label d-flex flex-wrap'>नेपालीमा ठेगाना: </label>
            <input type='text' className='form-control  d-flex flex-wrap'/>
        </div>
    </div>
    <div className="row">
        <div className="col-md-3 my-3">
            <label className='control-label d-flex flex-wrap'>Residence Tel. no: </label>
            <input type='text' className='form-control  d-flex flex-wrap'/>
        </div>
        <div className="col-md-3 my-3">
            <label className='control-label d-flex flex-wrap'>Office Tel. no: </label>
            <input type='text' className='form-control  d-flex flex-wrap'/>
        </div>
        <div className="col-md-3 my-3">
            <label className='control-label d-flex flex-wrap'>Mobile no: </label>
            <input type='text' className='form-control  d-flex flex-wrap'/>
        </div>
        <div className="col-md-3 my-3">
            <label className='control-label d-flex flex-wrap'>E-mail</label>
            <input type='text' className='form-control  d-flex flex-wrap'/>
        </div>
    </div>
    <div className="row">
        <div className="col-md-6 d-flex flex-nowrap ">
            <label className='control-label my-2'>Reference From: </label>  <select className='form-control ms-2'>
                <option value=""></option>
            </select>
        </div>
        <div className="col-md-6 d-flex flex-nowrap ">
            <label className='control-label my-2'>Responsible Staff: </label>  <select className='form-control ms-2'>
                <option value=""></option>
            </select>
        </div>
    </div>
    <div className="row">
    <div className="col-md-8 mt-2 d-flex flex-nowrap ">
            <label className='control-label my-2'>Area/Group</label>  <select className='form-control ms-2'>
                <option value=""></option>
            </select>
        </div>
    </div>
    <div className="row ">
        <div className="col-md-3 my-3 d-flex flex-nowrap">
            <label className='control-label'>PAN no: </label>
            <input type='text' className='form-control  d-flex flex-wrap'/>
        </div>
        <div className="col-md-3 my-3 d-flex flex-nowrap">
            <label className='control-label d-flex flex-wrap'>PAN Date (BS): </label>
            <input type='date' className='form-control  d-flex flex-wrap'/>
        </div>
        <div className="col-md-5 ms-5 my-2 d-flex  flex-nowrap ">
            <label className='control-label my-2'>PAN District</label> <select className='form-control ms-2'>
                <option value=""></option>
            </select>
        </div>
    </div>
    <div className="row ">
        <div className="col-md-3 my-3 d-flex flex-nowrap">
            <label className='control-label'>Annual Turnover: </label>
            <input type='text' className='form-control  d-flex flex-wrap'/>
        </div>
        <div className="col-md-3 my-3 d-flex flex-nowrap">
            <label className='control-label d-flex flex-wrap'>No. of Transaction: </label>
            <input type='text' className='form-control  d-flex flex-wrap'/>
        </div>
        <div className="col-md-5 ms-5 my-2 d-flex  flex-nowrap ">
            <label className='control-label my-2'>Risk Category</label> <select className='form-control ms-2'>
                <option value=""></option>
            </select>
        </div>
    </div>
    <div className="row d-flex align-items-end">
        <div className="col-md-6 ms-auto d-flex align-items-end">
            <label className='control-label mb-2'>Mobile: </label>
                <input type='text' className='form-control  d-flex flex-wrap'/>
        
            <div className='ms-2 mb-2'>For </div>
            <input type='checkbox' className='ms-2 mb-2' /> SMS Banking
        </div>
    </div>
    <div className='row justify-content-evenly my-2'>
        <div className="col-md-4">
            <input className='btn btn-primary' type="submit" value="Forward for Approval"/>
        </div>
        <div className='col-md-2'>
            <button className="btn btn-secondary ms-2">Close</button>
        </div>
    </div>

</div></form>
  )
}
