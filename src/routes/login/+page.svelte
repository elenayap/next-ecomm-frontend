<script>
import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
import { authenticateUser } from '../../utils/auth.js';
import { goto } from '$app/navigation';
import { logInAlert,failedLogInAlert } from '../../utils/alert.js';

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
    logInAlert();
}  else {
//this res.res.message. the first res is res = await authenticateUser. 
//the second res.message is belong to authenticateUser function res
formErrors = resp.res.error;
// console.log(resp.res.error)
clicked = false; //set clicked to false when cant log in
failedLogInAlert();
}
}

</script>
<div class="hero min-h-screen" style="background-image: url(https://iiif.micr.io/rAERt/full/1280,/0/default.jpg);"> 
    <div class="hero-overlay bg-opacity-40"></div> 
    <div class="hero-content text-center text-neutral-content  "> 
      <div class="max-w-md"> 
<div class="justify-center">
<h1 class="font-serif font-bold text-center text-3xl">Log In</h1>
<div class="text-center">
</div>
<div class="flex justify-center items-center mt-8">
    <form on:submit={logIn} class="w-screen">
        <div class="form-control w-full">
            <label class="label" for="email">
                <span class="label-text font-serif">Email</span>
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
                <span class="label-text font-serif">Password</span>
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
        <div class="form-control w-full mt-8">
            {#if clicked}
            <button class="btn btn-active btn-primary">
              <span class="loading loading-spinner hover:btn-accent font-serif"></span>
              LOG IN
            </button>
            <a class="link-hover italic text-xs text-center mt-4 font-serif" href="/users/new"
          >Dont'have an account yet? Click here to sign-up instead.</a>
            {:else}
                <button class="btn btn-primary hover:btn-accent font-serif">LOG IN</button>
                <a class="link-hover italic text-xs text-center mt-4 font-serif" href="/users/new"
          >Dont'have an account yet? Click here to sign-up instead.</a>
            {/if}
    </div>
    </form>
    </div>    
</div> 
</div> 
</div> 
</div>


