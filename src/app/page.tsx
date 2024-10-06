'use client'

import { useRouter } from 'next/navigation'

export default function Begin() {
  const router = useRouter()

  router.push('/home')
}
