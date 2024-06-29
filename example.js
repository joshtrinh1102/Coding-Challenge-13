function main(){
    fetch ('https://course-api.com/react-store-products')
    .then(res =>
         res.json())
    .then(data => {
        console.log(data),
        })
    //fetch data
    .catch(error => console.log(error));//catch error

}