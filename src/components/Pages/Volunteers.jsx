import React from 'react'

import volunteers from '../../Content/volunteers';

class Volunteers extends React.Component {
    render() {
        return(
            <main id="main">
            <section class="about" id="myth">
                <div className="container">
                    <div className="section-title">
                        <h2>{volunteers.main.heading}</h2>
                        <p>{volunteers.main.content}</p>
                    </div>
                    <div className="section-title content">
                        <h2 >{volunteers.opening.heading}</h2>
                        {/* <p>{volunteers.opening.subheading}</p> */}
                        <div className="row">
                                {
                                    volunteers.opening.points.map(item=>(
                                        <div id = {item.id} className="col-md-4" style={{marginBottom:'25px'}} >
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <h4>{item.name}</h4>
                                                </div>
                                                <div className="col-md-12">
                                                    <p>{item.description}</p>
                                                </div>
                                                <div className="col-md-12">
                                                    { item.requirement.map(skill=>(
                                                       <button style={{margin:'2px'}} type="button" class="btn btn-danger">{skill}</button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
            </section>
            </main>
        );
    }
   
}

export default Volunteers;