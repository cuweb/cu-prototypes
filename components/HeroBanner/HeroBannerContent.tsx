import React from 'react'

export interface HeroBannerContentProps {
  children?: React.ReactNode
  title?: string
}

export const HeroBannerContent = ({
  children,
  title,
}: HeroBannerContentProps) => {
  let headerSize = ''
  const maxWidth = '5xl'

  switch (maxWidth) {
    case '5xl':
      headerSize = ''
      break
    // case '7xl':
    //   headerSize = 'xl:text-5xl'
    //   break
    // case 'max':
    //   headerSize = 'xl:text-5xl'
    //   break
    default:
      headerSize = ''
  }

  return (
    <>
      <div className={`grid gap-4 grid-col md:gap-6`}>
        {/* <nav aria-label="Breadcrumb" role="navigation">
          <ol itemScope itemType="http://schema.org/BreadcrumbList">
            <li
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/ListItem"
            >
              <a itemProp="item" href="https://example.com">
                <span itemProp="name">Home</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <li
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/ListItem"
            >
              <a itemProp="item" href="https://example.com/category">
                <span itemProp="name">Category</span>
              </a>
              <meta itemProp="position" content="2" />
            </li>
            <li
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/ListItem"
            >
              <a
                itemProp="item"
                href="https://example.com/category/subcategory"
              >
                <span itemProp="name">Subcategory</span>
              </a>
              <meta itemProp="position" content="3" />
            </li>
            <li
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/ListItem"
            >
              <span itemProp="name">Current Page</span>
              <meta itemProp="position" content="4" />
            </li>
          </ol>
        </nav> */}

        <h1
          className={`font-semibold text-2xl md:text-3xl lg:text-4xl ${headerSize}`}
        >
          {title}
        </h1>

        {children}

        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit.
          Praesentium architecto a distinctio aut reprehenderit ducimus.
          Perferendis excepturi delectus nihil voluptatem non. Molestiae quas
          dolores accusamus in. Praesent quis ligula quis nulla malesuada
          tempor.
        </p>

        <div className="flex flex-wrap gap-6 buttons md:flex-1">
          <button
            type="button"
            aria-label="Primary Button"
            className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md cu-button not-prose hover:text-white focus:outline-none bg-cu-red hover:bg-cu-black-600"
          >
            Primary Button
          </button>
          <button
            type="button"
            aria-label="Secondary Button"
            className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md cu-button not-prose hover:text-white focus:outline-none text-cu-black hover:bg-cu-red"
          >
            Secondary Button
          </button>
        </div>
      </div>
    </>
  )
}

HeroBannerContent.displayName = 'HeroBanner.Content'
