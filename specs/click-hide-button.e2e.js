// REMOVE THE BELOW CODE BEFORE START THE EXERCISE
describe('Check app', function () {
    it('click on hidden button', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut');
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();
        await $('#spinner').waitForDisplayed({ reverse: false, timeout: 2000 });
        await $('#spinner').waitForDisplayed({ reverse: true, timeout: 15000 });
        const header = await $('.sticky-top');
        await browser.execute((elem)=>{elem.remove()}, header );
        const alertButton = await $('.btn-danger');
        await alertButton.click();      
        await browser.acceptAlert();
    });
});


