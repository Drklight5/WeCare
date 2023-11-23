
import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
  }
});
export default async function excuteQuery({ query, values }) {
  try {
    //console.log("try");
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    console.log(error);
    return { error };
  }
}