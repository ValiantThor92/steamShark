const loginFormHandler=async a=>{
  a.preventDefault();
  const b=document.querySelector("#email-login").value.trim(),
        c=document.querySelector("#password-login").value.trim();

    if(console.log(b,c),b&&c){
    const a=await fetch("/api/users/login",{
      method:"POST",
      body:JSON.stringify({email:b,password:c}),
      headers:{"Content-Type":"application/json"}});
      console.log(a),a.ok?
      document.location.replace("/"):alert(a.statusText)
    }},
      signupFormHandler=async a=>{a.preventDefault();
        const b=document.querySelector("#email-signup").value.trim(),
        c=document.querySelector("#password-signup").value.trim();
        if(console.log(b,c),b&&c){
          const a=await fetch("/api/users",{
            method:"POST",
            body:JSON.stringify
            ({email:b,password:c}),
            headers:{"Content-Type":"application/json"}});
          a.ok?
            document.location.replace("/"):alert(a.statusText)
        }};
          document.querySelector(".login-form").addEventListener("submit",loginFormHandler),
          document.querySelector(".signup-form").addEventListener("submit",signupFormHandler);