export const getMetaData = async (setData) => await fetch('http://localhost:8080/api/v1/process-metadata', {
    headers: { Authorization: 'Bearer {some token}' }
    })
    .then(response => response.json())
    .then(data => setData(data));