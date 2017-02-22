import React from 'react';

import {
    jsonServerRestClient,
    Admin,
    Resource
} from 'admin-on-rest';

import { Delete } from 'admin-on-rest/lib/mui';

// Posts (list, edit and create) compoment
import {
    PostList,
    PostEdit,
    PostCreate
} from './posts';

// Users compoment (list atm)
import {UserList} from './users';

const App = () => (
    <Admin restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete}/>
        <Resource name="users" list={UserList}/>
    </Admin>
);

export default App;