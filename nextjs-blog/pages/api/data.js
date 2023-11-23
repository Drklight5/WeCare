import excuteQuery from './db'

export default async function handler(req, res) {
try {
    console.log("Start");
    const result = await excuteQuery({
          query: "SELECT BPM.id_fecha AS time, BPM.bpm, GIRO.giro, SONIDO.sonido, TEMPERATURA.temp FROM BPM LEFT JOIN (GIRO,SONIDO,TEMPERATURA) ON (BPM.id_fecha = GIRO.id_fecha AND BPM.id_fecha = SONIDO.id_fecha AND BPM.id_fecha = TEMPERATURA.id_fecha ) ORDER BY BPM.id_fecha DESC;",
          values: [req.body.content],
      });
    console.log("End");
    res.status(200).json(result);

  } catch ( error ) {
      console.log( error );
  }
}
