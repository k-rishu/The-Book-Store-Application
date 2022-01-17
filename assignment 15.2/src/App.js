import React from 'react';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import BookListScreen  from './screens/BookListScreen';
import BookDetailsScreen from './screens/BookDetailsScreen';
import BookListInfoScreen from './screens/BookListInfoScreen';
import BookListInfoScreenClass from './screens/BookListInfoScreenClass';
import BookRecommendation from './screens/BookRecommendation';
import BookHome from './screens/BookHome';
import NotFound from './screens/NotFound';
import AuthorListInfoScreen from './screens/AuthorListInfoScreen';
import LoginScreen from './screens/LoginScreen';
import AddNewBook from './screens/AddNewBook';
const App=({})=>{

    return <div className="App">
               <AppHeader title="World Wide Books" />
               
               <div className='Screen'>
                    {/* <BookListInfoScreenClass/> */}
                    {/* <BookHome/>          */}
                    {/* <BookRecommendation/> */}
                    {/* <NotFound/> */}
                    <AuthorListInfoScreen/>
                    {/* <LoginScreen/> */}
                    {/* <AddNewBook/> */}
                    
               </div>
               <AppFooter />
            </div>
};

export default App;