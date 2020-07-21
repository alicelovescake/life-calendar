document.addEventListener('DOMContentLoaded', () =>{
    const datePicker = document.querySelector('#birthdate');

    chrome.storage.sync.get(['birthdate'], ({ birthdate }) => {
        datePicker.value = birthdate;
    });
    datePicker.addEventListener('change', () => {
        chrome.storage.sync.set({ birthdate: datePicker.value }, () => {
            console.log(`Birth date updated to ${datePicker.value}`)
        });
    })
})

