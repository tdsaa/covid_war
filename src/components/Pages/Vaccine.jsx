import React from 'react'

import vaccine from '../../Content/vaccine';

class Vaccine extends React.Component {
    render() {
        return(
            <main id="main">
            <section class="about" id="myth">
                <div className="container">
                    <div className="section-title">
                        <h2>{vaccine.covid.heading}</h2>
                        <p>{vaccine.covid.content}</p>
                    </div>
                    <div className="section-title content">
                        <h2 >{vaccine.myths.heading}</h2>
                        <p>{vaccine.myths.subheading}</p>
                        <div className="row">
                            <div className="col-md-12">
                            <ul>
                                {
                                    vaccine.myths.contents.map(content=>(
                                        <li id={content.id}><i class="ion-checkmark-circled"></i>{content.value}</li>

                                    ))
                                }
                            </ul>
                            </div>
                        </div>
                    </div>
                    </div>
            </section>
            </main>
        );
    }
   
}

export default Vaccine;