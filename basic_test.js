Feature('CodeceptJS demo');

//Scenario('check Welcome page on site', (I) => {
//I.amOnPage('/');
//I.see('Ucuz Uçak Bileti');
//I.see('PEGASUS');
//     //I.fillField('q', 'hasan kaya');
//    // I.pressKey("Enter"); //will be deprecated soon
//  //   I.wait(3);
////     I.see("Hasan Kaya Profiles | Facebook");
////     I.click("Hasan Kaya Profiles | Facebook");
//  I.saveScreenshot("mainPage.jpg");
//});

Scenario('search cheap flight', (I) => {
    I.amOnPage('/');
    I.see('Ucuz Uçak Bileti Ara');
    I.click('span.select2-selection__placeholder');
    I.fillField('/html/body/span/span/span[1]/input', 'SAW');
    //I.moveCursorTo('/html/body/span/span/span[2]/ul/li');
    I.click('/html/body/span/span/span[2]/ul/li');
    I.fillField('/html/body/span/span/span[1]/input', 'HTY');
    I.scrollTo('/html/body/div[2]/section[2]/div/div/div[2]/div[1]/form/div[3]/div[1]/span[1]/div/div[2]/div/div[1]/span[1]');
    I.click('/html/body/span/span/span[2]/ul/li');
    I.wait(2);
    I.click('/html/body/div[2]/section[2]/div/div/div[2]/div[1]/form/div[3]/div[1]/span[1]/div/div[2]/div/div[2]/div/div[2]/table/tbody/tr[3]/td[1]');
    I.click('/html/body/div[2]/section[2]/div/div/div[2]/div[1]/form/div[3]/div[2]/span[1]/div/div[2]/div/div[2]/div/div[1]/table/tbody/tr[4]/td[1]');
    I.click('UCUZ UÇUŞ ARA');
    I.wait(7);
    I.resizeWindow('maximize');
    I.wait(3);
    //     I.fillField('q', 'hasan kaya');
    //     I.pressKey("Enter"); //will be deprecated soon
    //     I.wait(3);
    //     I.see("Hasan Kaya Profiles | Facebook");
    //     I.click("Hasan Kaya Profiles | Facebook");
    I.saveScreenshot("mainPage.jpg");
});

// Scenario('check another test', (I) => {
//     I.amOnPage('http://www.facebook.com');
//     I.see('Email or Phone');
//     I.see('Facebook');
//     I.fillField('email', 'onrulusoy');
//     I.fillField('pass', 'asdf');
//     I.click('Log In');
//     I.wait(1);
//     I.seeElement('//*[@class="_4rbf _53ij"]');
// })

// Scenario('Google Image Search', (I) => {
//     I.amOnPage('/');
//     I.see('Gmail');
//     I.fillField('q', 'volkan kumbasar');
//     I.pressKey("Enter"); //will be deprecated soon
//     I.wait(3);
//     I.click('//*[@id="hdtb-msb-vis"]/div[2]/a');
//     I.wait(2);
//     I.saveScreenshot("kumbasar.jpg");
// })

//Scenario('Google Image Search', (I) => {
//I.amOnPage('http://www.aksigorta.com');
//I.scrollTo('//*[@class="jquery-selectbox-moreButton"]');
//I.click('//*[@class="jquery-selectbox-moreButton"]');
//    I.see('Ailemi Kapsasın');
//    I.see('Evimi Kapsasın');
//    I.see('Aracımı Kapsasın');
//    I.see('İşimi Kapsasın');
//I.saveScreenshot("combobox.jpg");
//});

//Scenario('Custom Func Test', (I) => {
//    I.amOnPage("http://etkinlikcim-new-design.eu-west-1.elasticbeanstalk.com");
//    I.checkImage();
// I.logYaz("ne yaptın");
//});

// Scenario('Custom Func Test', (I) => {
//     I.tryThat();
// })

//Scenario('Custom Func Test', (I) => {
//I.loginAS01();
//I.see('Provisioning Client');
//   I.asdf();
//I.see('Welcome to the Provisioning Client');
//I.see('Logged in as: admin');
//I.see("Services");
//I.click('//*[@id="jbpns_2fprov_2fdefault_2fProvMainMenuWindowsnpbj:j_id_jsp_891425604_0:j_id_jsp_891425604_6:j_id_jsp_891425604_7"]/span'); //services
//    I.selectOption('Services', 'Resources');
//    I.wait(1);
//    I.click('//*[@id="refjbpns_2fprov_2fdefault_2fProvMainMenuWindowsnpbj:j_id_jsp_891425604_0:j_id_jsp_891425604_6:j_id32"]'); //announcements
//    I.wait(1);
//    I.click('//*[@id="jbpns_2fprov_2fdefault_2fProvMainMenuWindowsnpbj:j_id_jsp_891425604_0:j_id_jsp_891425604_6:j_id49"]'); //branding
//    I.wait(2);
//});