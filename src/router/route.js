import Vue from 'vue';
import Router  from 'vue-router';
import Index from "../components/Index";
import Login from "../components/Login";
import Home from "../components/Home";
import CourseAll from "../components/CourseAll";
import CourseUnique from "../components/CourseUnique";
import CourseFree from "../components/CourseFree";
import Note from "../components/Note";
import Search from "../components/Search";
import CourseDetail from "../components/CourseDetail";
import Video from "../components/Video";
import Courseware from "../components/Courseware";
import Section from "../components/Section";





Vue.use(Router);
export default new Router({
  routes:[
    {
      path:'/',
      name:'index',
      component:Index,
      children:[
        {
          path:'',
          name:'home',
          component:Home
        },
        {
          path:'course_all',
          name:'course_all',
          component:CourseAll
        },
        {
          path:'course_unique',
          name:'course_unique',
          component:CourseUnique
        },
        {
          path:'course_free',
          name:'course_free',
          component:CourseFree
        },
        {
          path:'note',
          name:'note',
          component:Note
        },
        {
          path:'search',
          name:'search',
          component:Search
        },
        {
          path:'course_detail',
          name:'course_detail',
          component:CourseDetail
        }
      ]
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/section',
      name:'section',
      component:Section,
      children: [
        {
          path:'video',
          name:'video',
          component:Video
        },
        {
          path:'courseware',
          name:'courseware',
          component:Courseware
        }
      ]
    }
  ]
});
