import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Custom404 = () => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center min-h-screen'>
      <Image src="/assets/images/404.png" alt="404" width={500} height={500} />
      <h1 className='text-5xl font-bold'>Halaman Tidak Ditemukan</h1>
      <Link href="/" className='btn btn-primary'>Kembali ke Beranda</Link>
    </div>
  )
}

export default Custom404
