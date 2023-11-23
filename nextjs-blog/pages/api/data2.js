import excuteQuery from './db'

export default async function handler(req, res) {
try {
    console.log("Start");
    const result = await excuteQuery({
      query: "SELECT id_fecha AS time, infra, temp, humedad FROM caja ORDER BY id_fecha DESC;",
          values: [req.body.content],
      });
    console.log("End");
    res.status(200).json(result);

  } catch ( error ) {
      console.log( error );
  }
}
