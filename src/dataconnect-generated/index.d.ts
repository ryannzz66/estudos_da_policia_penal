import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface DeleteLessonData {
  lesson_delete?: Lesson_Key | null;
}

export interface DeleteLessonVariables {
  id: UUIDString;
}

export interface DeleteResourceData {
  resource_delete?: Resource_Key | null;
}

export interface DeleteResourceVariables {
  id: UUIDString;
}

export interface DeleteStudySessionData {
  studySession_delete?: StudySession_Key | null;
}

export interface DeleteStudySessionVariables {
  id: UUIDString;
}

export interface DeleteSubjectData {
  subject_delete?: Subject_Key | null;
}

export interface DeleteSubjectVariables {
  id: UUIDString;
}

export interface DeleteUserData {
  user_delete?: User_Key | null;
}

export interface GetLessonData {
  lesson?: {
    title: string;
    isCompleted: boolean;
  };
}

export interface GetLessonVariables {
  id: UUIDString;
}

export interface GetResourceData {
  resource?: {
    url: string;
    title?: string | null;
  };
}

export interface GetResourceVariables {
  id: UUIDString;
}

export interface GetStudySessionData {
  studySession?: {
    durationMinutes: number;
    notes?: string | null;
  };
}

export interface GetStudySessionVariables {
  id: UUIDString;
}

export interface GetSubjectData {
  subject?: {
    title: string;
    createdAt: TimestampString;
  };
}

export interface GetSubjectVariables {
  id: UUIDString;
}

export interface GetUserData {
  user?: {
    email: string;
    displayName: string;
  };
}

export interface InsertLessonData {
  lesson_insert: Lesson_Key;
}

export interface InsertResourceData {
  resource_insert: Resource_Key;
}

export interface InsertStudySessionData {
  studySession_insert: StudySession_Key;
}

export interface InsertSubjectData {
  subject_insert: Subject_Key;
}

export interface InsertUserData {
  user_insert: User_Key;
}

export interface Lesson_Key {
  id: UUIDString;
  __typename?: 'Lesson_Key';
}

export interface ListLessonsData {
  lessons: ({
    id: UUIDString;
    title: string;
    subject: {
      title: string;
    };
  } & Lesson_Key)[];
}

export interface ListResourcesData {
  resources: ({
    id: UUIDString;
    url: string;
  } & Resource_Key)[];
}

export interface ListStudySessionsData {
  studySessions: ({
    id: UUIDString;
    durationMinutes: number;
  } & StudySession_Key)[];
}

export interface ListSubjectsData {
  subjects: ({
    id: UUIDString;
    title: string;
  } & Subject_Key)[];
}

export interface ListUsersData {
  users: ({
    id: UUIDString;
    displayName: string;
  } & User_Key)[];
}

export interface Resource_Key {
  id: UUIDString;
  __typename?: 'Resource_Key';
}

export interface StudySession_Key {
  id: UUIDString;
  __typename?: 'StudySession_Key';
}

export interface Subject_Key {
  id: UUIDString;
  __typename?: 'Subject_Key';
}

export interface UpdateLessonData {
  lesson_update?: Lesson_Key | null;
}

export interface UpdateLessonVariables {
  id: UUIDString;
}

export interface UpdateResourceData {
  resource_update?: Resource_Key | null;
}

export interface UpdateResourceVariables {
  id: UUIDString;
}

export interface UpdateStudySessionData {
  studySession_update?: StudySession_Key | null;
}

export interface UpdateStudySessionVariables {
  id: UUIDString;
}

export interface UpdateSubjectData {
  subject_update?: Subject_Key | null;
}

export interface UpdateSubjectVariables {
  id: UUIDString;
}

export interface UpdateUserData {
  user_update?: User_Key | null;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface InsertUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<InsertUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<InsertUserData, undefined>;
  operationName: string;
}
export const insertUserRef: InsertUserRef;

export function insertUser(): MutationPromise<InsertUserData, undefined>;
export function insertUser(dc: DataConnect): MutationPromise<InsertUserData, undefined>;

interface UpdateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<UpdateUserData, undefined>;
  operationName: string;
}
export const updateUserRef: UpdateUserRef;

export function updateUser(): MutationPromise<UpdateUserData, undefined>;
export function updateUser(dc: DataConnect): MutationPromise<UpdateUserData, undefined>;

interface DeleteUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<DeleteUserData, undefined>;
  operationName: string;
}
export const deleteUserRef: DeleteUserRef;

export function deleteUser(): MutationPromise<DeleteUserData, undefined>;
export function deleteUser(dc: DataConnect): MutationPromise<DeleteUserData, undefined>;

interface GetUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetUserData, undefined>;
  operationName: string;
}
export const getUserRef: GetUserRef;

export function getUser(options?: ExecuteQueryOptions): QueryPromise<GetUserData, undefined>;
export function getUser(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetUserData, undefined>;

interface ListUsersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUsersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListUsersData, undefined>;
  operationName: string;
}
export const listUsersRef: ListUsersRef;

export function listUsers(options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;
export function listUsers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface InsertSubjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<InsertSubjectData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<InsertSubjectData, undefined>;
  operationName: string;
}
export const insertSubjectRef: InsertSubjectRef;

export function insertSubject(): MutationPromise<InsertSubjectData, undefined>;
export function insertSubject(dc: DataConnect): MutationPromise<InsertSubjectData, undefined>;

interface UpdateSubjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateSubjectVariables): MutationRef<UpdateSubjectData, UpdateSubjectVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateSubjectVariables): MutationRef<UpdateSubjectData, UpdateSubjectVariables>;
  operationName: string;
}
export const updateSubjectRef: UpdateSubjectRef;

export function updateSubject(vars: UpdateSubjectVariables): MutationPromise<UpdateSubjectData, UpdateSubjectVariables>;
export function updateSubject(dc: DataConnect, vars: UpdateSubjectVariables): MutationPromise<UpdateSubjectData, UpdateSubjectVariables>;

interface DeleteSubjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteSubjectVariables): MutationRef<DeleteSubjectData, DeleteSubjectVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteSubjectVariables): MutationRef<DeleteSubjectData, DeleteSubjectVariables>;
  operationName: string;
}
export const deleteSubjectRef: DeleteSubjectRef;

export function deleteSubject(vars: DeleteSubjectVariables): MutationPromise<DeleteSubjectData, DeleteSubjectVariables>;
export function deleteSubject(dc: DataConnect, vars: DeleteSubjectVariables): MutationPromise<DeleteSubjectData, DeleteSubjectVariables>;

interface GetSubjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetSubjectVariables): QueryRef<GetSubjectData, GetSubjectVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetSubjectVariables): QueryRef<GetSubjectData, GetSubjectVariables>;
  operationName: string;
}
export const getSubjectRef: GetSubjectRef;

export function getSubject(vars: GetSubjectVariables, options?: ExecuteQueryOptions): QueryPromise<GetSubjectData, GetSubjectVariables>;
export function getSubject(dc: DataConnect, vars: GetSubjectVariables, options?: ExecuteQueryOptions): QueryPromise<GetSubjectData, GetSubjectVariables>;

interface ListSubjectsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListSubjectsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListSubjectsData, undefined>;
  operationName: string;
}
export const listSubjectsRef: ListSubjectsRef;

export function listSubjects(options?: ExecuteQueryOptions): QueryPromise<ListSubjectsData, undefined>;
export function listSubjects(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListSubjectsData, undefined>;

interface InsertLessonRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<InsertLessonData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<InsertLessonData, undefined>;
  operationName: string;
}
export const insertLessonRef: InsertLessonRef;

export function insertLesson(): MutationPromise<InsertLessonData, undefined>;
export function insertLesson(dc: DataConnect): MutationPromise<InsertLessonData, undefined>;

interface UpdateLessonRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateLessonVariables): MutationRef<UpdateLessonData, UpdateLessonVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateLessonVariables): MutationRef<UpdateLessonData, UpdateLessonVariables>;
  operationName: string;
}
export const updateLessonRef: UpdateLessonRef;

export function updateLesson(vars: UpdateLessonVariables): MutationPromise<UpdateLessonData, UpdateLessonVariables>;
export function updateLesson(dc: DataConnect, vars: UpdateLessonVariables): MutationPromise<UpdateLessonData, UpdateLessonVariables>;

interface DeleteLessonRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteLessonVariables): MutationRef<DeleteLessonData, DeleteLessonVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteLessonVariables): MutationRef<DeleteLessonData, DeleteLessonVariables>;
  operationName: string;
}
export const deleteLessonRef: DeleteLessonRef;

export function deleteLesson(vars: DeleteLessonVariables): MutationPromise<DeleteLessonData, DeleteLessonVariables>;
export function deleteLesson(dc: DataConnect, vars: DeleteLessonVariables): MutationPromise<DeleteLessonData, DeleteLessonVariables>;

interface GetLessonRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetLessonVariables): QueryRef<GetLessonData, GetLessonVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetLessonVariables): QueryRef<GetLessonData, GetLessonVariables>;
  operationName: string;
}
export const getLessonRef: GetLessonRef;

export function getLesson(vars: GetLessonVariables, options?: ExecuteQueryOptions): QueryPromise<GetLessonData, GetLessonVariables>;
export function getLesson(dc: DataConnect, vars: GetLessonVariables, options?: ExecuteQueryOptions): QueryPromise<GetLessonData, GetLessonVariables>;

interface ListLessonsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListLessonsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListLessonsData, undefined>;
  operationName: string;
}
export const listLessonsRef: ListLessonsRef;

export function listLessons(options?: ExecuteQueryOptions): QueryPromise<ListLessonsData, undefined>;
export function listLessons(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListLessonsData, undefined>;

interface InsertStudySessionRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<InsertStudySessionData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<InsertStudySessionData, undefined>;
  operationName: string;
}
export const insertStudySessionRef: InsertStudySessionRef;

export function insertStudySession(): MutationPromise<InsertStudySessionData, undefined>;
export function insertStudySession(dc: DataConnect): MutationPromise<InsertStudySessionData, undefined>;

interface UpdateStudySessionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateStudySessionVariables): MutationRef<UpdateStudySessionData, UpdateStudySessionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateStudySessionVariables): MutationRef<UpdateStudySessionData, UpdateStudySessionVariables>;
  operationName: string;
}
export const updateStudySessionRef: UpdateStudySessionRef;

export function updateStudySession(vars: UpdateStudySessionVariables): MutationPromise<UpdateStudySessionData, UpdateStudySessionVariables>;
export function updateStudySession(dc: DataConnect, vars: UpdateStudySessionVariables): MutationPromise<UpdateStudySessionData, UpdateStudySessionVariables>;

interface DeleteStudySessionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteStudySessionVariables): MutationRef<DeleteStudySessionData, DeleteStudySessionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteStudySessionVariables): MutationRef<DeleteStudySessionData, DeleteStudySessionVariables>;
  operationName: string;
}
export const deleteStudySessionRef: DeleteStudySessionRef;

export function deleteStudySession(vars: DeleteStudySessionVariables): MutationPromise<DeleteStudySessionData, DeleteStudySessionVariables>;
export function deleteStudySession(dc: DataConnect, vars: DeleteStudySessionVariables): MutationPromise<DeleteStudySessionData, DeleteStudySessionVariables>;

interface GetStudySessionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetStudySessionVariables): QueryRef<GetStudySessionData, GetStudySessionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetStudySessionVariables): QueryRef<GetStudySessionData, GetStudySessionVariables>;
  operationName: string;
}
export const getStudySessionRef: GetStudySessionRef;

export function getStudySession(vars: GetStudySessionVariables, options?: ExecuteQueryOptions): QueryPromise<GetStudySessionData, GetStudySessionVariables>;
export function getStudySession(dc: DataConnect, vars: GetStudySessionVariables, options?: ExecuteQueryOptions): QueryPromise<GetStudySessionData, GetStudySessionVariables>;

interface ListStudySessionsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListStudySessionsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListStudySessionsData, undefined>;
  operationName: string;
}
export const listStudySessionsRef: ListStudySessionsRef;

export function listStudySessions(options?: ExecuteQueryOptions): QueryPromise<ListStudySessionsData, undefined>;
export function listStudySessions(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListStudySessionsData, undefined>;

interface InsertResourceRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<InsertResourceData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<InsertResourceData, undefined>;
  operationName: string;
}
export const insertResourceRef: InsertResourceRef;

export function insertResource(): MutationPromise<InsertResourceData, undefined>;
export function insertResource(dc: DataConnect): MutationPromise<InsertResourceData, undefined>;

interface UpdateResourceRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateResourceVariables): MutationRef<UpdateResourceData, UpdateResourceVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateResourceVariables): MutationRef<UpdateResourceData, UpdateResourceVariables>;
  operationName: string;
}
export const updateResourceRef: UpdateResourceRef;

export function updateResource(vars: UpdateResourceVariables): MutationPromise<UpdateResourceData, UpdateResourceVariables>;
export function updateResource(dc: DataConnect, vars: UpdateResourceVariables): MutationPromise<UpdateResourceData, UpdateResourceVariables>;

interface DeleteResourceRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteResourceVariables): MutationRef<DeleteResourceData, DeleteResourceVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteResourceVariables): MutationRef<DeleteResourceData, DeleteResourceVariables>;
  operationName: string;
}
export const deleteResourceRef: DeleteResourceRef;

export function deleteResource(vars: DeleteResourceVariables): MutationPromise<DeleteResourceData, DeleteResourceVariables>;
export function deleteResource(dc: DataConnect, vars: DeleteResourceVariables): MutationPromise<DeleteResourceData, DeleteResourceVariables>;

interface GetResourceRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetResourceVariables): QueryRef<GetResourceData, GetResourceVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetResourceVariables): QueryRef<GetResourceData, GetResourceVariables>;
  operationName: string;
}
export const getResourceRef: GetResourceRef;

export function getResource(vars: GetResourceVariables, options?: ExecuteQueryOptions): QueryPromise<GetResourceData, GetResourceVariables>;
export function getResource(dc: DataConnect, vars: GetResourceVariables, options?: ExecuteQueryOptions): QueryPromise<GetResourceData, GetResourceVariables>;

interface ListResourcesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListResourcesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListResourcesData, undefined>;
  operationName: string;
}
export const listResourcesRef: ListResourcesRef;

export function listResources(options?: ExecuteQueryOptions): QueryPromise<ListResourcesData, undefined>;
export function listResources(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListResourcesData, undefined>;

