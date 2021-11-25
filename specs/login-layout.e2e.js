// REMOVE THE BELOW CODE BEFORE START THE EXERCISE
describe('Check app', function () {
    before('correct user should login', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut');
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();
        await $('#spinner').waitForDisplayed({ reverse: false, timeout: 2000 });
        await $('#spinner').waitForDisplayed({ reverse: true, timeout: 15000 });
        const link = await $('div.nav-item a');
        const linkText = await link.getText();
        if(linkText !== 'John Walker') {
            throw new Error('Wrong user')
        }
    });
        
    it('check for red element on mouseover', async function () {    
        const menuItems = await $$('#first-nav-block li');
        for (const item of menuItems) {            
            const text = await item.getText()
            console.log( text);
            await item.moveTo();
            const color = await item.getCSSProperty('background-color');
            console.log(color.value);
            if(color.value ==='rgba(255,0,0,1)'){
                throw new Error(`The menu Item ${text} has wrong color!`)
            }
        }
    })
});


