# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useInsertUser, useUpdateUser, useDeleteUser, useGetUser, useListUsers, useInsertSubject, useUpdateSubject, useDeleteSubject, useGetSubject, useListSubjects } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useInsertUser();

const { data, isPending, isSuccess, isError, error } = useUpdateUser();

const { data, isPending, isSuccess, isError, error } = useDeleteUser();

const { data, isPending, isSuccess, isError, error } = useGetUser();

const { data, isPending, isSuccess, isError, error } = useListUsers();

const { data, isPending, isSuccess, isError, error } = useInsertSubject();

const { data, isPending, isSuccess, isError, error } = useUpdateSubject(updateSubjectVars);

const { data, isPending, isSuccess, isError, error } = useDeleteSubject(deleteSubjectVars);

const { data, isPending, isSuccess, isError, error } = useGetSubject(getSubjectVars);

const { data, isPending, isSuccess, isError, error } = useListSubjects();

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { insertUser, updateUser, deleteUser, getUser, listUsers, insertSubject, updateSubject, deleteSubject, getSubject, listSubjects } from '@dataconnect/generated';


// Operation InsertUser: 
const { data } = await InsertUser(dataConnect);

// Operation UpdateUser: 
const { data } = await UpdateUser(dataConnect);

// Operation DeleteUser: 
const { data } = await DeleteUser(dataConnect);

// Operation GetUser: 
const { data } = await GetUser(dataConnect);

// Operation ListUsers: 
const { data } = await ListUsers(dataConnect);

// Operation InsertSubject: 
const { data } = await InsertSubject(dataConnect);

// Operation UpdateSubject:  For variables, look at type UpdateSubjectVars in ../index.d.ts
const { data } = await UpdateSubject(dataConnect, updateSubjectVars);

// Operation DeleteSubject:  For variables, look at type DeleteSubjectVars in ../index.d.ts
const { data } = await DeleteSubject(dataConnect, deleteSubjectVars);

// Operation GetSubject:  For variables, look at type GetSubjectVars in ../index.d.ts
const { data } = await GetSubject(dataConnect, getSubjectVars);

// Operation ListSubjects: 
const { data } = await ListSubjects(dataConnect);


```