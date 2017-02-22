import React from 'react';

import {
    jsonServerRestClient,
    Admin,
    Resource
} from 'admin-on-rest';

import { Delete } from 'admin-on-rest/lib/mui';

// Dashboard
import Dashboard from './Dashboard';

// Posts (list, edit and create) compoment
import {
    PostList,
    PostEdit,
    PostCreate
} from './posts';

// Users compoment (list atm)
import {UserList} from './users';

import PostIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';

const App = () => (
    <Admin restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')} dashboard={Dashboard}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} icon={PostIcon}/>
        <Resource name="users" list={UserList} icon={UserIcon}/>
    </Admin>
);

export default App;