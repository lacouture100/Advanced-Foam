
export async function getPost(url) {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";

 return fetch(proxyurl+ url,{
  method: 'get',
  headers: new Headers({

    'Content-Type': 'application/x-www-form-urlencoded',
    'Cookie': 'visid_incap_632298=Kft5BckXThmfg9AhY3JTPFGZMV8AAAAAQUIPAAAAAADTalEljyr23MV8DNyM/amv; incap_ses_490_632298=0QueJS16OVCgzIOtjNTMBhOyMV8AAAAAjIsPFrzafLJhFgA8cyeRjw=='
    
  }),
})
 // .then(console.log('Hello'))
 .then(response => {
   if(!response.ok){
     if(response.status >= 400 && response.status <= 500){
       return response.json()
       .then(data => {
         let error = {errorMessage : data.message}
         throw error;
       })
     } else {
       // If there is no response / The server is off
       let error = {errorMessage : 'Please try again later'};
       throw error;
     }

   }
   return response.json()
 })
}
