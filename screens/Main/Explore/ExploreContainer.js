import React, { useEffect } from 'react';
import ExplorePresenter from './ExplorePresenter';

export default ({ getRooms, page, rooms }) => {
  useEffect(() => {
    getRooms();
  }, []);
  return <ExplorePresenter rooms={rooms} />;
};
