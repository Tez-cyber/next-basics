import { comments } from "../data"

type Props = {
    params: { id: string }
}
export async function GET(req: Request, { params }: Props) {
    const comment = comments.find(
        comment => comment.id === parseInt(params.id)
    )
    return Response.json(comment)
}