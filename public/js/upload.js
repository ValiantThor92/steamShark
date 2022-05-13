async function uploadFormHandler(event) {
  event.preventDefault();

  const response = await fetch(`/api/album`, {
    method: 'POST',
    body: JSON.stringify({
      Image: image
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}


