const form = document.getElementById('form-1');
form.style.display = 'none';
const content = document.getElementById('main');

let formData;

const saveFormDataToLS = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
};

const getFormDataFromLS = () => {
    let obj = localStorage.getItem("formData")
    formData = obj ? JSON.parse(obj) : { name: '', email: '', phone: '', company: '', message: '' };
    for (input in formData) {
        document.getElementById(input).value = formData[input];
    };
};

const setFormDisplay = () => {
    window.scrollTo(0, 0);
    if (form.style.display == 'none') {
        form.style.display = 'flex';
        content.style.display = 'none';
        getFormDataFromLS();
    } else {
        form.style.display = 'none';
        content.style.display = 'flex';
    }
}

const btn1 = document.getElementById('btn-1');
btn1.addEventListener('click', setFormDisplay);
const btn2 = document.getElementById('btn-2');
btn2.addEventListener('click', setFormDisplay);

const isEmpty = (value) => value === '' ? true : false;
const matchesPattern = (value, constraint) => constraint.test(value);

const validateEmpty = (input) => {
    formData[input.id] = input.value;
    saveFormDataToLS();
    if (isEmpty(input.value)) {
        input.setCustomValidity("Пожалуйста заполните данное поле");
        return false;
    } else {
        input.setCustomValidity("");
        return true;
    };
};

const validateRegExp = (input, regExp, example) => {
    formData[input.id] = input.value;
    saveFormDataToLS();
    if (!matchesPattern(input.value, new RegExp(regExp))) {
        input.setCustomValidity("Формат поля должен соответствовать формату " + example);
        return false;
    } else {
        input.setCustomValidity("");
        return true;
    }
};

const nameInput = document.getElementById('name');
const validateName = () => validateEmpty(nameInput);
nameInput.addEventListener("input", function (e) { validateName(); });

const emailInput = document.getElementById('email');
const validateEmail = () => {
    return validateEmpty(nameInput) &
        validateRegExp(
            emailInput,
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'user@email.com'
        );
};
emailInput.addEventListener("input", function (e) { validateEmail(); });

const phoneInput = document.getElementById('phone');
const validatePhone = () => {
    if (!isEmpty(phoneInput.value)) {
        return validateRegExp(
            phoneInput,
            /^\+[0-9]\([0-9]{3}\)[0-9]{2}\-[0-9]{2}\-[0-9]{3}$/,
            '+X(XXX)XX-XX-XXX'
        );
    } else {
        phoneInput.setCustomValidity("");
        return true;
    }
};
phoneInput.addEventListener("input", function (e) { validatePhone() });

const companyInput = document.getElementById('company');
const validateCompany = () => validateEmpty(companyInput);
companyInput.addEventListener("input", function (e) { validateCompany(); });

const messageInput = document.getElementById('message');
const validateMessage = () => validateEmpty(messageInput);
messageInput.addEventListener("input", function (e) { validateMessage(); });

const getValueFromCookie = (key) => {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + key.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
};

form.addEventListener("submit", (event) => {
    let valid = validateName() & validateEmail() & validatePhone() & validateCompany() & validateMessage();
    if (!valid) {
        event.preventDefault();
    } else {
        if (getValueFromCookie("sent") === 'true') {
            alert(getValueFromCookie("name") + ", ваше обращение обрабатывается!");
        } else {
            alert(formData.name + ", спасибо за обращение!");
            document.cookie = "sent=true";
            document.cookie = 'name=' + encodeURIComponent(formData.name + " (" + formData.company + ")");
        }
    }
});
