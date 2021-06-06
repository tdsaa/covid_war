import React from 'react'

import covid from '../../Content/covid';

class Covid extends React.Component {
    render() {
        return(
            <main id="main">
            <section class="about" id="myth">
                <div className="container">
                    <div className="section-title">
                        <h2>{covid.covid.heading}</h2>
                        <p>{covid.covid.content}</p>
                    </div>
                    <div className="section-title content">
                        <h2 >{covid.myths.heading}</h2>
                        <p>{covid.myths.subheading}</p>
                        <div className="row">
                            { covid.myths.symptoms.map(symptom=>(
                                <div className="mt-4 col-md-4">
                                <h3>{symptom.name}</h3>
                                    <ul>
                                        {symptom.values.map(value=>(
                                            <li ><i class="ion-checkmark-circled"></i>{value}</li>
                                        ))}
                                    </ul>
                            </div>
                            ))}
                        </div>
                    </div>
                    </div>
            </section>
            </main>
        );
    }
   
}

export default Covid;