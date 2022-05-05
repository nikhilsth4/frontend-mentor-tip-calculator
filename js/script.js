const billAmountEl = document.getElementById("billAmount")
const tips = document.querySelectorAll(".tip")
const customEl = document.getElementById("custom")
const personEl = document.getElementById("person")
const personErrorEl = document.getElementById("personError")
const tipAmountEl = document.getElementById("tipAmount")
const totalEl = document.getElementById("total")
const resetEl = document.getElementById("reset")

let billAmount = 0
let tipPercent = 0
let person = 0
let tipAmount = 0
let totalAmount = 0

tips.forEach((tip) => {
  tip.addEventListener("click", () => {
    removeActive()
    if (tipPercent !== Number(tip.value)) {
      tipPercent = Number(tip.value)
      tip.classList.add("active")
    } else {
      if (Number(customEl?.value)) {
        tipPercent = customEl?.value
      } else {
        tipPercent = 0
      }
    }
    setTipTotal()
    customEl.value = null
  })
})

customEl.addEventListener("change", () => {
  removeActive()
  tipPercent = Number(customEl.value)
  setTipTotal()
})

billAmountEl.addEventListener("change", () => {
  billAmount = Number(billAmountEl.value)
  setTipTotal()
  if (billAmount > 0) {
    resetEl.disabled = false
  }
})

personEl.addEventListener("change", () => {
  person = Number(personEl.value)
  setTipTotal()
  personEl.classList.remove("error")
  personErrorEl.classList.remove("error-text")
})

resetEl.addEventListener("click", () => {
  if (person !== 0) {
    resetAll()
  } else {
    personEl.classList.add("error")
    personErrorEl.classList.add("error-text")
  }
})

const removeActive = () =>
  tips.forEach((newTip) => {
    newTip.classList.remove("active")
  })

const calTipAmount = () => {
  if (person !== 0) {
    tipAmount = (billAmount * tipPercent) / (100 * person)
  } else {
    tipAmount = 0
  }

  return tipAmount
}

const calcTotal = () => {
  if (person !== 0) {
    totalAmount = (billAmount + (billAmount * tipPercent) / 100) / person
  } else {
    totalAmount = 0
  }

  return totalAmount
}

const setTipTotal = () => {
  tipAmountEl.innerHTML = calTipAmount()
  totalEl.innerHTML = calcTotal()
}

const resetAll = () => {
  removeActive()
  tipAmountEl.innerHTML = 0
  totalEl.innerHTML = 0
  personEl.value = 0
  customEl.value = null
  billAmountEl.value = 0
  resetEl.disabled = true
  billAmount = 0
  tipPercent = 0
  person = 0
  tipAmount = 0
  totalAmount = 0
}
