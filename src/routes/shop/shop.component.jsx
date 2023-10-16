import { Routes, Route } from 'react-router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCategoriesStartAsync } from '../../store/categories/category.action';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStartAsync());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
