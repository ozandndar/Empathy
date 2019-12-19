import React, { Fragment } from 'react';
import { Router, Stack, Scene, Drawer, Actions } from 'react-native-router-flux';

// importing pages
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { Menu } from './components/Menu';
import Home from './pages/empathy/Home';
import About from './pages/empathy/About';
import Revards from './pages/empathy/Revards';
import SubTopic from './pages/empathy/SubTopics';
import Lessons from './pages/empathy/Lessons';

const Index = () => {
  return (
    <Router>
      <Scene hideNavBar>
        <Stack key="root">
          <Scene key="login" component={Login} hideNavBar="true" />
          <Scene key="register" component={Register} hideNavBar="true" />
          <Scene key="home" component={Home} hideNavBar="true" />
          <Scene key="about" component={About} hideNavBar="true" />
          <Scene key="revards" component={Revards} hideNavBar="true" />
          <Scene key="subtopic" component={SubTopic} />
          <Scene key="lessons" component={Lessons} />
        </Stack>
      </Scene>
    </Router>
  );
};

export default Index;
