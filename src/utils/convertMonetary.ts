export default function convertMonetary(money: number) {
  if (!isNaN(money)) {
    const brl = money.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })

    return brl
  }
}

export function priceDivided(money: number, parcels: number) {
  const parceled = convertMonetary(money / parcels)

  return `${parcels}x ${parceled} sem juros`
}
