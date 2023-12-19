console.log('Frontend Mentor | Newsletter sign-up form with success message');

let success = `
    <div class="success">
        <div class="card item">
            <div class="pic item"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                    <defs>
                        <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
                            <stop offset="0%" stop-color="#FF6A3A" />
                            <stop offset="100%" stop-color="#FF527B" />
                        </linearGradient>
                    </defs>
                    <g fill="none">
                        <circle cx="32" cy="32" r="32" fill="url(#a)" />
                        <path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285" />
                    </g>
                </svg></div>
            <h1>Thanks for subscribing!</h1>
            <h3>A confirmation email has been sent to <b>ash@loremcompany.com</b>. Please open it and click the button
                inside to confirm your subscription.</h3>
            
            <button class="size subscribe" onclick="location.reload()">Dismiss message</button>
        </div>
    </div>
    `;


const subscribe = document.querySelector('#subscribe');


subscribe.addEventListener('click', function(){
    let emailInput = document.querySelector('#email').value.trim();
    const alertBox = document.querySelector('#alert');
    let valid = new Validator(
        {
        email: emailInput,
        alertbox: alertBox,
        inputField: document.querySelector('#email'),
        success: success
        },
    );
    valid.isValid();
});


document.querySelector('#email').addEventListener("keypress", function(event){
    if (event.key === 'Enter') {
    subscribe.click();
    }
});

