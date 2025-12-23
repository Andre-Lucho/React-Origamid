import { Routes, Route, Navigate } from 'react-router-dom';
import UserHeader from './UserHeader';
import Feed from '../Feed';
import UserMetrics from './UserMetrics';
import UserPhotoPost from './UserPhotoPost';

const User = () => {
  return (
    <section>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/photopost" element={<UserPhotoPost />} />
        <Route path="/metrics" element={<UserMetrics />} />
      </Routes>
    </section>
  );
};

export default User;
