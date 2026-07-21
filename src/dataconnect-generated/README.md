# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetUser*](#getuser)
  - [*ListUsers*](#listusers)
  - [*GetSubject*](#getsubject)
  - [*ListSubjects*](#listsubjects)
  - [*GetLesson*](#getlesson)
  - [*ListLessons*](#listlessons)
  - [*GetStudySession*](#getstudysession)
  - [*ListStudySessions*](#liststudysessions)
  - [*GetResource*](#getresource)
  - [*ListResources*](#listresources)
- [**Mutations**](#mutations)
  - [*InsertUser*](#insertuser)
  - [*UpdateUser*](#updateuser)
  - [*DeleteUser*](#deleteuser)
  - [*InsertSubject*](#insertsubject)
  - [*UpdateSubject*](#updatesubject)
  - [*DeleteSubject*](#deletesubject)
  - [*InsertLesson*](#insertlesson)
  - [*UpdateLesson*](#updatelesson)
  - [*DeleteLesson*](#deletelesson)
  - [*InsertStudySession*](#insertstudysession)
  - [*UpdateStudySession*](#updatestudysession)
  - [*DeleteStudySession*](#deletestudysession)
  - [*InsertResource*](#insertresource)
  - [*UpdateResource*](#updateresource)
  - [*DeleteResource*](#deleteresource)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetUser
You can execute the `GetUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUser(options?: ExecuteQueryOptions): QueryPromise<GetUserData, undefined>;

interface GetUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserData, undefined>;
}
export const getUserRef: GetUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUser(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetUserData, undefined>;

interface GetUserRef {
  ...
  (dc: DataConnect): QueryRef<GetUserData, undefined>;
}
export const getUserRef: GetUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserRef:
```typescript
const name = getUserRef.operationName;
console.log(name);
```

### Variables
The `GetUser` query has no variables.
### Return Type
Recall that executing the `GetUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserData {
  user?: {
    email: string;
    displayName: string;
  };
}
```
### Using `GetUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUser } from '@dataconnect/generated';


// Call the `getUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUser(dataConnect);

console.log(data.user);

// Or, you can use the `Promise` API.
getUser().then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserRef } from '@dataconnect/generated';


// Call the `getUserRef()` function to get a reference to the query.
const ref = getUserRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

## ListUsers
You can execute the `ListUsers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listUsers(options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface ListUsersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUsersData, undefined>;
}
export const listUsersRef: ListUsersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listUsers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface ListUsersRef {
  ...
  (dc: DataConnect): QueryRef<ListUsersData, undefined>;
}
export const listUsersRef: ListUsersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listUsersRef:
```typescript
const name = listUsersRef.operationName;
console.log(name);
```

### Variables
The `ListUsers` query has no variables.
### Return Type
Recall that executing the `ListUsers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListUsersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListUsersData {
  users: ({
    id: UUIDString;
    displayName: string;
  } & User_Key)[];
}
```
### Using `ListUsers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listUsers } from '@dataconnect/generated';


// Call the `listUsers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listUsers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listUsers(dataConnect);

console.log(data.users);

// Or, you can use the `Promise` API.
listUsers().then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

### Using `ListUsers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listUsersRef } from '@dataconnect/generated';


// Call the `listUsersRef()` function to get a reference to the query.
const ref = listUsersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listUsersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.users);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

## GetSubject
You can execute the `GetSubject` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getSubject(vars: GetSubjectVariables, options?: ExecuteQueryOptions): QueryPromise<GetSubjectData, GetSubjectVariables>;

interface GetSubjectRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetSubjectVariables): QueryRef<GetSubjectData, GetSubjectVariables>;
}
export const getSubjectRef: GetSubjectRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getSubject(dc: DataConnect, vars: GetSubjectVariables, options?: ExecuteQueryOptions): QueryPromise<GetSubjectData, GetSubjectVariables>;

interface GetSubjectRef {
  ...
  (dc: DataConnect, vars: GetSubjectVariables): QueryRef<GetSubjectData, GetSubjectVariables>;
}
export const getSubjectRef: GetSubjectRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getSubjectRef:
```typescript
const name = getSubjectRef.operationName;
console.log(name);
```

### Variables
The `GetSubject` query requires an argument of type `GetSubjectVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetSubjectVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetSubject` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetSubjectData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetSubjectData {
  subject?: {
    title: string;
    createdAt: TimestampString;
  };
}
```
### Using `GetSubject`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getSubject, GetSubjectVariables } from '@dataconnect/generated';

// The `GetSubject` query requires an argument of type `GetSubjectVariables`:
const getSubjectVars: GetSubjectVariables = {
  id: ..., 
};

// Call the `getSubject()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getSubject(getSubjectVars);
// Variables can be defined inline as well.
const { data } = await getSubject({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getSubject(dataConnect, getSubjectVars);

console.log(data.subject);

// Or, you can use the `Promise` API.
getSubject(getSubjectVars).then((response) => {
  const data = response.data;
  console.log(data.subject);
});
```

### Using `GetSubject`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getSubjectRef, GetSubjectVariables } from '@dataconnect/generated';

// The `GetSubject` query requires an argument of type `GetSubjectVariables`:
const getSubjectVars: GetSubjectVariables = {
  id: ..., 
};

// Call the `getSubjectRef()` function to get a reference to the query.
const ref = getSubjectRef(getSubjectVars);
// Variables can be defined inline as well.
const ref = getSubjectRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getSubjectRef(dataConnect, getSubjectVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.subject);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.subject);
});
```

## ListSubjects
You can execute the `ListSubjects` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listSubjects(options?: ExecuteQueryOptions): QueryPromise<ListSubjectsData, undefined>;

interface ListSubjectsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListSubjectsData, undefined>;
}
export const listSubjectsRef: ListSubjectsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listSubjects(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListSubjectsData, undefined>;

interface ListSubjectsRef {
  ...
  (dc: DataConnect): QueryRef<ListSubjectsData, undefined>;
}
export const listSubjectsRef: ListSubjectsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listSubjectsRef:
```typescript
const name = listSubjectsRef.operationName;
console.log(name);
```

### Variables
The `ListSubjects` query has no variables.
### Return Type
Recall that executing the `ListSubjects` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListSubjectsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListSubjectsData {
  subjects: ({
    id: UUIDString;
    title: string;
  } & Subject_Key)[];
}
```
### Using `ListSubjects`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listSubjects } from '@dataconnect/generated';


// Call the `listSubjects()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listSubjects();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listSubjects(dataConnect);

console.log(data.subjects);

// Or, you can use the `Promise` API.
listSubjects().then((response) => {
  const data = response.data;
  console.log(data.subjects);
});
```

### Using `ListSubjects`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listSubjectsRef } from '@dataconnect/generated';


// Call the `listSubjectsRef()` function to get a reference to the query.
const ref = listSubjectsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listSubjectsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.subjects);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.subjects);
});
```

## GetLesson
You can execute the `GetLesson` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getLesson(vars: GetLessonVariables, options?: ExecuteQueryOptions): QueryPromise<GetLessonData, GetLessonVariables>;

interface GetLessonRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetLessonVariables): QueryRef<GetLessonData, GetLessonVariables>;
}
export const getLessonRef: GetLessonRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getLesson(dc: DataConnect, vars: GetLessonVariables, options?: ExecuteQueryOptions): QueryPromise<GetLessonData, GetLessonVariables>;

interface GetLessonRef {
  ...
  (dc: DataConnect, vars: GetLessonVariables): QueryRef<GetLessonData, GetLessonVariables>;
}
export const getLessonRef: GetLessonRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getLessonRef:
```typescript
const name = getLessonRef.operationName;
console.log(name);
```

### Variables
The `GetLesson` query requires an argument of type `GetLessonVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetLessonVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetLesson` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetLessonData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetLessonData {
  lesson?: {
    title: string;
    isCompleted: boolean;
  };
}
```
### Using `GetLesson`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getLesson, GetLessonVariables } from '@dataconnect/generated';

// The `GetLesson` query requires an argument of type `GetLessonVariables`:
const getLessonVars: GetLessonVariables = {
  id: ..., 
};

// Call the `getLesson()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getLesson(getLessonVars);
// Variables can be defined inline as well.
const { data } = await getLesson({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getLesson(dataConnect, getLessonVars);

console.log(data.lesson);

// Or, you can use the `Promise` API.
getLesson(getLessonVars).then((response) => {
  const data = response.data;
  console.log(data.lesson);
});
```

### Using `GetLesson`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getLessonRef, GetLessonVariables } from '@dataconnect/generated';

// The `GetLesson` query requires an argument of type `GetLessonVariables`:
const getLessonVars: GetLessonVariables = {
  id: ..., 
};

// Call the `getLessonRef()` function to get a reference to the query.
const ref = getLessonRef(getLessonVars);
// Variables can be defined inline as well.
const ref = getLessonRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getLessonRef(dataConnect, getLessonVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.lesson);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.lesson);
});
```

## ListLessons
You can execute the `ListLessons` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listLessons(options?: ExecuteQueryOptions): QueryPromise<ListLessonsData, undefined>;

interface ListLessonsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListLessonsData, undefined>;
}
export const listLessonsRef: ListLessonsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listLessons(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListLessonsData, undefined>;

interface ListLessonsRef {
  ...
  (dc: DataConnect): QueryRef<ListLessonsData, undefined>;
}
export const listLessonsRef: ListLessonsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listLessonsRef:
```typescript
const name = listLessonsRef.operationName;
console.log(name);
```

### Variables
The `ListLessons` query has no variables.
### Return Type
Recall that executing the `ListLessons` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListLessonsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListLessonsData {
  lessons: ({
    id: UUIDString;
    title: string;
    subject: {
      title: string;
    };
  } & Lesson_Key)[];
}
```
### Using `ListLessons`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listLessons } from '@dataconnect/generated';


// Call the `listLessons()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listLessons();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listLessons(dataConnect);

console.log(data.lessons);

// Or, you can use the `Promise` API.
listLessons().then((response) => {
  const data = response.data;
  console.log(data.lessons);
});
```

### Using `ListLessons`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listLessonsRef } from '@dataconnect/generated';


// Call the `listLessonsRef()` function to get a reference to the query.
const ref = listLessonsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listLessonsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.lessons);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.lessons);
});
```

## GetStudySession
You can execute the `GetStudySession` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getStudySession(vars: GetStudySessionVariables, options?: ExecuteQueryOptions): QueryPromise<GetStudySessionData, GetStudySessionVariables>;

interface GetStudySessionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetStudySessionVariables): QueryRef<GetStudySessionData, GetStudySessionVariables>;
}
export const getStudySessionRef: GetStudySessionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getStudySession(dc: DataConnect, vars: GetStudySessionVariables, options?: ExecuteQueryOptions): QueryPromise<GetStudySessionData, GetStudySessionVariables>;

interface GetStudySessionRef {
  ...
  (dc: DataConnect, vars: GetStudySessionVariables): QueryRef<GetStudySessionData, GetStudySessionVariables>;
}
export const getStudySessionRef: GetStudySessionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getStudySessionRef:
```typescript
const name = getStudySessionRef.operationName;
console.log(name);
```

### Variables
The `GetStudySession` query requires an argument of type `GetStudySessionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetStudySessionVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetStudySession` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetStudySessionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetStudySessionData {
  studySession?: {
    durationMinutes: number;
    notes?: string | null;
  };
}
```
### Using `GetStudySession`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getStudySession, GetStudySessionVariables } from '@dataconnect/generated';

// The `GetStudySession` query requires an argument of type `GetStudySessionVariables`:
const getStudySessionVars: GetStudySessionVariables = {
  id: ..., 
};

// Call the `getStudySession()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getStudySession(getStudySessionVars);
// Variables can be defined inline as well.
const { data } = await getStudySession({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getStudySession(dataConnect, getStudySessionVars);

console.log(data.studySession);

// Or, you can use the `Promise` API.
getStudySession(getStudySessionVars).then((response) => {
  const data = response.data;
  console.log(data.studySession);
});
```

### Using `GetStudySession`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getStudySessionRef, GetStudySessionVariables } from '@dataconnect/generated';

// The `GetStudySession` query requires an argument of type `GetStudySessionVariables`:
const getStudySessionVars: GetStudySessionVariables = {
  id: ..., 
};

// Call the `getStudySessionRef()` function to get a reference to the query.
const ref = getStudySessionRef(getStudySessionVars);
// Variables can be defined inline as well.
const ref = getStudySessionRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getStudySessionRef(dataConnect, getStudySessionVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.studySession);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.studySession);
});
```

## ListStudySessions
You can execute the `ListStudySessions` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listStudySessions(options?: ExecuteQueryOptions): QueryPromise<ListStudySessionsData, undefined>;

interface ListStudySessionsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListStudySessionsData, undefined>;
}
export const listStudySessionsRef: ListStudySessionsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listStudySessions(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListStudySessionsData, undefined>;

interface ListStudySessionsRef {
  ...
  (dc: DataConnect): QueryRef<ListStudySessionsData, undefined>;
}
export const listStudySessionsRef: ListStudySessionsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listStudySessionsRef:
```typescript
const name = listStudySessionsRef.operationName;
console.log(name);
```

### Variables
The `ListStudySessions` query has no variables.
### Return Type
Recall that executing the `ListStudySessions` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListStudySessionsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListStudySessionsData {
  studySessions: ({
    id: UUIDString;
    durationMinutes: number;
  } & StudySession_Key)[];
}
```
### Using `ListStudySessions`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listStudySessions } from '@dataconnect/generated';


// Call the `listStudySessions()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listStudySessions();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listStudySessions(dataConnect);

console.log(data.studySessions);

// Or, you can use the `Promise` API.
listStudySessions().then((response) => {
  const data = response.data;
  console.log(data.studySessions);
});
```

### Using `ListStudySessions`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listStudySessionsRef } from '@dataconnect/generated';


// Call the `listStudySessionsRef()` function to get a reference to the query.
const ref = listStudySessionsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listStudySessionsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.studySessions);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.studySessions);
});
```

## GetResource
You can execute the `GetResource` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getResource(vars: GetResourceVariables, options?: ExecuteQueryOptions): QueryPromise<GetResourceData, GetResourceVariables>;

interface GetResourceRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetResourceVariables): QueryRef<GetResourceData, GetResourceVariables>;
}
export const getResourceRef: GetResourceRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getResource(dc: DataConnect, vars: GetResourceVariables, options?: ExecuteQueryOptions): QueryPromise<GetResourceData, GetResourceVariables>;

interface GetResourceRef {
  ...
  (dc: DataConnect, vars: GetResourceVariables): QueryRef<GetResourceData, GetResourceVariables>;
}
export const getResourceRef: GetResourceRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getResourceRef:
```typescript
const name = getResourceRef.operationName;
console.log(name);
```

### Variables
The `GetResource` query requires an argument of type `GetResourceVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetResourceVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetResource` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetResourceData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetResourceData {
  resource?: {
    url: string;
    title?: string | null;
  };
}
```
### Using `GetResource`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getResource, GetResourceVariables } from '@dataconnect/generated';

// The `GetResource` query requires an argument of type `GetResourceVariables`:
const getResourceVars: GetResourceVariables = {
  id: ..., 
};

// Call the `getResource()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getResource(getResourceVars);
// Variables can be defined inline as well.
const { data } = await getResource({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getResource(dataConnect, getResourceVars);

console.log(data.resource);

// Or, you can use the `Promise` API.
getResource(getResourceVars).then((response) => {
  const data = response.data;
  console.log(data.resource);
});
```

### Using `GetResource`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getResourceRef, GetResourceVariables } from '@dataconnect/generated';

// The `GetResource` query requires an argument of type `GetResourceVariables`:
const getResourceVars: GetResourceVariables = {
  id: ..., 
};

// Call the `getResourceRef()` function to get a reference to the query.
const ref = getResourceRef(getResourceVars);
// Variables can be defined inline as well.
const ref = getResourceRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getResourceRef(dataConnect, getResourceVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.resource);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.resource);
});
```

## ListResources
You can execute the `ListResources` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listResources(options?: ExecuteQueryOptions): QueryPromise<ListResourcesData, undefined>;

interface ListResourcesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListResourcesData, undefined>;
}
export const listResourcesRef: ListResourcesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listResources(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListResourcesData, undefined>;

interface ListResourcesRef {
  ...
  (dc: DataConnect): QueryRef<ListResourcesData, undefined>;
}
export const listResourcesRef: ListResourcesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listResourcesRef:
```typescript
const name = listResourcesRef.operationName;
console.log(name);
```

### Variables
The `ListResources` query has no variables.
### Return Type
Recall that executing the `ListResources` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListResourcesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListResourcesData {
  resources: ({
    id: UUIDString;
    url: string;
  } & Resource_Key)[];
}
```
### Using `ListResources`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listResources } from '@dataconnect/generated';


// Call the `listResources()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listResources();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listResources(dataConnect);

console.log(data.resources);

// Or, you can use the `Promise` API.
listResources().then((response) => {
  const data = response.data;
  console.log(data.resources);
});
```

### Using `ListResources`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listResourcesRef } from '@dataconnect/generated';


// Call the `listResourcesRef()` function to get a reference to the query.
const ref = listResourcesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listResourcesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.resources);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.resources);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## InsertUser
You can execute the `InsertUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
insertUser(): MutationPromise<InsertUserData, undefined>;

interface InsertUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<InsertUserData, undefined>;
}
export const insertUserRef: InsertUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
insertUser(dc: DataConnect): MutationPromise<InsertUserData, undefined>;

interface InsertUserRef {
  ...
  (dc: DataConnect): MutationRef<InsertUserData, undefined>;
}
export const insertUserRef: InsertUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the insertUserRef:
```typescript
const name = insertUserRef.operationName;
console.log(name);
```

### Variables
The `InsertUser` mutation has no variables.
### Return Type
Recall that executing the `InsertUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `InsertUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface InsertUserData {
  user_insert: User_Key;
}
```
### Using `InsertUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, insertUser } from '@dataconnect/generated';


// Call the `insertUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await insertUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await insertUser(dataConnect);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
insertUser().then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `InsertUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, insertUserRef } from '@dataconnect/generated';


// Call the `insertUserRef()` function to get a reference to the mutation.
const ref = insertUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = insertUserRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## UpdateUser
You can execute the `UpdateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateUser(): MutationPromise<UpdateUserData, undefined>;

interface UpdateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateUserData, undefined>;
}
export const updateUserRef: UpdateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateUser(dc: DataConnect): MutationPromise<UpdateUserData, undefined>;

interface UpdateUserRef {
  ...
  (dc: DataConnect): MutationRef<UpdateUserData, undefined>;
}
export const updateUserRef: UpdateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateUserRef:
```typescript
const name = updateUserRef.operationName;
console.log(name);
```

### Variables
The `UpdateUser` mutation has no variables.
### Return Type
Recall that executing the `UpdateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateUserData {
  user_update?: User_Key | null;
}
```
### Using `UpdateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateUser } from '@dataconnect/generated';


// Call the `updateUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateUser(dataConnect);

console.log(data.user_update);

// Or, you can use the `Promise` API.
updateUser().then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `UpdateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateUserRef } from '@dataconnect/generated';


// Call the `updateUserRef()` function to get a reference to the mutation.
const ref = updateUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateUserRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

## DeleteUser
You can execute the `DeleteUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteUser(): MutationPromise<DeleteUserData, undefined>;

interface DeleteUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteUserData, undefined>;
}
export const deleteUserRef: DeleteUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteUser(dc: DataConnect): MutationPromise<DeleteUserData, undefined>;

interface DeleteUserRef {
  ...
  (dc: DataConnect): MutationRef<DeleteUserData, undefined>;
}
export const deleteUserRef: DeleteUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteUserRef:
```typescript
const name = deleteUserRef.operationName;
console.log(name);
```

### Variables
The `DeleteUser` mutation has no variables.
### Return Type
Recall that executing the `DeleteUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteUserData {
  user_delete?: User_Key | null;
}
```
### Using `DeleteUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteUser } from '@dataconnect/generated';


// Call the `deleteUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteUser(dataConnect);

console.log(data.user_delete);

// Or, you can use the `Promise` API.
deleteUser().then((response) => {
  const data = response.data;
  console.log(data.user_delete);
});
```

### Using `DeleteUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteUserRef } from '@dataconnect/generated';


// Call the `deleteUserRef()` function to get a reference to the mutation.
const ref = deleteUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteUserRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_delete);
});
```

## InsertSubject
You can execute the `InsertSubject` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
insertSubject(): MutationPromise<InsertSubjectData, undefined>;

interface InsertSubjectRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<InsertSubjectData, undefined>;
}
export const insertSubjectRef: InsertSubjectRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
insertSubject(dc: DataConnect): MutationPromise<InsertSubjectData, undefined>;

interface InsertSubjectRef {
  ...
  (dc: DataConnect): MutationRef<InsertSubjectData, undefined>;
}
export const insertSubjectRef: InsertSubjectRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the insertSubjectRef:
```typescript
const name = insertSubjectRef.operationName;
console.log(name);
```

### Variables
The `InsertSubject` mutation has no variables.
### Return Type
Recall that executing the `InsertSubject` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `InsertSubjectData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface InsertSubjectData {
  subject_insert: Subject_Key;
}
```
### Using `InsertSubject`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, insertSubject } from '@dataconnect/generated';


// Call the `insertSubject()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await insertSubject();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await insertSubject(dataConnect);

console.log(data.subject_insert);

// Or, you can use the `Promise` API.
insertSubject().then((response) => {
  const data = response.data;
  console.log(data.subject_insert);
});
```

### Using `InsertSubject`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, insertSubjectRef } from '@dataconnect/generated';


// Call the `insertSubjectRef()` function to get a reference to the mutation.
const ref = insertSubjectRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = insertSubjectRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.subject_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.subject_insert);
});
```

## UpdateSubject
You can execute the `UpdateSubject` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateSubject(vars: UpdateSubjectVariables): MutationPromise<UpdateSubjectData, UpdateSubjectVariables>;

interface UpdateSubjectRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateSubjectVariables): MutationRef<UpdateSubjectData, UpdateSubjectVariables>;
}
export const updateSubjectRef: UpdateSubjectRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateSubject(dc: DataConnect, vars: UpdateSubjectVariables): MutationPromise<UpdateSubjectData, UpdateSubjectVariables>;

interface UpdateSubjectRef {
  ...
  (dc: DataConnect, vars: UpdateSubjectVariables): MutationRef<UpdateSubjectData, UpdateSubjectVariables>;
}
export const updateSubjectRef: UpdateSubjectRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateSubjectRef:
```typescript
const name = updateSubjectRef.operationName;
console.log(name);
```

### Variables
The `UpdateSubject` mutation requires an argument of type `UpdateSubjectVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateSubjectVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `UpdateSubject` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateSubjectData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateSubjectData {
  subject_update?: Subject_Key | null;
}
```
### Using `UpdateSubject`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateSubject, UpdateSubjectVariables } from '@dataconnect/generated';

// The `UpdateSubject` mutation requires an argument of type `UpdateSubjectVariables`:
const updateSubjectVars: UpdateSubjectVariables = {
  id: ..., 
};

// Call the `updateSubject()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateSubject(updateSubjectVars);
// Variables can be defined inline as well.
const { data } = await updateSubject({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateSubject(dataConnect, updateSubjectVars);

console.log(data.subject_update);

// Or, you can use the `Promise` API.
updateSubject(updateSubjectVars).then((response) => {
  const data = response.data;
  console.log(data.subject_update);
});
```

### Using `UpdateSubject`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateSubjectRef, UpdateSubjectVariables } from '@dataconnect/generated';

// The `UpdateSubject` mutation requires an argument of type `UpdateSubjectVariables`:
const updateSubjectVars: UpdateSubjectVariables = {
  id: ..., 
};

// Call the `updateSubjectRef()` function to get a reference to the mutation.
const ref = updateSubjectRef(updateSubjectVars);
// Variables can be defined inline as well.
const ref = updateSubjectRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateSubjectRef(dataConnect, updateSubjectVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.subject_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.subject_update);
});
```

## DeleteSubject
You can execute the `DeleteSubject` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteSubject(vars: DeleteSubjectVariables): MutationPromise<DeleteSubjectData, DeleteSubjectVariables>;

interface DeleteSubjectRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteSubjectVariables): MutationRef<DeleteSubjectData, DeleteSubjectVariables>;
}
export const deleteSubjectRef: DeleteSubjectRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteSubject(dc: DataConnect, vars: DeleteSubjectVariables): MutationPromise<DeleteSubjectData, DeleteSubjectVariables>;

interface DeleteSubjectRef {
  ...
  (dc: DataConnect, vars: DeleteSubjectVariables): MutationRef<DeleteSubjectData, DeleteSubjectVariables>;
}
export const deleteSubjectRef: DeleteSubjectRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteSubjectRef:
```typescript
const name = deleteSubjectRef.operationName;
console.log(name);
```

### Variables
The `DeleteSubject` mutation requires an argument of type `DeleteSubjectVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteSubjectVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteSubject` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteSubjectData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteSubjectData {
  subject_delete?: Subject_Key | null;
}
```
### Using `DeleteSubject`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteSubject, DeleteSubjectVariables } from '@dataconnect/generated';

// The `DeleteSubject` mutation requires an argument of type `DeleteSubjectVariables`:
const deleteSubjectVars: DeleteSubjectVariables = {
  id: ..., 
};

// Call the `deleteSubject()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteSubject(deleteSubjectVars);
// Variables can be defined inline as well.
const { data } = await deleteSubject({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteSubject(dataConnect, deleteSubjectVars);

console.log(data.subject_delete);

// Or, you can use the `Promise` API.
deleteSubject(deleteSubjectVars).then((response) => {
  const data = response.data;
  console.log(data.subject_delete);
});
```

### Using `DeleteSubject`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteSubjectRef, DeleteSubjectVariables } from '@dataconnect/generated';

// The `DeleteSubject` mutation requires an argument of type `DeleteSubjectVariables`:
const deleteSubjectVars: DeleteSubjectVariables = {
  id: ..., 
};

// Call the `deleteSubjectRef()` function to get a reference to the mutation.
const ref = deleteSubjectRef(deleteSubjectVars);
// Variables can be defined inline as well.
const ref = deleteSubjectRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteSubjectRef(dataConnect, deleteSubjectVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.subject_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.subject_delete);
});
```

## InsertLesson
You can execute the `InsertLesson` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
insertLesson(): MutationPromise<InsertLessonData, undefined>;

interface InsertLessonRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<InsertLessonData, undefined>;
}
export const insertLessonRef: InsertLessonRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
insertLesson(dc: DataConnect): MutationPromise<InsertLessonData, undefined>;

interface InsertLessonRef {
  ...
  (dc: DataConnect): MutationRef<InsertLessonData, undefined>;
}
export const insertLessonRef: InsertLessonRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the insertLessonRef:
```typescript
const name = insertLessonRef.operationName;
console.log(name);
```

### Variables
The `InsertLesson` mutation has no variables.
### Return Type
Recall that executing the `InsertLesson` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `InsertLessonData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface InsertLessonData {
  lesson_insert: Lesson_Key;
}
```
### Using `InsertLesson`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, insertLesson } from '@dataconnect/generated';


// Call the `insertLesson()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await insertLesson();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await insertLesson(dataConnect);

console.log(data.lesson_insert);

// Or, you can use the `Promise` API.
insertLesson().then((response) => {
  const data = response.data;
  console.log(data.lesson_insert);
});
```

### Using `InsertLesson`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, insertLessonRef } from '@dataconnect/generated';


// Call the `insertLessonRef()` function to get a reference to the mutation.
const ref = insertLessonRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = insertLessonRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.lesson_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.lesson_insert);
});
```

## UpdateLesson
You can execute the `UpdateLesson` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateLesson(vars: UpdateLessonVariables): MutationPromise<UpdateLessonData, UpdateLessonVariables>;

interface UpdateLessonRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateLessonVariables): MutationRef<UpdateLessonData, UpdateLessonVariables>;
}
export const updateLessonRef: UpdateLessonRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateLesson(dc: DataConnect, vars: UpdateLessonVariables): MutationPromise<UpdateLessonData, UpdateLessonVariables>;

interface UpdateLessonRef {
  ...
  (dc: DataConnect, vars: UpdateLessonVariables): MutationRef<UpdateLessonData, UpdateLessonVariables>;
}
export const updateLessonRef: UpdateLessonRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateLessonRef:
```typescript
const name = updateLessonRef.operationName;
console.log(name);
```

### Variables
The `UpdateLesson` mutation requires an argument of type `UpdateLessonVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateLessonVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `UpdateLesson` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateLessonData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateLessonData {
  lesson_update?: Lesson_Key | null;
}
```
### Using `UpdateLesson`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateLesson, UpdateLessonVariables } from '@dataconnect/generated';

// The `UpdateLesson` mutation requires an argument of type `UpdateLessonVariables`:
const updateLessonVars: UpdateLessonVariables = {
  id: ..., 
};

// Call the `updateLesson()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateLesson(updateLessonVars);
// Variables can be defined inline as well.
const { data } = await updateLesson({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateLesson(dataConnect, updateLessonVars);

console.log(data.lesson_update);

// Or, you can use the `Promise` API.
updateLesson(updateLessonVars).then((response) => {
  const data = response.data;
  console.log(data.lesson_update);
});
```

### Using `UpdateLesson`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateLessonRef, UpdateLessonVariables } from '@dataconnect/generated';

// The `UpdateLesson` mutation requires an argument of type `UpdateLessonVariables`:
const updateLessonVars: UpdateLessonVariables = {
  id: ..., 
};

// Call the `updateLessonRef()` function to get a reference to the mutation.
const ref = updateLessonRef(updateLessonVars);
// Variables can be defined inline as well.
const ref = updateLessonRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateLessonRef(dataConnect, updateLessonVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.lesson_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.lesson_update);
});
```

## DeleteLesson
You can execute the `DeleteLesson` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteLesson(vars: DeleteLessonVariables): MutationPromise<DeleteLessonData, DeleteLessonVariables>;

interface DeleteLessonRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteLessonVariables): MutationRef<DeleteLessonData, DeleteLessonVariables>;
}
export const deleteLessonRef: DeleteLessonRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteLesson(dc: DataConnect, vars: DeleteLessonVariables): MutationPromise<DeleteLessonData, DeleteLessonVariables>;

interface DeleteLessonRef {
  ...
  (dc: DataConnect, vars: DeleteLessonVariables): MutationRef<DeleteLessonData, DeleteLessonVariables>;
}
export const deleteLessonRef: DeleteLessonRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteLessonRef:
```typescript
const name = deleteLessonRef.operationName;
console.log(name);
```

### Variables
The `DeleteLesson` mutation requires an argument of type `DeleteLessonVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteLessonVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteLesson` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteLessonData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteLessonData {
  lesson_delete?: Lesson_Key | null;
}
```
### Using `DeleteLesson`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteLesson, DeleteLessonVariables } from '@dataconnect/generated';

// The `DeleteLesson` mutation requires an argument of type `DeleteLessonVariables`:
const deleteLessonVars: DeleteLessonVariables = {
  id: ..., 
};

// Call the `deleteLesson()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteLesson(deleteLessonVars);
// Variables can be defined inline as well.
const { data } = await deleteLesson({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteLesson(dataConnect, deleteLessonVars);

console.log(data.lesson_delete);

// Or, you can use the `Promise` API.
deleteLesson(deleteLessonVars).then((response) => {
  const data = response.data;
  console.log(data.lesson_delete);
});
```

### Using `DeleteLesson`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteLessonRef, DeleteLessonVariables } from '@dataconnect/generated';

// The `DeleteLesson` mutation requires an argument of type `DeleteLessonVariables`:
const deleteLessonVars: DeleteLessonVariables = {
  id: ..., 
};

// Call the `deleteLessonRef()` function to get a reference to the mutation.
const ref = deleteLessonRef(deleteLessonVars);
// Variables can be defined inline as well.
const ref = deleteLessonRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteLessonRef(dataConnect, deleteLessonVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.lesson_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.lesson_delete);
});
```

## InsertStudySession
You can execute the `InsertStudySession` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
insertStudySession(): MutationPromise<InsertStudySessionData, undefined>;

interface InsertStudySessionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<InsertStudySessionData, undefined>;
}
export const insertStudySessionRef: InsertStudySessionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
insertStudySession(dc: DataConnect): MutationPromise<InsertStudySessionData, undefined>;

interface InsertStudySessionRef {
  ...
  (dc: DataConnect): MutationRef<InsertStudySessionData, undefined>;
}
export const insertStudySessionRef: InsertStudySessionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the insertStudySessionRef:
```typescript
const name = insertStudySessionRef.operationName;
console.log(name);
```

### Variables
The `InsertStudySession` mutation has no variables.
### Return Type
Recall that executing the `InsertStudySession` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `InsertStudySessionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface InsertStudySessionData {
  studySession_insert: StudySession_Key;
}
```
### Using `InsertStudySession`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, insertStudySession } from '@dataconnect/generated';


// Call the `insertStudySession()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await insertStudySession();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await insertStudySession(dataConnect);

console.log(data.studySession_insert);

// Or, you can use the `Promise` API.
insertStudySession().then((response) => {
  const data = response.data;
  console.log(data.studySession_insert);
});
```

### Using `InsertStudySession`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, insertStudySessionRef } from '@dataconnect/generated';


// Call the `insertStudySessionRef()` function to get a reference to the mutation.
const ref = insertStudySessionRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = insertStudySessionRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.studySession_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.studySession_insert);
});
```

## UpdateStudySession
You can execute the `UpdateStudySession` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateStudySession(vars: UpdateStudySessionVariables): MutationPromise<UpdateStudySessionData, UpdateStudySessionVariables>;

interface UpdateStudySessionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateStudySessionVariables): MutationRef<UpdateStudySessionData, UpdateStudySessionVariables>;
}
export const updateStudySessionRef: UpdateStudySessionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateStudySession(dc: DataConnect, vars: UpdateStudySessionVariables): MutationPromise<UpdateStudySessionData, UpdateStudySessionVariables>;

interface UpdateStudySessionRef {
  ...
  (dc: DataConnect, vars: UpdateStudySessionVariables): MutationRef<UpdateStudySessionData, UpdateStudySessionVariables>;
}
export const updateStudySessionRef: UpdateStudySessionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateStudySessionRef:
```typescript
const name = updateStudySessionRef.operationName;
console.log(name);
```

### Variables
The `UpdateStudySession` mutation requires an argument of type `UpdateStudySessionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateStudySessionVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `UpdateStudySession` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateStudySessionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateStudySessionData {
  studySession_update?: StudySession_Key | null;
}
```
### Using `UpdateStudySession`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateStudySession, UpdateStudySessionVariables } from '@dataconnect/generated';

// The `UpdateStudySession` mutation requires an argument of type `UpdateStudySessionVariables`:
const updateStudySessionVars: UpdateStudySessionVariables = {
  id: ..., 
};

// Call the `updateStudySession()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateStudySession(updateStudySessionVars);
// Variables can be defined inline as well.
const { data } = await updateStudySession({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateStudySession(dataConnect, updateStudySessionVars);

console.log(data.studySession_update);

// Or, you can use the `Promise` API.
updateStudySession(updateStudySessionVars).then((response) => {
  const data = response.data;
  console.log(data.studySession_update);
});
```

### Using `UpdateStudySession`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateStudySessionRef, UpdateStudySessionVariables } from '@dataconnect/generated';

// The `UpdateStudySession` mutation requires an argument of type `UpdateStudySessionVariables`:
const updateStudySessionVars: UpdateStudySessionVariables = {
  id: ..., 
};

// Call the `updateStudySessionRef()` function to get a reference to the mutation.
const ref = updateStudySessionRef(updateStudySessionVars);
// Variables can be defined inline as well.
const ref = updateStudySessionRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateStudySessionRef(dataConnect, updateStudySessionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.studySession_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.studySession_update);
});
```

## DeleteStudySession
You can execute the `DeleteStudySession` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteStudySession(vars: DeleteStudySessionVariables): MutationPromise<DeleteStudySessionData, DeleteStudySessionVariables>;

interface DeleteStudySessionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteStudySessionVariables): MutationRef<DeleteStudySessionData, DeleteStudySessionVariables>;
}
export const deleteStudySessionRef: DeleteStudySessionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteStudySession(dc: DataConnect, vars: DeleteStudySessionVariables): MutationPromise<DeleteStudySessionData, DeleteStudySessionVariables>;

interface DeleteStudySessionRef {
  ...
  (dc: DataConnect, vars: DeleteStudySessionVariables): MutationRef<DeleteStudySessionData, DeleteStudySessionVariables>;
}
export const deleteStudySessionRef: DeleteStudySessionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteStudySessionRef:
```typescript
const name = deleteStudySessionRef.operationName;
console.log(name);
```

### Variables
The `DeleteStudySession` mutation requires an argument of type `DeleteStudySessionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteStudySessionVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteStudySession` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteStudySessionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteStudySessionData {
  studySession_delete?: StudySession_Key | null;
}
```
### Using `DeleteStudySession`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteStudySession, DeleteStudySessionVariables } from '@dataconnect/generated';

// The `DeleteStudySession` mutation requires an argument of type `DeleteStudySessionVariables`:
const deleteStudySessionVars: DeleteStudySessionVariables = {
  id: ..., 
};

// Call the `deleteStudySession()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteStudySession(deleteStudySessionVars);
// Variables can be defined inline as well.
const { data } = await deleteStudySession({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteStudySession(dataConnect, deleteStudySessionVars);

console.log(data.studySession_delete);

// Or, you can use the `Promise` API.
deleteStudySession(deleteStudySessionVars).then((response) => {
  const data = response.data;
  console.log(data.studySession_delete);
});
```

### Using `DeleteStudySession`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteStudySessionRef, DeleteStudySessionVariables } from '@dataconnect/generated';

// The `DeleteStudySession` mutation requires an argument of type `DeleteStudySessionVariables`:
const deleteStudySessionVars: DeleteStudySessionVariables = {
  id: ..., 
};

// Call the `deleteStudySessionRef()` function to get a reference to the mutation.
const ref = deleteStudySessionRef(deleteStudySessionVars);
// Variables can be defined inline as well.
const ref = deleteStudySessionRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteStudySessionRef(dataConnect, deleteStudySessionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.studySession_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.studySession_delete);
});
```

## InsertResource
You can execute the `InsertResource` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
insertResource(): MutationPromise<InsertResourceData, undefined>;

interface InsertResourceRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<InsertResourceData, undefined>;
}
export const insertResourceRef: InsertResourceRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
insertResource(dc: DataConnect): MutationPromise<InsertResourceData, undefined>;

interface InsertResourceRef {
  ...
  (dc: DataConnect): MutationRef<InsertResourceData, undefined>;
}
export const insertResourceRef: InsertResourceRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the insertResourceRef:
```typescript
const name = insertResourceRef.operationName;
console.log(name);
```

### Variables
The `InsertResource` mutation has no variables.
### Return Type
Recall that executing the `InsertResource` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `InsertResourceData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface InsertResourceData {
  resource_insert: Resource_Key;
}
```
### Using `InsertResource`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, insertResource } from '@dataconnect/generated';


// Call the `insertResource()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await insertResource();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await insertResource(dataConnect);

console.log(data.resource_insert);

// Or, you can use the `Promise` API.
insertResource().then((response) => {
  const data = response.data;
  console.log(data.resource_insert);
});
```

### Using `InsertResource`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, insertResourceRef } from '@dataconnect/generated';


// Call the `insertResourceRef()` function to get a reference to the mutation.
const ref = insertResourceRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = insertResourceRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.resource_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.resource_insert);
});
```

## UpdateResource
You can execute the `UpdateResource` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateResource(vars: UpdateResourceVariables): MutationPromise<UpdateResourceData, UpdateResourceVariables>;

interface UpdateResourceRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateResourceVariables): MutationRef<UpdateResourceData, UpdateResourceVariables>;
}
export const updateResourceRef: UpdateResourceRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateResource(dc: DataConnect, vars: UpdateResourceVariables): MutationPromise<UpdateResourceData, UpdateResourceVariables>;

interface UpdateResourceRef {
  ...
  (dc: DataConnect, vars: UpdateResourceVariables): MutationRef<UpdateResourceData, UpdateResourceVariables>;
}
export const updateResourceRef: UpdateResourceRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateResourceRef:
```typescript
const name = updateResourceRef.operationName;
console.log(name);
```

### Variables
The `UpdateResource` mutation requires an argument of type `UpdateResourceVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateResourceVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `UpdateResource` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateResourceData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateResourceData {
  resource_update?: Resource_Key | null;
}
```
### Using `UpdateResource`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateResource, UpdateResourceVariables } from '@dataconnect/generated';

// The `UpdateResource` mutation requires an argument of type `UpdateResourceVariables`:
const updateResourceVars: UpdateResourceVariables = {
  id: ..., 
};

// Call the `updateResource()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateResource(updateResourceVars);
// Variables can be defined inline as well.
const { data } = await updateResource({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateResource(dataConnect, updateResourceVars);

console.log(data.resource_update);

// Or, you can use the `Promise` API.
updateResource(updateResourceVars).then((response) => {
  const data = response.data;
  console.log(data.resource_update);
});
```

### Using `UpdateResource`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateResourceRef, UpdateResourceVariables } from '@dataconnect/generated';

// The `UpdateResource` mutation requires an argument of type `UpdateResourceVariables`:
const updateResourceVars: UpdateResourceVariables = {
  id: ..., 
};

// Call the `updateResourceRef()` function to get a reference to the mutation.
const ref = updateResourceRef(updateResourceVars);
// Variables can be defined inline as well.
const ref = updateResourceRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateResourceRef(dataConnect, updateResourceVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.resource_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.resource_update);
});
```

## DeleteResource
You can execute the `DeleteResource` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteResource(vars: DeleteResourceVariables): MutationPromise<DeleteResourceData, DeleteResourceVariables>;

interface DeleteResourceRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteResourceVariables): MutationRef<DeleteResourceData, DeleteResourceVariables>;
}
export const deleteResourceRef: DeleteResourceRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteResource(dc: DataConnect, vars: DeleteResourceVariables): MutationPromise<DeleteResourceData, DeleteResourceVariables>;

interface DeleteResourceRef {
  ...
  (dc: DataConnect, vars: DeleteResourceVariables): MutationRef<DeleteResourceData, DeleteResourceVariables>;
}
export const deleteResourceRef: DeleteResourceRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteResourceRef:
```typescript
const name = deleteResourceRef.operationName;
console.log(name);
```

### Variables
The `DeleteResource` mutation requires an argument of type `DeleteResourceVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteResourceVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteResource` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteResourceData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteResourceData {
  resource_delete?: Resource_Key | null;
}
```
### Using `DeleteResource`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteResource, DeleteResourceVariables } from '@dataconnect/generated';

// The `DeleteResource` mutation requires an argument of type `DeleteResourceVariables`:
const deleteResourceVars: DeleteResourceVariables = {
  id: ..., 
};

// Call the `deleteResource()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteResource(deleteResourceVars);
// Variables can be defined inline as well.
const { data } = await deleteResource({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteResource(dataConnect, deleteResourceVars);

console.log(data.resource_delete);

// Or, you can use the `Promise` API.
deleteResource(deleteResourceVars).then((response) => {
  const data = response.data;
  console.log(data.resource_delete);
});
```

### Using `DeleteResource`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteResourceRef, DeleteResourceVariables } from '@dataconnect/generated';

// The `DeleteResource` mutation requires an argument of type `DeleteResourceVariables`:
const deleteResourceVars: DeleteResourceVariables = {
  id: ..., 
};

// Call the `deleteResourceRef()` function to get a reference to the mutation.
const ref = deleteResourceRef(deleteResourceVars);
// Variables can be defined inline as well.
const ref = deleteResourceRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteResourceRef(dataConnect, deleteResourceVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.resource_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.resource_delete);
});
```

