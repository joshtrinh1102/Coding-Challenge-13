///U22275330
let count = 0;
function call(count){
    const request= fetch ('https://course-api.com/react-store-products')
    .then((response)=>{console.log(response);
        return response.json();
    }).then((data)=>{
            console.log(data);
            document.querySelector('#name').textContent = `Name: ${data[count].name}`;
            document.querySelector('#image').src = `${data[count].image}`
            document.querySelector(`#image`).textContent = `Image link: ${data[count].image}`
            
            document.querySelector('#price').textContent = ` Price: $ ${data[count].price}`
            document.querySelector('#description').textContent = `Description: ${data[count].description}`
//Fetch and display product data from API.
        }).catch((err)=>{
            console.log(err);
            alert("Sorry there was an error. ")
        }).finally(()=>{
            console.log("Load Successful")
        });//catch error

}
const next = document. querySelector("#next");
    next.addEventListener("click",function(){
        call(count);
         count++;// Add Next button
    })
const previous = document. querySelector("#previous");
    previous.addEventListener("click",function(){
        
        count--;
        call(count);
    })//Create navigation buttons for product display
    


