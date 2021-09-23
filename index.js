const mockApiResponse = require('mock-api-response');

const options = {
    port: 5005,
    headers: {}, 
    cors: {
        enabled: true,
        origin: '*',
        methods: 'POST, GET, DELETE, PUT, PATCH, OPTIONS',
        headers: 'Authorization, Content-Type'
    }
};

mockApiResponse.init(options);

mockApiResponse.mock('/api/statusCode/', 'GET', [
    { 
        name: '202',
        parameters: [ { in: 'query', name: 'code', value: '202'}],
        response: { statusCode: 202 }
    },{ 
        name: '203',
        parameters: [ { in: 'query', name: 'code', value: '203'}],
        response: { statusCode: 203 }
    },{ 
        name: '400',
        parameters: [ { in: 'query', name: 'code', value: '400'}],
        response: { statusCode: 400 }
    },{ 
        name: '404',
        parameters: [ { in: 'query', name: 'code', value: '404'}],
        response: { statusCode: 404 }
    },{ 
        name: '500',
        parameters: [ { in: 'query', name: 'code', value: '500'}],
        response: { statusCode: 500 }
    },
]);

mockApiResponse.mock('/orders', 'GET', [
    {
        notes: 'this endpoint returns an array of orders. no parameters are required',
        notes2: 'also, I can add any property I want here, it has no effect on the response',
        name: 'orders get',
        parameters: [],
        response: {
            statusCode: 200,
            body: [
                {
                    'OrderReferenceID': '{{OrderReferenceID}}',
                    'PickupDate': '{{pickup_date}}',
                    'ServiceLevel': 'Threshold',
                    'DropOffLocation': {
                        'Address1': '5678 Destination Street',
                        'Address2': 'Unit 101',
                        'ProvinceState': 'MT',
                        'City': 'Action',
                        'ZipCode': '59002',
                        'Country': 'US',
                        'LocationType': 'Commercial'
                    },
                    'PickupLocation': {
                        'Address1': '1234 Source Street',
                        'Address2': 'Third Floor',
                        'ProvinceState': 'WA',
                        'City': 'Seattle',
                        'ZipCode': '98101',
                        'Country': 'US',
                        'LocationType': 'Commercial'
                    },
                    'TotalDeclaredValue': {
                        'Value': 500,
                        'Unit': 'USD'
                    },
                    'Accessorials': [
                    ],
                    'Boxes': [
                        {
                            'Description': 'Pack of 4',
                            'Sku': 'SKU12345',
                            'UPCCode': '01234567890',
                            'FreightClass': '50',
                            'Quantity': 1,
                            'DeclaredValue': {
                                'Value': 500,
                                'Unit': 'USD'
                            },
                            'Category': 'CasedGoodsFurniture',
                            'Dimension': {
                                'Unit': 'Inch',
                                'Length': 10,
                                'Width': 10,
                                'Height': 10
                            },
                            'Weight': {
                                'Value': 45,
                                'Unit': 'LB'
                            }
                        }
                    ]
                }
            ]
        }
    }
]);
