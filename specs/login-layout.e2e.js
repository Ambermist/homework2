// REMOVE THE BELOW CODE BEFORE START THE EXERCISE
describe('Check app', function () {
    it('should login and red item', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut');
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();
        await $('#spinner').waitForDisplayed({ reverse: false, timeout: 10000 });
        await browser.pause(10000);
        /*Check correct user logged*/
        const link = await $('div.nav-item a');
        const linkText = await link.getText();
        if(linkText !== 'John Walker') {
            throw new Error('Wrong user')
        }
        const cookies = await browser.getCookies();
        if(cookies[0].value !== 'walker@jw.com') {
            throw new Error('Wrong user')
        }
        /*Check sidebar*/
        const sidebar1block = await $$('#first-nav-block li');
        for (const item of sidebar1block) {            
            const text = await item.getText()
            console.log( text);
            await item.moveTo();
            const color = await item.getCSSProperty('background-color');
            console.log(color.value);
            if(color.value ==='rgba(255,0,0,1)'){
                throw new Error(`The menu Item ${text} has wrong color!`)
            }
            await browser.pause(1000);
        }

    });
});


