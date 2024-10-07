const FilterenuBtn = document.getElementById('FilterButton');
let IsVisble_b = false;


FilterenuBtn.addEventListener('click', () => {
    if(IsVisble_b){
        document.getElementById("checkboxSection").classList.add('hidden');
    }
    else{
        document.getElementById("checkboxSection").classList.remove('hidden');
    }

    IsVisble_b = !IsVisble_b;
});

