import React from 'react'

import mental_health from '../../Content/mental_health';

class MentalHealth extends React.Component {
    render() {
        return(
            <main id="main">
            <section class="about" id="myth">
                <div className="container">
                    <div className="section-title">
                        <h2>{mental_health.main.heading}</h2>
                        <p>{mental_health.main.content}</p>
                    </div>
                    <div className="section-title content">
                        <h2 >{mental_health.points.heading}</h2>
                        <p>{mental_health.points.subheading}</p>
                        <div className="row">
                            <div className="col-md-12">
                            <ul>
                                {
                                    mental_health.points.contents.map(content=>(
                                        <li id={content.id}><i class="ion-checkmark-circled"></i><b>{content.value}</b>{content.detail}</li>

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

export default MentalHealth;