let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
let deleteBtn = document.querySelector('#delete-btn')
let saveTabBtn = document.querySelector('#savetab-btn')



let leadsLocale = JSON.parse(localStorage.getItem("myLeads"))
if(leadsLocale){
    myLeads = leadsLocale
    render(myLeads)
}

saveTabBtn.addEventListener('click',()=>{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})


function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
                <i class="ri-arrow-right-line"></i>
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}


deleteBtn.addEventListener('dblclick', ()=>{
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

