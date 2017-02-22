import React from 'react';

import {
    jsonServerRestClient,
    Admin,
    Resource
} from 'admin-on-rest';

// Tutorial compoments
import {PostList} from './posts';
import {UserList} from './users';

const App = () => (
    <Admin restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
        <Resource name="users" list={UserList}/>
        <Resource name="posts" list={PostList}/>
    </Admin>
);

export default App;