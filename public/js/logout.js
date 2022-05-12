const logout = () => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
};
// const logout = async () => {
//     const response = await fetch('api/users/logout', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//         document.location.replace('/');
//         req.session.loggedIn = false
//     } else {
//         alert(response.statusText);
//     }
// };
// document.querySelector('.logout').addEventListener('click', logout);
