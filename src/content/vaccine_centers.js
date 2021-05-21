const vaccince_centers = {
    'heading': 'Vaccine Centers in India',
    'subheading': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    'contents':[
        {
            'id': 1,
            'state': 'Kerala',
            'district': 'Thiruvananthapuram',
            'hospital_name' : 'Medical College, Thiruvannathapuram',
            'contact': '9487457211',
            'available': 'Yes',
            'vaccines' : [
                { 'id': 1,
                'name': 'Covaxine',
                'total_number' :  250,
                'age_group' : ['18-45', '45+']
                },
                { 'id': 2,
                'name': 'Covishield',
                'total_number' :  250,
                'age_group' : ['18-45', '45+']
                },
            ],
        },
        {
            'id': 2,
            'state': 'Maharashtra',
            'district': 'Mumbai',
            'hospital_name' : 'IITB hospital',
            'contact': '9482457211',
            'available': 'Yes',
            'vaccines' : [
                { 'id': 1,
                'name': 'Covaxine',
                'total_number' :  250,
                'age_group' : ['45+']
                },
                { 'id': 2,
                'name': 'Covishield',
                'total_number' :  0,
                'age_group' : ['18-45', '45+']
                },
            ],
        }
    ]
}

export default vaccince_centers;