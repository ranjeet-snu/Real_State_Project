import { LightningElement, track } from 'lwc';

export default class PropertyFilter extends LightningElement {
    @track selectedCities = [];
    @track selectedPropertyTypes = [];
    @track selectedBuyRent = [];
    @track minValue;
    @track maxValue;
    @track minRentValue;
    @track maxRentValue;
    @track showModal = true;

    // City Options
    allCityOptions = [
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
    get cityOptions() {
        return this.allCityOptions.filter(city => !this.selectedCities.includes(city.value));
    }

    // Property Type Options
    allPropertyTypeOptions = [
        { label: 'Residential', value: 'Residential' },
        { label: 'Commercial', value: 'Commercial' }
    ];
    get propertyTypeOptions() {
        return this.allPropertyTypeOptions.filter(type => !this.selectedPropertyTypes.includes(type.value));
    }

    // Buy/Rent Options
    allBuyRentOptions = [
        { label: 'Buy', value: 'Buy' },
        { label: 'Rent', value: 'Rent' }
    ];
    get buyRentOptions() {
        return this.allBuyRentOptions.filter(option => !this.selectedBuyRent.includes(option.value));
    }

    // Derived Properties for Conditional UI
    get showBuyFields() {
        return this.selectedBuyRent.includes('Buy');
    }

    get showRentFields() {
        return this.selectedBuyRent.includes('Rent');
    }

    get disableBuyFields() {
        return !this.selectedBuyRent.includes('Buy') && this.selectedBuyRent.includes('Rent');
    }

    get disableRentFields() {
        return !this.selectedBuyRent.includes('Rent') && this.selectedBuyRent.includes('Buy');
    }

    // Handle City Selection
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

    // Handle Property Type Selection
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

    // Handle Buy/Rent Selection
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

    // Handle Min and Max Value Selection for Buy
    handleMinValueChange(event) {
        this.minValue = event.target.value;
    }

    handleMaxValueChange(event) {
        this.maxValue = event.target.value;
    }

    // Handle Min and Max Value Selection for Rent
    handleMinRentValueChange(event) {
        this.minRentValue = event.target.value;
    }

    handleMaxRentValueChange(event) {
        this.maxRentValue = event.target.value;
    }

    // Handle Submit
    handleSubmit() {
        this.showModal = false; // Close modal on submit
    }
}
