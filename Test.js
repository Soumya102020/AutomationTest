import { assert } from 'chai';
import { tc1 } from '../../common/data/Automationdata';

describe('precondition', function () {

    this.timeout(120000);
    before(function () {

        console.log('I am in before!!')
    });

    after(() => { });
    //Account Creation

    describe('Account Creation in automationpractice.com', () => {
        it('Website Opened', () => {
            browser.url('http://automationpractice.com/index.php/')
            const title = browser.getTitle()
            assert.strictEqual(title, mytitle)
            console.log('I am on the website')
            $('=Sign in').click();
            console.log('Sign in clicked')
            $("#email_create").setValue(tc1.email);
            $("#SubmitCreate").click();
            browser.pause(3000);
            console.log('Now Register the user!');
            browser.pause(3000);
            $("#id_gender2").click();
            browser.pause(3000);
            $("[name = 'customer_firstname']").setValue(tc1.fname);
            console.log('First Name Entered!')
            $("#customer_lastname").setValue(tc1.lname);
            console.log('Last Name Entered!')
            $("#email").setValue(tc1.email);
            console.log('Email Entered!')
            $("#passwd").setValue(tc1.password);
            console.log('Password Entered!')
            $("#firstname").setValue(tc1.fn);
            console.log('Next First Name Entered!')
            $("#lastname").setValue(tc1.ln);
            console.log('Next Last Name Entered!')
            $("#company").setValue(tc1.company);
            console.log('Company Name Entered!')
            $("#address1").setValue(tc1.adress);
            console.log('Address Name Entered!')
            $("#city").setValue(tc1.city);
            $("#id_state").selectByAttribute("value", "1")
            console.log('State Selected!')
            $("#postcode").setValue(tc1.postcode);
            console.log('Postcode Name Entered!')
            $("#id_country").selectByAttribute("value", "21")
            console.log('Country Entered!')
            $("#phone_mobile").setValue(tc1.mobile);
            console.log('Mobile Entered!')
            $("#alias").setValue(tc1.address2);
            console.log('Address Entered!')
            $("#submitAccount").click();
            console.log('Account Created!!!')

        })
    })
    //Login to the website,add to the cart and validate the product details
    describe('Login to the website and add to the cart', function () {
        it.only('Login to the website and add to the cart', function () {
            browser.url('http://automationpractice.com/index.php/')
            const title = browser.getTitle()
            assert.strictEqual(title, tc1.t1)
            console.log('I am on the website')
            $('=Sign in').click();
            console.log('Sign in clicked')
            $("#email").setValue(tc1.email);
            $("#passwd").setValue(tc1.password);
            $("#SubmitLogin").click();
            console.log('Account Logged In!!!')
            const title1 = browser.getTitle()
            assert.strictEqual(title1, tc1.tc2);
            $('//*[@id="header"]/div[2]/div/div/nav/div[1]/a/span').getText();
            console.log("I am in my account!!");
            console.log('Go to the Women and select a dress!!!')
            $("=Women").click();
            $('//*[@id="center_column"]/ul/li[3]/div/div[1]/div/a[1]/img').click();
            console.log('Dress selected!!!')
            browser.pause(3000);
            browser.url(tc1.addCartUrl)
            console.log('I am in next window')
            $("#add_to_cart").click();
            console.log('Add to the Cart clicked!!!')
            browser.pause(2000);
            const title2 = browser.getTitle()
            assert.strictEqual(title2, 'Printed Dress - My Store');
            browser.url(tc1.orderCartUrl)
            console.log('Proceed to checkout clicked!!!')
            $('//*[@id="center_column"]/p[2]/a[1]/span').click()
            console.log('Summary proceed to  checkout clicked!!!')
            $('//*[@id="center_column"]/form/p/button/span').click();
            console.log('AddressSummary proceed to  checkout clicked!!!')
            $('//*[@id="cgv"]').click();
            console.log('checkbox clicked!!!')
            $('//*[@id="form"]/p/button/span').click();
            //Validate the product details
            const link1 = $('*=Orange')
            console.log(link1.getText())
            console.log('Sucess!!!')

        });
    });
});


