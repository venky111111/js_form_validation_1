function validate(){
    let m=check1();
    if(m==10){
        const modal = document.getElementById("successModal");
        modal.style.display = "block";
    }
}          
function check1(){

    let fname=document.getElementById("fName");
    const FName=fname.value;
    let fn=document.getElementById("fn");

    let sname=document.getElementById("sName");
    const SName=sname.value;
    let sn=document.getElementById("sn");
    
    let email=document.getElementById("email");
    const Email=email.value;
    let em=document.getElementById("em");

    let number=document.getElementById("number");
    const Number=number.value;
    let nm=document.getElementById("nm");

    let npassword=document.getElementById("nPassword");
    const NPassword=npassword.value;
    let np=document.getElementById("np");

   let cpassword=document.getElementById("cPassword");
    const CPassword=cpassword.value;
    let cp=document.getElementById("cp");

    const gender=document.getElementById("gender");
    
    const Gender=gender.value;
  
    let gn=document.getElementById("gn"); 

    let date=document.getElementById("dateInput");
    const Date=date.value;
    let dt=document.getElementById("dt");

    let country=document.getElementById("country");
    const Country=country.value;
    let cn=document.getElementById("cn")

    let check=document.getElementById("check");
    const Check=check.value;
    let ch=document.getElementById("ch");
    let c=0;
    if (FName =="") {
            fn.innerHTML="Please give your first name"; 
            fname.style.borderColor="red";
            fn.style.color="red";
            c=c-1;


    }
    else if(checkName(FName)&&(FName.charAt(0)>='A'&&FName.charAt(0)<='Z')){
    
       fn.innerHTML="";
       fname.style.borderColor="green";
       c++;
    }

    else {
        fn.innerHTML="Please give letters only and first letter must be capital";
        fn.style.color="red";
        fname.style.borderColor="red";
        c=c-1;
    }
    function checkName(input) {
           
     
        let nameReg = /^[a-zA-Z]+$/;

       
        let valid = nameReg.test(input);

       
        return valid;
    }
    if(SName===""){
        sn.innerHTML="Please give your second name"; 
            sname.style.borderColor="red";
            sn.style.color="red";
            c=c-1;
    }
    else if(checkName(SName)){
    
        sn.innerHTML="";
        sname.style.borderColor="green";
        c++;
    }
    else {
        sn.innerHTML="Please give letters only";
        sn.style.color="red";
        sname.style.borderColor="red";
        c=c-1;
    }
    if(Email===""){
        em.innerHTML="Please give your email"; 
            email.style.borderColor="red";
            em.style.color="red";
            c=c-1;
    }
    else if(checkMail(Email)){
    
        em.innerHTML="";
        email.style.borderColor="green";
        c++;
    }
    else {
        em.innerHTML="Please give Valid mail";
        em.style.color="red";
        email.style.borderColor="red";
        c=c-1;
    }
    function checkMail(input){
        
        let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
            let valid = emailReg.test(input);
                return valid;
    }
    if(Number===""){
        nm.innerHTML="Please give your number"; 
            number.style.borderColor="red";
            nm.style.color="red";
            c=c-1;
    }
    else if(checkNumber(Number)){
        if((Number.charAt(3)>='6'&&Number.charAt(3)<='9')&&(Number.charAt(0)=='+')){
        nm.innerHTML="";
        number.style.borderColor="green";
        c++;
        }
        else{
            nm.innerHTML="Number is invalid";
            number.style.borderColor="red";
            nm.style.color="red";
            c=c-1;
        }
    }
    else{
        nm.innerHTML="Please give valid mobile number ";
        nm.style.color="red";
        number.style.borderColor="red";
        c=c-1;
    }
    function checkNumber(input) {
            
        let mobileReg = /^[+0-9]{13}$/;
        let valid = mobileReg.test(input);
        return valid;
    }
    if(NPassword==""){
            np.innerHTML="Please give your new password"; 
            npassword.style.borderColor="red";
            np.style.color="red";
            c=c-1;
    }
    else if(checkPassword(NPassword)){
        np.innerHTML="";
        npassword.style.borderColor="green"; 
        c++;
    }
    else{
        np.innerHTML="Password should containe one number,one capital letter,one small letter,one symbol and atleast 8 characters";
        np.style.color="red";
        npassword.style.borderColor="red";
        c=c-1;
    }
    function checkPassword(input) {
        let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        let valid = regex.test(input);
        return valid;
    }
    if(CPassword==""){
            cp.innerHTML="Please conform password"; 
            cpassword.style.borderColor="red";
            cp.style.color="red";
            c=c-1;
    }
    else if(CPassword===NPassword){
        cp.innerHTML="";
    cpassword.style.borderColor="green";
    c++;

    }
    else{
        cp.innerHTML="password does not match";
        cp.style.color="red";
        cpassword.style.borderColor="red"; 
        c=c-1;
    }
        var getSelectedValue = document.querySelector('input[name="fav"]:checked'); 
    if(getSelectedValue==null){
        gn.innerHTML="Please give your gender"; 
        gender.style.borderColor="red";
        gn.style.color="red";
        c=c-1;
    }
    else{
        gn.innerHTML="";
        gender.style.borderColor="green";
        c++;
    }
    if(Date==''){
        dt.innerHTML="Please give your date of birth"; 
        date.style.borderColor="red";
        dt.style.color="red";
        c=c-1;
    }
    else{
        dt.innerHTML="";
        date.style.borderColor="green";
        c++;

    }
    if(Country===''){
        cn.innerHTML="Please give your country"; 
        country.style.borderColor="red";
        cn.style.color="red";
        c=c-1;
    }
    else{
        cn.innerHTML="";
        country.style.borderColor="green";
        c++;

    }
    if(!check.checked){
        ch.innerHTML="Please give your conformation"; 
        check.style.borderColor="red";
        ch.style.color="red";
        c=c-1;
    }
    else{
        ch.innerHTML="";
        check.style.borderColor="green";
        c++;
    }
    return c;  
}

