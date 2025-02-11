public with sharing class PropertyFilterController {
    @AuraEnabled(cacheable=true)
    public static List<String> getCities() {
        Set<String> citySet = new Set<String>();
        
        // Query distinct city values
        for (Property__c prop : [SELECT City__c FROM Property__c WHERE City__c != NULL]) {
            citySet.add(prop.City__c);
        }
        
        // Convert Set to List and return
        return new List<String>(citySet);
    }
}
