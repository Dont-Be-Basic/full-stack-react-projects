import PropTypes from 'prop-types'

export function PostFilter({
  filterType,
  onFilterTypeChange,
  value,
  onChange,
}) {
  const labelText = filterType === 'author' ? 'author' : 'Tag'

  return (
    <div>
      <select
        id='filter-type'
        value={filterType}
        onChange={(e) => onFilterTypeChange(e.target.value)}
      >
        <option value='author'>Author</option>
        <option value='tag'>Tag</option>
      </select>
      <label htmlFor='filter-input'>{labelText}: </label>
      <input
        type='text'
        name='filter-input'
        id='filter-input'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

PostFilter.propTypes = {
  filterType: PropTypes.oneOf(['author', 'tag']).isRequired,
  onFilterTypeChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
