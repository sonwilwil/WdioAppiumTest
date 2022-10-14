class form {

    get cancelBtn() {
        return $('//*[@resource-id="com.android.contacts:id/left_button"]')
    }

    get title() {
        return $('//*[@text="Create new contact"]')
    }

    get firstName() {
        return $('//*[@text="First name"]')
    }

    get lastName() {
        return $('//*[@text="Last name"]')
    }

    get phone() {
        return $('//*[@text="Phone"]')
    }

    get saveBtn() {
        return $('//*[@resource-id="com.android.contacts:id/editor_menu_save_button"]')
    }

    get elipsisBtn() {
        return $('android.widget.ImageButton')
    }

    get deleteBtn() {
        return $('//*[@text="Delete"]')
    }

    get deletePopup() {
        return $('//*[@text="DELETE"]')
    }

    async clickCancelBtn() {
        await this.cancelBtn.click()
    }

    async createContact(first, last, phone) {
        await this.firstName.setValue(first);
        await this.lastName.setValue(last);
        await this.phone.setValue(phone);
        await this.saveBtn.click();
    }
    
    async clickElipsisBtn() {
        await this.elipsisBtn.click()
    }

    async clickDeleteOption() {
        await this.deleteBtn.click()
    }

    async clickDeletePopup() {
        await this.deletePopup.click()
    }
}

module.exports = new form()