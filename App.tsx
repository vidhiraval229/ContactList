import React from 'react';
import styled from 'styled-components/native';

import AppNavigator from './src/navigation/AppNavigation';

const App = () => {
  return (
    <MainContainer>
      <AppNavigator/>
    </MainContainer>
  );
};

const MainContainer = styled.SafeAreaView`
  flex: 1;
`;

export default App;
