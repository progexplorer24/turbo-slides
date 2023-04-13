import Image from 'next/image'
import React from 'react'

export default function Footer({ authorUrl, authorName, authorImgUrl }) {
  return (
    <footer className="Footer opacity-20 hover:opacity-100 absolute bottom-6 left-6 flex items-center transition-opacity duration-500 ease-in-out">
      <a className="link text-normal flex items-center opacity-70 hover:opacity-100" href={authorUrl} target="_blank" rel="noopener noreferrer">
        {authorImgUrl && <Image className="shadow-sm mr-1 rounded-full" src={authorImgUrl} alt={authorName} width={80} height={80} />}
        {authorName}
      </a>
    </footer>
  )
}
