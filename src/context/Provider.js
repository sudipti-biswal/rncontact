import React, {createContext, useReducer} from 'react';
import authInitialState from './initialStates/authInitialState';
import contactsInitialState from './initialStates/contactsInitialState';
import contacts from './reducers/contacts';
import auth from './reducers/auth';
 export const GlobalContext = createContext({});
const GlobalProvider = ({children}) => {
    const [authState,authDispatch]=useReducer(auth,authInitialState)
    const [contactState,contactsDispatch]=useReducer(contacts,contactsInitialState)

  return <GlobalContext.Provider value={{authState,authDispatch,contactState,contactsDispatch}}>{children}</GlobalContext.Provider>;
};
export default GlobalProvider;
