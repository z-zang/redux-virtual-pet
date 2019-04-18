export function example() {
  console.log("example function firing")
}

export function foodBtn(hunger) {
  return hunger >= 100
}

export function sleepBtn(health) {
  return health >= 100
}

export function playCatchBtn(hunger, health) {
  return hunger <= 10 || health <= 5
}
