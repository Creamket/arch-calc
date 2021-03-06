export default function Result({ result }) {
  return (
    <>
      <h5 className='card-title'>Продольная арматура:</h5>
      Площадь поперечного сечения стержня: {+result.area.toFixed(4)} см². <br />
      Диаметр стержня: {result.diameter} мм. <br />
      Теоретический вес арматуры: {result.weight} кг/м пог.
      {result.scheme === 1 && (
        <>
          <h5 className='card-title mt-3'>Поперечная арматура:</h5>
          {result.cross
            ? 'Поперечной арматуры не требуется.'
            : result.height <= 0.45
            ? `На приопорных участках установить поперечную арматуру с шагом не более ${
                0.5 * result.height < 0.15 ? +(0.5 * result.height).toFixed(3) : 0.15
              } м на участке ${+(0.25 * result.length).toFixed(3)} м от опоры. `
            : `На приопорных участках установить поперечную арматуру с шагом не более ${
                0.33 * result.height < 0.5 ? +(0.33 * result.height).toFixed(3) : 0.5
              } м на участке ${+(0.25 * result.length).toFixed(3)} м от опоры. `}
          <br />
          {!result.cross &&
            `В остальной части пролета ${
              result.height > 0.3
                ? `установить поперечную арматуру с шагом не более ${
                    0.75 * result.height < 0.5 ? +(0.75 * result.height).toFixed(3) : 0.5
                  } м.`
                : `поперечная арматура не требуется.`
            }`}
        </>
      )}
    </>
  )
}
