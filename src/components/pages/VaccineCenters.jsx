import React from 'react'

import vaccine_centers from '../../Content/vaccine_centers';

class VaccineCenters extends React.Component {
    render() {
        return(
            <main id="main">
            <section class="about" id="myth">
                <div className="container">
                    <div className="section-title">
                        <h2>{vaccine_centers.heading}</h2>
                        <p>{vaccine_centers.subheading}</p>
                    </div>
                    <div className="row">
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">State</th>
                                <th scope="col">District</th>
                                <th scope="col">Hospital</th>
                                <th scope="col">Vaccines availabe</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Vaccine Details</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    </div>
            </section>
            </main>
        );
    }
   
}


export default VaccineCenters;