export default function DateofBirthSelect({
  bDay,
  bMonth,
  bYear,
  days,
  months,
  years,
  handleRegisterChange,
  dateError,
}) {
  const view1 = useMediaQuery({
    query: "(min-width:539px)",
  });
  const view2 = useMediaQuery({
    query: "(min-width: 850px)",
  });

  const view3 = useMediaQuery({
    query: "(min-width:1170px)",
  });
  return (
    <div
      className="reg_grid"
      style={{ marginBottom: `${dateError && !view3 && "90px"}` }}
    >
      <select name="bDay" value={bDay} onChange={handleRegisterChange}>
        {days.map((day, i) => (
          <option value={day} key={i}>
            {day}
          </option>
        ))}
      </select>
      <select name="bMonth" value={bMonth} onChange={handleRegisterChange}>
        {months.map((month, i) => (
          <option value={month} key={i}>
            {month}
          </option>
        ))}
      </select>
      <select name="bYear" value={bYear} onChange={handleRegisterChange}>
        {years.map((year, i) => (
          <option value={year} key={i}>
            {year}
          </option>
        ))}
      </select>
      {dateError && (
        <div className="input_error">
          <div className="error_arrow_bottom"></div>
          {dateError}
        </div>
      )}
    </div>
  );
}
