const infoJobsToken = "ZWM0MjhjMDM0MjZjNDYxZjhmYmYwNjk0N2UzNmI1NGE6REFqVXFNcTQ2VFZzd08zV1loZkZpVXZqbWFkVVlJQy9iUGo3RXl4d2VlYUJxRzBTT2U="



async function getInfoJobsOffer () {
  const res = await fetch('https://api.infojobs.net/api/7/offer?category=informatica-telecomunicaciones', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${infoJobsToken}`
    }
  })

  const { items } = await res.json()
  console.log(items)

  const listOfOffers = items.map(item => {
    const { id, title, province, experienceMin, link, teleworking } = item

    return {
      id,
      title,
      province: province.value,
      experienceMin: experienceMin.value,
      link,
      teleworking: teleworking?.value ?? 'No especificado'
    }
  })

  return listOfOffers
}

export default getInfoJobsOffer;