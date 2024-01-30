import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { style_01 } from '../styles/style_01';
import { removeCourseAction } from '../components/actions/CourseAction';

const SelectedCourseList = ({ Courses }) => {
  const dispatch = useDispatch();

  const onPressCourse = (course) => {
    dispatch(removeCourseAction(course));
  };

  return (
    <View>
      <Text style={style_01.title}>Selected Courses</Text>
      <View>
        {Courses.selectedCourses.map((course, index) => (
          <TouchableOpacity
            key={index}
            style={style_01.selectedCourseItem}
            onPress={() => onPressCourse(course)}>
            <Text>{course}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const mapStateToProps = ({ Courses }) => {
  return { Courses };
};

export default connect(mapStateToProps)(SelectedCourseList);
