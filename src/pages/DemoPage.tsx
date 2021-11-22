import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from 'rootReducer';

import { fetchDemoLogin } from 'models/demo';

import Header from 'sections/Header';
import Intro from 'sections/Intro';

const menuFields = [
  {
    id:    '1',
    title: 'title',
    url:   'url',
  },
  {
    id:    '2',
    title: 'title',
    url:   'url',
  },
  {
    id:    '3',
    title: 'title',
    url:   'url',
  },
  {
    id:    '4',
    title: 'title',
    url:   'url',
  },
];

const TeacherSubmit = () => {
  const dispatcher = useDispatch();

  const { loading } = useSelector((state: TRootState) => state.ui);

  const demoAction = () => {
    dispatcher(
      fetchDemoLogin({
        email:    'demo-email@gmail.com',
        password: 'demopass',
      })
    );
  };

  return (
    <>
      <Header menu={menuFields} />
      <Intro submit={demoAction} />

      {loading && 'loading...'}
    </>
  );
};
export default TeacherSubmit;
