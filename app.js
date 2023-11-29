

function isValidPhoneNumber(phoneNumber) {
    
    return /^[+]*[0-9]*[ ]{0,1}[(]{0,1}[ ]{0,1}[0-9]{1,3}[ ]{0,1}[)]{0,1}[ ]{0,1}[0-9]{1,3}[ ]{0,1}[0-9]{2}[ ]{0,1}[0-9]{2}[ ]{0,1}[-\.\/]{0,1}[ ]{0,1}[0-9]{1,5}$/g.test(phoneNumber);
}

function fillDropdowns() {
    
    fetch('https://run.mocky.io/v3/1b19c0a6-06ab-4ad8-b42e-1a3b56988689')
        .then(response => response.json())
        .then(data => {
            
            const citySelect = document.getElementById('city');
            const courseTypeSelect = document.getElementById('courseType');

            data.cities.forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.text = city;
                citySelect.add(option);
            });

            
            return fetch('https://run.mocky.io/v3/9dbcffff-b0f3-4347-9c2f-db371fffec6d');
        })
        .then(response => response.json())
        .then(data => {
            const courseTypeSelect = document.getElementById('courseType');

            data.courseTypes.forEach(courseType => {
                const option = document.createElement('option');
                option.value = courseType;
                option.text = courseType;
                courseTypeSelect.add(option);
            });
        })
        .catch(error => {
            console.error('Veri çekme hatası:', error);
        });
}

document.getElementById('app-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const requiredFields = ['title', 'name', 'email', 'phone', 'courseType', 'city', 'contactMethod', 'hours', 'accept-terms'];

    for (const field of requiredFields) {
        const inputField = document.getElementById(field);

        if (!inputField.value.trim()) {
            alert(`Lütfen ${field === 'accept-terms' ? 'şartları kabul' : 'geçerli ' + field} girin.`);
            event.preventDefault(); 
            return;
        }
    }

    
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    
    if (!emailInput.checkValidity()) {
        alert('Lütfen geçerli bir email adresi girin.');
        return;
    }

    // Telefon numarası doğrulama
    if (!isValidPhoneNumber(phoneInput.value)) {
        alert('Lütfen geçerli bir Türk telefon numarası girin.');
        return;
    }
    try {


    const successMessage = document.getElementById('success-message');
    

        alert('Form is submitted');
            window.location.href = '/submit.html';
    }
     catch (error) {
        console.error('An error occurred during form submission:', error);
        alert('Form gönderimi sırasında bir hata oluştu.');
    }
});

document.addEventListener('DOMContentLoaded', fillDropdowns);
