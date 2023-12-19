class Validator{

    

    constructor(o){
        this.email = o.email;
        this.alertbox = o.alertbox;
        this.inputField = o.inputField;
        this.success = o.success;
        this.validator = {
            errorMessage: 'A mezőt kötelező kitölteni!',
            fields: {
                email: {
                    required: true,
                    reg: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    errorMessage: 'Az email mező hibásan lett kitöltve!',
                    input: this.email,
                    alert: 'Valid email required'
                },
            },
        };
    };

    isValid() {
        let isValid = true;

        for (let field in this.validator.fields) {
            let data = this.validator.fields[field];
            
            if (!(data.reg.test(data.input) && data.required) ||
                (!data.reg.test(data.input) && !data.required && data.input.length > 0)) {
                this.alert(data);
                isValid = false;
            }

            if (data.required && data.input === '') {
                this.alert(data);
                isValid = false;
            }
        }

        if (isValid) {
            document.querySelector('body').innerHTML = this.success;   
        }
        
    };


    alert(data){
        this.alertbox.innerHTML = data.alert;
        this.inputField.classList.add('alert-bg','alert-color');
        this.alertbox.classList.add('alert-color');
    };
}