const {
    startClientPC,
    startSatelite,
    stopClientPC,
    stopEarthServer,
    stopSatelite,
    stopMarsServer,
    startEarthServer,
    startMarsServer,
    sendMessage,
    assertResponse
} = require('./stubs/messageservice.stubs');

// REMOVE THE BELOW CODE BEFORE START THE EXERCISE

function startAllNodes() {
    startClientPC();
    const earthToken = startEarthServer();
    const marsToken = startMarsServer();
    startSatelite();
    return {
        earth: earthToken,
        mars: marsToken,
    }
}

function stopAllNodes(){
    stopMarsServer();
    stopEarthServer();
    stopSatelite();
    stopClientPC();
}

describe('Message Sending', function () {
    let tokens;
    beforeEach('Switch on nodes & get tokens', function() {
        tokens = startAllNodes();
    })
    afterEach('Switch off nodes', function() {
        stopAllNodes();
    })

    context('Send messages successfully', function(){
        it('should send message to Mars without error', function () {
            const response = sendMessage('Hello', 'Mars', tokens.mars);
            assertResponse(response, 'Success');
        });
    
        it('should send message to Earth without error', function () {
            const response = sendMessage('Hello', 'Earth', tokens.earth);
            assertResponse(response, 'Success');
        });        
    })

    context('Send messages with invalid tokens', function(){
        it('should send message to Mars with "Security Error"', function () {
            const response = sendMessage('Hello', 'Mars', '111');
            assertResponse(response, 'Security Error');
        });
    
        it('should send message to Earth with "Security Error"', function () {
            const response = sendMessage('Hello', 'Earth', '11');
            assertResponse(response, 'Security Error');
        });        
    })

    context('Send messages to Mars without Satelite', function(){
        beforeEach('', function() {
            stopSatelite();
        })
        it('should send message to Mars with "Service is unavailable" error (valid token)', function () {
            const response = sendMessage('Hello', 'Mars', tokens.mars);
            assertResponse(response, 'Service is unavailable');
        });
    
        it('should send message to Mars with "Service is unavailable" error (invalid token)', function () {
            const response = sendMessage('Hello', 'Mars', '11');
            assertResponse(response, 'Service is unavailable');
        });        
    })
    
})
