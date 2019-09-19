const inputElement = document.querySelector("input")

function addingEventListener(element) {
  element.addEventListener("click", function(event){
    alert("I am clicked!")
  })
}

addingEventListener(inputElement)
