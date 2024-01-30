import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { style_01 } from '../styles/style_01';
import { addCourseAction } from '../components/actions/CourseAction';

const CourseList = ({ Courses }) => {
  const dispatch = useDispatch();

  const onPressCourse = (course) => {
    dispatch(addCourseAction(course));
  };

  return (
    <View>
      <Text style={style_01.title}>Available Courses</Text>
      <View>
        {Courses.availableCourses.map((course, index) => (
          <TouchableOpacity
            key={index}
            style={style_01.courseItem}
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

export default connect(mapStateToProps)(CourseList);
