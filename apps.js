const cards= document.querySelectorAll(".add-btn");
console.log(cards)
let count=0;
let sum=0;
for (const card of cards) {
    card.addEventListener("click", function(e){
        count+=1;
        setInnerText('cart-count',count); 
       const placeTitle= e.target.parentNode.childNodes[1].innerHTML;
       const selected_place_container=document.getElementById("selected-place-container");
       const li=document.createElement("li");
       const p=document.createElement("p");
       p.innerHTML=placeTitle;
       li.appendChild(p);
       selected_place_container.appendChild(li);
       console.log(placeTitle);


       const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;
       const li1=document.createElement("li");
       const p1=document.createElement("p");
       p1.innerHTML=price;
       li1.appendChild(p1);
       selected_place_container.appendChild(li1);
        let price1=parseInt(price)
        console.log(price1)
        totalCount(price1)
        
    })
}



function totalCount(price){
    sum=sum + parseInt(price) ;
    setInnerText('total-cost',sum)
    console.log(sum)
    grandTotal(sum)
}



// function grandTotal(totalGrand){
//     setInnerText('grand-total',totalGrand)
//     let a= totalGrand;

//     if (totalGrand=='bus') {
//         setInnerText('grand-total',a+100);
//     }
// }

function grandTotal(totalGrand){
    if(typeof totalGrand=='number'){
        setInnerText('grand-total',totalGrand)
        a = totalGrand; 
    }
   

   else if (totalGrand=='bus') {
        setInnerText('grand-total',a+100);
    }

   else if (totalGrand=='train') {
        setInnerText('grand-total',a-200);
    }

   else if (totalGrand=='flight') {
        setInnerText('grand-total',a+500);
    }

}



function setInnerText(id,value){
    document.getElementById(id).innerHTML=value;
}

