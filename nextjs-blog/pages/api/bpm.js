import excuteQuery from './db'

export default async function handler(req, res) {
try {
    
    const result = await excuteQuery({
          query: 'SELECT * FROM BPM;',
          values: [req.body.content],
      });
    res.status(200).json(result);

  } catch ( error ) {
      console.log( error );
  }
}
