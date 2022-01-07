import { Response } from "../base/base.types"
import { User } from "../../store/user/user.types";
import { Session } from "../session/session.types"

export type PostSessionNewPayload = {
	email: string,
	password: string
}

type PostSessionNewData = {

	user: Pick<User, 'id' | 'name'>
} & Pick<Session, 'accessToken'>

type GetSessionData = {
    userId: User['id']
}

export type PostSessionNew = Response<PostSessionNewData>
export type GetSession = Response<GetSessionData>
