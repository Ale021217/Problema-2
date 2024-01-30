import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import CourseList from './android/app/src/views/CourseList';
import SelectedCourseList from './android/app/src/views/SelectedCourseList';
import ConfigureStore from './android/app/src/components/Store';

const App = () => {
  const store = ConfigureStore();
  return (
    <Provider store={store}>
      <View>
        <CourseList />
        <SelectedCourseList />
      </View>
    </Provider>
  );
};

export default App;
