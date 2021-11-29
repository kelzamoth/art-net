export const required = value => {
    if (!value) {
        return 'Обязательно для заполнения';
    }
};

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`

    return undefined;
}




export const minMaxLength = (minLength, maxLength) => value => {
    if (value && value.length > maxLength || value.length < minLength) {
        return `Количество символов должно варьироваться от ${minLength} до ${maxLength}`;
    }
    return undefined;
};

export const nameUser = value => {
    const re = /^[a-zA-Zа-яА-ЯёЁ\s-]+$/;
    if (value && !value.match(re)) {
        return 'Пароль может содержать только кириллицу, латинские буквы, пробел и тире';
    }
    return undefined;
};

export const email = value => {
    if (value && !/^[A-Z0-9`~!#$%^&*()_+={}\[\]\\|:;"'<>,.?/-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Недопустимый e-mail адрес';
    }
    return undefined;
};

export const password = value => {
    if (value && /[а-яА-ЯёЁ]/g.test(value)) {
        return 'Пароль может состоять только из латиницы, цифр и любого спец. символа';
    }
    return undefined;

};

export const matchPasswords = (password, passwordRepeat) => {
    if (password !== passwordRepeat) {
        return 'Пароли не совпадают';
    }
    return undefined;
};
