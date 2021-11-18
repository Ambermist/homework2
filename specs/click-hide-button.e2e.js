// REMOVE THE BELOW CODE BEFORE START THE EXERCISE
describe('Check app', function () {
    it('click on hide button', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut');
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();
        await browser.pause(3000);
        await $('#spinner').waitForDisplayed({ reverse: false, timeout: 15000 });
        await browser.pause(5000);
        const header = await $('.sticky-top');
        await browser.execute((elem)=>{elem.remove()}, header );
        await browser.pause(2000);
        const alertButton = await $('.btn-danger');
        await alertButton.click();
        await browser.pause(2000);        
        await browser.acceptAlert();
    });
});


