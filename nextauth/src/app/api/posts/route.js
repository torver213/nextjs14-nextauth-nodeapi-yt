import { PostZodSchema } from "@/schema";
import { PostService } from "@/services";
import { checkUserRole } from "@/utils";
import { validateZodInput } from "@/validators";

export async function POST(req) {
    const body = await req.json();
    const requestHeaders = new Headers(req.headers)

    const user =  JSON.parse(requestHeaders.get('user'));

    if(!user || !checkUserRole(user?.role).isAdminRole){
        return Response.json("You are not authorized to access this resource", { status: 403 })
    }

    const parsedResult = validateZodInput(body, PostZodSchema);


    if(parsedResult.isError) return Response.json(parsedResult.message, {status: 400});

    // create a new post

    const result = await PostService.createNewPost({...parsedResult.data, user: user?.id})

    if(result.isError) return Response.json(result.message, {status: 400});

    return Response.json(result.data);

}

export async function GET(request) {
    const result = await PostService.getAllPosts();
    if(result.isError) return Response.json(result.message, {status: 500});
    return Response.json(result.data)
}