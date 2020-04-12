const formatPrice = (number) => {
  const formated = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(number)

  return formated
}

export default formatPrice
