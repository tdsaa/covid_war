import React from 'react';

import Table from '../Table';

import vaccine_centers from '../../Content/vaccine_centers';

class VaccineCenters extends React.Component {
    render() {
        const columns =[
            {   Header : 'Vaccine Centers',
                columns: [
                    {
                        Header:'Id',
                        accessor: 'id'
                    },
                    {
                        Header:'State',
                        accessor: 'state'
                    },
                    {
                        Header:'District',
                        accessor: 'district'
                    },
                    {
                        Header:'Hospital',
                        accessor: 'hospital_name'
                    },
                    {
                        Header:'Contact',
                        accessor: 'contact'
                    },
                    {
                        Header:'Available',
                        accessor: 'available',
                        
                    },
                    {
                        Header:'Details',
                        accessor: ''
                    },

                ]
            }
        ] ;

        return(
            <main id="main">
            <section class="about" id="myth">
                <div className="container">
                    <div className="section-title">
                        <h2>{vaccine_centers.heading}</h2>
                        <p>{vaccine_centers.subheading}</p>
                        <Table columns={columns} data={vaccine_centers.contents}/>
                    </div>
                </div>
            </section>
            </main>
        );
    }
   
}


export default VaccineCenters;