import React from "react";
import NewsPage from "./components/pages/news-page/news-page";
import {Provider} from "react-redux";
import {store} from "./store/store";
import styles from "./app.module.css";
import {Switch, Route} from "react-router-dom";
import NewsItemPage from "./components/pages/news-item-page/news-item-page";
import PageNotFound from "./components/pages/page-not-found/page-not-found";

const App = () => {
    return (
        <Provider store={store}>
            <main>
                <Switch>
                    <Route exact path="/">
                        <NewsPage/>
                    </Route>
                    <Route exact path="/item/:id">
                        <NewsItemPage/>
                    </Route>
                    <Route exact path="*">
                        <PageNotFound/>
                    </Route>
                </Switch>
            </main>
        </Provider>
    )
}

export default App;
