import { InsertUserData, UpdateUserData, DeleteUserData, GetUserData, ListUsersData, InsertSubjectData, UpdateSubjectData, UpdateSubjectVariables, DeleteSubjectData, DeleteSubjectVariables, GetSubjectData, GetSubjectVariables, ListSubjectsData, InsertLessonData, UpdateLessonData, UpdateLessonVariables, DeleteLessonData, DeleteLessonVariables, GetLessonData, GetLessonVariables, ListLessonsData, InsertStudySessionData, UpdateStudySessionData, UpdateStudySessionVariables, DeleteStudySessionData, DeleteStudySessionVariables, GetStudySessionData, GetStudySessionVariables, ListStudySessionsData, InsertResourceData, UpdateResourceData, UpdateResourceVariables, DeleteResourceData, DeleteResourceVariables, GetResourceData, GetResourceVariables, ListResourcesData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useInsertUser(options?: useDataConnectMutationOptions<InsertUserData, FirebaseError, void>): UseDataConnectMutationResult<InsertUserData, undefined>;
export function useInsertUser(dc: DataConnect, options?: useDataConnectMutationOptions<InsertUserData, FirebaseError, void>): UseDataConnectMutationResult<InsertUserData, undefined>;

export function useUpdateUser(options?: useDataConnectMutationOptions<UpdateUserData, FirebaseError, void>): UseDataConnectMutationResult<UpdateUserData, undefined>;
export function useUpdateUser(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateUserData, FirebaseError, void>): UseDataConnectMutationResult<UpdateUserData, undefined>;

export function useDeleteUser(options?: useDataConnectMutationOptions<DeleteUserData, FirebaseError, void>): UseDataConnectMutationResult<DeleteUserData, undefined>;
export function useDeleteUser(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteUserData, FirebaseError, void>): UseDataConnectMutationResult<DeleteUserData, undefined>;

export function useGetUser(options?: useDataConnectQueryOptions<GetUserData>): UseDataConnectQueryResult<GetUserData, undefined>;
export function useGetUser(dc: DataConnect, options?: useDataConnectQueryOptions<GetUserData>): UseDataConnectQueryResult<GetUserData, undefined>;

export function useListUsers(options?: useDataConnectQueryOptions<ListUsersData>): UseDataConnectQueryResult<ListUsersData, undefined>;
export function useListUsers(dc: DataConnect, options?: useDataConnectQueryOptions<ListUsersData>): UseDataConnectQueryResult<ListUsersData, undefined>;

export function useInsertSubject(options?: useDataConnectMutationOptions<InsertSubjectData, FirebaseError, void>): UseDataConnectMutationResult<InsertSubjectData, undefined>;
export function useInsertSubject(dc: DataConnect, options?: useDataConnectMutationOptions<InsertSubjectData, FirebaseError, void>): UseDataConnectMutationResult<InsertSubjectData, undefined>;

export function useUpdateSubject(options?: useDataConnectMutationOptions<UpdateSubjectData, FirebaseError, UpdateSubjectVariables>): UseDataConnectMutationResult<UpdateSubjectData, UpdateSubjectVariables>;
export function useUpdateSubject(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateSubjectData, FirebaseError, UpdateSubjectVariables>): UseDataConnectMutationResult<UpdateSubjectData, UpdateSubjectVariables>;

export function useDeleteSubject(options?: useDataConnectMutationOptions<DeleteSubjectData, FirebaseError, DeleteSubjectVariables>): UseDataConnectMutationResult<DeleteSubjectData, DeleteSubjectVariables>;
export function useDeleteSubject(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteSubjectData, FirebaseError, DeleteSubjectVariables>): UseDataConnectMutationResult<DeleteSubjectData, DeleteSubjectVariables>;

export function useGetSubject(vars: GetSubjectVariables, options?: useDataConnectQueryOptions<GetSubjectData>): UseDataConnectQueryResult<GetSubjectData, GetSubjectVariables>;
export function useGetSubject(dc: DataConnect, vars: GetSubjectVariables, options?: useDataConnectQueryOptions<GetSubjectData>): UseDataConnectQueryResult<GetSubjectData, GetSubjectVariables>;

export function useListSubjects(options?: useDataConnectQueryOptions<ListSubjectsData>): UseDataConnectQueryResult<ListSubjectsData, undefined>;
export function useListSubjects(dc: DataConnect, options?: useDataConnectQueryOptions<ListSubjectsData>): UseDataConnectQueryResult<ListSubjectsData, undefined>;

export function useInsertLesson(options?: useDataConnectMutationOptions<InsertLessonData, FirebaseError, void>): UseDataConnectMutationResult<InsertLessonData, undefined>;
export function useInsertLesson(dc: DataConnect, options?: useDataConnectMutationOptions<InsertLessonData, FirebaseError, void>): UseDataConnectMutationResult<InsertLessonData, undefined>;

export function useUpdateLesson(options?: useDataConnectMutationOptions<UpdateLessonData, FirebaseError, UpdateLessonVariables>): UseDataConnectMutationResult<UpdateLessonData, UpdateLessonVariables>;
export function useUpdateLesson(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateLessonData, FirebaseError, UpdateLessonVariables>): UseDataConnectMutationResult<UpdateLessonData, UpdateLessonVariables>;

export function useDeleteLesson(options?: useDataConnectMutationOptions<DeleteLessonData, FirebaseError, DeleteLessonVariables>): UseDataConnectMutationResult<DeleteLessonData, DeleteLessonVariables>;
export function useDeleteLesson(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteLessonData, FirebaseError, DeleteLessonVariables>): UseDataConnectMutationResult<DeleteLessonData, DeleteLessonVariables>;

export function useGetLesson(vars: GetLessonVariables, options?: useDataConnectQueryOptions<GetLessonData>): UseDataConnectQueryResult<GetLessonData, GetLessonVariables>;
export function useGetLesson(dc: DataConnect, vars: GetLessonVariables, options?: useDataConnectQueryOptions<GetLessonData>): UseDataConnectQueryResult<GetLessonData, GetLessonVariables>;

export function useListLessons(options?: useDataConnectQueryOptions<ListLessonsData>): UseDataConnectQueryResult<ListLessonsData, undefined>;
export function useListLessons(dc: DataConnect, options?: useDataConnectQueryOptions<ListLessonsData>): UseDataConnectQueryResult<ListLessonsData, undefined>;

export function useInsertStudySession(options?: useDataConnectMutationOptions<InsertStudySessionData, FirebaseError, void>): UseDataConnectMutationResult<InsertStudySessionData, undefined>;
export function useInsertStudySession(dc: DataConnect, options?: useDataConnectMutationOptions<InsertStudySessionData, FirebaseError, void>): UseDataConnectMutationResult<InsertStudySessionData, undefined>;

export function useUpdateStudySession(options?: useDataConnectMutationOptions<UpdateStudySessionData, FirebaseError, UpdateStudySessionVariables>): UseDataConnectMutationResult<UpdateStudySessionData, UpdateStudySessionVariables>;
export function useUpdateStudySession(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateStudySessionData, FirebaseError, UpdateStudySessionVariables>): UseDataConnectMutationResult<UpdateStudySessionData, UpdateStudySessionVariables>;

export function useDeleteStudySession(options?: useDataConnectMutationOptions<DeleteStudySessionData, FirebaseError, DeleteStudySessionVariables>): UseDataConnectMutationResult<DeleteStudySessionData, DeleteStudySessionVariables>;
export function useDeleteStudySession(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteStudySessionData, FirebaseError, DeleteStudySessionVariables>): UseDataConnectMutationResult<DeleteStudySessionData, DeleteStudySessionVariables>;

export function useGetStudySession(vars: GetStudySessionVariables, options?: useDataConnectQueryOptions<GetStudySessionData>): UseDataConnectQueryResult<GetStudySessionData, GetStudySessionVariables>;
export function useGetStudySession(dc: DataConnect, vars: GetStudySessionVariables, options?: useDataConnectQueryOptions<GetStudySessionData>): UseDataConnectQueryResult<GetStudySessionData, GetStudySessionVariables>;

export function useListStudySessions(options?: useDataConnectQueryOptions<ListStudySessionsData>): UseDataConnectQueryResult<ListStudySessionsData, undefined>;
export function useListStudySessions(dc: DataConnect, options?: useDataConnectQueryOptions<ListStudySessionsData>): UseDataConnectQueryResult<ListStudySessionsData, undefined>;

export function useInsertResource(options?: useDataConnectMutationOptions<InsertResourceData, FirebaseError, void>): UseDataConnectMutationResult<InsertResourceData, undefined>;
export function useInsertResource(dc: DataConnect, options?: useDataConnectMutationOptions<InsertResourceData, FirebaseError, void>): UseDataConnectMutationResult<InsertResourceData, undefined>;

export function useUpdateResource(options?: useDataConnectMutationOptions<UpdateResourceData, FirebaseError, UpdateResourceVariables>): UseDataConnectMutationResult<UpdateResourceData, UpdateResourceVariables>;
export function useUpdateResource(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateResourceData, FirebaseError, UpdateResourceVariables>): UseDataConnectMutationResult<UpdateResourceData, UpdateResourceVariables>;

export function useDeleteResource(options?: useDataConnectMutationOptions<DeleteResourceData, FirebaseError, DeleteResourceVariables>): UseDataConnectMutationResult<DeleteResourceData, DeleteResourceVariables>;
export function useDeleteResource(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteResourceData, FirebaseError, DeleteResourceVariables>): UseDataConnectMutationResult<DeleteResourceData, DeleteResourceVariables>;

export function useGetResource(vars: GetResourceVariables, options?: useDataConnectQueryOptions<GetResourceData>): UseDataConnectQueryResult<GetResourceData, GetResourceVariables>;
export function useGetResource(dc: DataConnect, vars: GetResourceVariables, options?: useDataConnectQueryOptions<GetResourceData>): UseDataConnectQueryResult<GetResourceData, GetResourceVariables>;

export function useListResources(options?: useDataConnectQueryOptions<ListResourcesData>): UseDataConnectQueryResult<ListResourcesData, undefined>;
export function useListResources(dc: DataConnect, options?: useDataConnectQueryOptions<ListResourcesData>): UseDataConnectQueryResult<ListResourcesData, undefined>;
