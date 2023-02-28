import { useSelector } from 'react-redux';
import { useState } from 'react';
import './categories.styles.scss';

function Categories() {
  const { categories } = useSelector((state) => state.categories);
  const [searchField, setSearchField] = useState('');
  const [filterResult, setFilterResult] = useState(categories);

  const filterHandler = () => {
    setFilterResult(filterResult.map((item) => item.country.includes(searchField)));
  };

  return (
    <div className="categories">
      <input type="text" value={searchField} onChange={(e) => setSearchField(e.target.value)} />
      <button type="button" onClick={filterHandler}>Filter</button>
    </div>
  );
}

export default Categories;
