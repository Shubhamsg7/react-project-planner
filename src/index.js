import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
//import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import firebase from 'firebase/app'
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase,  ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase';
import config from './config/config';



const store = createStore(rootReducer, 
  compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  reduxFirestore(config)
  //reactReduxFirebase(config, {useFirestoreForProfile:true, attachAuthIsReady: true})
  )
  );

  const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
  }

  const rrfProps = {
    firebase,
    config: rrfConfig, 
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
  }


  function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <div className="container center-align">Loading Screen...</div>;
        return children
}

  //store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
      <Provider store={store}>
         
         <ReactReduxFirebaseProvider {...rrfProps}>
         <AuthIsLoaded>
        <App />
        </AuthIsLoaded>
        </ReactReduxFirebaseProvider>
    
      </Provider>,
      document.getElementById('root')
    );
 // })


//registerServiceWorker();
//serviceWorker.unregister();


