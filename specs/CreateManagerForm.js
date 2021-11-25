describe('Check app', function () {
    before('user should login', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut');
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();
        await $('#spinner').waitForDisplayed({ reverse: true, timeout: 15000 });
        await $('//a[contains(.,"Create Manager")]').waitForDisplayed({ reverse: false, timeout: 2000 });        
    });
    context('Create managers', async function () {        
        it('Create manager1', async function () {   
            await $('//a[contains(.,"Create Manager")]').click();
            await $('//input[@id="email"]').setValue('manager1@gmail.com');
            await $('//input[@id="password"]').setValue('manager1');
            await $('//input[@id="address1"]').setValue('12 Main st');
            await $('//input[@id="address2"]').setValue('floor 1');
            await $('//select[@id="state"]').selectByAttribute('value', 'US');
            await $('//input[@id="zip"]').setValue('123');
            await $('//textarea[@id="description"]').setValue('qwe');
            await $('//input[@id="demo-balance"]').click();
            await $('//input[@id="wait-supervisor"]').click();
            await $('//input[@id="city"]').setValue('a');
            await $('//li[@id="autoComplete_result_0"]').click();
            await $('//button[@type="submit"]').click();
        })
        it('Create manager2', async function () {   
            await $('//a[contains(.,"Create Manager")]').click();
            await $('//input[@id="email"]').setValue('manager2@gmail.com');
            await $('//input[@id="password"]').setValue('manager2');
            await $('//input[@id="address1"]').setValue('13 Main st');
            await $('//input[@id="address2"]').setValue('floor 2');
            await $('//select[@id="state"]').selectByAttribute('value', 'CA');
            await $('//input[@id="zip"]').setValue('123');
            await $('//textarea[@id="description"]').setValue('qwe');
            await $('//input[@id="demo-balance"]').click();
            await $('//input[@id="city"]').setValue('a');
            await $('//li[@id="autoComplete_result_1"]').click();
            await $('//button[@type="submit"]').click();
            await browser.pause(10000);
        })
    })
    

})