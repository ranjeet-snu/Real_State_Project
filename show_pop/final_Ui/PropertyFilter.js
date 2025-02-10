import { LightningElement, track } from 'lwc';

export default class PropertyFilter extends LightningElement {
    @track showModal = true;
    @track selectedCities = [];
    @track selectedPropertyTypes = [];
    @track selectedBuyRent = [];
    @track minValue;
    @track maxValue;
    @track minRentValue;
    @track maxRentValue;

    // City Options
    cityOptions = [
        { label: 'Mumbai', value: 'Mumbai' },
        { label: 'Delhi', value: 'Delhi' },
        { label: 'Bangalore', value: 'Bangalore' },
        { label: 'Hyderabad', value: 'Hyderabad' },
        { label: 'Chennai', value: 'Chennai' },
        { label: 'Kolkata', value: 'Kolkata' },
        { label: 'Pune', value: 'Pune' },
        { label: 'Ahmedabad', value: 'Ahmedabad' },
        { label: 'Jaipur', value: 'Jaipur' },
        { label: 'Surat', value: 'Surat' },
        { label: 'Lucknow', value: 'Lucknow' }
    ];

    // Property Type Options
    propertyTypeOptions = [
        { label: 'Residential', value: 'Residential' },
        { label: 'Commercial', value: 'Commercial' }
    ];

    // Buy/Rent Options
    buyRentOptions = [
        { label: 'Buy', value: 'Buy' },
        { label: 'Rent', value: 'Rent' }
    ];

    get showBuyFields() {
        return this.selectedBuyRent.includes('Buy');
    }

    get showRentFields() {
        return this.selectedBuyRent.includes('Rent');
    }

    closeModal() {
        this.showModal = false;
    }

    handleCityChange(event) {
        const selectedCity = event.detail.value;
        if (selectedCity && !this.selectedCities.includes(selectedCity)) {
            this.selectedCities = [...this.selectedCities, selectedCity];
        }
    }

    removeCity(event) {
        const cityToRemove = event.target.dataset.value;
        this.selectedCities = this.selectedCities.filter(city => city !== cityToRemove);
    }

    handlePropertyTypeChange(event) {
        const selectedType = event.detail.value;
        if (selectedType && !this.selectedPropertyTypes.includes(selectedType)) {
            this.selectedPropertyTypes = [...this.selectedPropertyTypes, selectedType];
        }
    }

    removePropertyType(event) {
        const typeToRemove = event.target.dataset.value;
        this.selectedPropertyTypes = this.selectedPropertyTypes.filter(type => type !== typeToRemove);
    }

    handleBuyRentChange(event) {
        const selectedOption = event.detail.value;
        if (!this.selectedBuyRent.includes(selectedOption)) {
            this.selectedBuyRent = [...this.selectedBuyRent, selectedOption];
        }
    }

    removeBuyRent(event) {
        const optionToRemove = event.target.dataset.value;
        this.selectedBuyRent = this.selectedBuyRent.filter(option => option !== optionToRemove);
    }

    handleMinValueChange(event) {
        this.minValue = event.target.value;
    }

    handleMaxValueChange(event) {
        this.maxValue = event.target.value;
    }

    handleMinRentValueChange(event) {
        this.minRentValue = event.target.value;
    }

    handleMaxRentValueChange(event) {
        this.maxRentValue = event.target.value;
    }

    handleSubmit() {
        this.showModal = false;
    }
}
