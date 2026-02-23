import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const connectionString = process.env.DATABASE_URL?.trim()
if (!connectionString || connectionString.includes('YOUR_PASSWORD')) {
  console.error(
    'DATABASE_URL is missing or still set to placeholder. Set the real password in .env'
  )
}
const adapter = new PrismaPg({
  connectionString: connectionString ?? '',
})
const prisma = new PrismaClient({ adapter })

export async function GET() {
  if (!connectionString || connectionString.includes('YOUR_PASSWORD')) {
    return NextResponse.json(
      {
        error: 'Database not configured',
        hint: 'Set DATABASE_URL in .env with your real RDS password (replace YOUR_PASSWORD).',
      },
      { status: 503 }
    )
  }
  const user = await prisma.user.create({
    data: {
      name: "Khushal",
      role: "admin"
    }
  })

  return NextResponse.json(user)
}
