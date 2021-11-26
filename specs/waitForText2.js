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
    await browser.addCommand('WaitForText', async function(text, timeout){
        await browser.waitUntil(
            async () => (await this.isDisplayed) && (await this.getText()) === text,
            {
                timeout: timeout,
                timeoutMsg: `expected text to be '${text}' after ${timeout} ms`
            }
        );
    }, true);    
    await statusButton.click();
    await statusButton.WaitForText('Active', 5000);
})