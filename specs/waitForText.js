describe('Check app', function () {
    before('user should login', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut');
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();
        await $('#spinner').waitForDisplayed({ reverse: true, timeout: 15000 });
        await $('#status').waitForDisplayed({ reverse: false, timeout: 2000 });
        await $('#status').scrollIntoView();        
    });
    it('Check status change', async function () { 
        const statusButton = $('#status');  
        const waitForText = async function(selector, text, timeout){
            await browser.waitUntil(
                async () => (await selector.isDisplayed) && (await selector.getText()) === text,
                {
                    timeout: timeout,
                    timeoutMsg: `expected text to be '${text}' after ${timeout} ms`
                }
            );
        }
        await statusButton.click();
        await waitForText(statusButton, 'Loading..', 1000);
        await waitForText(statusButton, 'Active', 5000);
    })
    
})