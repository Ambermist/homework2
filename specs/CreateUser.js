describe('Check app', function () {
    before('user should login', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut');
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();
        await $('#spinner').waitForDisplayed({ reverse: true, timeout: 15000 });
        await $('//a[contains(.,"Create User")]').waitForDisplayed({ reverse: false, timeout: 2000 });        
    });
    it('Create user with json', async function () {   
        await $('//a[contains(.,"Create User")]').click();
        const fillFormUsingJson = async function(data) {
            const parsedData = JSON.parse(data);
            const formObject = await $$('//form//input[@class="form-control"] | //form//textarea');
            for(const field of formObject){
                const id = await field.getAttribute('id');
                await field.setValue(parsedData[id])
            }        
        }
        await fillFormUsingJson('{"email":"e@mail", "password":"password", "address1":"1 Main st", "address2":"floor1", "city":"Minsk", "zip":"123", "description":"asd"}');
        await $('//button[@type="submit"]').click();
    })
    
})