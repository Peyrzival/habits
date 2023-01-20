const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já registrado")
    return
  }
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
  console.log(nlwSetup.data)
}

// const data = {
//  study: ["01-16", "01-17", "01-19"],
//  water: ["01-15", "01-16", "01-17", "01-18", "01-19"],
//  healthy: ["01-15", "01-16", "01-17"],
//  exercise: [],
//  sleep: [],
// }

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
