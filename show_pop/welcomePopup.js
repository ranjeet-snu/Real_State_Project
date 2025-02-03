import { LightningElement, track } from 'lwc';
import USER_ID from '@salesforce/user/Id';

export default class WelcomePopup extends LightningElement {
    @track showModal = false;

    connectedCallback() {
        // Check if the user is logged in and if the popup has not been shown yet
        if (USER_ID && !sessionStorage.getItem('welcomePopupShown')) {
            this.showModal = true;
            sessionStorage.setItem('welcomePopupShown', 'true'); // Set flag
        }
    }

    closeModal() {
        this.showModal = false;
    }
}
