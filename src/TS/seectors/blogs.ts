import { State } from "../store";

export const blogsStateSelector=
(s:State)=>Object.keys(s.blogs.entities).map((ids)=>s.blogs.entities[ids as any])

export const loadingSelector=(s:State)=>s.blogs.loading
export const anyAttemptSelector=(s:State)=>s.blogs.anyAttempt