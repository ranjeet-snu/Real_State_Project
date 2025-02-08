import { LightningElement, track } from 'lwc';

export default class MultiCitySelector extends LightningElement {
    @track selectedCities = [];
    selectedCity = '';

    // City options list
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

    // Handle city selection
    handleCityChange(event) {
        const selectedCity = event.detail.value;
        if (selectedCity && !this.selectedCities.includes(selectedCity)) {
            this.selectedCities = [...this.selectedCities, selectedCity];
        }
    }

    // Remove a city from the selected list
    removeCity(event) {
        const cityToRemove = event.target.dataset.city;
        this.selectedCities = this.selectedCities.filter(city => city !== cityToRemove);
    }
}
