Feature('Ergo Sigorta Demo');

Scenario('Ergo Sigorta Main Page', (I) => {
    I.amOnPage('/');
    I.seeInTitle('ERGOasdf Sigorta');
    I.see('En Yakın ERGO Acentesi');
    I.see('Anlaşmalı Servisler');
    I.see('Anlaşmalı Sağlık Kuruluşları');
    I.see('Hasar Durumu Hakkında Bilgi Alın');
    I.resizeWindow('maximize');
    I.saveScreenshot("ergoMainPage.jpg");

});

Scenario('En Yakın ERGO Acentesi', (I) => {
    I.amOnPage('/');
    I.scrollTo('//*[@id="enYakinErgoCity"]');
    I.selectOption('enYakinErgoCity', 'İSTANBUL');
    I.waitForText('PENDİK', 2);
    I.selectOption('enYakinErgoDistrict', 'PENDİK');
    I.click('//*[@id="enYakinErgoHomePageForm"]/button');
    I.waitForText('2K SİGORTA ARACILIK HİZMETLERİ LTD.ŞTİ.', 5);
    I.saveScreenshot('acente.jpg')

});

Scenario('Anlaşmalı Servisler', (I) => {
    I.amOnPage('/');
    I.scrollTo('//*[@id="anlasmaliServislerCity"]');
    I.selectOption('anlasmaliServislerCity', 'ANKARA');
    I.waitForText('GÖLBAŞI', 2);
    I.selectOption('anlasmaliServislerDistrict', 'GÖLBAŞI');
    I.click('//*[@id="anlasmaliServislerHomepageForm"]/button');
    I.waitForElement('//*[@id="anlasmaliServislerMarka"]', 2);
    I.seeCurrentUrlEquals('https://www.ergosigorta.com/ergo-anlasmali-oto-servisler');
    I.waitForText('ANKARA', 5, '//*[@selected="selected"]');
    I.waitForText('GÖLBAŞI', 5, '//*[@selected="selected"]');
    I.selectOption('anlasmaliServislerMarka', 'BMW');
    I.selectOption('anlasmaliServislerOnarimYeri', 'Tüm Servisler');
    I.click('Ara');
    I.waitForText('Seçtiğiniz kriterlere uygun sonuç bulunamadı.', 5);
    I.saveScreenshot('anlasmaliServisler.jpg')

});

Scenario('Kurumsal Ürünler', function*(I) {
    I.amOnPage('/');
    I.click("//span[text()='Kurumsal Ürünler']");
    I.waitForVisible('//*[@class="icon-atom icon-m icon"]', 5);
    I.click('//*[@id="Header"]/div/div[3]/ul[1]/li[2]/div/div/ul[3]/li/h3/a');
    I.seeCurrentUrlEquals("muhendislik-sigortalari");
    let link = yield I.grabAttributeFrom('//*[@class="content"]/img', 'src');
    I.checkImage(link);
    I.saveScreenshot('mühendislikSigortaları.jpg');

});
