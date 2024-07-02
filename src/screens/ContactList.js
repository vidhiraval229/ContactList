import React, { useState } from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';

import ContactItem from '../components/ContactItem';
import SearchBar from '../components/SearchBar';
import mockData from '../components/mockData';

import COLORS from '../utils/color';
import STRINGS from '../utils/string';

const ContactList = () => {
  const [contacts, setContacts] = useState(mockData);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {filteredContacts.length > 0 ? (
        <FlatList
          data={filteredContacts}
          renderItem={({ item }) => <ContactItem contact={item} />}
          keyExtractor={item => item.id}
        />
      ) : (
        <EmptyContainer>
          <EmptyText>{STRINGS.NoContactFound}</EmptyText>
        </EmptyContainer>
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items:center;
`;

const EmptyText = styled.Text`
font-size:18px;
color:${COLORS.LightBlack}
`;

export default ContactList;
