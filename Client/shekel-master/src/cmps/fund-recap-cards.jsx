import Card from 'react-bootstrap/Card';
import {CardGroup} from "react-bootstrap";
import React from "react";

export function FundRecapCards() {
    return (
        <section className='fund-cards'>
            <div className='cards-wrapper flex'>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">קופות גמל</h5>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">פוליסות חסכון</h5>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">קרנות פנסיה</h5>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">קרנות השתלמות</h5>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">גמל להשקעה</h5>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">חסכון לכל ילד</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

