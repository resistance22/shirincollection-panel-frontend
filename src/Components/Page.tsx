import React from 'react'

interface props {
  Header?: React.ReactNode
  PageContent?: React.ReactNode
}

const Page: React.FC<props> = ({ Header, PageContent }) => {
  return (
    <div className='page-container'>
      {Header}
      <div className='main-frame'>
        {PageContent}
      </div>
    </div>

  )
}


export default Page