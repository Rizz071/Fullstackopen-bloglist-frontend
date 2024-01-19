import ReactDOM from 'react-dom/client'
import App from './App'

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import notificationReducer from './reducers/notificationReducer'
import sessionUserReducer from './reducers/sessionUserReducer'
import usersListReducer from './reducers/usersListReducer'
import blogsReducer from './reducers/blogsReducer'


const store = configureStore({
    reducer: {
        notification: notificationReducer,
        sessionUser: sessionUserReducer,
        usersList: usersListReducer,
        blogs: blogsReducer
    }
})


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)