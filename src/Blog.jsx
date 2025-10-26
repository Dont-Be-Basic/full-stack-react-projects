import { useQuery } from '@tanstack/react-query'
import { PostList } from './components/PostList.jsx'
import { CreatePost } from './components/CreatePost.jsx'
import { PostFilter } from './components/PostFilter.jsx'
import { PostSorting } from './components/PostSorting.jsx'
import { getPosts } from './api/posts.js'
import { useState } from 'react'

export function Blog() {
  const [filterType, setFilterType] = useState('author')
  const [author, setAuthor] = useState('')
  const [tag, setTag] = useState('')
  const currentValue = filterType === 'author' ? author : tag
  const handleValueChange = (newValue) => {
    if (filterType === 'author') {
      setAuthor(newValue)
    } else {
      setTag(newValue)
    }
  }
  const [sortBy, setSortBy] = useState('createdAt')
  const [sortOrder, setSortOrder] = useState('descending')
  const postsQuery = useQuery({
    queryKey: ['posts', { author, tag, sortBy, sortOrder }],
    queryFn: () => getPosts({ author, tag, sortBy, sortOrder }),
  })

  const posts = postsQuery.data ?? []
  return (
    <div style={{ padding: 8 }}>
      <CreatePost />
      <br />
      <hr />
      Filter by:
      <PostFilter
        filterType={filterType}
        onFilterTypeChange={(newType) => {
          setFilterType(newType), setAuthor(''), setTag('')
        }}
        value={currentValue}
        onChange={handleValueChange}
      />
      <br />
      <PostSorting
        fields={['createdAt', 'updatedAt']}
        value={sortBy}
        onChange={(value) => setSortBy(value)}
        orderValue={sortOrder}
        onOrderChange={(orderValue) => setSortOrder(orderValue)}
      />
      <hr />
      <PostList posts={posts} />
    </div>
  )
}
