import React from "react";
import {Link} from "react-router-dom";

export function FundRecapCards() {
    return (
        <section className='fund-cards'>
            <div className='cards-wrapper flex'>
                <div className="card">
                    <div className="card-body">
                        <Link to='/provident-funds'>
                            <h5 className="card-title">קופות גמל</h5>
                        </Link>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <Link to='/savings-policy-funds'>
                            <h5 className="card-title">פוליסות חסכון</h5>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <Link to='/pension-funds'>
                            <h5 className="card-title">קרנות פנסיה</h5>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <Link to='/education-funds'>
                            <h5 className="card-title">קרנות השתלמות</h5>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <Link to='/provident-for-investment-funds'>
                            <h5 className="card-title">גמל להשקעה</h5>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <Link to='/children-funds'>
                            <h5 className="card-title">חסכון לכל ילד</h5>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

