import React, { useEffect } from 'react';
import ExplorePresenter from './ExplorePresenter';

export default ({ getRooms, page, rooms, increasePage }) => {
  useEffect(() => {
    getRooms(1);
  }, []);
  useEffect(() => {
    getRooms(page);
  }, [page]);
  return <ExplorePresenter rooms={rooms} increasePage={increasePage} />;
};
