import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import FrontPage from './page/front-page';
import TagPage from './page/tag-page';
import ArticlePage from './page/article-page';

// const TagPage = lazy(() => import('./page/tag-page'));

export default (
  <Suspense fallback={() => { }}>
    <Switch>
      <Route exact path='/' component={FrontPage} />
      <Route exact path='/frontpage' component={FrontPage} />
      <Route exact path='/tag' component={TagPage} />
      <Route exact path='/article/:id' component={ArticlePage} />
    </Switch>
  </Suspense>
);
