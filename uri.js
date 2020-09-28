const seat=document.querySelectorAll(".seat");
const quantity=document.querySelector(".num");
const total_price=document.querySelector(".price");
const list=document.getElementById("movie_list")
let s=0;
let arr=[];


seat.forEach((item)=>{
    if(!(item.classList.contains("selected") || item.classList.contains("occupied"))){
        arr.push(item)
    }
});

seat.forEach((single_seat)=>{
    single_seat.addEventListener("click",function(e){
        if(!(e.currentTarget.classList.contains("selected") || e.currentTarget.classList.contains("occupied"))){
            s++;
            let total=+list.value*s
            console.log(list.value,s);
            quantity.textContent=s;
            total_price.textContent="$"+total;
            document.querySelector(".remain").textContent=arr.length - s
            e.currentTarget.classList.add("selected")
            document.querySelector(".res").style.visibility="visible"; 
        }
    })
})
