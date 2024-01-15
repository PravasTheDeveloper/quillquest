// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prismadb'

type Data = {
  messege: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {

    const { email, name } = req.body

    await prisma.$connect()

    const createdata = await prisma.user.create({ data: { email, name } })

    if(createdata){
      res.status(200).json({messege:"Hei Man"})
    }

  } catch (err) {
    res.status(400).json({messege:err})
  } finally {
    prisma.$disconnect()
  }
}
