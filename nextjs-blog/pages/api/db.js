
import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: 'www.db4free.net',
    user: 'mainroot',
    password: 'iotas_davagod',
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