import React from 'react';
import styled from 'styled-components/native';

import COLORS from '../utils/color';

const ContactItem = ({ contact }) => {
  return (
    <ContactItemContainer>
      <ProfileImage
        source={{ uri: contact.image }}
        onError={(error) => console.log('Image load error:', error.nativeEvent.error)}
      />
      <TextContainer>
        <ContactName>{contact.name}</ContactName>
        <ContactDescription>{contact.description}</ContactDescription>
      </TextContainer>
    </ContactItemContainer>
  );
};

const ContactItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color:${COLORS.LightGray};
`;

const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${COLORS.Gray};
`;

const TextContainer = styled.View`
  margin-left: 10px;
  justify-content: center;
`;

const ContactName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color:${COLORS.Black}
`;

const ContactDescription = styled.Text`
  font-size: 14px;
  color: ${COLORS.ThemeColor};
`;

export default ContactItem;
