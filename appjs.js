let countEl= document.getElementById("count-el")
let count= 0
function increment() {
	count += 1//equivalent to count=count+1
	countEl.textContent= count
}
let saveEl=document.getElementById("save-el")
function save(){
	let record= count+" - "
   saveEl.textContent+=record
   count=0
  countEl.textContent=count
  }
