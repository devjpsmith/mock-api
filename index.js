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
