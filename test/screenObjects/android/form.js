class form {

    get titlePage() {
        return $('//*[@text="New TO-DO"]')
    }

    get editTitlePage() {
        return $('//*[@text="Edit TO-DO"]')
    }
    
    get title() {
        return $('//*[@resource-id="com.example.android.architecture.blueprints.todomvp.mock:id/add_task_title"]')
    }

    get description() {
        return $('//*[@resource-id="com.example.android.architecture.blueprints.todomvp.mock:id/add_task_description"]')
    }

    get saveBtn() {
        return $('//*[@resource-id="com.example.android.architecture.blueprints.todomvp.mock:id/fab_edit_task_done"]')
    }

    async createToDo(title, desc) {
        await this.title.setValue(title);
        await this.description.setValue(desc);
        await this.saveBtn.click();
        await driver.pause(5000)
    }

    async editToDo(title, desc) {
        await this.title.clearValue()
        await this.title.setValue(title);
        await this.description.clearValue()
        await this.description.setValue(desc);
        await this.saveBtn.click();
        await driver.pause(5000)
    }
}

module.exports = new form()