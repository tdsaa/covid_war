import React from 'react'

import post_covid from '../../Content/post_covid';

class PostCovid extends React.Component {
    render() {
        return(
            <main id="main">
            <section class="about" id="myth">
                <div className="container">
                    <div className="section-title">
                        <h2>{post_covid.main.heading}</h2>
                        <p>{post_covid.main.content}</p>
                    </div>
                    <div className="section-title content">
                        <h2 >{post_covid.points.heading}</h2>
                        <p>{post_covid.points.subheading}</p>
                        <div className="row">
                            <div className="col-md-12">
                            <ul>
                                {
                                    post_covid.points.contents.map(content=>(
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

export default PostCovid;