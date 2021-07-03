import {makeRequest} from "./authHelpers.js";
import * as at from "./auth.js";

makeRequest('login', 'POST', {
    password: 'user1',
    email: 'user1@email.com'
    });

document.getElementById("submitBtn").addEventListener("click", at.login);
