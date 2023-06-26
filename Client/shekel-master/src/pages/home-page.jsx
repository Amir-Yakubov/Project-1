import React from 'react'
import {Header} from "../cmps/header";

export function HomePage() {
    return (
        <section className='home-page'>
            <Header />
            <container className="intro-main" style={{
                backgroundColor: "red",
                height: 500,
                width: 1312,
            }}>
                <p>
                    'sdfsdfsdfsdf'
                </p>
            </container>
        </section >
    )
}
