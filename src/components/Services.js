import React from 'react'
import Title from './Title.js'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";

class Services extends React.Component
{
    state={
        services:[
            {
                icon: <FaCocktail />,
                title: 'Free Cocktails',
                info: 'Harvest without friendship, and we won’t experience a teleporter.'
            },
            {
                icon: <FaHiking />,
                title: 'Free FaHiking',
                info: 'Harvest without friendship, and we won’t experience a teleporter.'
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free FaShuttleVan',
                info: 'Harvest without friendship, and we won’t experience a teleporter.'
            },
            {
                icon: <FaBeer />,
                title: 'Free FaBeer',
                info: 'Harvest without friendship, and we won’t experience a teleporter.'
            }
        ]
    }

    render() {
        return (
            <section className='services'>
                <Title title='Services'/>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className='service'>
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}

export default Services;