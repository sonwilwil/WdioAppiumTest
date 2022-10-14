const HomeScreen = require("../../screenObjects/android/home");
const FormScreen = require("../../screenObjects/android/form");

describe('Testing Contact App', () => {
    it('Create new contact', async () => {
        HomeScreen.clickAddBtn()
        FormScreen.clickCancelBtn()
        await driver.pause(2000)
        await expect(FormScreen.title).toBeDisplayed()
        FormScreen.createContact('Wilson', 'Tan', '081513233296')
        const contactName = await $('//*[@text="Wilson Tan"]')
        await expect(contactName).toBeDisplayed()
    });
    it('Delete contact', async() => {
        const contactName = await $('//*[@text="Wilson Tan"]')
        await expect(contactName).toBeDisplayed()
        FormScreen.clickElipsisBtn()
        FormScreen.clickDeleteOption()
        FormScreen.clickDeletePopup()
        const text = $('//*[@text="Your contacts list is empty"]')
        await expect(text).toBeDisplayed()
    });
});