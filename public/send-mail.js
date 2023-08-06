const sendMail = async() => {
    document.querySelector('#submitBtn').innerHTML = "Sending...";
    let data = {
        firstName: document.querySelector('#firstName').value,
        lastName: document.querySelector('#lastName').value, 
        email: document.querySelector('#email').value, 
        phone: document.querySelector('#phone').value, 
        message: document.querySelector('#message').value
    }
    const validity = new RegExp(
        "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
    ).test(document.querySelector('#email').value);
    if(!validity){
        document.querySelector('#toast').classList.remove('hidden');
        document.querySelector('#toast').innerHTML = "Invalid Email address"
        document.querySelector('#submitBtn').innerHTML = "Send Message";
        setTimeout(()=>{
            document.querySelector('#toast').classList.add('hidden')
        }, 3000)
    } else if (!document.querySelector('#email').value.includes("@") || !document.querySelector('#email').value.includes(".com")) {
        document.querySelector('#toast').classList.remove('hidden');
        document.querySelector('#toast').innerHTML = "Provide a valid email address"
        document.querySelector('#submitBtn').innerHTML = "Send Message";
        setTimeout(()=>{
            document.querySelector('#toast').classList.add('hidden')
        }, 3000)
    } else if(!document.querySelector('#phone').value.length >= 11){
        document.querySelector('#toast').classList.remove('hidden');
        document.querySelector('#toast').innerHTML = "Provide a valid phone number"
        document.querySelector('#submitBtn').innerHTML = "Send Message";
        setTimeout(()=>{
            document.querySelector('#toast').classList.add('hidden')
        }, 3000)
    } else {
        try{
            const response = await fetch('https://blackbird.onrender.com/api/v1/mail', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            if(response.ok){
                document.querySelector('#toast').classList.remove('hidden');
                document.querySelector('#toast').innerHTML = "Submitted Sucessfully"
                document.querySelector('#submitBtn').innerHTML = "Send Message";
                document.querySelector('#firstName').value = "",
                document.querySelector('#lastName').value = "", 
                document.querySelector('#email').value = "", 
                document.querySelector('#phone').value = "", 
                document.querySelector('#message').value = ""
                setTimeout(()=>{
                    document.querySelector('#toast').classList.add('hidden')
                }, 3000)
            } else {
                document.querySelector('#toast').classList.remove('hidden')
                document.querySelector('#toast').innerHTML = response;
                document.querySelector('#submitBtn').innerHTML = "Send Message";
                setTimeout(()=>{
                    document.querySelector('#toast').classList.add('hidden')
                }, 3000)
            }
        } catch(err) {
            document.querySelector('#submitBtn').innerHTML = "Send Message";
            console.error(err);
            document.querySelector('#toast').classList.remove('hidden')
            document.querySelector('#toast').innerHTML = err;
            setTimeout(()=>{
                document.querySelector('#toast').classList.add('hidden')
            }, 3000)
        }
    }
}