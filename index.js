

function addingEventListener() {
  let inputElement = document.querySelector("input")
  inputElement.addEventListener("click", function(event){
    alert("I am clicked!")
  })
}

addingEventListener()
