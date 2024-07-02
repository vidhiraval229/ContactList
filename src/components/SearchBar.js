import React from 'react';
import styled from 'styled-components/native';

import COLORS from '../utils/color';
import STRINGS from '../utils/string';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <SearchBarContainer>
      <StyledTextInput
        placeholder={STRINGS.SearchContact}
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="default"
        placeholderTextColor={COLORS.ThemeColor}
      />
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.View`
  padding: 10px;
  background-color: ${COLORS.OffWhite};
`;

const StyledTextInput = styled.TextInput`
  background-color: ${COLORS.White};
  padding: 10px;
  border-radius: 25px;
  border-width: 1px;
  border-color:${COLORS.ThemeColor};
  color:${COLORS.ThemeColor}

`;

export default SearchBar;
