<script>
import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
import { authenticateUser } from '../../utils/auth.js';
import { goto } from '$app/navigation';

let formErrors = {};
//set a variable "clicked" to "false" initially, so when clicked is true, trigged different action
let clicked = false; 

//suceessful login will direct back to home page
async function postLogIn() {
      goto('/');
    }

//step2: create a function write condition statement
async function logIn(evt) {
    evt.preventDefault()
    clicked = true; //set clicked to true when log in 

 //step1: create userLogin and store what required in the login page  
const userLogIn =  {
    email: evt.target['email'].value,
    password: evt.target['password'].value
    }  

//step3: await authenticateUser function to Returns new auth token and account data by a combination of email and password.
    const resp = await authenticateUser(userLogIn.email, userLogIn.password);

if (resp.success) {
    postLogIn();
    // logInAlert();
}  else {
//this res.res.message. the first res is res = await authenticateUser. 
//the second res.message is belong to authenticateUser function res
formErrors = resp.res.message;
clicked = false; //set clicked to false when cant log in
// failedLogInAlert();
}
}

</script>

<h1 class="text-center text-xl">Log In</h1>

<div class="flex justify-center items-center mt-8">
    <form on:submit={logIn} class="w-1/3">
        <div class="form-control w-full">
            <label class="label" for="email">
                <span class="label-text">Email</span>
            </label>
            <input
                type="text"
                name="email"
                placeholder="johndoe@example.com"
                class="input input-bordered w-full"
            />
            {#if 'email' in formErrors}
            <label class="label" for="email">
                <span class="label-text-alt text-red-500">{formErrors['email'].message}</span>
            </label>
        {/if}
        </div>

        <div class="form-control w-full">
            <label class="label" for="password">
                <span class="label-text">Password</span>
            </label>
            <input
                type="password"
                name="password"
                placeholder=""
                class="input input-bordered w-full"
                required
            />
            {#if 'password' in formErrors}
            <label class="label" for="password">
                <span class="label-text-alt text-red-500">{formErrors['password'].message}</span>
            </label>
        {/if}
        </div>
        <div class="form-control w-full mt-4">
            {#if clicked}
            <button class="btn btn-active btn-primary">
              <span class="loading loading-spinner hover:btn-accent"></span>
              LOG IN
            </button>
            <a class="link-hover italic text-xs text-center " href="/users/new"
          >Dont'have an account yet? Click here to sign-up instead.</a>
            {:else}
                <button class="btn btn-primary hover:btn-accent">LOG IN</button>
                <a class="link-hover italic text-xs text-center" href="/users/new"
          >Dont'have an account yet? Click here to sign-up instead.</a>
            {/if}
    </div>
    </form>
    </div>    