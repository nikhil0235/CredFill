
import { GiTakeMyMoney } from "react-icons/gi";
import { MdAccountBalance } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa6";
import { VscWorkspaceTrusted } from "react-icons/vsc";

import './Services.scss'
export default function Services() {
  return (
    <div className="Services bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="heading">Our Services</h2>
        <div className="grid">
          <div className="child">
          <div className="icon-container">
    <GiTakeMyMoney size={80} />
  </div>
            <h3 className="grid-heading">Taxation</h3>
            <ul className="points">
              <li>Income Tax Return</li>
              <li>GST Registration</li>
              <li>GST Return</li>
              <li>EPFO</li>
              <li>Tax Audit for individual</li>
            </ul>
            <div className="grid-end" variant="outline">
              Learn More
            </div>
          </div>
          <div className="child">
          <div className="icon-container">
    <VscWorkspaceTrusted size={80} />
  </div>
          
          <h3 className="grid-heading">Company Formation & MCA Compliance</h3>
          <ul className="points">
              <li>Proprietorship, Company, LLP, Partnership Firm Registration</li>
              <li>Compliance With MCA</li>
              <li>Audits of Financial Statements</li>
            </ul>
            <div className="grid-end" variant="outline">
              Learn More
            </div>
          </div>
          <div className="child">
          
          <div className="icon-container">
           < MdAccountBalance size={80} />  </div>
          <h3 className="grid-heading">Accounting, Books Finalisation & Others</h3>
          <ul className="points">
              <li>Book Keeping</li>
              <li>Accounting</li>
              <li>Financial Statements</li>
              <li>Project Report</li>
              <li>Projection of Financials</li>
              <li>Certificates of all Kind</li>
            </ul>
            <div className="grid-end" variant="outline">
              Learn More
            </div>
          </div>
          <div className="child">
          
          <div className="icon-container">
    <FaRegCreditCard size={80} />
  </div>
          <h3 className="grid-heading">Credit & Finance</h3>
          <ul className="points">
              <li>Loans of all kind through our Banking Partner and NBFCs</li>
              <li>Bill Voucher Discounting for SMEs</li>
            </ul>
            <div className="grid-end" variant="outline">
              Learn More
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
