import { PropsWithChildren } from 'react'
import { Badge } from '@carletonuniversity/rds'

export interface NewsCardProps {
  id?: number
  title: string
  heading?: 'h2' | 'h3'
  date?: string | Date
  image?: string
  alt?: string
  excerpt?: string
  tags?: Tags
}

interface Tags {
  category: {
    id: number
    name: string
    slug: string
  }[]
}

export const NewsCard = ({
  title,
  heading: HeadLevel = 'h3',
  date,
  image,
  alt,
  excerpt,
  tags,
}: PropsWithChildren<NewsCardProps>) => {
  const formatedDate = date
    ? new Date(date).toLocaleString('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric',
      })
    : null

  return (
    <>
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="object-cover w-full"
          src={image ? image : 'https://source.unsplash.com/random/400x266'}
          alt={alt}
        />
      )}

      <div className="flex flex-col space-y-2 py-6 px-7 @sm:md:space-y-3">
        {date && (
          <time className="flex items-start text-sm italic text-cu-black-600">
            {formatedDate}
          </time>
        )}

        <HeadLevel className="text-lg font-semibold text-cu-black group-hover:text-cu-red @sm:md:text-xl">
          {title}
        </HeadLevel>

        {excerpt && (
          <p className="text-base text-cu-black-600">
            {excerpt.length > 170 ? `${excerpt.substring(0, 170)}...` : excerpt}
            <span className="font-semibold text-cu-red group-hover:text-cyan-700">
              {' '}
              Read more
            </span>
          </p>
        )}
      </div>

      <div className="pb-5 mt-auto px-7">
        {tags?.category?.map((tag) => (
          <Badge key={tag.id}>{tag.name}</Badge>
        ))}
      </div>
    </>
  )
}
