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
                            <div className="col-md-12">
                            <ul>
                                {
                                    covid.myths.contents.map(content=>(
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

export default Covid;