class home {
    
    get titlePage() {
        return $('//*[@text="TO-DO-MVP"]')
    }

    get addBtn() {
        return $('//*[@resource-id="com.example.android.architecture.blueprints.todomvp.mock:id/fab_add_task"]')
    }

    get editBtn() {
        return $('//*[@resource-id="com.example.android.architecture.blueprints.todomvp.mock:id/fab_edit_task"]')
    }

    get checkbox() {
        return $('android.widget.CheckBox')
    }

    get toDoTitle() {
        return $('//*[@resource-id="com.example.android.architecture.blueprints.todomvp.mock:id/title"]')
    }

    get deleteBtn() {
        return $('//*[@resource-id="com.example.android.architecture.blueprints.todomvp.mock:id/menu_delete"]')
    }

    get menuBtn() {
        return $('//*[@content-desc="Navigate up"]')
    }

    get toDoListMenu() {
        return $('//*[@text="TO-DO List"]')
    }

    async clickAdd() {
        await this.addBtn.click()
    }

    async clickEdit() {
        await this.editBtn.click()
    }

    async clickToDo() {
        await this.toDoTitle.click()
    }

    async clickCheckbox() {
        await this.checkbox.click()
    }

    async clickDelete() {
        await this.deleteBtn.click()
    }

    async clickMenu() {
        await this.menuBtn.click()
    }

    async clickMenuToDoList() {
        await this.toDoListMenu.click()
    }
}

module.exports = new home()