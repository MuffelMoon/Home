function toggleElementByCheckboxClass(checkboxs) {
    const name = checkboxs.name;
    const elementsToToggle = document.getElementsByClassName(name);

    if (elementsToToggle.length > 0) {
        for (let i = 0; i < elementsToToggle.length; i++) {
            if (checkboxs.checked) {
                elementsToToggle[i].classList.remove('hidden');
            } else {
                elementsToToggle[i].classList.add('hidden');
            }
        }
    }
}

var checkboxes = document.querySelectorAll("#ProjektTypFilterSeite li > input[type='checkbox']");

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        toggleElementByCheckboxClass(checkbox);
    });
    toggleElementByCheckboxClass(checkbox);
});




function toggleElementByCheckbox(checkbox) {
    const name = checkbox.name;
    const elementToToggle = document.getElementById(name);

    if (checkbox.checked) {
        elementToToggle.classList.remove('hidden');
    } else {
        elementToToggle.classList.add('hidden');
    }
}

var checkboxes = document.querySelectorAll("#DatumFilterSeite li > input[type='checkbox']");

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        toggleElementByCheckbox(checkbox);
    }); 
    toggleElementByCheckbox(checkbox);
});