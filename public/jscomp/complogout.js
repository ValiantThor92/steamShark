const logout=async()=>{
  const a=await fetch("api/users/logout",
    {
      method:"POST",
      headers:{"Content-Type":"application/json"}
    }
  );
  a.ok?
  document.location.replace("/login"):alert(a.statusText)};
  document.querySelector("#logout").addEventListener("click",logout);