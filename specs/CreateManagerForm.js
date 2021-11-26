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
            const cityField = await $('//input[@id="city"]');
            await cityField.setValue('a');
            const cityText = await $('//li[@id="autoComplete_result_0"]').getText();
            await cityField.setValue(cityText);
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
            const cityField = await $('//input[@id="city"]');
            await cityField.setValue('a');
            const cityText = await $('//li[@id="autoComplete_result_1"]').getText();
            await cityField.setValue(cityText);
            await $('//li[@id="autoComplete_result_1"]').click();
            await $('//button[@type="submit"]').click();                   
        })
    })

    context('Check table data', async function () {
        it('Data for manager1 should be correct', async function () {
            await $('//h3[contains(.,"List of Users")]').waitForDisplayed({ reverse: false, timeout: 3000 });
            let resultTableData = [];
            const expectedData = ['manager1@gmail.com','manager','12 Main st','floor 1','Sauce - Thousand Island','US','123','qwe','on','on','country'];
            const tableCells = await $$('//*[text()="manager1@gmail.com"]/../child::*');
            for (const cell of tableCells) {            
                const text = await cell.getText();
                resultTableData.push(text);
            }            
            if(!resultTableData.every((value, index) => value === expectedData[index])){
                throw new Error(`Manager1 data is incorrect`)
            };
        })
        it('Data for manager2 should be correct', async function () {
            await $('//h3[contains(.,"List of Users")]').waitForDisplayed({ reverse: false, timeout: 3000 });
            let resultTableData = [];
            const expectedData = ['manager2@gmail.com','manager','13 Main st','floor 2','Wild Boar - Tenderloin','CA','123','qwe','on',' ','country'];
            const tableCells = await $$('//*[text()="manager2@gmail.com"]/../child::*');
            for (const cell of tableCells) {            
                const text = await cell.getText();
                resultTableData.push(text);
            }            
            if(!resultTableData.every((value, index) => value === expectedData[index])){
                throw new Error(`Manager2 data is incorrect`)
            };
            await browser.debug();     
        })
    })  

})