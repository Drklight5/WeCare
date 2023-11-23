
import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'iot_3sem_arduina'
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