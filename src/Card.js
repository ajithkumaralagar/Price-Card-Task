import React from 'react'

function card({data}) {
  return <>
        
        <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{data.plan}</h5>
            <h6 className="card-price text-center">${data.price}<span className="period">/month</span></h6>
            <hr></hr>
            <ul className="fa-ul">
              <li className={data.isusers?"":"text-muted"}><span className="fa-li"><i className={data.isusers?"fas fa-check":"fas fa-times"}></i></span>{data.users}</li>
              <li className={data.isstorage?"":"text-muted"}><span className="fa-li"><i className={data.isstorage?"fas fa-check":"fas fa-times"}></i></span>{data.storage}</li>
              <li className={data.ispublicProjects?"":"text-muted"}><span className="fa-li"><i className={data.ispublicProjects?"fas fa-check":"fas fa-times"}></i></span>{data.publicProjects}</li>
              <li className={data.iscommunity?"":"text-muted"}><span className="fa-li"><i className={data.iscommunity?"fas fa-check":"fas fa-times"}></i></span>{data.community}</li>
              <li className={data.isprivateProject?"":"text-muted"}><span className="fa-li"><i className={data.isprivateProject?"fas fa-check":"fas fa-times"}></i></span>{data.privateProject}</li>
              <li className={data.isphoneSupport?"":"text-muted"}><span className="fa-li"><i className={data.isphoneSupport?"fas fa-check":"fas fa-times"}></i></span>{data.phoneSupport}</li>
              <li className={data.issubdomain?"":"text-muted"}><span className="fa-li"><i className={data.issubdomain?"fas fa-check":"fas fa-times"}></i></span>{data.subdomain}</li>
              <li className={data.isstatusReport?"":"text-muted"}><span className="fa-li"><i className={data.isstatusReport?"fas fa-check":"fas fa-times"}></i></span>{data.statusReport}</li>
              </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div></>
}

export default card