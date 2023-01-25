const text=document.getElementById("text")
const mainlower=document.getElementById("mainlower")

async function search(params) {
    mainlower.innerHTML=""
    const response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text.value}`)
    const data=await response.json()
    console.log(data);
    data.meals.map((ele)=>{
        
        var image=ele.strMealThumb
        mainlower.innerHTML+=`
        <div class="card">
            <img src="${image}" alt="" width="100%" height="100%">
        </div>
        `

     })

}