angular.module("providerApp", [])
.controller("ProviderController", function ($scope) {
    var providerControl = $scope;
    providerControl.providers = [
        { last_name: "Harris", first_name: "Mike", email_address: "mharris@updox.com", specialty: "Pediatrics", practice_name: "Harris Pediatrics" },
        { last_name: "Wijoyo", first_name: "Bimo", email_address: "bwijoyo@updox.com", specialty: "Podiatry", practice_name: "Wijoyo Podiatry" },
        { last_name: "Rose", first_name: "Nate", email_address: "nrose@updox.com", specialty: "Surgery", practice_name: "Rose Cutters" },
        { last_name: "Carlson", first_name: "Mike", email_address: "mcarlson@updox.com", specialty: "Orthopedics", practice_name: "Carlson: Orthopedics" },
        { last_name: "Witting", first_name: "Mike", email_address: "mwitting@updox.com", specialty: "Pediatrics", practice_name: "Witting’s Well Kids Pediatrics" },
        { last_name: "Juday", first_name: "Tobin", email_address: "tjuday@updox.com", specialty: "General Medicine", practice_name: "Juday Family Practice" }
    ];
    providerControl.addProvider = function () {
        providerControl.providers.push({ 
            last_name: providerControl.providerLastName,
            first_name: providerControl.providerFirstName,
            email_address: providerControl.providerEmail,
            specialty: providerControl.providerSpecialty,
            practice_name: providerControl.providerPracticeName
        });
    };
    providerControl.removeProvider = function () {
        var original = providerControl.providers;
        providerControl.providers = [];
        angular.forEach(original, function (provider) {
            if (!provider.remove)
                providerControl.providers.push(provider);
        });
    };
});

