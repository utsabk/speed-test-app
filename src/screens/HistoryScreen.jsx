import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import HistoryListItem from '../components/HistoryListItem';
import { removeFromHistoryList } from '../store/actions/actions';

const HistoryScreen = () => {
  const dispatch = useDispatch();

  const { results } = useSelector((state) => state.result);

  const handleRemovePress = (activity) => {
    dispatch(removeFromHistoryList(activity));
  };

  console.log('Speed inside history screen', results);
  const renderItem = ({ item }) => (
    <HistoryListItem
      upload={item.upload}
      download={item.download}
      handleIconPress={() => handleRemovePress(item)}
    />
  );

  return (
    <SafeAreaView>
      {results && (
        <FlatList
          data={results}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </SafeAreaView>
  );
};

export default HistoryScreen;
