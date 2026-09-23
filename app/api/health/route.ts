export async function GET(){return Response.json({ok:true,service:'batrix-expo',database:Boolean(process.env.DATABASE_URL)})}
