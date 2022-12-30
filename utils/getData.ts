import 'server-only'

export const getData = async (collection: string) => {
  const res = await fetch(`http://localhost:3000/api/${collection}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `users API-Key ${process.env.PAYLOADCMS_ADMIN_API_KEY || ''}`,
    },
  })
  return res.json()
}

export const getGlobalsData = async (collection: string) => {
  const res = await fetch(`http://localhost:3000/api/globals/${collection}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `users API-Key ${process.env.PAYLOADCMS_ADMIN_API_KEY || ''}`,
    },
  })
  return res.json()
}
