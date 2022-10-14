class home {
    
    get addBtn() {
        return $('//*[@resource-id="com.android.contacts:id/floating_action_button_container"]')
    }

    get cancelBtn() {
        return $('//*[@resource-id="com.android.contacts:id/left_button"]')
    }

    async clickAddBtn() {
        await this.addBtn.click()
    }

    async clickCancelBtn() {
        await this.cancelBtn.click()
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginBtn.click();
      }
}

module.exports = new home()