import React from 'react';

import Table from '../Table';
import Modal from '../Modal';

import vaccine_centers from '../../Content/vaccine_centers';

class VaccineCenters extends React.Component {
    constructor(){
        super();
        // this.state = {
        //     modal : true
        // };
    }
    modalClose=()=>{
        this.setState({modal:false});
    }
    handleButtonClick = (e, row) => {
        console.log(this.state.modal)
        this.setState({ modal: true });
        console.log(this.state.modal)
        return (
        <Modal show={this.state.modal} handleClose={e => this.modalClose(e)}>
            <h2>row.id</h2>
           
        </Modal>
        )
    };

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
                        Cell:({row})=>(
                            <button onClick={e=> this.handleButtonClick(e, row)}>
                                Click here
                            </button>
                        )
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