import connectMongoDB from "@/libs/mongodb";
import { TeamModel } from "@/models/team";

export default async function handler(req, res) {

  const { qno } = req.query

  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method not allowed' })
    return
  } else {
    // read which questoin the user is in, endTime from db, send to user.

    // const authToken = req.headers.authorization;
    // check if leader, auth etc.

    const teamName = 'team1';

    await connectMongoDB();
    const teams = await TeamModel.find({name: teamName});
    const team = teams[0];
    console.log(team)

    try{
      res.status(200).json({ questionNo: team.questionNo })
    } catch(e) {
      console.log(e)
    }
    
  }

}