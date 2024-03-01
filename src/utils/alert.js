import { writable } from 'svelte/store';

//create 3 stores to store each scenario
export const alertMessage = writable("");
export const successAlert = writable(false);
export const failedAlert = writable (false);

//create timeout to hide alert
let timeoutId;

function resetTimeout() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        const variable = [failedAlert, successAlert]
        variable.forEach((index) => index.set(false));
    },3000);
}

//create each alerts function:

//success actions:

//successful sign up:
export function signUpAlert() {
    successAlert.set(true);
    alertMessage.set("Sign up successful!")
    resetTimeout()
}

//successful login:
export function logInAlert() {
    successAlert.set(true);
    alertMessage.set("Log in successful! Welcome back")
    resetTimeout()
}

//successful upload image


//failed actions:

//unable to login:
export function failedLogInAlert() {
    failedAlert.set(true);
    alertMessage.set("Pleace check your email/password!")
    resetTimeout()
}

//unable to create account:
export function failedCreateAccount() {
    failedAlert.set(true)
    alertMessage.set("The email address is taken!")
    resetTimeout
}