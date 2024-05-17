export function formatDateToYYYY_MM_DD(inputDate: Date | string): string {
  inputDate = new Date(inputDate)
  const year = inputDate.getFullYear()
  const month = inputDate.getMonth() + 1 // Months are zero-based
  const day = inputDate.getDate()

  const formattedMonth = month.toString().padStart(2, "0")
  const formattedDay = day.toString().padStart(2, "0")

  return `${year}-${formattedMonth}-${formattedDay}`
}
