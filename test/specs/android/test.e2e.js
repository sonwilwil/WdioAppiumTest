const HomeScreen = require("../../screenObjects/android/home");
const FormScreen = require("../../screenObjects/android/form");

describe('Testing end-to-end for to-do Android Application', () => {
    it('create a new to-do', async () => {
        const toDo = 'Swimming'
        const desc = 'Swimming at the hotel'
        const getToDo = await $('//*[@text="Swimming"]')

        await expect(HomeScreen.titlePage).toBeDisplayed()
        HomeScreen.clickAdd()
        await expect(FormScreen.titlePage).toBeDisplayed()
        FormScreen.createToDo(toDo, desc)
        await expect(getToDo).toBeDisplayed()
    });
    it('edit an existing to-do', async() => {
        const toDo = 'Working'
        const desc = 'Working at home'
        const getToDo = await $('//*[@text="Working"]')

        HomeScreen.clickToDo()
        HomeScreen.clickEdit()
        await expect(FormScreen.editTitlePage).toBeDisplayed()
        FormScreen.editToDo(toDo, desc)
        await expect(getToDo).toBeDisplayed()
    })
    it('delete an existing to-do', async() => {
        HomeScreen.clickToDo()
        HomeScreen.clickDelete()
        await expect($('//*[@text="You have no TO-DOs!"]')).toBeDisplayed()
    })
    it('see my list of to-do', async() => {
        const toDo = 'Eating'
        const desc = 'Eating at the buffet'
        const getToDo = await $('//*[@text="Eating"]')
        
        HomeScreen.clickAdd()
        FormScreen.createToDo(toDo, desc)
        await expect(getToDo).toBeDisplayed()
        await driver.pause(10000)
        HomeScreen.clickMenu()
        HomeScreen.clickMenuToDoList()
        await expect(getToDo).toBeDisplayed()
    })
    it('check an existing to-do', async() => {        
        HomeScreen.clickCheckbox()
        await expect($('//*[@checked="true"]')).toBeDisplayed()
    })
});