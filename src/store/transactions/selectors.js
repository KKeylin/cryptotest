export const getUsersInstrumentsSequence = state => state.usersInstruments.instruments.dataSequence;
export const getUsersInstrumentsItem = item => state => state.usersInstruments.instruments.data[item];
export const getUsersInstrumentsItems = state => state.usersInstruments.instruments.data;
export const getUsersInstrumentsLoading = state => state.usersInstruments.instruments.loading;
export const getUsersInstrumentsItemsTotal = state => state.usersInstruments.instruments.pageable.totalElements;
